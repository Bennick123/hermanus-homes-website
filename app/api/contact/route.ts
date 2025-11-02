// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // Ensure Node runtime

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "clare@hermanushomes.co.za";
const FROM = process.env.RESEND_FROM || "no-reply@onrusaccomadations.co.za";

// Basic escaping to guard against HTML injection in emails
function esc(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderHtml({
  name,
  email,
  phone,
  property,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  property?: string;
  message: string;
}) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h2 style="margin:0 0 12px">New Enquiry</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ""}
      ${property ? `<p><strong>Property:</strong> ${esc(property)}</p>` : ""}
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <div style="white-space:pre-wrap">${esc(message)}</div>
      <hr style="margin:20px 0"/>
      <p style="font-size:12px;color:#666">Sent from onrusaccomadations.co.za</p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, property, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email and message." },
        { status: 400 }
      );
    }

    const subject = `Website enquiry${property ? ` — ${property}` : ""}`;
    const html = renderHtml({ name, email, phone, property, message });

    const { data, error } = await resend.emails.send({
  from: `Onrus Accommodations <${FROM}>`,
  to: [TO],
  subject,
  html,
  reply_to: email,
});

if (error) {
  console.error("Resend API error:", error);
  return NextResponse.json({ error: String(error) }, { status: 500 });
}


    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

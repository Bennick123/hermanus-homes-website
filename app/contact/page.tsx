"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"

// Contacts
const contacts = [
  {
    label: "CLARE",
    email: "Clare@hermanushomes.co.za",
    phone: "+27 79 496 4601",
  },
  {
    label: "GLENDA",
    email: "Bookings@hermanushomes.co.za",
    phone: "+27 84 200 2253",
  },
]

// Property options for the dropdown
const propertyOptions = [
  "General Inquiry",
  "27 Krintang Crescent",
  "A Wave From It All",
  "Beachcombers Rest",
  "Corner Delight Onrust Beach",
  "Flow",
  "Holiday Vibe",
  "La Mer Beachfront",
  "Once Upon a Tide",
  "Out of Africa Sandbaai",
  "Pelican's Nest",
  "Rustica",
  "Sea Perfection",
  "Seabreeze",
  "Seacrest Cottage",
  "Seafront Retreat",
  "Seaside Escape Studio Onrus",
  "Sunset Terrace",
  "Tranquility",
  "Whale a While",
  "Whispering Waves",
  "Other Property",
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "General Inquiry",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", property: "General Inquiry", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Onrus Beach */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/onrusbeach.jpg"
          alt="Beautiful Onrus Beach with blue flag status"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white container">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up text-shadow-lg">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto fade-in-up text-shadow-md">
            Ready to book your perfect holiday home? Have questions about our properties or services? We're here to help
            make your Hermanus getaway unforgettable.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-up">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+27 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium text-gray-700 mb-2">
                    Property you're interested in
                  </label>
                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    {propertyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your holiday plans, questions, or special requirements..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="fade-in-up">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              {/* Two equal-height cards that wrap long text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                {contacts.map((c) => (
                  <div
                    key={c.label}
                    className="p-6 border rounded-lg h-full flex flex-col justify-start"
                  >
                    <h3 className="font-semibold tracking-wider mb-3">{c.label}</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-center gap-2">
                        <Mail size={18} className="text-blue-600 shrink-0" />
                        <a
                          href={`mailto:${c.email}`}
                          className="text-blue-600 hover:underline break-all max-w-full inline-block"
                        >
                          {c.email}
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone size={18} className="text-blue-600 shrink-0" />
                        <a
                          href={`tel:${c.phone.replace(/[^\d+]/g, "")}`}
                          className="text-blue-600 hover:underline break-all max-w-full inline-block"
                        >
                          {c.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Contact Us */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-4 text-blue-900">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• 20+ years of local expertise</li>
                  <li>• Personal service and attention</li>
                  <li>• Hand-picked quality properties</li>
                  <li>• Local recommendations and support</li>
                  <li>• Flexible booking options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

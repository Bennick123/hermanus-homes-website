import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Users, Bed, Bath, MapPin } from "lucide-react"
import { getPropertiesByArea } from "@/lib/properties"
import { notFound } from "next/navigation"

const SITE_URL = "https://www.onrusaccommodation.co.za"

type AreaSlug = "onrus" | "vermont" | "sandbaai" | "hermanus"

const AREA_CONFIG: Record<AreaSlug, {
  name: string
  title: string
  intro: string
  longCopy: string
  highlights: string[]
}> = {
  onrus: {
    name: "Onrus",
    title: "Self-Catering Holiday Homes in Onrus River",
    intro:
      "Family-favourite beach village between Hermanus and Sandbaai. Lagoon, tidal pools, cliff path and a relaxed peninsula community.",
    longCopy:
      "Onrus River is one of the Whale Coast's best-loved holiday villages. The protected lagoon and tidal pools are perfect for families, the cliff path delivers some of the best whale watching of the season (July to November), and the peninsula keeps everything walkable. Our Onrus holiday homes range from compact beach cottages to large family houses sleeping 14+, with several within a short walk of the beach.",
    highlights: [
      "Walking distance to Onrus Beach, lagoon and tidal pools",
      "Cliff path stretches all the way to Hermanus old harbour",
      "Quiet, family-orientated suburb with great local cafés",
      "Short drive to Hemel-en-Aarde wine route",
    ],
  },
  vermont: {
    name: "Vermont",
    title: "Self-Catering Holiday Homes in Vermont",
    intro:
      "Quiet coastal suburb just east of Onrus, known for fynbos reserves, mountain views and the Vermont Salt Pan bird hide.",
    longCopy:
      "Vermont sits between Onrus and Hermanus with direct access to the Vermont-Onrus-Sandbaai coastal path. The Vermont Salt Pan is a draw for birdwatchers (flamingos, herons, kingfishers) and the rocky tidal pools at Rabies and Davies are favourites with families. Vermont is calmer than Hermanus town centre but still 10 minutes by car to whale-watching, restaurants and the Old Harbour.",
    highlights: [
      "Vermont Salt Pan – exceptional bird life",
      "Coastal walking path to Onrus and Sandbaai",
      "Quiet, residential and well-secured streets",
      "Easy access to Hemel-en-Aarde wine farms",
    ],
  },
  sandbaai: {
    name: "Sandbaai",
    title: "Self-Catering Holiday Homes in Sandbaai",
    intro:
      "Long sandy beach, pristine coastline and a peaceful seaside atmosphere just minutes from Hermanus town and the Whale Coast Mall.",
    longCopy:
      "Sandbaai stretches along one of the longest beaches on this part of the coast. It's an easy base for everything: Hermanus town centre is five minutes by car, the Whale Coast Mall is right there for shopping, and the Hemel-en-Aarde wine valley is a short drive inland. Our Sandbaai homes include true beachfront properties as well as quiet inland houses ideal for families and small groups.",
    highlights: [
      "Long sandy Sandbaai beach for walks and dogs",
      "5 minutes to Hermanus town centre",
      "Whale Coast Mall on your doorstep",
      "Direct access to Hemel-en-Aarde wine route",
    ],
  },
  hermanus: {
    name: "Hermanus",
    title: "Self-Catering Holiday Homes in Hermanus",
    intro:
      "World-famous whale watching, vibrant town centre, cliff path walks and Blue Flag beaches like Grotto and Voelklip.",
    longCopy:
      "Hermanus is the heart of the Whale Coast. Walker Bay hosts Southern Right whales from July through November, with shore-based viewing among the best in the world. Town offers restaurants, galleries, the Old Harbour museum and the famous First Friday Art Walk. Our Hermanus properties cluster around Eastcliff, Voelklip and the 7th Street area, all within walking distance of Blue Flag beaches.",
    highlights: [
      "Whale watching from the cliff path (Jul–Nov)",
      "Blue Flag Grotto Beach and Voelklip Beach",
      "Hermanus Country Market and First Friday Art Walk",
      "Fernkloof Nature Reserve and Hermanus Golf Club",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(AREA_CONFIG).map((area) => ({ area }))
}

export const dynamic = "error"
export const revalidate = false

interface AreaPageProps {
  params: { area: string }
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const config = AREA_CONFIG[params.area as AreaSlug]
  if (!config) return { title: "Area Not Found", robots: { index: false, follow: false } }

  const description = `${config.intro} Browse our ${config.name} holiday rentals – self-catering homes for families and groups on the Whale Coast.`
  const url = `${SITE_URL}/stays/area/${params.area}`

  return {
    title: config.title,
    description,
    alternates: { canonical: `/stays/area/${params.area}` },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      url,
      siteName: "Hermanus Homes",
      title: config.title,
      description,
      images: ["/images/coastal-sunset-hero.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description,
      images: ["/images/coastal-sunset-hero.jpg"],
    },
  }
}

export default async function AreaPage({ params }: AreaPageProps) {
  const config = AREA_CONFIG[params.area as AreaSlug]
  if (!config) notFound()

  const properties = await getPropertiesByArea(config.name)

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="text-sm text-gray-500 mb-3">
            <Link href="/stays" className="hover:text-blue-600">All stays</Link>
            <span className="mx-2">/</span>
            <span>{config.name}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">{config.title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl">{config.intro}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">About {config.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{config.longCopy}</p>
              <h3 className="text-xl font-semibold mb-3">Why stay in {config.name}</h3>
              <ul className="space-y-2 mb-8">
                {config.highlights.map((h) => (
                  <li key={h} className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Looking elsewhere?</h3>
                <ul className="space-y-2 text-sm">
                  {(Object.keys(AREA_CONFIG) as AreaSlug[])
                    .filter((slug) => slug !== params.area)
                    .map((slug) => (
                      <li key={slug}>
                        <Link href={`/stays/area/${slug}`} className="text-blue-600 hover:underline">
                          Holiday homes in {AREA_CONFIG[slug].name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {properties.length} {properties.length === 1 ? "property" : "properties"} in {config.name}
          </h2>
          <p className="text-gray-600 mb-8">Self-catering holiday homes available in {config.name}.</p>

          {properties.length === 0 ? (
            <p className="text-gray-600">No properties currently listed in {config.name}. <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> for availability.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <Link key={property.slug} href={`/stays/${property.slug}`} className="group block">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={property.hero || "/placeholder.svg"}
                        alt={`${property.title} – ${property.beds} bedroom holiday rental in ${config.name}, Hermanus`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <MapPin size={14} className="mr-1" />
                        <span>{property.address || `${config.name}, Hermanus`}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.one_liner}</p>
                      <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <div className="flex items-center"><Users size={14} className="mr-1" />{property.sleeps}</div>
                        <div className="flex items-center"><Bed size={14} className="mr-1" />{property.beds}</div>
                        <div className="flex items-center"><Bath size={14} className="mr-1" />{property.baths}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

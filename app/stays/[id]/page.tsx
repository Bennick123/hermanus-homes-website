import Link from "next/link"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"
import { MapPin, Users, Bed, Bath, ArrowLeft } from "lucide-react"
import { getPropertyBySlug, getPropertySlugs } from "@/lib/properties"
import { notFound } from "next/navigation"
import ImageSlideshow from "@/components/ImageSlideshow"

const SITE_URL = "https://www.onrusaccommodation.co.za"

export async function generateStaticParams() {
  try {
    const slugs = await getPropertySlugs()
    return slugs.map((slug) => ({ id: slug }))
  } catch (error) {
    console.warn("Failed to generate static params:", error)
    return []
  }
}

export const dynamic = "error" // SSG
export const revalidate = false

interface PropertyPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  try {
    const property = await getPropertyBySlug(params.id)
    const location = property.address || `${property.area}, Hermanus`
    const title = `${property.title} – ${property.beds}-Bedroom Holiday Home in ${property.area}`
    const description = `${property.one_liner} Sleeps ${property.sleeps}, ${property.beds} bedrooms, ${property.baths} bathrooms. ${location}.`
    const url = `${SITE_URL}/stays/${params.id}`
    const image = property.hero ? `${SITE_URL}${property.hero}` : `${SITE_URL}/images/coastal-sunset-hero.jpg`

    return {
      title,
      description,
      alternates: { canonical: `/stays/${params.id}` },
      openGraph: {
        type: "website",
        locale: "en_ZA",
        url,
        siteName: "Hermanus Homes",
        title: `${property.title} | ${property.area} Holiday Rental`,
        description,
        images: [
          {
            url: image,
            width: 1200,
            height: 800,
            alt: `${property.title} – holiday rental in ${property.area}, Hermanus`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${property.title} | ${property.area} Holiday Rental`,
        description,
        images: [image],
      },
    }
  } catch {
    return {
      title: "Property Not Found",
      robots: { index: false, follow: false },
    }
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  try {
    const property = await getPropertyBySlug(params.id)

    // Combine hero image with gallery for slideshow, filter out empty values
    const allImages = [property.hero, ...(property.gallery || [])]
      .filter(Boolean)
      .filter((img) => typeof img === "string" && img.trim() !== "")

    const fullAddress = property.address || `${property.area}, Hermanus, Western Cape, South Africa`
    const hasStreetAddress = /^(\d|Corner)/i.test(property.address || "")
    const mapQuery = encodeURIComponent(`${fullAddress}, South Africa`)
    const heroImageUrl = property.hero ? `${SITE_URL}${property.hero}` : `${SITE_URL}/images/coastal-sunset-hero.jpg`

    const addressParts = (property.address || "").split(",").map((s) => s.trim())
    const streetAddress = hasStreetAddress && addressParts[0] ? addressParts[0] : undefined
    const addressLocality = hasStreetAddress && addressParts[1] ? addressParts[1] : property.area

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "VacationRental",
      name: property.title,
      description: property.one_liner,
      url: `${SITE_URL}/stays/${params.id}`,
      image: allImages.slice(0, 8).map((img) => `${SITE_URL}${img}`),
      address: {
        "@type": "PostalAddress",
        ...(streetAddress ? { streetAddress } : {}),
        addressLocality,
        addressRegion: "Western Cape",
        addressCountry: "ZA",
      },
      numberOfRooms: property.beds,
      numberOfBathroomsTotal: property.baths,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: property.sleeps,
      },
      amenityFeature: (property.amenities || []).map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a,
      })),
      brand: { "@type": "Organization", name: "Hermanus Homes" },
    }

    return (
      <div className="pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Back Button */}
        <section className="py-4 bg-gray-50">
          <div className="container">
            <Link href="/stays" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to All Properties
            </Link>
          </div>
        </section>

        {/* Property Header */}
        <section className="py-8">
          <div className="container">
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin size={16} className="mr-1" />
                {property.address || `${property.area}, Hermanus, Western Cape, South Africa`}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{property.title}</h1>

              {/* Property Stats */}
              <div className="flex items-center space-x-6 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Users size={20} className="mr-2" />
                  <span>{property.sleeps} guests</span>
                </div>
                <div className="flex items-center">
                  <Bed size={20} className="mr-2" />
                  <span>{property.beds} bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath size={20} className="mr-2" />
                  <span>{property.baths} bathrooms</span>
                </div>
              </div>

              {/* One-liner */}
              <p className="text-lg text-gray-700">{property.one_liner}</p>
            </div>
          </div>
        </section>

        {/* Image Slideshow */}
        <section className="py-4">
          <div className="container">
            {allImages.length > 0 ? (
              <ImageSlideshow
                images={allImages}
                title={`${property.title} – ${property.beds} bedroom self-catering holiday home in ${property.area}, Hermanus`}
                className="mb-8"
              />
            ) : (
              <div className="relative h-96 md:h-[500px] bg-gray-200 rounded-lg flex items-center justify-center mb-8">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">No images available for this property</p>
                  <p className="text-sm text-gray-400">Images will appear here once uploaded</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Property Details */}
        <section className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                {property.body && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">About this property</h2>
                    <div className="prose max-w-none text-gray-600">
                      <ReactMarkdown>{property.body}</ReactMarkdown>
                    </div>
                  </div>
                )}

                {/* Amenities */}
                {property.amenities && property.amenities.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">House offers</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {property.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-600">{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Rates and Policies */}
                {(property.rates_md || property.policies_md) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {property.rates_md && (
                      <div>
                        <h2 className="text-2xl font-semibold mb-4">Rates</h2>
                        <div className="prose max-w-none text-gray-600">
                          <ReactMarkdown>{property.rates_md}</ReactMarkdown>
                        </div>
                      </div>
                    )}
                    {property.policies_md && (
                      <div>
                        <h2 className="text-2xl font-semibold mb-4">Policies</h2>
                        <div className="prose max-w-none text-gray-600">
                          <ReactMarkdown>{property.policies_md}</ReactMarkdown>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Contact Us to Book</h3>
                  <p className="text-gray-600 mb-6">
                    Get in touch for availability, pricing, and to make your reservation for this beautiful property.
                  </p>
                  <div className="space-y-3">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Contact Us to Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location / Google Maps */}
        {hasStreetAddress && (
          <section className="py-8 bg-gray-50">
            <div className="container">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <p className="text-gray-600 mb-4 flex items-center">
                <MapPin size={18} className="mr-2 text-blue-600" />
                {fullAddress}
              </p>
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "50%" }}>
                <iframe
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing the location of ${property.title}`}
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}
      </div>
    )
  } catch (error) {
    console.error("Error loading property:", error)
    notFound()
  }
}

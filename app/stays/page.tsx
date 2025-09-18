import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Bed, Bath } from "lucide-react"
import { getAllProperties } from "@/lib/properties"

// Force this to be a server component
export const dynamic = "force-static"
export const revalidate = false

export default async function StaysPage() {
  let allProperties = []
  let hasError = false

  try {
    allProperties = await getAllProperties()
  } catch (error) {
    console.error("Error loading properties:", error)
    hasError = true
  }

  // If we have an error or no properties, show fallback
  if (hasError || allProperties.length === 0) {
    return (
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/stays-hero.jpg"
            alt="Luxury holiday home with pool and entertainment area"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white container">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up">Our Holiday Homes</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto fade-in-up">
              Discover handpicked luxury properties across the most beautiful coastal locations in Hermanus
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <div className="max-w-md mx-auto p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Properties Loading</h2>
                <p className="text-gray-700 mb-4">We're setting up our property listings. Please check back soon!</p>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    <strong>Our featured locations include:</strong>
                  </p>
                  <ul className="text-left space-y-1">
                    <li>• Vermont - Fynbos reserves and salt pan bird watching</li>
                    <li>• Onrus - Blue flag beaches and tidal pools</li>
                    <li>• Hermanus - World-famous whale watching</li>
                    <li>• Sandbaai - Pristine beaches and coastal living</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="btn-primary">
                    Contact Us for Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Group properties by area in the desired order, with Tranquility first
  const areaOrder = ["Onrus", "Vermont", "Hermanus", "Sandbaai"]
  const propertiesByArea = areaOrder.reduce(
    (acc, area) => {
      const areaProperties = allProperties.filter((p) => p.area === area)

      // Sort properties within each area, putting Tranquility first
      areaProperties.sort((a, b) => {
        if (a.title === "Tranquility") return -1
        if (b.title === "Tranquility") return 1
        return a.title.localeCompare(b.title)
      })

      acc[area] = areaProperties
      return acc
    },
    {} as Record<string, typeof allProperties>,
  )

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/stays-hero.jpg"
          alt="Luxury holiday home with pool and entertainment area"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white container">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up">Our Holiday Homes</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto fade-in-up">
            Discover handpicked luxury properties across the most beautiful coastal locations in Hermanus
          </p>
        </div>
      </section>

      {/* Properties by Area */}
      {areaOrder.map((area, areaIndex) => {
        const properties = propertiesByArea[area]
        if (!properties || properties.length === 0) return null

        const areaDescriptions = {
          Vermont: "Fynbos reserves, mountain trails, and the famous Vermont Salt Pan for bird watching",
          Onrus: "Blue flag beaches, estuary views, and family-friendly tidal pools",
          Hermanus: "World-famous whale watching, cliff path walks, and vibrant town center",
          Sandbaai: "Pristine beaches, coastal living, and peaceful seaside atmosphere",
        }

        return (
          <section key={area} className={`section-padding ${areaIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container">
              {/* Area Header */}
              <div className="text-center mb-12 fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{area}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">{areaDescriptions[area]}</p>
                <div className="mt-2">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {properties.length} {properties.length === 1 ? "Property" : "Properties"}
                  </span>
                </div>
              </div>

              {/* Properties Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property, index) => (
                  <Link
                    key={property.slug}
                    href={`/stays/${property.slug}`}
                    className="group cursor-pointer block fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-white rounded-lg shadow-sm hover-zoom border border-gray-100 overflow-hidden">
                      {/* Property Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={property.hero || "/placeholder.svg"}
                          alt={property.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Property Details */}
                      <div className="p-6">
                        {/* Icons Row */}
                        <div className="flex items-center space-x-6 text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Users size={16} className="mr-1" />
                            <span className="text-sm">{property.sleeps}</span>
                          </div>
                          <div className="flex items-center">
                            <Bed size={16} className="mr-1" />
                            <span className="text-sm">{property.beds}</span>
                          </div>
                          <div className="flex items-center">
                            <Bath size={16} className="mr-1" />
                            <span className="text-sm">{property.baths}</span>
                          </div>
                        </div>

                        {/* Property Name */}
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors font-heading mb-2">
                          {property.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin size={14} className="mr-1" />
                          <span>{property.address || `${property.area}, Hermanus`}</span>
                        </div>

                        {/* One-liner description */}
                        <p className="text-sm text-gray-600 line-clamp-2">{property.one_liner}</p>

                        {/* View Details Button */}
                        <div className="mt-4">
                          <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Choose Our Locations */}
      <section className="section-padding bg-blue-50">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each of our carefully selected locations offers unique advantages for your perfect coastal getaway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-600 text-sm">Walking distance to beaches, restaurants, and attractions</p>
            </div>

            <div className="text-center fade-in-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">20+ years of local knowledge and insider recommendations</p>
            </div>

            <div className="text-center fade-in-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Every property personally vetted for comfort and character</p>
            </div>

            <div className="text-center fade-in-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bath className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Full Service</h3>
              <p className="text-gray-600 text-sm">Concierge support and local assistance throughout your stay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Perfect Stay?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us for availability, pricing, and personalized recommendations for your Hermanus getaway
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

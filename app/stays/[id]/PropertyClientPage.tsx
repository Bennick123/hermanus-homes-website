"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { MapPin, Users, Bed, Bath, ArrowLeft } from "lucide-react"
import { getPropertyBySlug } from "@/lib/properties"
import { notFound } from "next/navigation"
import ImageSlideshow from "@/components/ImageSlideshow"
import { useEffect, useState } from "react"

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyClientPage({ params }: PropertyPageProps) {
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const fetchedProperty = await getPropertyBySlug(params.id)
        setProperty(fetchedProperty)
      } catch (err) {
        console.error("Error loading property:", err)
        setError(err)
        notFound()
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !property) {
    return <div>Error loading property.</div>
  }

  // Combine hero image with gallery for slideshow, filter out empty values
  const allImages = [property.hero, ...(property.gallery || [])]
    .filter(Boolean)
    .filter((img) => typeof img === "string" && img.trim() !== "")

  return (
    <div className="pt-20">
      {/* Back Button */}
      <section className="py-4 bg-gray-50">
        <div className="container">
          <Link
            href="/stays"
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
            onClick={() => {
              // Force a page refresh to ensure proper loading
              window.location.href = "/stays"
            }}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
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
            <ImageSlideshow images={allImages} title={property.title} className="mb-8" />
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
                <h3 className="text-xl font-semibold mb-4">Ready to book?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us for availability, pricing, and to make your reservation.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full text-center">
                    Check Availability
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 px-4 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    Ask a Question
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

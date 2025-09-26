"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const properties = [
  {
    id: 1,
    name: "Corner Delight at Onrust Beach",
    description:
      "Spacious double-storey home with pool, multiple entertainment areas, and just a short walk to tidal pools and Onrus Beach.",
    image: "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-1.jpg",
    slug: "corner-delight-onrust-beach",
  },
  {
    id: 2,
    name: "Pelican's Nest",
    description:
      "Family-orientated holiday home with a heated pool, modern kitchen, and excellent security, walking distance to cliff paths and tidal pools.",
    image: "/homes/pelicans-nest/16 Pelican Onrus (1 of 50).JPG",
    slug: "pelicans-nest",
  },
  {
    id: 3,
    name: "Tranquility",
    description: "Spacious rustic home on Vermont Saltpan with outstanding mountain views and exceptional bird life.",
    image: "/homes/tranquility/Hero.jpg",
    slug: "tranquility",
  },
  {
    id: 4,
    name: "Seafront Retreat",
    description:
      "Seafront home with stunning ocean views, modern comforts, and a perfect setting to relax and reconnect with nature.",
    image: "/homes/seafront-retreat/72 Kus outside.jpg",
    slug: "seafront-retreat",
  },
  {
    id: 5,
    name: "Seacrest Cottage",
    description:
      "Neat and tidy holiday home within walking distance to Grotto Beach, featuring a private garden and cosy fireplace.",
    image: "/homes/seacrest-cottage/IMG-20230801-WA0019.jpg",
    slug: "seacrest-cottage",
  },
]

export default function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length)
  }

  return (
    <div
      className="relative fade-in-up"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {properties.map((property) => (
            <div key={property.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">{property.name}</h3>
                  <p className="text-gray-600">{property.description}</p>
                  <Link href={`/stays/${property.slug}`} className="btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        aria-label="Previous property"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        aria-label="Next property"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

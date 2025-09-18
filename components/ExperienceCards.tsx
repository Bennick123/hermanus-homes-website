"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

// SafeImage component for error handling
function SafeImage({ src, alt, ...props }) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      {...props}
      onError={(e) => {
        console.warn(`Failed to load image: ${src}`)
        e.currentTarget.src =
          "/placeholder.svg?height=200&width=300&text=" + encodeURIComponent(alt.split(" ").slice(0, 2).join(" "))
      }}
    />
  )
}

const experiences = [
  {
    title: "Land-based Whale Watching",
    description:
      "Stroll 12 km of sea-hugging boardwalk and spot southern-right whales breaching metres from shore—Hermanus is dubbed the world's whale-watching capital.",
    image: "/images/whalewatching.jpg",
    season: "Peak: June – October",
    link: "/experiences#whale-watching",
  },
  {
    title: "Sea-Kayaking in the Whale Sanctuary",
    description:
      "Paddle stable double kayaks from Old Harbour; expect seals, penguins and—if you're lucky—whales alongside.",
    image: "/images/seakayaking.jpg",
    season: "Year-round, mornings",
    link: "/experiences#sea-kayaking",
  },
  {
    title: "Hemel-en-Aarde Wine Route",
    description:
      "Sample cool-climate Pinot Noir and Chardonnay at award-winning cellars tucked between mountains and sea.",
    image: "/images/wineroute.jpg",
    season: "All year",
    link: "/experiences#wine-tours",
  },
]

export default function ExperienceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {experiences.map((experience, index) => (
        <Link
          key={index}
          href={experience.link}
          className="group bg-white rounded-lg shadow-sm hover-zoom fade-in-up border border-gray-100 overflow-hidden"
        >
          <div className="relative h-48">
            <SafeImage
              src={experience.image}
              alt={experience.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              {experience.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>{experience.season}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

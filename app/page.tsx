import Image from "next/image"
import Link from "next/link"
import PropertyCarousel from "@/components/PropertyCarousel"
import ExperienceCards from "@/components/ExperienceCards"
import { MapPin, Users, Bed, Bath } from "lucide-react"

const testimonials = [
  {
    text: "Our stay at Pelican's Nest was absolutely magical! The heated pool was perfect for the kids, and we spotted whales right from the cliff path. The local team's recommendations for restaurants were spot-on. Can't wait to return!",
    name: "Sarah & Mike Thompson",
    location: "Cape Town",
  },
  {
    text: "Tranquility lived up to its name completely. Waking up to mountain views and bird songs at the salt pan was pure bliss. The house had everything we needed, and the fireplace made our winter evenings so cozy. Highly recommend!",
    name: "James Mitchell",
    location: "Johannesburg",
  },
  {
    text: "The service was exceptional from start to finish. They arranged sea kayaking for us and even had fresh flowers waiting when we arrived. The location is unbeatable - beach walks, wine tasting, and the best whale watching we've ever experienced.",
    name: "Emma & David Chen",
    location: "London, UK",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/coastal-sunset-hero.jpg"
          alt="Stunning coastal sunset view with luxury accommodation overlooking the rocky Hermanus coastline"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white container">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up text-shadow-lg">
            Unwind on the Hermanus Coast
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto fade-in-up text-shadow-md">
            Experience luxury coastal living where dramatic rocky shores meet world-class accommodation
          </p>
          <Link href="/stays" className="btn-primary fade-in-up">
            Browse Stays
          </Link>
        </div>
      </section>

      {/* Property Carousel */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of luxury holiday homes in Onrus and Vermont
            </p>
          </div>
          <PropertyCarousel />
        </div>
      </section>

      {/* Experiences Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiences Nearby</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make the most of your stay with these incredible local experiences
            </p>
          </div>
          <ExperienceCards />
        </div>
      </section>

      {/* Why Choose Our Locations */}
      <section className="section-padding bg-gray-50">
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

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from families and travelers who've made memories with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm fade-in-up border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 fade-in-up">
            <p className="text-gray-600 mb-6">Ready to create your own unforgettable memories?</p>
            <Link href="/contact" className="btn-primary">
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

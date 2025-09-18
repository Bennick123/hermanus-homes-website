import Image from "next/image"

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section - Made Larger */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Luxury holiday home with pool and mountain views in Onrus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white container">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up">About Onrus Accommodation</h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto fade-in-up leading-relaxed">
            For more than 20 years we've been the friendly, local link between travellers who crave a restorative
            seaside escape and homeowners who want their properties cared for as lovingly as they would themselves.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Locally rooted, family-run</h3>
                  <p className="text-gray-600">
                    Based in Onrus River on the scenic Whale Coast, our small team lives and surfs where we work, giving
                    us unmatched insider knowledge of the coastline from Vermont through Hermanus and Voëlklip.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">People-first by design</h3>
                  <p className="text-gray-600">
                    Our business grew out of a simple passion for welcoming guests and forging lasting relationships
                    with owners. Personal phone calls, thoughtful touches and rapid responses are the hallmarks of the
                    service our repeat visitors rave about.
                  </p>
                </div>
              </div>
            </div>
            <div className="fade-in-up">
              <Image
                src="/images/about-hospitality.jpg"
                alt="Family enjoying fresh local food and hospitality outdoors"
                width={600}
                height={400}
                className="rounded-lg shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Guests */}
            <div className="bg-white p-8 rounded-lg shadow-sm fade-in-up">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">For Guests</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Hand-picked homes</h4>
                  <p className="text-gray-600 text-sm">
                    From airy beach cottages overlooking the Atlantic to fynbos-framed family villas, every listing is
                    vetted for comfort, character and proximity to the area's best whale-watching, surfing and coastal
                    trails.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Concierge-style support</h4>
                  <p className="text-gray-600 text-sm">
                    Need a kayak delivered to the estuary, a table at the freshest seafood spot or directions to that
                    hidden artist's studio? Just ask.
                  </p>
                </div>
              </div>
            </div>

            {/* For Owners */}
            <div className="bg-white p-8 rounded-lg shadow-sm fade-in-up">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">For Owners</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Full-service property management</h4>
                  <p className="text-gray-600 text-sm">
                    Ideal for owners who live abroad, we handle everything—marketing, dynamic pricing, guest screening,
                    24hr check-in, maintenance and monthly reporting.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Reliable housekeeping & laundry</h4>
                  <p className="text-gray-600 text-sm">
                    We partner with trusted local crews who treat every home as their own, ensuring spotless turnovers
                    and professionally laundered linens after each stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up order-2 lg:order-1">
              <Image
                src="/images/about-coastline.jpg"
                alt="Hermanus coastal walkway at sunset with ocean views"
                width={600}
                height={400}
                className="rounded-lg shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="fade-in-up order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Guests (and Owners) Choose Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Location, location...</h3>
                  <p className="text-gray-600">
                    Step out to blue-flag beaches, the famous Hermanus Cliff Path and Hemel-en-Aarde's boutique wine
                    estates—all within a short drive.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Authentic coastal living</h3>
                  <p className="text-gray-600">
                    Onrus's estuary, art galleries, cafés and weekly markets embody the laid-back creative spirit that
                    draws writers, painters and nature lovers alike.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">A commitment to community</h3>
                  <p className="text-gray-600">
                    Whenever possible we source services and supplies locally, supporting the artisans, cleaners and
                    tour operators who make this little corner of paradise what it is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="section-padding bg-blue-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic mb-6">
              "We look forward to welcoming you to the Whale Coast—whether you're seeking a holiday home that
              replenishes the soul or a management partner who treats your property like their own."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/stays" className="btn-primary">
                Browse Our Homes
              </a>
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

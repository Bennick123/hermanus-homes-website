"use client"

import Image from "next/image"
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react"

// Image component with error handling
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

export default function Experiences() {
  return (
    <div className="pt-20">
      {/* Hero Section with Whale Image */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <SafeImage
          src="/images/whale-hero.jpg"
          alt="Whale tail diving in Hermanus waters"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">Local Experiences</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto fade-in-up">
            Hermanus and neighbouring Onrus are a playground of ocean encounters, nature walks through fynbos-rich
            reserves, blue-flag beaches, award-winning wineries, and bird-watching estuaries—all within a 15-minute
            drive.
          </p>
        </div>
      </section>

      {/* Ocean & Marine Wildlife */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ocean & Marine Wildlife</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience world-class marine encounters in the pristine waters of Walker Bay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Land-based whale watching */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/whalewatching.jpg"
                  alt="Whale watching from Hermanus Cliff Path"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Land-based Whale Watching</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Stroll 12 km of sea-hugging boardwalk and spot southern-right whales breaching metres from
                  shore—Hermanus is dubbed the world's whale-watching capital.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Peak: June – October</span>
                </div>
              </div>
            </div>

            {/* Boat whale-watching cruises */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/whalecharters.jpg"
                  alt="Boat whale watching cruise"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Boat Whale-Watching Cruises</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Join Southern Right Charters for an eco-friendly catamaran trip into Walker Bay to meet giants
                  eye-to-eye.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>June – December (daily)</span>
                </div>
                <a
                  href="https://www.southernrightcharters.co.za/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book now <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Sea-kayaking */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/seakayaking.jpg"
                  alt="Sea kayaking in Walker Bay"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sea-Kayaking in the Whale Sanctuary</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Paddle stable double kayaks from Old Harbour; expect seals, penguins and—if you're lucky—whales
                  alongside.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>Year-round, mornings</span>
                </div>
                <a
                  href="https://walkerbayadventures.co.za/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book adventure <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Shark-cage diving */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/sharkcagediving.jpg"
                  alt="Shark cage diving in Gansbaai"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Shark-Cage Diving (Gansbaai)</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  A 45-min shuttle brings you face-to-face with bronze whalers and the occasional great white. 97%
                  sighting rate.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Best: April – September</span>
                </div>
                <a
                  href="https://secure.activitybridge.com/book?activityid=452&sourceid=60"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book diving <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Onrus Beach */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/onrusbeach.jpg"
                  alt="Onrus Blue Flag Beach"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Onrus Beach (Blue Flag)</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Surf gentle beach-breaks, hire a bodyboard or simply sun-soak on one of SA's cleanest Blue-Flag sands.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>All year</span>
                </div>
              </div>
            </div>

            {/* Davies' Tidal Pool */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/daviespool.jpg"
                  alt="Davies' Tidal Pool at sunset"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Davies' Tidal Pool</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Family-friendly salt-water pool carved into the rocks—safe, scenic and Instagram-ready at sunset.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users size={16} className="mr-2" />
                  <span>Family-friendly, All year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nature & Hiking Trails */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nature & Hiking Trails</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore pristine fynbos reserves, coastal paths, and bird-watching estuaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fernkloof Nature Reserve */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/fernkloof.webp"
                  alt="Fernkloof Nature Reserve entrance and trails"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fernkloof Nature Reserve</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  60 km of way-marked trails through record-breaking fynbos biodiversity; picnic sites and bird hides.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>1–20 km loops</span>
                </div>
                <a
                  href="https://www.fernkloof.org.za/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trail maps <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Hermanus Cliff Path */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/cliffpath.webp"
                  alt="Hermanus Cliff Path walkway with ocean views"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hermanus Cliff Path</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Easy, stroller-friendly path linking New Harbour and Grotto Beach with ocean lookouts every few
                  metres.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>12 km</span>
                </div>
                <a
                  href="https://www.fernkloof.org.za/index.php/fernkloof-nature-reserve/hermanus-cliff-path"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Info <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* VOS Coastal Path - with better image positioning */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/voscliffpath.webp"
                  alt="Vermont-Onrus-Sandbaai Coastal Path boardwalk"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: "center 30%" }}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vermont Coastal Path</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  An 8 km coast-hugging walkway through milkwood groves, tide-pools and pocket beaches—dog-friendly.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>8 km • Dog-friendly</span>
                </div>
              </div>
            </div>

            {/* Vermont Salt Pan - with better image positioning moved further up */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/vermontsaltpan.webp"
                  alt="Flamingos at Vermont Salt Pan"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: "center 20%" }}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vermont Salt Pan</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Flat boardwalks for flamingo & sunbird spotting; perfect sunset strolls five minutes from the beach.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>1–3 km • Bird watching</span>
                </div>
                <a
                  href="https://birdlifeoverberg.org.za/2022/11/vermont-salt-pan/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bird guide <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine, Food & Markets */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wine, Food & Markets</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Savor award-winning wines and fresh local produce</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hemel-en-Aarde Wine Route */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/wineroute.jpg"
                  alt="Hemel-en-Aarde wine valley"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hemel-en-Aarde Wine Route</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Sample cool-climate Pinot Noir and Chardonnay at award-winning cellars tucked between mountains and
                  sea.
                </p>
                <a
                  href="https://www.tripadvisor.com/AttractionProductReview-g312663-d18276025-Hemel_en_Aarde_Wine_Tour-Hermanus_Overstrand_Overberg_District_Western_Cape.html"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wine route map <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Hermanus Country Market */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/hermanusmarket.jpg"
                  alt="Hermanus Country Market"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hermanus Country Market</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Saturdays (08:00–12:00) & summer Wednesday evenings: farm-fresh produce, craft gin, live music and
                  lawn games under giant pines.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>Saturdays 8AM-12PM, Wed evenings (summer)</span>
                </div>
                <a
                  href="https://hermanuscountrymarket.co.za/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Market info <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure & Sport */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Adventure & Sport</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get your adrenaline pumping with these thrilling activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Paragliding */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/paragliding.jpg"
                  alt="Paragliding over Hermanus coast"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Paragliding Tandem Flights</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Soar from seaside slopes for aerial whale views; tandem options for first-timers.
                </p>
                <a
                  href="https://icarusparagliding.co.za/2018/01/10/paragliding-in-hermanus-cape-town/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book flight <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* MTB Trails */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/mountainbiking.jpg"
                  alt="Hemel-en-Aarde mountain biking trails"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hemel-en-Aarde MTB Trails</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Four graded single-track loops (7 km green to 65 km black) weaving between vineyards and riverbanks.
                  Day-permits available.
                </p>
                <a
                  href="https://mtbroutes.co.za/trail-detail/hemel-en-aarde/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trail maps <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Golf */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/golf.jpg"
                  alt="Hermanus Golf Club course"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hermanus Golf Club (27 holes)</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Top-40 SA course blending coastal scenery with parkland fairways; visitors welcome.
                </p>
                <a
                  href="https://hgc.co.za/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book tee time <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arts, Culture & Events */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Arts, Culture & Signature Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Immerse yourself in Hermanus' vibrant cultural scene</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Art Galleries */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/artgallery.jpg"
                  alt="Hermanus art galleries and First Friday Art Walk"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Art Galleries & First Friday Art Walk</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  More than 18 contemporary galleries line the Old Harbour precinct; join the monthly evening art crawl
                  with free wine tastings.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>First Friday of each month</span>
                </div>
                <a
                  href="https://www.sa-venues.com/things-to-do/westerncape/hermanus-first-fridays-artwalk/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gallery guide <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Whale Festival */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-zoom fade-in-up">
              <div className="relative h-48">
                <SafeImage
                  src="/images/whalefestival.jpg"
                  alt="Hermanus Whale Festival celebration"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hermanus Whale Festival (Eco-Art Festival)</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  South Africa's only eco-art festival turns the town into a carnival of music, food and marine
                  conservation.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>3–5 October 2025</span>
                </div>
                <a
                  href="https://hermanuswhalefestival.co.za/"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Festival info <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

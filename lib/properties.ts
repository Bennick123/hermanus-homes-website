import { time } from "console"
import { se } from "date-fns/locale"
import matter from "gray-matter"

export type Property = {
  title: string
  slug: string
  area: "Hermanus" | "Onrus" | "Vermont" | "Sandbaai"
  address?: string
  sleeps: number
  beds: number
  baths: number
  one_liner: string
  hero: string
  gallery: string[]
  amenities: string[]
  booked_ranges?: { from: string; to: string }[]
  rates_md?: string
  policies_md?: string
  body: string // markdown description
}

// Static property data - this ensures properties always load
const STATIC_PROPERTIES: Record<string, string> = {
  tranquility: `---
title: "Tranquility"
slug: "tranquility"
area: "Vermont"
address: "30 Fulmar Street, Vermont"
sleeps: 10
beds: 6
baths: 2
one_liner: "Spacious rustic home on Vermont Saltpan with outstanding mountain views and exceptional bird life."
hero: "/homes/tranquility/10.jpeg"
gallery:
  - "/homes/tranquility/1.jpeg"
  - "/homes/tranquility/2.jpeg"
  - "/homes/tranquility/3.jpeg"
  - "/homes/tranquility/4.jpeg"
  - "/homes/tranquility/5.jpeg"
  - "/homes/tranquility/7.jpeg"
  - "/homes/tranquility/8.jpg"
  - "/homes/tranquility/Hero.jpg"
  - "/homes/tranquility/11.jpeg"
  - "/homes/tranquility/22.jpeg"
  - "/homes/tranquility/13.jpeg"
  - "/homes/tranquility/14.jpeg"
  - "/homes/tranquility/15.jpeg"
  - "/homes/tranquility/16.jpeg"
  - "/homes/tranquility/23.jpeg"
  - "/homes/tranquility/18.jpeg"
  - "/homes/tranquility/19.jpeg"
  - "/homes/tranquility/24.jpeg"
  - "/homes/tranquility/9.jpeg"
amenities:
  - Dishwasher
  - Washing machine
  - Fridge/Freezer
  - Good security
  - Rechargeable lights for loadshedding
  - Gas hob, electric oven
  - Smart TV
  - DSTV optional (R35 per day)
  - Wi-Fi
  - Lots of games
  - Huge fireplace
  - Outside firepit
  - Inverter for TV during load shedding
  - Outside shower with hot water
rates_md: |
  **High season**
  R4900 p/n for up to 6 guests (Minimum 10 nights over Dec/Jan)
  +R300 p/p p/n for guests 7–10

  **Shoulder**
  R3600 p/n for up to 6 guests (min 2 nights)
  +R300 p/p p/n for guests 7–10

  **Low**
  R3300 p/n for up to 6 guests (min 2 nights)
  +R300 p/p p/n for guests 7–10

policies_md: |
  **Pets:** Not Allowed 
  **Baby cot:** Available on request at R100 per stay
---

## Description
This appealing, spacious, rustic home is beautifully situated on the Vermont Saltpan with the most outstanding mountain views. The bird life on the Saltpan is something special of which one never tires. 

### Accommodation Details

- **6 bedrooms:** 5 with double beds and 1 with two single beds
- **Sleeps 10 persons**
- **2 bathrooms:** Both with bath and shower
- **Outside shower** with hot water for those refreshing moments

### Special Features

For the winter evenings, there is a huge fireplace as well as a firepit outside for those braai nights. There is an inverter which keeps the TV on during load shedding, ensuring you're never without entertainment.

### The Views

Spectacular views from most of the rooms make this a truly special retreat. The Vermont Saltpan provides an ever-changing backdrop of bird life and natural beauty, while the mountain views create a dramatic and peaceful setting.

### Perfect for Unwinding

This is a character home where one could really unwind and enjoy nature. Whether you're watching the sunrise over the mountains, observing the rich bird life on the saltpan, or gathering around the fireplace in the evenings, Tranquility offers the perfect escape from the hustle and bustle of daily life.`,

"herringbone": `---
title: "Herringbone"
slug: "herringbone"
area: "Onrus"
address: "Onrus River, Hermanus, Western Cape, South Africa"
sleeps: 6
beds: 3
baths: 2
one_liner: "Stylish coastal holiday home in Onrus River offering relaxed indoor-outdoor living close to beaches, lagoon and cliff paths."
hero: "/homes/herringbone/1.jpeg"
gallery:
  - "/homes/herringbone/2.jpeg"
  - "/homes/herringbone/3.jpeg"
  - "/homes/herringbone/4.jpeg"
  - "/homes/herringbone/5.jpeg"
  - "/homes/herringbone/6.jpeg"
  - "/homes/herringbone/7.jpeg"
  - "/homes/herringbone/8.jpeg"
  - "/homes/herringbone/9.jpeg"
  - "/homes/herringbone/10.jpeg"
  - "/homes/herringbone/11.jpeg"
  - "/homes/herringbone/12.jpeg"
  - "/homes/herringbone/13.jpeg"
  - "/homes/herringbone/14.jpeg"
  - "/homes/herringbone/15.jpeg"
  - "/homes/herringbone/16.jpeg"
  - "/homes/herringbone/17.jpeg"
  - "/homes/herringbone/18.jpeg"
  - "/homes/herringbone/19.jpeg"
  - "/homes/herringbone/20.jpeg"
  - "/homes/herringbone/21.jpeg"
  - "/homes/herringbone/22.jpeg"
  - "/homes/herringbone/23.jpeg"
  - "/homes/herringbone/24.jpeg"
  - "/homes/herringbone/25.jpeg"
  - "/homes/herringbone/26.jpeg"
  - "/homes/herringbone/27.jpeg"
  - "/homes/herringbone/28.jpeg"
  - "/homes/herringbone/29.jpeg"
  - "/homes/herringbone/30.jpeg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV for streaming
  - Fully equipped kitchen
  - Dishwasher
  - Washing machine
  - Microwave
  - Fridge
  - Freezer
  - Braai facilities
  - Secure parking
  - Outdoor seating area
rates_md: |
  Pricing varies by season and dates
policies_md: |
  Pets: Not Allowed
  Baby cot: Available on request at R100 per stay
---

## Description
Herringbone is a stylish coastal holiday home located in the peaceful seaside village of Onrus River, just outside Hermanus. Designed for relaxed holiday living, the home offers comfortable indoor and outdoor spaces that make it perfect for families or small groups looking to unwind by the sea.

The house features three bedrooms and two bathrooms, comfortably accommodating up to six guests. The open-plan living area flows into a well-equipped kitchen and dining space, creating a welcoming environment for cooking, socialising and relaxing after a day exploring the coastline.

Outside, guests can enjoy a private outdoor area ideal for braais and enjoying the fresh sea air. With easy access to the popular Onrus beach, lagoon, scenic cliff paths and nearby restaurants, Herringbone provides a wonderful base for a memorable Hermanus holiday.
`,

  "27-krintang-crescent": `---
title: "Lizzie's"
slug: "27-krintang-crescent"
area: "Vermont"
address: "27 Krintang Crescent, Vermont"
sleeps: 8
beds: 4
baths: 2
one_liner: "Spacious, well-equipped family home with upstairs deck and lounge, full DSTV, inverter backup, and a fully enclosed garden."
hero: "/homes/27-krintang-crescent/IMG-20230312-WA0033.jpg"
gallery:
  - "/homes/27-krintang-crescent/IMG-20230312-WA0016.jpg"
  - "/homes/27-krintang-crescent/IMG-20230312-WA0015.jpg"
  - "/homes/27-krintang-crescent/IMG-20230312-WA0021.jpg"
  - "/homes/27-krintang-crescent/IMG-20230312-WA0028.jpg"
  - "/homes/27-krintang-crescent/IMG-20230312-WA0027.jpg"
  - "/homes/27-krintang-crescent/IMG-20230312-WA0020.jpg"
  - "/homes/27-krintang-crescent/IMG-20230312-WA0029.jpg"
  - "/homes/27-krintang-crescent/IMG-20230312-WA0022.jpg"
amenities:
  - Uncapped Wi-Fi
  - DSTV Explora x 2 (full package)
  - Netflix
  - Smart TV
  - Full back-up power
  - Inverter
  - Dishwasher
  - Washing machine
  - Tumble dryer
  - Coffee machine
  - Microwave
  - Fridge
  - Freezer
  - Wine fridge
  - Braai facilities (indoor & outdoor)
  - Garaging for 2 cars
  - Excellent security
  - Bathrooms x 2
rates_md: |
  **Peak**
  R4800 p/n (Minimum 10 nights)

  **Shoulder**
  R3800 p/n (Minimum 2 nights)

  **Low**
  R3300 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Not Allowed
  **Baby cot:** Available on request at R100 per stay
---

## Description
This spacious four-bedroom home in Vermont is just a 10-minute drive from Hermanus and has been thoughtfully equipped for relaxed family holidays. The main bedroom offers a queen-size bed with an en-suite bathroom. A family bathroom serves three additional bedrooms: one with a queen-size bed, one with a double bed, and one with two single beds.

The open-plan lounge and dining area flow into a well-equipped kitchen, making meal times easy. Upstairs, a fantastic deck and family room provide extra space to unwind, with full DSTV available and a convenient wine fridge. The fully enclosed garden and double garage add comfort and peace of mind.

With fast Wi-Fi, inverter-backed power, and both indoor and outdoor braai facilities, this home is ideal for larger families looking for comfort and value near Hermanus.`,

 "skye-cottage": `---
title: "Skye Cottage"
slug: "skye-cottage"
area: "Onrus"
address: "25 Atlantic Drive, Onrus River"
sleeps: 9
beds: 5
baths: 4
one_liner: "West-facing Peninsula home with spectacular sunsets, enclosed garden, and flexible 5-bedroom layout including a rear flatlet."
hero: "/homes/skye-cottage/Sunset Sept 2025.jpg"
gallery:
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-27.jpg"
  - "/homes/skye-cottage/Re-Take Sept 2025-12.jpg"
  - "/homes/skye-cottage/Re-Take Sept 2025-13.jpg"
  - "/homes/skye-cottage/Re-Take Sept 2025-14.jpg"
  - "/homes/skye-cottage/Retake.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-5.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-12_1.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-26_1.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-9.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-24.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-19_1.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-2.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-8.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-32.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-20.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-30.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-28.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-26.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-21.jpg"
  - "/homes/skye-cottage/25 Atlantic Drive, Onrus-22.jpg"
amenities:
  - Uncapped Wi-Fi
  - Washing machine
  - Dishwasher
  - Microwave
  - Fridge
  - Freezer
  - Braai facilities
  - Enclosed garden
  - Safe parking
  - Good security
  - Rechargeable lights (load shedding)
rates_md: |
  Peak season
  R7700 p/n (Minimum 10 nights)

  Shoulder season
  R4600 p/n (Minimum 2 nights)

  Low season
  R3500 p/n (Minimum 2 nights)
policies_md: |
  Pets: By special arrangement
  Baby cot: Available on request at R100 per stay
---

## Description
Skye Cottage is a well-equipped, west-facing family home in a prime Peninsula position, perfect for soaking up spectacular sunset views from the patio. Fully enclosed with a neat front lawn, the house offers a flexible layout that suits extended families or two smaller families sharing.

### Accommodation Details
- Bedrooms: 5 in total  
  - Two queen bedrooms, each with its own en-suite bathroom  
  - Two bedrooms with two single beds each, sharing a bathroom  
  - Fifth bedroom with a single bed  
- Rear flatlet forms part of the bed count and is ideal for grandparents or a couple with a child; includes a bar fridge, microwave, and small 2-plate oven.

### Living & Kitchen
Open-plan lounge and kitchen with a large TV and comfortable seating; the kitchen is well equipped for easy holiday cooking.

### Outdoors
An enclosed garden and braai facilities make long summer evenings effortless, with safe parking and good security providing peace of mind.
`,

  rustica: `---
title: "Rustica"
slug: "rustica"
area: "Onrus"
address: "Corner Main and Molteno Street, Onrus River"
sleeps: 8
beds: 2
baths: 1
one_liner: "Rustic family home a short walk to the beach, with large enclosed garden, indoor fireplace, and easy indoor–outdoor flow."
hero: "/homes/rustica/IMG-20210902-WA0003.jpg"
gallery:
  - "/homes/rustica/1.jpg"
  - "/homes/rustica/2.jpg"
  - "/homes/rustica/3.jpg"
  - "/homes/rustica/4.jpg"
  - "/homes/rustica/5.jpg"
  - "/homes/rustica/6.jpg"
  - "/homes/rustica/7.jpg"
  - "/homes/rustica/8.jpg"
  - "/homes/rustica/9.jpg"
  - "/homes/rustica/10.jpg"
  - "/homes/rustica/11.jpg"
  - "/homes/rustica/12.jpg"
  - "/homes/rustica/13.jpg"
amenities:
  - Wi-Fi
  - Dishwasher
  - Braai facilities
  - Fireplace
  - Fan
  - Secure parking
  - Excellent security
  - Gas stove
  - Microwave
  - Rechargeable light bulbs
  - Fridge
  - Freezer
rates_md: |
  **Peak**  
  R3000 (Minimum 10 days)

  **Shoulder**  
  R2500 (Minimum 2 nights)

  **Off Season**  
  R2000 (Minimum 2 nights)
policies_md: |
  **Pets:** Allowed  
  **Smoking:** No smoking indoors  
  **TV:** No TV on site
  **Baby cot:** Available on request at R100 per stay
---

## Description
Rustica is a relaxed, rustic home in Onrus — just a ten-minute walk to the beach — and a great base for families wanting a simple coastal break.

### Accommodation Details
- **Bedrooms:** 2 rooms, each with a double bed and a double bunk  
- **Bathroom:** 1 large bathroom with bath, shower, toilet, and basin

### Living & Kitchen
Open-plan kitchen, lounge, and dining area flowing to the outside. The kitchen is well equipped with a dishwasher, microwave, fridge, freezer, and stove, and there's a fireplace for cosy evenings.

### Outdoors
A large enclosed garden is ideal for kids, with braai facilities for long summer afternoons. Comfortable, uncomplicated, and perfectly placed for a beach holiday in Hermanus.`,

  "corner-delight-onrust-beach": `---
title: "Corner Delight at Onrust Beach"
slug: "corner-delight-onrust-beach"
area: "Onrus"
address: "30 Duke Street, Onrus River"
sleeps: 8
beds: 4
baths: 3
one_liner: "Spacious double-storey home with pool, multiple entertainment areas, and just a short walk to tidal pools and Onrust Beach."
hero: "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-1.jpg"
gallery:
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-48.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-34.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-39.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-27.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-24.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-5.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-49.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-36.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-21.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-26.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-2.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-4.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-33.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-35.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-28.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-19.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-29.jpg"
  - "/homes/corner-delight-onrust-beach/30 Duke Street, Onrus-23.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV x 3
  - Netflix
  - DSTV optional (R35 per day)
  - Fridge x 2
  - Freezer
  - Tumble dryer
  - Washing machine
  - Indoor braai
  - Outdoor braai
  - Gas braai
  - Excellent security
  - Sparkling pool
  - Rechargeable lights
rates_md: |
  Peak season
  R5300 p/n for up to 6 guests (Minimum 10 nights)
  +R400 p/p p/n for guests 7–8

  1 Dec – 14 Dec
  R3850 p/n for up to 6 guests
  +R400 p/p p/n for guests 7–8

  Shoulder season
  R3200 p/n for up to 6 guests (Minimum 2 nights)
  +R400 p/p p/n for guests 7–8

  Off season
  R2900 p/n for up to 6 guests (Minimum 2 nights)
  +R400 p/p p/n for guests 7–8

policies_md: |
  **Pets:** Not Allowed
  **Baby cot:** Available on request at R100 per stay
---

## Description
Corner Delight at Onrust Beach is a beautifully situated double-storey holiday home in Onrus, close to the tidal pools and just a 20-minute walk to the main beach and lagoon. Perfect for families or groups, this property offers spacious living areas, great entertainment spaces, and a sparkling pool.

### Accommodation Details
- **Private wing** with its own entrance and parking:  
  - Main bedroom with king-size bed and en-suite bathroom (shower & toilet)  
  - Two additional bedrooms with queen and double beds sharing a large bathroom (shower, bath & toilet)  

- **Upstairs area:**  
  - Large bedroom with king-size bed and its own bathroom  
  - Additional double bed in a small alcove  
  - Small kitchenette and lounge with lovely views  

### Living & Entertainment
The main lounge, dining area, and open-plan kitchen flow seamlessly together, with a full scullery and indoor braai. The dining table doubles as a snooker table, adding a fun twist for guests. Outside, the undercover deck is furnished for comfort and includes a built-in braai, overlooking the brand new pool.

### Extras
With excellent security, uncapped Wi-Fi, multiple smart TVs, and both indoor and outdoor cooking facilities, Corner Delight at Onrust Beach is ideal for a relaxed coastal holiday.`,

  "pelicans-nest": `---
title: "Pelican's Nest"
slug: "pelicans-nest"
area: "Vermont"
address: "16 Pelican Street, Onrus River"
sleeps: 6
beds: 3
baths: 2
one_liner: "Family-orientated holiday home with a heated pool, modern kitchen, and excellent security, walking distance to cliff paths and tidal pools."
hero: "/homes/pelicans-nest/Pelican Decking reshoot-6.jpg"
gallery:
  - "/homes/pelicans-nest/Pelican Decking reshoot-5.jpg"
  - "/homes/pelicans-nest/Pelican Decking reshoot-7.jpg"
  - "/homes/pelicans-nest/Re-Take Sept 2025-6.jpg"
  - "/homes/pelicans-nest/Re-Take Sept 2025-3.jpg"
  - "/homes/pelicans-nest/Re-Take Sept 2025-4.jpg"
  - "/homes/pelicans-nest/16 Pelican Onrus (14 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (19 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (18 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (16 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (35 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (34 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (41 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (39 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (44 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (43 of 50).JPG"
amenities:
  - Uncapped Wi-Fi
  - DSTV
  - Washing machine
  - Dishwasher
  - Braai facilities
  - Fireplace
  - Secure parking
  - Excellent security
  - Coffee machine
  - Tumble dryer
  - Microwave
  - Gas stove
  - Icemaker
  - Fridge
  - Freezer
  - Rechargeable light bulbs
  - Smart TV
  - Heated pool with safety net
  - CCTV
  - Solar geyser
  - 5kW inverter with 8 solar panels
rates_md: |
  **Peak season**
  R5300 p/n (Minimum 10 nights)

  **Shoulder season**
  R3200 p/n (Minimum 2 nights)

  **Off season**
  R2900 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Allowed by arrangement
  **Baby cot:** Available on request at R100 per stay
---

## Description
Pelican's Nest is a unique, family-orientated holiday home located in the quiet suburb of Vermont, bordering Onrus. It's the perfect 'home away from home' with excellent security, including a full alarm system and CCTV. A highlight of the property is the large swimming pool, which can be heated at an additional charge of R400 per day, paid in advance for stays longer than 10 days (no heating available for weekend lets). The garden is fully enclosed, and pets are welcome with prior arrangement.

### Accommodation Details
The home sleeps 6 comfortably in three bedrooms:  
- **Main bedroom:** Queen-size bed, en-suite bathroom with bath and shower  
- **Second bedroom:** Double bed
- **Third bedroom:** Double bed
- **Second bathroom:** Spacious with bath and shower  

The modern, vibrant kitchen is fully equipped with fridge, freezer, microwave, dishwasher, Nespresso coffee machine, gas stove, and icemaking machine. A washing machine and tumble dryer are also available.

### Outdoor Living
The large swimming pool, complete with safety net, is the star attraction for sunny days. The pool can be heated on request for stays of 10 days or longer (R400/day). There's plenty of space to entertain outdoors, along with braai facilities.

### Comfort & Warmth
For cooler evenings, the indoor fireplace warms the entire family area, with underfloor heating in the study and both bathrooms, plus heated towel racks for extra comfort.

### Power & Backup
The house runs on a **5kW inverter with 8 solar panels**, so the Wi-Fi, alarm, lights and televisions keep going for an extended period when the power goes out. Hot water comes off a solar geyser. The only things not carried by the system are the underfloor heating and the pool heater.

### Location
The property is within walking distance to cliff paths and tidal pools, and only a 5-minute drive to Onrus Beach — a favourite spot for families, surfers, and bodyboarders.`,

  "once-upon-a-tide": `---
title: "Once Upon a Tide"
slug: "once-upon-a-tide"
area: "Vermont"
address: "16 Duiker Street, Vermont"
sleeps: 8
beds: 4
baths: 3
one_liner: "Comfortable family holiday home across from the water's edge with easy access to beaches, tidal pools, and scenic coastal paths."
hero: "/homes/once-upon-a-tide/Facade2.jpg"
gallery:
  - "/homes/once-upon-a-tide/IMG-20230702-WA0008.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0015.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0012.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0017.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0020.jpg"
  - "/homes/once-upon-a-tide/Flatlet.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0009.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0013.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0018.jpg"
  - "/homes/once-upon-a-tide/Garden-1.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0010.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0014.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0016.jpg"
  - "/homes/once-upon-a-tide/IMG-20230702-WA0019.jpg"
  - "/homes/once-upon-a-tide/Patio-braai-area.jpg"
amenities:
  - Uncapped Wi-Fi
  - DSTV optional (R35 per day)
  - Washing machine
  - Dishwasher
  - 3 bathrooms
  - Off-street parking (3 cars)
  - Security
  - Coffee machine
  - Microwave
  - Fridge
  - Freezer
  - Rechargeable light bulbs
  - Fans
  - TV
  - Single garage
  - Gas plate
  - Electric stove
  - Air fryer
  - Weber braai
rates_md: |
  **Peak season**
  R4125 p/n (Minimum 10 nights)
policies_md: |
  **Pets:** Not Allowed
  **Baby cot:** Available on request at R100 per stay
---

## Description
Once Upon a Tide is a comfortable family holiday home situated just 10 minutes from Hermanus, perfectly located across the street from the water's edge and scenic coastal path. It's ideal for joggers, walkers, or a relaxed evening stroll. Rabies Tidal Pool, safe for swimmers of all ages, is under a 5-minute walk away, and the popular Onrus Beach and lagoon — loved by families, surfers, and body boarders — are just a short drive.

### Accommodation Details
- **Main house:**  
  - 3 spacious bedrooms with built-in cupboards  
    - 1 with two single beds  
    - 1 with a queen-size bed  
    - Main bedroom with a king-size bed and TV  
  - 2 bathrooms: one with a shower, one with a bath  
  - Lounge with optional DSTV and DVD player  
  - Dining room with large table (seats 8–10) and chalkboard wall  
  - Fully equipped kitchen with dishwasher and microwave  
  - Washing machine for added convenience  

- **Separate flatlet:**  
  - Double bed  
  - Kitchenette with bar fridge and microwave  
  - Separate bathroom with shower  

### Outdoor Living
Enjoy a shaded patio with an outdoor dining area and Weber braai, perfect for long summer afternoons. The large, enclosed garden offers lovely mountain views, and there's a single garage plus off-street parking for three cars.

### Perfect for Families
The fresh sea air, sound of the waves, and easy access to tidal pools and beaches make Once Upon a Tide the perfect place to unwind as a family and enjoy a true coastal getaway.`,

  "seafront-retreat": `---
title: "Seafront Retreat"
slug: "seafront-retreat"
area: "Sandbaai"
address: "72 Kus Road, Sandbaai"
sleeps: 6
beds: 3
baths: 2
one_liner: "Seafront home with stunning ocean views, modern comforts, and a perfect setting to relax and reconnect with nature."
hero: "/homes/seafront-retreat/72 Kus Weg, Sandbaai (Low Res)-1.jpg"
gallery:
  - "/homes/seafront-retreat/72 Kus outside.jpg"
  - "/homes/seafront-retreat/72 Kus Weg, Sandbaai (Low Res)-8.jpg"
  - "/homes/seafront-retreat/72 Kus Weg, Sandbaai (Low Res)-19.jpg"
  - "/homes/seafront-retreat/72 Kus Weg, Sandbaai (Low Res)-17.jpg"
  - "/homes/seafront-retreat/72 Kus Weg, Sandbaai (Low Res)-29.jpg"
  - "/homes/seafront-retreat/72 Kus Weg, Sandbaai (Low Res)-34.jpg"
amenities:
  - Uncapped Wi-Fi
  - Netflix
  - Washing machine
  - Dishwasher
  - Braai facilities
  - Smart TV
  - Secure parking
  - Excellent security
  - Fridge
  - Freezer
  - Tumble dryer
  - Microwave
  - 2 bathrooms
  - Rechargeable light globes
rates_md: |
  **Peak season**
  R4200 p/n (Minimum 10 nights)

  **Shoulder season**
  R3300 p/n

  **Off season**
  R2700 p/n
policies_md: |
  **Pets:** Not Allowed
  **Baby cot:** Available on request at R100 per stay
---

## Description
Seafront Retreat offers the ideal escape for families seeking peace, relaxation, and breathtaking sea views. Nestled in the heart of Sandbaai, this beautiful home provides the perfect base to recharge and reconnect with nature.

The open-plan living area boasts panoramic views of the coastline, while the well-equipped kitchen and dining area ensure all your cooking and entertaining needs are met. The property features three bedrooms and two bathrooms, comfortably accommodating up to six guests.

Whether enjoying your morning coffee while watching the waves, cooking in the modern kitchen, or exploring the nearby beach paths, Seafront Retreat promises a holiday to remember.`,

  "seacrest-cottage": `---
title: "Seacrest Cottage"
slug: "seacrest-cottage"
area: "Hermanus"
address: "274 7th Street, Hermanus"
sleeps: 6
beds: 3
baths: 2
one_liner: "Neat and tidy holiday home within walking distance to Grotto Beach, featuring a private garden and cosy fireplace."
hero: "/homes/seacrest-cottage/IMG-20230801-WA0019.jpg"
gallery:
  - "/homes/seacrest-cottage/IMG-20230801-WA0016.jpg"
  - "/homes/seacrest-cottage/IMG-20230801-WA0017.jpg"
  - "/homes/seacrest-cottage/IMG-20230801-WA0018.jpg"
  - "/homes/seacrest-cottage/IMG-20230801-WA0020.jpg"
  - "/homes/seacrest-cottage/IMG-20230801-WA0026.jpg"
  - "/homes/seacrest-cottage/IMG-20230801-WA0025.jpg"
amenities:
  - Uncapped Wi-Fi with UPS
  - Alarm system
  - Washing machine
  - Air fryer
  - Gas stove
  - Dishwasher
  - Microwave
  - Secure parking
  - Fridge/freezer
  - Outdoor braai
  - Torches
  - Fireplace
rates_md: |
  **Peak season**
  R2900 p/n (Minimum 10 nights)

  **Shoulder season**
  R2000 p/n (Minimum 2 nights)

  **Off season**
  R1500 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Not Allowed
  **Baby cot:** Available on request at R100 per stay
---

## Description
Seacrest Cottage is a neat and tidy holiday home perfectly suited for a small family. Located within walking distance to Blue Flag Grotto Beach and just a little further to Voelklip Beach, this property offers an ideal coastal retreat.

The home features three bedrooms — two with queen-size beds and one with a double bunk — and two bathrooms, one with a shower and toilet, the other with a bath, toilet, and basin. The open-plan kitchen is well equipped, and a cosy fireplace ensures warmth during cooler evenings.

Glass doors open to the outside braai and undercover patio area, set in a private back garden. With its great location and comfortable amenities, Seacrest Cottage is the perfect getaway for a relaxed and memorable holiday.`,

  "sea-perfection": `---
title: "Sea Perfection"
slug: "sea-perfection"
area: "Onrus"
address: "10 Duke Street, Onrus River"
sleeps: 6
beds: 3
baths: 2
one_liner: "Beautiful, fully equipped 3-bedroom home with indoor & outdoor braais, neat garden, and upstairs deck living in the heart of Onrus."
hero: "/homes/sea-perfection/front view.jpg"
gallery:
  - "/homes/sea-perfection/kitchen.jpg"
  - "/homes/sea-perfection/kitchen 2.jpg"
  - "/homes/sea-perfection/kitchen 3.jpg"
  - "/homes/sea-perfection/landing kitchenette.jpg"
  - "/homes/sea-perfection/upstairs tv room.jpg"
  - "/homes/sea-perfection/main bedroom.jpg"
  - "/homes/sea-perfection/en suite bathroom.jpg"
  - "/homes/sea-perfection/double bedroom.jpg"
  - "/homes/sea-perfection/upstairs outdoor braai lovely view.jpg"
  - "/homes/sea-perfection/upsairs outdoor braai.jpg"
  - "/homes/sea-perfection/back garden.jpg"
  - "/homes/sea-perfection/downstairs indoor braai.jpg"
  - "/homes/sea-perfection/image.png"
amenities:
  - Uncapped Wi-Fi
  - Back-up UPS
  - Full DSTV package
  - Smart TV
  - Washing machine
  - Tumble dryer
  - Dishwasher
  - Microwave
  - Coffee plunger
  - Fans
  - Indoor braai (lounge/braai room)
  - Built-in/outdoor braai (verandah)
  - Garaging for 2 cars
  - Excellent security
rates_md: |
  **Peak**
  R4900 p/n (Minimum 10 days)

  Minimum 7 days
policies_md: |
  **Pets:** Not Allowed
  **Baby cot:** Available on request at R100 per stay
---

## Description
Sea Perfection is a holidaymaker’s dream in the heart of Onrus — arrive, unpack, and relax. The entrance hall opens to an open-plan, excellently equipped kitchen, dining room, and lounge/braai room that flows to a neat garden set against natural rock, with a large outdoor table and portable braai.

### Accommodation Details
- **Upstairs:**  
  - Main bedroom with its own wing and en-suite bathroom (shower)
  - Second bedroom with two single beds  
  - Third bedroom with double bed  
  - These two rooms share a family bathroom  
  - Study plus a small kitchen nook with fridge and stove  
- **Living spaces:**  
  - Large downstairs lounge with TV and indoor braai  
  - Additional built-in braai on the upstairs verandah

### Outdoor Living
Step from the lounge to the well-kept garden for easy entertaining, or head upstairs to enjoy braais with elevated views. With full DSTV, reliable connectivity, and thoughtful comforts throughout, Sea Perfection makes coastal downtime effortless.`,

"sunset-terrace": `---
title: "Sunset Terrace"
slug: "sunset-terrace"
area: "Onrus"
address: "29 Beyers Street, Onrus River"
sleeps: 6
beds: 3
baths: 2
one_liner: "Spacious 'Old Onrus' family home with roof deck, enclosed braai room, and easy walk to cliff path, Davies Pool, and beach. Can be booked together with Seaclusion next door (27 Beyers) to sleep up to 16."
hero: "/homes/sunset-terrace/29 Beyers Street Onrus (1 of 24).JPG"
gallery:
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (17 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (4 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (7 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (12 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (9 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (14 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (5 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (6 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (10 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (16 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (13 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (11 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (8 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (15 of 24).JPG"
amenities:
  - Uncapped Wi-Fi
  - DSTV & Netflix
  - 3 x TVs
  - Inverter for TV & some lights
  - Rechargeable lights & torches (load shedding)
  - Dishwasher
  - Washing machine
  - Microwave
  - Coffee machine
  - Fridge
  - Deepfreeze
  - Indoor braai (enclosed upstairs braai room)
  - Fireplace
  - Roof deck with views
  - Good security
  - Safe parking
  - Double garage
rates_md: |
  **Peak**
  R4400 p/n (Minimum 10 nights)

  **Shoulder**
  R2900 p/n (Minimum 2 nights)

  **Off season**
  R2500 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Not Allowed
  **Notes:** Shares the same entrance gate with **Seaclusion** at 27 Beyers Street and the properties are alongside one another. These two homes can be let together to accommodate **up to 16 guests**. Garden fully enclosed with lawn for children.
  **Baby cot:** Available on request at R100 per stay
---

## Description
Set in the heart of Old Onrus, Sunset Terrace puts you two roads from the coastline, cliff path, and Davies Pool, and a brisk 15-minute walk from the main beach and lagoon. The home has three bedrooms: an upstairs main en-suite, plus two downstairs bedrooms (one double, one with two singles) sharing a shower and toilet. The open-plan, well-equipped kitchen includes a washing machine and dishwasher.

An enclosed upstairs braai room is a winner on windy days, while the roof deck serves up mountain and sea views for sunset hour. Outside, the fully enclosed garden offers safe play space for kids, and a double garage keeps parking simple. With Wi-Fi, DSTV & Netflix, and an inverter for TV and essential lights, this is an easy, comfortable base for a family beach break.

**Travelling as a larger group?** Sunset Terrace sits alongside its sister property, **Seaclusion** at 27 Beyers Street, and they share the same entrance gate. Book them together to sleep up to 16 across both homes.
`,

"seaclusion": `---
title: "Seaclusion"
slug: "seaclusion"
area: "Onrus"
address: "27 Beyers Street, Onrus River"
sleeps: 10
beds: 4
baths: 3
one_liner: "Comfortable Onrus family home with patio braai and upstairs deck with ocean views, an easy walk to the beach. Can be booked together with Sunset Terrace next door (29 Beyers) to sleep up to 16."
hero: "/homes/seaclusion/27-beyers-grey-exterior.jpg"
gallery:
  - "/homes/seaclusion/Beyers Street Low Res-4.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-10.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-16.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-20.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-6.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-3.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-15.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-22.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-7.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-18.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-19.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-26.jpg"
  - "/homes/seaclusion/Beyers Street Low Res-2.jpg"
amenities:
  - Uncapped Wi-Fi
  - Netflix
  - TV with DVD selection
  - Fans
  - Dishwasher
  - Washing machine
  - Tumble dryer
  - Microwave
  - Fridge
  - Freezer
  - Built-in braai (patio)
  - Roof deck with ocean views
  - Good security
  - Safe parking
  - Double garage
rates_md: |
  Peak
  R5300 p/n for 6 (R400 p/p up to 10) (Minimum 10 nights)

  Shoulder
  R3200 p/n for 6 (R400 p/p up to 10) (Minimum 2 nights)

  Off season
  R2900 p/n for 6 (R400 p/p up to 10) (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
  Notes: Shares the same entrance gate with Sunset Terrace at 29 Beyers Street and the properties are alongside one another. These two homes can be let together to accommodate up to 16 guests. Booked 20 December – 2 January 2026.
  Baby cot: Available on request at R100 per stay
---

## Description
Set in Onrus, Seaclusion puts you within an easy walk of the beach and a short drive to Hermanus town centre, award-winning wine routes, fynbos reserves, great restaurants, a world-class golf course, and the Whale Coast Mall. It’s a relaxed, well-equipped base for family holidays.

The home has four bedrooms: downstairs, a large family room with 1 double + 2 singles and an en-suite (shower), plus two additional double bedrooms served by a separate shower bathroom. Upstairs, the main bedroom (queen) features an en-suite with bath and shower. The open-plan kitchen and lounge flow onto a patio with a built-in braai for long summer evenings.

Head up to the upper-level deck to unwind with ocean views at sunset. Inside, there’s Netflix and a TV with a selection of DVDs for family movie nights (no DSTV). Practical touches—Wi-Fi, dishwasher, washing machine, tumble dryer, double garage, and secure parking—keep seaside living simple.

Travelling as a larger group? Seaclusion sits alongside its sister property, Sunset Terrace at 29 Beyers Street, and they share the same entrance gate. Book them together to sleep up to 16 across both homes.
`,

"island-time": `---
title: "Island Time"
slug: "island-time"
area: "Onrus"
address: "9 Protea Street, Onrus River"
sleeps: 10
beds: 4
baths: 2
one_liner: "Relaxed Onrus family home with open-plan living, furnished patio, enclosed garden, and Weber/pit braai—ideal for easy family entertaining."
hero: "/homes/island-time/9 Protea Road, Onrus-2.jpg"
gallery:
  - "/homes/island-time/9 Protea Road, Onrus-1.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-10.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-14_1.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-16.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-19.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-21.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-25.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-26.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-12.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-18.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-20.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-22.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-27.jpg"
  - "/homes/island-time/9 Protea Road, Onrus-28.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV
  - Streaming apps
  - DSTV (on request)
  - Dishwasher
  - Washing machine
  - Tumble dryer
  - Microwave
  - Fridge
  - Freezer
  - Portable/Weber braai
  - Pit braai
  - Enclosed garden
  - Fireplace
  - Rechargeable lights (load shedding)
  - Excellent security
  - Street parking (ample)
rates_md: |
  **Peak**
  R5000 p/n (Minimum 10 nights)

  **Shoulder**
  R4300 p/n (Minimum 2 nights)

  **Off season**
  R3500 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Not Allowed
  **Notes:** DSTV available on request. Enclosed garden and ample street parking in front of the house.
  **Baby cot:** Available on request at R100 per stay
---

## Description
Set in Onrus, Island Time is made for fuss-free family holidays. An open-plan lounge and dining room create an easy, social hub, while a well-equipped kitchen with all the mod-cons keeps meal prep simple. Slide outside to a furnished patio and enclosed garden—perfect for braais and long, lazy afternoons.

The home sleeps up to 10 across four rooms: three bedrooms + an extra room off the lounge with a single bed. Bed configuration is 1 king, 1 queen, and 6 singles. There are 2 bathrooms.

For downtime, enjoy a Smart TV with streaming, and DSTV on request. Practical touches—Wi-Fi, dishwasher, washing machine, tumble dryer, microwave, fridge/freezer, and rechargeable lights for load shedding—make seaside living effortless. Outside you’ll find both a Weber/portable braai and a pit braai, plus ample street parking. This is an easygoing base to gather, relax, and make holiday memories.
`,

 "whispering-waves": `---
title: "Whispering Waves"
slug: "whispering-waves"
area: "Onrus"
address: "25 Arum Street, Onrus River"
sleeps: 8
beds: 4
baths: 3
one_liner: "Peninsula-positioned family home overlooking Haardebaai, a 3-minute walk to Onrus beach and lagoon, with indoor braai and garden firepit."
hero: "/homes/whispering-waves/02_25_arum.jpg"
gallery:
  - "/homes/whispering-waves/01_25_arum.jpg"
  - "/homes/whispering-waves/03_25_arum.jpg"
  - "/homes/whispering-waves/04_25_arum.jpg"
  - "/homes/whispering-waves/08_25_arum.jpg"
  - "/homes/whispering-waves/07_25_arum.jpg"
  - "/homes/whispering-waves/05_25_arum.jpg"
  - "/homes/whispering-waves/10_25_arum.jpg"
  - "/homes/whispering-waves/12_25_arum.jpg"
  - "/homes/whispering-waves/13_25_arum.jpg"
  - "/homes/whispering-waves/19_25_arum.jpg"
  - "/homes/whispering-waves/18_25_arum.jpg"
  - "/homes/whispering-waves/17_25_arum.jpg"
  - "/homes/whispering-waves/15_25_arum.jpg"
  - "/homes/whispering-waves/20_25_arum.jpg"
  - "/homes/whispering-waves/27_25_arum.jpg"
  - "/homes/whispering-waves/26_25_arum.jpg"
  - "/homes/whispering-waves/25_25_arum.jpg"
  - "/homes/whispering-waves/24_25_arum.jpg"
amenities:
  - Uncapped Wi-Fi
  - Inverter
  - Smart TV with decoder and Netflix
  - Washing machine
  - Dishwasher
  - Tumble dryer
  - Microwave
  - Air fryer
  - Heaters
  - Hairdryer
  - Coffee plunger
  - Oven and hob
  - Fridge/freezer
  - Separate freezer
  - Indoor braai
  - Outside firepit
  - Alarm system
  - Off-street parking
rates_md: |
  Peak
  R7700 p/n (Minimum 10 nights)

  Shoulder
  R3800 p/n (Minimum 2 nights)

  Low
  R3500 p/n (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
  Baby cot: Available on request at R100 per stay
---

## Description
Whispering Waves sits on the sought-after Peninsula above Haardebaai, about a three-minute walk to Onrus Beach and the lagoon. Sunsets from the upstairs balcony are unforgettable.

The home has four double bedrooms: one upstairs with a full en-suite bathroom, and three downstairs. Two additional bathrooms downstairs serve the lower rooms (one with bath and toilet, the other with shower and toilet). The kitchen is well equipped for easy holiday cooking.

An indoor braai complements the outdoor firepit for long garden braais. The house is fully alarmed and there is plenty of parking, making this a relaxed, practical base for families.`,

 "holiday-vibe": `---
title: "Holiday Vibe"
slug: "holiday-vibe"
area: "Onrus"
address: "28 Duke Street, Onrus River"
sleeps: 6
beds: 3
baths: 2
one_liner: "Comfortable 3-bedroom home with sunny garden and braai area, an easy walk to tidal pools, beach, and lagoon."
hero: "/homes/holiday-vibe/IMG-20241203-WA0011.jpg"
gallery:
  - "/homes/holiday-vibe/IMG-20241203-WA0022.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0019.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0024.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0016.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0029_1.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0020.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0027.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0013.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0028.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0021.jpg"
  - "/homes/holiday-vibe/IMG-20241203-WA0018.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV for streaming (Netflix)
  - Washing machine
  - Dishwasher
  - Tumble dryer
  - Microwave
  - Fridge/freezer
  - Air fryer
  - Coffee machine
  - Oven and hob
  - Fans
  - Hairdryer
  - Braai facilities
  - Security system
rates_md: |
  **Peak**
  R4000 p/n (Minimum stay 10 nights)

  **Shoulder**
  R3500 p/n (Minimum stay 2 nights)

  **Off season**
  R3100 p/n (Minimum stay 2 nights)
policies_md: |
  **Pets:** Allowed by request
  **Baby cot:** Available on request at R100 per stay
---

## Description
Holiday Vibe is a comfortable, well-situated three-bedroom home within walking distance of the popular Onrus tidal pools, beach, and lagoon. The main bedroom features a full en-suite bathroom, while the other two bedrooms share a full family bathroom. The kitchen is well equipped, and the sunny garden includes inviting braai facilities for long, relaxed afternoons. Fully alarmed and easy-living throughout, it’s a great base for a carefree coastal break.`,

  "flow": `---
title: "Flow"
slug: "flow"
area: "Onrus"
address: "87 Viljoen Street, Onrus River"
sleeps: 4
beds: 2
baths: 3
one_liner: "Modern 2-bedroom, 3-bath home near beach and tidal pools, with sunny garden, braai room, and all the mod-cons."
hero: "/homes/flow/pro-15.jpg"
gallery:
  - "/homes/flow/pro-18.jpg"
  - "/homes/flow/pro-06.jpg"
  - "/homes/flow/pro-05.jpg"
  - "/homes/flow/pro-13.jpg"
  - "/homes/flow/pro-17.jpg"
  - "/homes/flow/pro-14.jpg"
  - "/homes/flow/pro-16.jpg"
  - "/homes/flow/pro-08.jpg"
  - "/homes/flow/pro-07.jpg"
  - "/homes/flow/pro-09.jpg"
  - "/homes/flow/pro-24.jpg"
  - "/homes/flow/pro-23.jpg"
  - "/homes/flow/pro-21.jpg"
  - "/homes/flow/pro-22.jpg"
  - "/homes/flow/pro-19.jpg"
  - "/homes/flow/pro-25.jpg"
  - "/homes/flow/pro-20.jpg"
  - "/homes/flow/pro-12.jpg"
  - "/homes/flow/pro-11.jpg"
  - "/homes/flow/pro-10.jpg"
  - "/homes/flow/pro-03.jpg"
  - "/homes/flow/pro-04.jpg"
  - "/homes/flow/pro-01.jpg"
  - "/homes/flow/pro-02.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV for streaming (Netflix)
  - Washing machine
  - Tumble dryer
  - Dishwasher
  - Microwave
  - Fridge/freezer
  - Icemaker
  - Airfryer
  - Coffee machine
  - Oven and hob
  - Fans
  - Ceiling fans
  - Hairdryer
  - Double garage
  - Security system
  - Braai room (indoor)
  - Garden braai area
rates_md: |
  Peak
  R3700 p/n (Minimum 10 nights over Dec/Jan)

  Easter Special
  R3100 p/n (3-night stay)

  Shoulder
  R3500 p/n (Minimum 2 nights)

  Low
  R2700 p/n (Minimum 2 nights)
policies_md: |
  Pets: Allowed by arrangement
  Baby cot: Available on request at R100 per stay
---

## Description
Flow is a delightful two-bedroom, three-bathroom home in popular Onrus River — an easy walk to the beach and tidal pools. It’s modern, comfortable, and perfectly set up for a relaxing holiday: braai in the well-maintained garden on warm days, and retreat to the cosy braai room when it’s cooler.

The open-plan living, dining, and well-equipped kitchen make family time effortless, while thoughtful touches (streaming-ready Smart TV, fast Wi-Fi, and loads of practical appliances) keep everything convenient. A superb base to enjoy the sea air and unwind.
`,

  "beachcombers-rest": `---
title: "Beachcomber's Rest"
slug: "beachcombers-rest"
area: "Onrus"
address: "3 Green Street, Onrus River"
sleeps: 8
beds: 4
baths: 3
one_liner: "Peninsula-positioned family home that sleeps up to 8, a short walk to Onrus beach & lagoon, with great entertaining spaces."
hero: "/homes/beachcombers-rest/3 Green Street Onrus-1.jpg"
gallery:
  - "/homes/beachcombers-rest/3 Green street (Updated)-3.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-9.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-5.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-2.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-9.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-19.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-13.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-22.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-28.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-34.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-41.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-43.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-47.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-1.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-4.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-8.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-4.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-7.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-10.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-17.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-25.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-40.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-42.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-44.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-2.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-10.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-3.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-8.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-11.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-20.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-12.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-21.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-26.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-35.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-30.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-46.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV for streaming
  - Dishwasher
  - Washing machine
  - Microwave
  - Fridge
  - Freezer
  - Coffee machine
  - Braai facilities
  - Full solar system
  - Excellent security
  - Air conditioning (main bedroom and two upstairs bedrooms)
rates_md: |
  Peak
  R7000 p/n (Minimum 10 nights)

  Shoulder
  R4000 p/n (Minimum 2 nights)

  Low
  R3200 p/n (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
  Baby cot: Available on request at R100 per stay
---

## Description
Beachcomber’s Rest is a cheerful family home on the beloved Peninsula, just minutes from the beach and lagoon and a short stroll to local cafés and eateries. Freshly decorated and thoughtfully equipped, it’s designed for easy coastal living and comfortably hosts up to 8 guests.

### Accommodation Details

- **Main bedroom (downstairs):** Queen bed, en suite with shower and toilet
- **Second bedroom (downstairs):** Double bed, shares the family bathroom (bath with shower over, and toilet)
- **Two bedrooms upstairs:** One with a double bed, one with two single beds, sharing a bathroom with shower and toilet
- **Sleeps 8 guests** across four bedrooms and three bathrooms`,

  "seabreeze": `---
title: "Seabreeze"
slug: "seabreeze"
area: "Onrus"
address: "17 Protea Street, Onrus River"
sleeps: 6
beds: 3
baths: 2
one_liner: "Island-positioned family home a stone’s throw from Onrus beach and lagoon, with an indoor braai room and cosy fireplace."
hero: "/homes/seabreeze/17 Protea Street Onrus (2 of 37).JPG"
gallery:
  - "/homes/seabreeze/17 Protea Street Onrus (1 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (3 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (4 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (9 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (13 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (14 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (19 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (17 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (21 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (27 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (30 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (31 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (33 of 37).JPG"
  - "/homes/seabreeze/17 Protea Street Onrus (36 of 37).JPG"
amenities:
  - Uncapped Wi-Fi
  - Smart TV for streaming
  - Washing machine
  - Dishwasher
  - Microwave
  - Stove/oven
  - Fridge
  - Freezer
  - Fans
  - Hairdryer
  - Indoor fireplace
  - Indoor braai room
  - Inverter
  - Security alarm
rates_md: |
  Peak
  R6000 p/n (Minimum 10 nights)

  Shoulder
  R3900 p/n (Minimum 2 nights)

  Off season
  R3000 p/n (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
  Baby cot: Available on request at R100 per stay
---

## Description
Seabreeze is beautifully situated on the Island in Onrus River — just moments from the popular beach and lagoon. The home has three double bedrooms (each with a double bed). The main bedroom includes an en-suite bathroom, with a second bathroom serving the other two rooms.

A west-facing indoor braai room with a large dining table makes the perfect meeting place after a day at the beach. The kitchen is well equipped with all the modern conveniences, and the lounge includes a cosy indoor fireplace. Come spend a glorious holiday at Seabreeze and recharge in the fresh sea air and peaceful surroundings of Onrus River.
`,

  "Silencio": `---
title: "Silencio"
slug: "Silencio"
area: "Onrus"
address: "62 Dempers Street, Onrus River"
sleeps: 9
beds: 4
baths: 3
one_liner: "Stylish and peaceful holiday home just walking distance to Onrus beach, lagoon and cliff path — perfect for families and groups."
hero: "/homes/Silencio/62 Dempers Street, Onrus-8.jpg"
gallery:
- "/homes/Silencio/62 Dempers Street, Onrus-1.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-2.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-3.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-4.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-5.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-6.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-7.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-9.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-10.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-11.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-12.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-13.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-14.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-15.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-16.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-17.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-18.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-19.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-20.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-21.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-22.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-23.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-24.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-25.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-26.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-27.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-28.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-29.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-30.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-31.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-32.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-33.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-34.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-35.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-36.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-37.jpg"
- "/homes/Silencio/62 Dempers Street, Onrus-38.jpg"

amenities:
  - Fully equipped kitchen
  - Uncapped Wi-Fi
  - Free parking
  - TV
  - Washing machine
  - Outdoor seating and garden
  - Family-friendly layout
  - Quiet neighbourhood
rates_md: |
  Peak season
  R5200 p/n for up to 6 guests
  +R400 p/p p/n for guests 7–9

  Shoulder season
  R3000 p/n for up to 6 guests
  +R400 p/p p/n for guests 7–9

  Low season
  R2700 p/n for up to 6 guests
  +R400 p/p p/n for guests 7–9

policies_md: |
  Pets: Not allowed
  Baby cot: Available on request at R100 per stay
---
  
## Description
This Quiet Onrus River Retreat is a lovely holiday home perfectly positioned just a short walk from the popular Onrus beach, lagoon, tidal pools and scenic cliff path — ideal for guests who want both convenience and tranquillity.

The residence offers four bedrooms and three bathrooms, comfortably accommodating up to 9 guests. The stylishly furnished living spaces include an open plan lounge, dining area and well-equipped kitchen for easy self-catering. The lounge opens out to a peaceful garden and seating areas where you can relax after a day exploring the coast.

With comfortable communal spaces, good connectivity, free parking and a superb location near local eateries and seaside attractions, this home is a great choice for family holidays and group getaways.
`,

"rosemarys-cottage": `---
title: "Rosemary’s Cottage"
slug: "rosemarys-cottage"
area: "Hermanus"
address: "7 Fisherman's Way, Lagoon Edge, Hermanus"
sleeps: 6
beds: 3
baths: 2
one_liner: "Charming lakeside family home in a peaceful residential setting with natural beauty and easy coastal lifestyle."
hero: "/homes/Rosemarys-cottage/7.jpeg"
gallery:
  - "/homes/Rosemarys-cottage/3.jpeg"
  - "/homes/Rosemarys-cottage/9.jpeg"
  - "/homes/Rosemarys-cottage/11.jpeg"
  - "/homes/Rosemarys-cottage/12.jpeg"
  - "/homes/Rosemarys-cottage/13.jpeg"
  - "/homes/Rosemarys-cottage/14.jpeg"
  - "/homes/Rosemarys-cottage/18.jpeg"
  - "/homes/Rosemarys-cottage/19.jpeg"
  - "/homes/Rosemarys-cottage/21.jpeg"
  - "/homes/Rosemarys-cottage/22.jpeg"
  - "/homes/Rosemarys-cottage/24.jpeg"
  - "/homes/Rosemarys-cottage/26.jpeg"
  - "/homes/Rosemarys-cottage/29.jpeg"
  - "/homes/Rosemarys-cottage/31.jpeg"
  - "/homes/Rosemarys-cottage/34.jpeg"
  - "/homes/Rosemarys-cottage/38.jpeg"
  - "/homes/Rosemarys-cottage/39.jpeg"
  - "/homes/Rosemarys-cottage/42.jpeg"
amenities:
  - Fully equipped kitchen
  - Wi-Fi
  - Free parking on premises
  - HDTV
  - Peaceful seaside setting
  - Outdoor space
rates_md: |
  Peak season
  R3800 p/n (Minimum 10 nights)

  Shoulder season
  R3300 p/n (Minimum 2 nights)

  Off season
  R2700 p/n (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
  Baby cot: Available on request at R100 per stay
---

## Description
Rosemary’s Cottage is a delightful coastal home set in a peaceful seaside residential area in the Overstrand region, ideal for families or anyone seeking tranquility by the sea. The property comfortably sleeps up to 6 guests across three bedrooms and two bathrooms, offering a relaxed layout and easy access to local recreation.

The cottage features a well-equipped kitchen, Wi-Fi, HDTV, and free parking on the premises. Outdoor spaces and gentle ocean breezes contribute to the relaxed atmosphere, while nearby facilities offer opportunities for swimming, sailing, tennis, and other outdoor pursuits within a gated and secure setting.

Perfect for a restful seaside getaway, Rosemary’s Cottage combines coastal charm with comfort and convenience for memorable holidays.`,

  "out-of-africa-sandbaai": `---
title: "Out of Africa, Sandbaai"
slug: "out-of-africa-sandbaai"
area: "Sandbaai"
address: "31 De Villiers Street, Sandbaai"
sleeps: 6
beds: 3
baths: 3
one_liner: "Comfortable family home walking distance to Sandbaai beach, with covered braai patio and a well-equipped open-plan living area."
hero: "/homes/out-of-africa-sandbaai/hero.jpeg"
gallery:
  - "/homes/out-of-africa-sandbaai/back garden wth hammock.JPG"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0011.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0017.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0019.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0021.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0026.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0029.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0032.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0009.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0014.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0020.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0027.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0028.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0031.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0012.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0016.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0018.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0022.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0023.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0030.jpg"
  - "/homes/out-of-africa-sandbaai/IMG-20250609-WA0036.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV
  - DVD player with DVDs
  - Washing machine
  - Tumble dryer
  - Microwave
  - Fridge
  - Freezer
  - Dishwasher
  - Fans
  - Weber braai (covered patio)
  - Rechargeable light bulbs, candles, gas cylinder
rates_md: |
  Peak
  R3000 p/n (Minimum 10 nights)

  Shoulder
  R2100 p/n

  Off season
  R1800 p/n
policies_md: |
  Pets: Not Allowed
  Baby cot: Available on request at R100 per stay
---

## Description
Out of Africa, Sandbaai pairs a great location with easy comfort. Set an easy walk from the beach — and a quick drive to Hermanus, the Whale Coast Mall, and Onrus — it’s ideal for relaxed coastal breaks.

Inside, an inviting entrance hall leads to a large open-plan lounge, dining room, and very well-equipped kitchen. Doors open to a sheltered back garden with a covered area and Weber braai for effortless outdoor meals.

Accommodation includes three bedrooms: two double rooms with en-suite bathrooms, plus a third bedroom with two single beds and its own separate bathroom. It’s a comfortable, convenient base that ticks all the boxes for a family getaway.
`,

  "la-mer-beachfront": `---
title: "La Mer – Beautiful Beachfront Home"
slug: "la-mer-beachfront"
area: "Sandbaai"
address: "126 Kus Road, Sandbaai"
sleeps: 8
beds: 4
baths: 3
one_liner: "Oceanfront family home on the water’s edge with indoor/outdoor braais, sea-facing patio, and unforgettable sunset views."
hero: "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-33-11.jpg"
gallery:
  - "/homes/la-mer-beachfront/IMG_5184.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-35-09_1.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-35-09_6.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-37-21_6.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-38-42_6.jpg"
  - "/homes/la-mer-beachfront/IMG_5194.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-33-11_2.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-37-21_2.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-37-21_5.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-35-09_2.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-35-09_4.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-37-21.jpg"
  - "/homes/la-mer-beachfront/PHOTO-2023-04-09-18-38-42_4.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV
  - Informal ocean-view pub
  - Fully equipped kitchen
  - 2 ovens
  - Gas hob
  - Hot tray
  - Double-door fridge
  - Stand-alone freezer
  - Dishwasher
  - Washing machine
  - Tumble dryer
  - Indoor braai
  - Outdoor braai
  - Sea-facing patio
  - Outdoor shower
  - Excellent security
  - 3 bathrooms
  - Rechargeable light globes (load shedding)
rates_md: |
  Peak
  R6600 p/n (Minimum 10 days)

  Shoulder
  R4400 p/n (Minimum 2 days)

  Off season
  R3000 p/n (Minimum 2 days)
policies_md: |
  Pets: Not Allowed
  Baby cot: Available on request at R100 per stay
---

## Description
La Mer is a beautifully positioned beachfront home set right on the water’s edge in Sandbaai — the quintessential holidaymaker’s dream. A relaxed, informal pub opens to a spacious dining room and lounge, flowing onto a **sea-facing patio** for sundowners after a day in the sun. The kitchen is fully equipped with modern conveniences, including two ovens and a gas hob.

### Accommodation Details
- Bedrooms: 4 total  
  - Main bedroom with double bed and en-suite bathroom; sliding doors to the patio and glorious ocean views  
  - Three additional bedrooms, each with two single beds, sharing two bathrooms  
- Bathrooms: 3 total

### Indoor–Outdoor Living
Braai year-round with **indoor and outdoor braai** options. An **outdoor shower** keeps sandy feet at bay. With strong security, dependable comforts, and that unbeatable front-row ocean setting, La Mer makes easy, memorable coastal holidays.
`,

  "whale-a-while": `---
title: "Whale-a-While"
slug: "whale-a-while"
area: "Hermanus"
address: "13 Musson Street, Eastcliff, Hermanus"
sleeps: 4
beds: 2
baths: 2
one_liner: "Leafy Eastcliff apartment with private entrance and garden patio, close to town, golf course, and coastal walks."
hero: "/homes/whale-a-while/13 Musson Road Hermanus-5.jpg"
gallery:
  - "/homes/whale-a-while/13 Musson Road Hermanus-7.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-6.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-11.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-12.jpg"
  - "/homes/whale-a-while/13 Musson Road Edit-2_1.jpg"
  - "/homes/whale-a-while/13 Musson Road Edit-1.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-4.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-16.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-13.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-24.jpg"
  - "/homes/whale-a-while/13 Musson Road Edit-3.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-1.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-2.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-14.jpg"
  - "/homes/whale-a-while/13 Musson Road Hermanus-18.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV for streaming
  - Washing machine
  - Dishwasher
  - Microwave
  - Stove (gas hob, electric oven)
  - Coffee machine
  - Coffee plunger
  - Toaster and kettle
  - Electric hand mixer
  - Large air fryer
  - Fridge
  - Freezer
  - Mounted fans in all rooms
  - Portable braai
  - Security alarm
  - Solar panels
  - Private entrance
  - Safe off-street parking
rates_md: |
  Only Available 15 Dec - 15 Jan

  R2700 p/n (minimum stay 10 days)

policies_md: |
  Pets: Not Allowed
  Baby cot: Available on request at R100 per stay
---

## Description
Whale-a-While is a welcoming apartment set alongside the main house at 13 Musson Street, with its own private entrance and safe parking. Tucked into leafy Eastcliff near town and the Hermanus Golf Club, it’s a great fit for holidaymakers and “Swallows” alike.

The open-plan lounge, dining area, and well-equipped kitchen open to a private garden patio. The main bedroom has a queen-size bed with an en-suite shower room, while the second bedroom offers two single beds. A family bathroom includes a bath with shower-over-bath and toilet. All rooms have mounted fans, and the Smart TV is ready for streaming.

A portable braai adds easy outdoor cooking to relaxed evenings at home. Comfortable, convenient, and close to everything, Whale-a-While is an ideal base for exploring Hermanus and its coastal paths.
`,

  "casa-familia": `---
title: "Casa Familia"
slug: "casa-familia"
area: "Hermanus"
address: "152 11th Street, Voelklip, Hermanus"
sleeps: 7
beds: 3
baths: 2
one_liner: "Spacious ground-floor home in Voelklip with ocean views and a private entrance, a four-minute walk from the beach and cliff paths."
hero: "/homes/casa-familia/ext-front.jpg"
gallery:
  - "/homes/casa-familia/ext-dusk.jpg"
  - "/homes/casa-familia/patio-sunset.jpg"
  - "/homes/casa-familia/patio-day.jpg"
  - "/homes/casa-familia/patio-firepit.jpg"
  - "/homes/casa-familia/sea-view.jpg"
  - "/homes/casa-familia/cf-03.jpg"
  - "/homes/casa-familia/cf-01.jpg"
  - "/homes/casa-familia/cf-04.jpg"
  - "/homes/casa-familia/cf-05.jpg"
  - "/homes/casa-familia/cf-15.jpg"
  - "/homes/casa-familia/dining.jpg"
  - "/homes/casa-familia/kitchen-1.jpg"
  - "/homes/casa-familia/kitchen-2.jpg"
  - "/homes/casa-familia/cf-07.jpg"
  - "/homes/casa-familia/cf-06.jpg"
  - "/homes/casa-familia/cf-10.jpg"
  - "/homes/casa-familia/cf-11.jpg"
  - "/homes/casa-familia/cf-08.jpg"
  - "/homes/casa-familia/cf-14.jpg"
  - "/homes/casa-familia/bathroom-1.jpg"
  - "/homes/casa-familia/bathroom-2.jpg"
  - "/homes/casa-familia/cf-27.jpg"
  - "/homes/casa-familia/cf-23.jpg"
  - "/homes/casa-familia/cf-25.jpg"
  - "/homes/casa-familia/cf-22.jpg"
  - "/homes/casa-familia/cf-24.jpg"
amenities:
  - Ocean and mountain views
  - Private entrance
  - Front patio with braai facing the sea
  - Outdoor gas fire pit
  - Sun terrace and large lawned garden
  - Outdoor dining for eight
  - Uncapped fibre Wi-Fi
  - Fully equipped kitchen
  - Gas hob and extractor
  - Breakfast bar
  - Indoor dining table seating eight
  - TV
  - Family friendly, with toys and books for children
  - Ample parking on the property
  - Non-smoking
rates_md: |
  **Rates on request**

  Contact us for a quote and availability.
policies_md: |
  Pets: Please enquire

  Baby cot: Available on request at R100 per stay
---

## Description
Casa Familia is a spacious ground-floor home in Voelklip, one of the most sought-after corners of Hermanus. It has its own private entrance and a front patio with a braai looking out to the ocean, and the beach and cliff paths are a four-minute walk away.

The living room, dining room and kitchen run together in one bright, open space, decorated with a homely touch and set up properly for self-catering. The kitchen has a gas hob, an extractor and a breakfast bar, and the dining table seats eight. Uncapped fibre Wi-Fi runs throughout.

Outside, the paved terrace runs the width of the house with a braai, a gas fire pit and dining for eight, looking over the lawn to the sea. The mountains sit behind the house, so you get both from the same spot.

### Accommodation Details

- **Main bedroom:** Large double bed
- **Second bedroom:** Double bed and a single bed
- **Third bedroom:** Double bed
- **Sleeps 7 guests** across three bedrooms and two bathrooms

### The Neighbourhood

Voelklip beach is a short walk over, with Blue Flag Grotto Beach also close by. There are two restaurants within walking distance, and the long beach walkway gives you mountain views in one direction and the bay in the other. It is an easy, quiet base for families, with Fernkloof Nature Reserve and the Hermanus cliff path both a few minutes away.`,

  "koel-af": `---
title: "Koel-af"
slug: "koel-af"
area: "Hermanus"
address: "Voelklip, Hermanus"
sleeps: 7
beds: 3
baths: 2
one_liner: "Relaxed three-bedroom family home in sought-after Voelklip, with indoor and outdoor braai areas and the mountain right behind you."
hero: "/homes/koel-af/extra-04.jpg"
gallery:
  - "/homes/koel-af/extra-01.jpg"
  - "/homes/koel-af/living-1.jpg"
  - "/homes/koel-af/living-2.jpg"
  - "/homes/koel-af/extra-02.jpg"
  - "/homes/koel-af/kitchen-1.jpg"
  - "/homes/koel-af/kitchen-2.jpg"
  - "/homes/koel-af/dining-1.jpg"
  - "/homes/koel-af/extra-12.jpg"
  - "/homes/koel-af/extra-07.jpg"
  - "/homes/koel-af/extra-11.jpg"
  - "/homes/koel-af/extra-06.jpg"
  - "/homes/koel-af/deck-1.jpg"
  - "/homes/koel-af/ext-3.jpg"
  - "/homes/koel-af/ext-1.jpg"
  - "/homes/koel-af/ext-2.jpg"
  - "/homes/koel-af/bed1-1.jpg"
  - "/homes/koel-af/bed1-2.jpg"
  - "/homes/koel-af/extra-03.jpg"
  - "/homes/koel-af/bed2-1.jpg"
  - "/homes/koel-af/bed2-2.jpg"
  - "/homes/koel-af/extra-09.jpg"
  - "/homes/koel-af/bed3-1.jpg"
  - "/homes/koel-af/extra-08.jpg"
  - "/homes/koel-af/bath-1.jpg"
  - "/homes/koel-af/bath-2.jpg"
  - "/homes/koel-af/bath-3.jpg"
  - "/homes/koel-af/extra-05.jpg"
  - "/homes/koel-af/extra-10.jpg"
amenities:
  - Wi-Fi
  - TV
  - Washing machine
  - Dishwasher
  - Fridge/freezer
  - Oven and hob
  - Microwave
  - Kettle
  - Coffee machine
  - Toaster
  - Dishes and cutlery
  - Wine glasses
  - Indoor fireplace
  - Indoor braai room
  - Outdoor braai
  - Braai utensils
  - Outdoor dining area
  - Outdoor furniture
  - Private garden
  - Bath
  - Hairdryer
  - Bed linen
  - Towels
  - Iron
  - Drying rack
  - Ceiling fan
  - Portable fans
  - Board games
  - Books and reading material
  - Private entrance
rates_md: |
  **Peak**
  R4000 p/n (15 December to 15 January)

  **Shoulder**
  R3000 p/n (16 January to 30 April, and 1 September to 14 December)

  **Low**
  R2200 p/n (1 May to 31 August)
policies_md: |
  Pets: Not allowed

  Smoking: Not allowed

  Maximum guests: 7

  Baby cot: Available on request at R100 per stay

  Flatlet on the property: The lower level is a separate flatlet with a permanent tenant
---

## Description
Koel-af is a comfortable, inviting three-bedroom home in the sought-after area of Voelklip, Hermanus. It is a relaxed and welcoming space for families or friends after a proper seaside break, with the mountain rising directly behind the house and the beach a short walk away.

**Please note:** The lower level of the house is a separate flatlet that is permanently occupied by a long-term tenant. The holiday accommodation is the upper level. We mention this up front so that it is not a surprise when you arrive.

The home has indoor and outdoor braai facilities, so you can eat outside on a warm evening or move into the braai room when the weather turns. Either way you are set up for long, unhurried meals with the people you came with.

### Accommodation Details

- **Bedroom 1:** King bed, en-suite bathroom
- **Bedroom 2:** Double bed and a single bed
- **Bedroom 3:** Two single beds
- **Sleeps 7 guests** across three bedrooms
- **2 bathrooms:** Main en-suite plus a family bathroom

### Indoor and Outdoor Living

The lounge has a fireplace for cooler evenings, and a second sitting area gives everyone somewhere to spread out. The kitchen is well equipped for self-catering, with a dishwasher, oven and hob, and a dining table for the whole group. Outside, a covered braai area and a raised deck with a picnic table look straight up at the mountain.

### The Neighbourhood

Voelklip is one of the quietest and most established parts of Hermanus. Voelklip beach and Grotto Beach are both close, the cliff path and Fernkloof Nature Reserve are a few minutes away, and the village restaurants are an easy drive.`,

}

export async function getPropertySlugs(): Promise<string[]> {
  return Object.keys(STATIC_PROPERTIES)
}

export async function getAllProperties(): Promise<Property[]> {
  try {
    const slugs = await getPropertySlugs()
    const props = await Promise.all(
      slugs.map(async (slug) => {
        try {
          return await getPropertyBySlug(slug)
        } catch (error) {
          console.warn(`Failed to load property: ${slug}`, error)
          return null
        }
      }),
    )

    // Filter out failed loads and sort
    const validProps = props.filter((p): p is Property => p !== null)
    return validProps.sort((a, b) => {
      if (a.area !== b.area) return a.area.localeCompare(b.area)
      return a.title.localeCompare(b.title)
    })
  } catch (error) {
    console.warn("Failed to load properties:", error)
    return []
  }
}

export async function getPropertyBySlug(slug: string): Promise<Property> {
  try {
    const markdownContent = STATIC_PROPERTIES[slug]
    if (!markdownContent) {
      throw new Error(`Property not found: ${slug}`)
    }

    const { data, content } = matter(markdownContent)

    return {
      ...(data as Omit<Property, "body">),
      body: content || "",
    }
  } catch (error) {
    console.error(`Failed to load property ${slug}:`, error)
    throw new Error(`Property not found: ${slug}`)
  }
}

export async function getPropertiesByArea(area: string): Promise<Property[]> {
  try {
    const allProperties = await getAllProperties()
    return allProperties.filter((p) => p.area.toLowerCase() === area.toLowerCase())
  } catch (error) {
    console.warn(`Failed to load properties for area ${area}:`, error)
    return []
  }
}

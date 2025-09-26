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
  - "/homes/tranquility/12.jpeg"
  - "/homes/tranquility/13.jpeg"
  - "/homes/tranquility/14.jpeg"
  - "/homes/tranquility/15.jpeg"
  - "/homes/tranquility/16.jpeg"
  - "/homes/tranquility/17.jpeg"
  - "/homes/tranquility/18.jpeg"
  - "/homes/tranquility/19.jpeg"
  - "/homes/tranquility/20.jpeg"
  - "/homes/tranquility/9.jpeg"
amenities:
  - Dishwasher
  - Washing machine
  - Tumble Drier
  - Fridge/Freezer x 2
  - Good security
  - Rechargeable lights for loadshedding
  - Gas hob, electric oven
  - Smart TV
  - Netflix
  - DSTV optional (R35 per day)
  - Wi-Fi
  - Lots of games
  - Huge fireplace
  - Outside firepit
  - Inverter for TV during load shedding
  - Outside shower with hot water
rates_md: |
  **High season**  
  R5000 p/n (Minimum 10 nights over Dec/Jan)

  **Shoulder**  
  R4000 p/n (min 2 nights)

  **Low**  
  R2975 p/n (min 2 nights)

policies_md: |
  **Pets:** Not Allowed 
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

  "27-krintang-crescent": `---
title: "27 Krintang Crescent"
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
  R4300 p/n (Minimum 10 nights)
policies_md: |
  **Pets:** Not Allowed
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
  R7000 p/n (Minimum 10 nights)

  Shoulder season
  R4200 p/n (Minimum 2 nights)

  Low season
  R3200 p/n (Minimum 2 nights)
policies_md: |
  Pets: By special arrangement
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
  - "/homes/rustica/IMG-20210902-WA0008.jpg"
  - "/homes/rustica/IMG-20210902-WA0011.jpg"
  - "/homes/rustica/IMG-20210902-WA0007.jpg"
  - "/homes/rustica/IMG-20210902-WA0012.jpg"
  - "/homes/rustica/IMG-20210902-WA0006.jpg"
  - "/homes/rustica/IMG-20210902-WA0015.jpg"
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
  R3600 (Minimum 10 days)

  **Shoulder**  
  R3000 (Minimum 2 nights)

  **Off Season**  
  R2500 (Minimum 2 nights)
policies_md: |
  **Pets:** Allowed  
  **Smoking:** No smoking indoors  
  **TV:** No TV on site
---

## Description
Rustica is a relaxed, rustic home in Onrus — just a ten-minute walk to the beach — and a great base for families wanting a simple coastal break.

### Accommodation Details
- **Bedrooms:** 2 rooms, each with a double bed and a bunk 
- **Extra sleeping:** Sleeper couch in lounge with slide-out single (house can sleep up to 10 if needed)  
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
  R4750 p/n for up to 6 guests (Minimum 10 nights)
  +R400 p/p p/n for guests 7–8

  1 Dec – 14 Dec
  R3500 p/n for up to 6 guests
  +R400 p/p p/n for guests 7–8

  Shoulder season
  R2900 p/n for up to 6 guests (Minimum 2 nights)
  +R400 p/p p/n for guests 7–8

  Off season
  R2650 p/n for up to 6 guests (Minimum 2 nights)
  +R400 p/p p/n for guests 7–8
  
policies_md: |
  **Pets:** Not Allowed
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
hero: "/homes/pelicans-nest/16 Pelican Onrus (1 of 50).JPG"
gallery:
  - "/homes/pelicans-nest/Re-Take Sept 2025.JPG"
  - "/homes/pelicans-nest/Re-Take Sept 2025-3.JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (2 of 50).JPG"
  - "/homes/pelicans-nest/Re-Take Sept 2025-6.JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (8 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (9 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (10 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (15 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (16 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (18 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (22 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (25 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (24 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (36 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (38 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (43 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (49 of 50).JPG"
  - "/homes/pelicans-nest/16 Pelican Onrus (34 of 50).JPG"
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
  - Heated pool with safety net (extra R400 per day)
  - CCTV
  - Solar geyser
rates_md: |
  **Peak season**  
  R4700 p/n (Minimum 10 nights)

  **Shoulder season**  
  R2900 p/n (Minimum 2 nights)

  **Off season**  
  R2650 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Allowed by arrangement
---

## Description
Pelican's Nest is a unique, family-orientated holiday home located in the quiet suburb of Vermont, bordering Onrus. It's the perfect 'home away from home' with excellent security, including a full alarm system and CCTV.

### Accommodation Details
The home sleeps 6 comfortably in three bedrooms:  
- **Main bedroom:** Queen-size bed, en-suite bathroom with bath and shower  
- **Second bedroom:** Queen-size bed  
- **Third bedroom:** Bunk beds and a single bed  
- **Second bathroom:** Spacious with bath and shower  

The modern, vibrant kitchen is fully equipped with fridge, freezer, microwave, dishwasher, Nespresso coffee machine, gas stove, and icemaking machine. A washing machine and tumble dryer are also available.

### Outdoor Living
The large swimming pool, complete with safety net, is the star attraction for sunny days. The pool can be heated on request for stays of 10 days or longer (R400/day). There's plenty of space to entertain outdoors, along with braai facilities.

### Comfort & Warmth
For cooler evenings, the indoor fireplace warms the entire family area, with underfloor heating in the study and both bathrooms, plus heated towel racks for extra comfort.

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
  - Wi-Fi on request
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
  R3750 p/n (Minimum 10 nights)
policies_md: |
  **Pets:** Not Allowed
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
  R3700 p/n (Minimum 10 nights)

  **Shoulder season**  
  R3000 p/n

  **Off season**  
  R2500 p/n
policies_md: |
  **Pets:** Not Allowed
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
  R1900 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Not Allowed
---

## Description
Seacrest Cottage is a neat and tidy holiday home perfectly suited for a small family. Located within walking distance to Blue Flag Grotto Beach and just a little further to Voelklip Beach, this property offers an ideal coastal retreat.

The home features three bedrooms — two with queen-size beds and one with a double bunk — and two bathrooms, one with a shower and toilet, the other with a bath, toilet, and basin. The open-plan kitchen is well equipped, and a cosy fireplace ensures warmth during cooler evenings.

Glass doors open to the outside braai and undercover patio area, set in a private back garden. With its great location and comfortable amenities, Seacrest Cottage is the perfect getaway for a relaxed and memorable holiday.`,

  "a-wave-from-it-all": `---
title: "A Wave From It All"
slug: "a-wave-from-it-all"
area: "Vermont"
address: "37 Duiker Street, Vermont"
sleeps: 10
beds: 4
baths: 4
one_liner: "Rustic cliff-path family home with spectacular ocean views, a sunny deck and braai, plus a dedicated bunk room for kids."
hero: "/homes/a-wave-from-it-all/IMG_20210728_103247_2.jpg"
gallery:
  - "/homes/a-wave-from-it-all/IMG_20210728_103117_1.jpg"
  - "/homes/a-wave-from-it-all/IMG_20210728_103323_2.jpg"
  - "/homes/a-wave-from-it-all/IMG_20210728_103720_2.jpg"
  - "/homes/a-wave-from-it-all/IMG_20210728_103332_2.jpg"
  - "/homes/a-wave-from-it-all/IMG_20210728_103150_2.jpg"
  - "/homes/a-wave-from-it-all/IMG_20210728_103618_2.jpg"
  - "/homes/a-wave-from-it-all/IMG_20210728_103357_2.jpg"
  - "/homes/a-wave-from-it-all/IMG_20210728_103746_1.jpg"
amenities:
  - Off-street parking
  - DSTV (bring your own decoder)
  - Smart TV
  - Wi-Fi
  - Washing machine
  - Dishwasher
  - Coffee machine
  - Microwave
  - Fridge
  - Indoor braai
  - Portable/Outdoor braai
  - 4 bathrooms
  - Security
  - Torches for load shedding
rates_md: |
  **Peak season**  
  R4500 p/n (Minimum 10 nights)

  **Shoulder season**  
  R3000 p/n (Minimum 2 nights)

  **Off season**  
  R2300 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Allowed by arrangement
---

## Description
A Wave From It All is a comfortable, rustic holiday home perfectly positioned on the cliff path in Vermont, offering spectacular ocean views and effortless indoor–outdoor living. It's an ideal base for a relaxed family break away from the hustle and bustle.

### Accommodation Details
- **Bedrooms:** 3 standard bedrooms **plus** a large kids' room with **4 bunk beds**  
- **Bathrooms:** 4 total  
- **Living:** Open-plan kitchen, lounge and dining area flowing to a sea-facing patio and deck

### Cooking & Entertaining
A very workable, well-equipped kitchen serves the dining and lounge areas. Step out to the deck with a portable braai for long summer evenings, or enjoy the **indoor braai** on cooler days.

### Location & Views
Set right on the cliff path, the home overlooks the coastline with sweeping sea views — the perfect spot to unwind, watch the waves, and recharge.`,

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
  - "/homes/sea-perfection/downstairs lounge and indoor braai.jpg"
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
  - "/homes/sea-perfection/image.jpg"
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
  R4200 p/n (Minimum 10 days)

  **15–30 April**  
  Minimum 7 days
policies_md: |
  **Pets:** Not Allowed
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
one_liner: "Spacious 'Old Onrus' family home with roof deck, enclosed braai room, and easy walk to cliff path, Davies Pool, and beach."
hero: "/homes/sunset-terrace/29 Beyers Street Onrus (1 of 24).JPG"
gallery:
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (17 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (4 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (7 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (12 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (9 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (14 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (20 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (23 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (5 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (6 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (10 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (16 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (13 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (19 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (22 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (1 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (11 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (8 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (15 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (18 of 24).JPG"
  - "/homes/sunset-terrace/29 Beyers Street, Onrus (21 of 24).JPG"
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
  R4000 p/n (Minimum 10 nights)

  **Shoulder**  
  R2600 p/n (Minimum 2 nights)

  **Off season**  
  R2300 p/n (Minimum 2 nights)
policies_md: |
  **Pets:** Not Allowed
  **Notes:** Shares an entrance with the neighbouring house (not intrusive). Garden fully enclosed with lawn for children.
---

## Description
Set in the heart of Old Onrus, Sunset Terrace puts you two roads from the coastline, cliff path, and Davies Pool, and a brisk 15-minute walk from the main beach and lagoon. The home has three bedrooms: an upstairs main en-suite, plus two downstairs bedrooms (one double, one with two singles) sharing a shower and toilet. The open-plan, well-equipped kitchen includes a washing machine and dishwasher.

An enclosed upstairs braai room is a winner on windy days, while the roof deck serves up mountain and sea views for sunset hour. Outside, the fully enclosed garden offers safe play space for kids, and a double garage keeps parking simple. With Wi-Fi, DSTV & Netflix, and an inverter for TV and essential lights, this is an easy, comfortable base for a family beach break.
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
  R5000 p/n (Minimum 10 nights)

  Shoulder
  R3500 p/n (Minimum 2 nights)

  Low
  R3250 p/n (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
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
  R3500 p/n (Minimum stay 10 nights)

  **Shoulder**  
  R3000 p/n (Minimum stay 2 nights)

  **Off season**  
  R2800 p/n (Minimum stay 2 nights)
policies_md: |
  **Pets:** Allowed by request
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
hero: "/homes/flow/hero.jpg"
gallery:
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.21_22abbaa9.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.18_ed77c388.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.17_7e9c18d0 (1).jpg"
  - "/homes/flow/IMG-20250312-WA0006.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.38.37_30af129a.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.17_99c0c3e7.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.17_d4951fb2.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.20_cf9a2ac0.jpg"
  - "/homes/flow/IMG-20250312-WA0004.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.22_9b16c9e9.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.20_093a7fe2.jpg"
  - "/homes/flow/WhatsApp Image 2025-03-10 at 13.32.15_861303d5.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV for streaming (Netflix)
  - Washing machine
  - Tumble dryer
  - Dishwasher
  - Microwave
  - Fridge/freezer
  - Icemaker
  - Coffee machine
  - Oven and hob
  - Air fryer
  - Fans
  - Ceiling fans
  - Hairdryer
  - Double garage
  - Security system
  - Braai room (indoor)
  - Garden braai area
rates_md: |
  Peak
  R3400 p/n (Minimum 10 nights over Dec/Jan)

  Easter Special
  R2800 p/n (3-night stay)

  Shoulder
  R3200 p/n (Minimum 2 nights)

  Low
  R2800 p/n (Minimum 2 nights)
policies_md: |
  Pets: Allowed by arrangement
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
sleeps: 15
beds: 6
baths: 4
one_liner: "Large Peninsula-positioned family home that sleeps up to 15, a short walk to Onrus beach & lagoon, with teen rumpus attic and great entertaining spaces."
hero: "/homes/beachcombers-rest/3 Green Street Onrus-1.jpg"
gallery:
  - "/homes/beachcombers-rest/3 Green Street Onrus-1.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-3.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-9.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-5.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-14.jpg"
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
  - "/homes/beachcombers-rest/3 Green street (Updated)-13.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-15.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-4.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-7.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-10.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-17.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-25.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-40.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-33.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-42.jpg"
  - "/homes/beachcombers-rest/3 Green Street Onrus-44.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-2.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-10.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-6.jpg"
  - "/homes/beachcombers-rest/3 Green street (Updated)-11.jpg"
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
  R5000 p/n (Minimum 2 nights)

  Low
  R4100 p/n (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
---

## Description
Beachcomber's Rest is a true family home on the sought-after Peninsu`,

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
  R5600 p/n (Minimum 10 nights)

  Shoulder
  R4500 p/n (Minimum 2 nights)

  Off season
  R4000 p/n (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
---

## Description
Seabreeze is beautifully situated on the Island in Onrus River — just moments from the popular beach and lagoon. The home has three double bedrooms (each with a double bed). The main bedroom includes an en-suite bathroom, with a second bathroom serving the other two rooms.

A west-facing indoor braai room with a large dining table makes the perfect meeting place after a day at the beach. The kitchen is well equipped with all the modern conveniences, and the lounge includes a cosy indoor fireplace. Come spend a glorious holiday at Seabreeze and recharge in the fresh sea air and peaceful surroundings of Onrus River.
`,

  "seaside-escape-studio-onrus": `---
title: "Seaside Escape Studio @ Onrus"
slug: "seaside-escape-studio-onrus"
area: "Onrus"
address: "30 Duke Street, Onrus River"
sleeps: 2
beds: 1
baths: 1
one_liner: "Quiet garden studio near Onrus beach and lagoon with a fully equipped kitchen—ideal for remote work or a coastal break."
hero: "/homes/seaside-escape-studio-onrus/30 Duke Street, Onrus-7_1.jpg"
gallery:
  - "/homes/seaside-escape-studio-onrus/30 Duke Street, Onrus-8.jpg"
  - "/homes/seaside-escape-studio-onrus/30 Duke Street, Onrus-14.jpg"
  - "/homes/seaside-escape-studio-onrus/30 Duke Street, Onrus-11.jpg"
  - "/homes/seaside-escape-studio-onrus/30 Duke Street, Onrus-9.jpg"
  - "/homes/seaside-escape-studio-onrus/30 Duke Street, Onrus-13.jpg"
  - "/homes/seaside-escape-studio-onrus/30 Duke Street, Onrus-10.jpg"
  - "/homes/seaside-escape-studio-onrus/30 Duke Street, Onrus-12.jpg"
amenities:
  - Uncapped Wi-Fi
  - Smart TV (Netflix)
  - DSTV optional (R35 per day)
  - Air fryer
  - Induction plate
  - Dishwasher
  - Washing machine
  - Tumble dryer
  - Microwave
  - Hairdryer
  - Weber braai
  - Fridge/freezer
  - Remote-work friendly setup
rates_md: |
  Price
  R950 p/n (Minimum 2 nights)
policies_md: |
  Pets: Allowed on request
  Notes: Studio is located in the garden of the main house where the owners reside. Longer stays available (up to 60 days).
---

## Description
Tucked away in the tranquil garden of a family home, Seaside Escape Studio @ Onrus offers a calm, convenient base just a short stroll from the beach, lagoon, and scenic cliff paths. The open-plan lounge/kitchen is fully equipped and comfortable for remote work. The bedroom features an extra-large queen bed, and the bathroom has a shower and toilet.

Whether you’re here to unwind, watch whales, or explore the coastline, this studio makes an easy, well-equipped retreat with everything you need for a relaxed stay.
`,

  "out-of-africa-sandbaai": `---
title: "Out of Africa, Sandbaai"
slug: "out-of-africa-sandbaai"
area: "Sandbaai"
address: "31 De Villiers Street, Sandbaai"
sleeps: 6
beds: 3
baths: 3
one_liner: "Comfortable family home walking distance to Sandbaai beach, with covered braai patio and a well-equipped open-plan living area."
hero: "/homes/out-of-africa-sandbaai/back garden wth hammock.JPG"
gallery:
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
  R2750 p/n (Minimum 10 nights)

  Shoulder
  R1900 p/n

  Off season
  R1750 p/n
policies_md: |
  Pets: Not Allowed
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
  R5500 p/n (Minimum 10 days)

  Shoulder
  R4000 p/n (Minimum 2 days)

  Off season
  R2700 p/n (Minimum 2 days)
policies_md: |
  Pets: Not Allowed
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
  All year
  R1500 p/n for 2 persons (Minimum 2 nights)
  R2500 p/n for 4 persons (Minimum 2 nights)
policies_md: |
  Pets: Not Allowed
---

## Description
Whale-a-While is a welcoming apartment set alongside the main house at 13 Musson Street, with its own private entrance and safe parking. Tucked into leafy Eastcliff near town and the Hermanus Golf Club, it’s a great fit for holidaymakers and “Swallows” alike.

The open-plan lounge, dining area, and well-equipped kitchen open to a private garden patio. The main bedroom has a queen-size bed with an en-suite shower room, while the second bedroom offers two single beds. A family bathroom includes a bath with shower-over-bath and toilet. All rooms have mounted fans, and the Smart TV is ready for streaming.

A portable braai adds easy outdoor cooking to relaxed evenings at home. Comfortable, convenient, and close to everything, Whale-a-While is an ideal base for exploring Hermanus and its coastal paths.
`,
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

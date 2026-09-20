const BARS = [
  {
    id: 'connaught', rank: 6, editorialOrder: 1, name: 'Connaught Bar', area: 'Mayfair', address: 'The Connaught, Carlos Place, London W1K 2AL',
    source: 'https://www.maybourne.com/en/hotels/the-connaught/restaurants-bars/connaught-bar',
    ourTake: 'My overall pick for Friday: aim for around 20:30 after the Covent Garden dinner. The polished Mayfair setting and martini trolley make this the special-occasion choice. Allow an estimated 25–35 minute walk or 15–25 minute taxi; it is a splurge, walk-ins can involve a wait, and nothing is booked.',
    knownFor: 'The martini trolley and a polished, conversation-focused Mayfair room.', tradeoff: 'The most formal and splurgy option; walk-in waits are possible.',
    policy: 'Walk-ins only; no reservations.',
    reviewSummary: 'The Infatuation’s February 2025 review highlights the theatrical martini trolley and elegant, conversation-focused atmosphere.', reviewSource: 'https://www.theinfatuation.com/london/reviews/the-connaught-bar', reviewLabel: 'The Infatuation · 6 Feb 2025',
    plans: {
      fri: { time: '20:30', fit: 'Friday recommendation · polished Mayfair', travel: 'Est. 25–35 min walk or 15–25 min taxi', status: 'Open · 16:00–01:00', recommended: true },
      sat: { time: '21:00', fit: 'Elegant, longer transfer', travel: 'Est. 25–35 min walk or 15–25 min taxi', status: 'Open · 16:00–01:00' }
    }
  },
  {
    id: 'fumoir', editorialOrder: 2, name: 'The Fumoir', area: 'Mayfair', address: 'Claridge’s, Brook Street London W1K 4HR',
    source: 'https://www.maybourne.com/en/hotels/claridges/restaurants-bars/the-fumoir',
    ourTake: 'The closest alternative to the Connaught experience: an intimate Art Deco room at Claridge’s for classic luxury-hotel cocktails. Aim for Friday around 20:30; allow an estimated 25–35 minute walk or 15–25 minute taxi from Covent Garden.',
    knownFor: 'A moody Lalique-lined room, classic cocktails, champagne and premium spirits.', tradeoff: 'It is a small walk-in room, so a wait is possible; photography is not permitted.',
    policy: 'No reservations and no photography.',
    reviewSummary: 'Time Out’s July 2026 hotel feature highlights The Fumoir as Claridge’s moody 1930s bar.', reviewSource: 'https://www.timeout.com/london/news/best-hotel-2026-claridges-070826', reviewLabel: 'Time Out hotel feature · 8 Jul 2026',
    plans: { fri: { time: '20:30', fit: 'Closest Connaught-style alternative', travel: 'Est. 25–35 min walk or 15–25 min taxi', status: 'Open · 12:00–01:00' } }
  },
  {
    id: 'red-room', editorialOrder: 3, name: 'Red Room', area: 'Mayfair', address: 'The Connaught, Carlos Place London W1K 2AL',
    source: 'https://www.maybourne.com/en/hotels/the-connaught/restaurants-bars/red-room',
    ourTake: 'A more relaxed, wine-led choice in the same hotel as Connaught Bar. Aim for Friday around 20:30, with the same estimated 25–35 minute walk or 15–25 minute taxi from Covent Garden.',
    knownFor: 'Wine-inspired cocktails and a room displaying art by women.', tradeoff: 'Less of a classic cocktail-bar ritual than Connaught Bar; choose it for wine and a relaxed atmosphere.',
    policy: 'No reservations for drinks. Friday and Saturday last orders are 00:30.',
    reviewSummary: 'The Infatuation’s February 2025 review highlights the relaxed atmosphere and wine-inspired cocktails.', reviewSource: 'https://www.theinfatuation.com/london/reviews/red-room-at-the-connaught', reviewLabel: 'The Infatuation · 6 Feb 2025',
    plans: { fri: { time: '20:30', fit: 'Relaxed, wine-led Mayfair option', travel: 'Est. 25–35 min walk or 15–25 min taxi', status: 'Open Fri–Sat · 15:00–01:00' } }
  },
  {
    id: 'bar-antoine', editorialOrder: 4, name: 'Bar Antoine', area: 'Mayfair / Park Lane', address: 'Four Seasons Hotel London at Park Lane, Hamilton Place London W1J 7DR',
    source: 'https://www.fourseasons.com/london/dining/lounges/bar-antoine/',
    ourTake: 'The modern, livelier polished option, slightly farther west. A Friday 20:45–22:00 visit fits after dinner; allow an estimated 35–45 minute walk or 20–30 minute taxi from Covent Garden.',
    knownFor: 'Chef-led cocktails with French flavour references, including croissant, Comté and mustard inspirations.', tradeoff: 'The longest transfer of the Mayfair options; choose it for newer energy over old-school hotel-bar intimacy.',
    policy: 'The official site offers table reservations; availability is not confirmed.',
    reviewSummary: 'The Week’s July 2026 Four Seasons hotel review praises the Cornichon Martini and Fig Affair.', reviewSource: 'https://theweek.com/culture-life/travel/four-seasons-park-lane-london-luxury-hotel-review', reviewLabel: 'The Week hotel review · 22 Jul 2026',
    plans: { fri: { time: '20:45', end: '22:00', fit: 'Modern, livelier polished option', travel: 'Est. 35–45 min walk or 20–30 min taxi', status: 'Open Mon–Sat · 12:00–01:00' } }
  },
  {
    id: 'scarfes', rank: 31, editorialOrder: 5, name: 'Scarfes Bar', area: 'Holborn', address: 'Rosewood London, 252 High Holborn, London WC1V 7EN',
    source: 'https://www.rosewoodhotels.com/en/london/dining/scarfes-bar',
    policySource: 'https://scarfesbar.com/',
    ourTake: 'The optional Saturday nightcap after Dishoom: aim for 21:00 and allow an estimated 15–20 minute walk to this art-filled Holborn hotel bar. Stay for roughly one hour if energy remains. It also works as the easier Friday alternative from Covent Garden; hotel-bar pricing and a possible walk-in queue are the tradeoffs.',
    knownFor: 'Inventive cocktails, live jazz and an art-filled hotel-bar setting.', tradeoff: 'Hotel-bar pricing and a possible evening walk-in queue.',
    policy: 'Walk-ins are welcome and tables are normally allocated for 90 minutes. In-house guests and parties of six or more can contact the bar about reservations. Nothing is booked.',
    reviewSummary: 'Time Out’s April 2025 review praises the inventive drinks, jazz and art-filled hotel-bar setting, and notes an evening queue.', reviewSource: 'https://www.timeout.com/london/bars-and-pubs/scarfes-bar', reviewLabel: 'Time Out · 16 Apr 2025',
    plans: {
      fri: { time: '20:30', fit: 'Excellent Friday alternative', travel: 'Est. 15–20 min walk from Covent Garden', status: 'Open · 16:00 till late' },
      sat: { time: '21:00', fit: 'Optional Saturday nightcap after Dishoom', travel: 'Est. 15–20 min walk from Dishoom', status: 'Open · 16:00 till late', nightcap: true }
    }
  }
];

const NIGHT_META = {
  fri: { date: '20261009', label: 'Friday 9 October', rationale: 'Connaught is the polished Mayfair recommendation around 20:30. Fumoir is the closest classic alternative, Red Room is wine-led, Bar Antoine is more modern and lively, and Scarfes is the easier Holborn option.' },
  sat: { date: '20261010', label: 'Saturday 10 October', rationale: 'Scarfes is an optional nightcap after Dishoom: walk an estimated 15–20 minutes, arrive around 21:00 and stay for roughly one hour if energy remains.' }
};

const SATURDAY_PUBS = [
  {
    name: 'Old Bank of England', address: '194 Fleet Street London EC4A 2LT', tag: 'Grand banking hall', hours: 'Saturday 11:00–23:00',
    why: 'An ornate former Bank of England branch, used as a bank from 1888 to 1975.',
    fit: 'Swap for The Blackfriar if this interior appeals more; they are an estimated 10–15 minute walk apart.',
    dishoom: 'Est. 20–25 min', source: 'https://www.mcmullens.co.uk/local-pub/old-bank-of-england/', sourceLabel: 'Official pub details'
  },
  {
    name: 'Seven Stars', address: '53 Carey Street London WC2A 2JB', tag: 'Quirky historic pub', hours: 'Saturday 12:00–23:00',
    why: 'A tiny pub behind the Royal Courts of Justice, known for characterful rooms and its pub cat.',
    fit: 'Swap for The Harp on the Fleet Street / Holborn route; space can be tight.',
    dishoom: 'Est. 15–20 min', source: 'https://www.timeout.com/london/bars-and-pubs/seven-stars', sourceLabel: 'Time Out review & details · 15 Sep 2026'
  },
  {
    name: 'Princess Louise', address: '208 High Holborn London WC1V 7EP', tag: 'Victorian interiors', hours: 'Saturday 12:00–23:00',
    why: 'Ornate tiling, mirrors and glass-partitioned booths—the interior is the draw.',
    fit: 'Swap for The Harp via Holborn if history and interiors sound better.',
    dishoom: 'Est. 12–16 min', source: 'https://princesslouiseholborn.co.uk/about/', sourceLabel: 'Official pub details'
  },
  {
    name: 'Porterhouse Covent Garden', address: '21–22 Maiden Lane London WC2E 7NA', tag: 'Livelier beer stop', hours: 'Saturday 12:00–00:00',
    why: 'A multi-level beer bar with a broad selection—a modern contrast to the historic pubs.',
    fit: 'Swap for The Harp or Lamb & Flag if a livelier bar appeals.', policy: 'Weekend walk-ins only; over 21s.',
    dishoom: 'Est. 7–10 min', source: 'https://porterhouse.london/bookings/', sourceLabel: 'Official entry details'
  },
  {
    name: 'Philomena’s', address: '40 Great Queen Street London WC2B 5AA', tag: 'Irish sports pub', hours: 'Saturday 10:00–01:00',
    why: 'A choice for TV sports and pub atmosphere near dinner.',
    fit: 'Swap for Lamb & Flag as the final stop; check what is showing on the day.', policy: 'First come, first served for sports events; no bookings.',
    dishoom: 'Est. 8–12 min', source: 'https://www.philomenasbar.co.uk/', sourceLabel: 'Official pub details'
  }
];

const BOROUGH_PICKS = [
  { name: 'Monmouth Coffee Company', area: '2 Park Street', hours: 'Saturday 07:30–18:00', knownFor: 'Filter coffee and espresso', why: 'A market coffee institution and the natural first stop. Bring a reusable cup for takeaway; the trader does not use single-use paper cups.', when: '09:30 · first stop', source: 'https://boroughmarket.org.uk/traders/monmouth-coffee-company/' },
  { name: 'Ginger Pig', area: 'Three Crown Square', hours: 'Saturday 09:00–17:00', knownFor: 'Pork sausage rolls', why: 'A classic, quick and shareable savoury choice. Hot-batch readiness varies.', when: 'Morning savoury option', source: 'https://boroughmarket.org.uk/traders/ginger-pig/' },
  { name: 'Bread Ahead', area: 'Cathedral Street / Three Crown Square', hours: 'Saturday 09:00–17:00', knownFor: 'Filled doughnuts with changing flavours', why: 'Filled doughnuts are its best-known treat; flavours change.', when: 'Optional sweet pick', source: 'https://boroughmarket.org.uk/traders/bread-ahead-bakery-school/' },
  { name: 'Kappacasein', area: '1 Stoney Street', hours: 'Saturday 09:00–17:00', knownFor: 'Cheese toasties and raclette over potatoes', why: 'A classic Borough Market savoury choice. Hot food depends on counter service that morning.', when: 'Morning savoury option', source: 'https://boroughmarket.org.uk/traders/kappacasein/' },
  { name: 'The Black Pig', area: 'Borough Market Kitchen, Winchester Walk', hours: 'Saturday 09:00–17:00', knownFor: 'Honey, truffle and parmesan pork ciabatta', why: 'The heartier savoury choice for a larger appetite.', when: 'Larger-appetite option', source: 'https://boroughmarket.org.uk/traders/the-black-pig/' },
  { name: 'Humble Crumble', area: 'Borough Market Kitchen', hours: 'Saturday 09:00–16:30', knownFor: 'Seasonal fruit crumble with vanilla custard or torched meringue', why: 'A dessert option for anyone who wants warm fruit and custard.', when: 'Optional sweet pick', source: 'https://boroughmarket.org.uk/traders/humble-crumble/' },
  { name: 'Turnips', area: '43 Borough Market / Three Crown Square', hours: 'Saturday 09:00–17:00', knownFor: 'Chocolate strawberry cups', why: 'The vendor’s viral, photo-friendly hit. Strawberry availability varies with October stock.', when: 'Optional · check stock', source: 'https://www.turnipsboroughmarket.com/turnips-market/strawberries/', secondarySource: 'https://boroughmarket.org.uk/traders/turnips/' }
];

const BOROUGH_LATER_PICKS = [
  { name: 'Brindisa', area: 'Outside the Stoney Street shop / Three Crown Square', hours: 'Saturday 09:00–17:00', knownFor: 'Hot chorizo and rocket rolls', why: 'A classic handheld lunch: spicy chorizo, sweet pepper and rocket. If chosen, prioritise it earlier in the afternoon because the rolls can sell out before the listed close.', source: 'https://boroughmarket.org.uk/traders/brindisa/' },
  { name: 'JUMA', area: 'Borough Market Kitchen', hours: 'Saturday 10:00–17:00', knownFor: 'Handmade Iraqi kubba', why: 'Fried or braised stuffed dumplings, with lamb, rice and potato varieties highlighted in current coverage.', source: 'https://boroughmarket.org.uk/traders/kubba/' },
  { name: 'Horn OK Please', area: 'Unit 55, Borough Market Kitchen, Jubilee Place', hours: 'Saturday 10:00–17:00', knownFor: 'Moong dal dosa and dosa chaat', why: 'Vegetarian Indian street food and a distinct savoury option among the market’s hot-food traders.', source: 'https://boroughmarket.org.uk/traders/horn-ok-please/' },
  { name: 'Shuk', area: 'Borough Market Kitchen', hours: 'Saturday 09:00–17:00', knownFor: 'Middle Eastern stuffed pitas', why: 'Official examples include lamb sofrito with pickled red cabbage and fish tagine with amba tahini; fillings rotate.', source: 'https://boroughmarket.org.uk/traders/shuk/' },
  { name: 'Gourmet Goat', area: 'Rochester Walk', hours: 'Saturday 09:00–17:00', knownFor: 'Greek Cypriot food and kid goat kofta pita', why: 'Look for the kofta pita highlighted in current coverage, alongside other seasonal dishes.', source: 'https://boroughmarket.org.uk/traders/gourmet-goat/' }
];

const FRIDAY_DINNER_OPTIONS = [
  {
    name: 'Blacklock Covent Garden', address: '16a Bedford Street London WC2E 9HE', hours: 'Friday dinner · 16:45–22:30',
    knownFor: 'Casual British chophouse cooking: steaks, chops and sharing sides.', fit: 'My Friday pick for a casual seated dinner built around chops and sharing sides.',
    booking: 'Online bookings are available for up to eight; larger groups contact the restaurant. Walk-ins are not guaranteed.',
    tradeoff: 'The dining room is in a basement and there is no lift access.',
    source: 'https://theblacklock.com/restaurants/covent-garden/', bookingSource: 'https://theblacklock.com/coventgarden-reservations/'
  },
  {
    name: 'Pizza Pilgrims Covent Garden', address: '23 Garrick Street London WC2E 9BN', hours: 'Friday · 11:30–23:00',
    knownFor: 'Neapolitan pizza with a light, chewy, charred crust; current menu examples include ’nduja and double pepperoni with hot honey.', fit: 'The easiest casual Italian choice between Covent Garden and Leicester Square.',
    booking: 'Ordinary reservations and walk-ins are supported. Group bookings for eight or more offer sharing menus. Booking for 18:00 is sensible because the room is small; availability is not confirmed.',
    tradeoff: 'A small, buzzy and casual room rather than a long, polished group dinner.',
    source: 'https://www.pizzapilgrims.co.uk/pizzerias/covent-garden/', bookingSource: 'https://www.pizzapilgrims.co.uk/bookings/'
  },
  {
    name: 'Seven Dials Market', address: 'Earlham Street London WC2H 9LX', hours: 'Friday · 11:00–23:00; street food from 12:00',
    knownFor: 'A food hall with 15 traders and choose-your-own-cuisine flexibility.', fit: 'Best for varied tastes and a livelier, informal dinner.',
    booking: 'Most tables are walk-in. Reserved Bar Nana tables from 17:00 on Friday currently carry a £300 minimum drinks spend; check current terms.',
    tradeoff: 'It is noisier, orders may involve separate queues, and group seating is uncertain.',
    source: 'https://www.sevendialsmarket.com/visit-us/', bookingSource: 'https://www.sevendialsmarket.com/table-bookings-terms-conditions/', faqSource: 'https://www.sevendialsmarket.com/faqs/'
  }
];

const DAYS = [
  {
    id: 'thu', date: '20261008', label: 'Thursday', theme: 'Arrival & Chelsea',
    events: [
      { start: '15:00', title: 'Check-in opens', place: 'Chelsea, London', tag: 'Chelsea base', summary: 'The house is ready from 15:00.', details: 'The street address and access details stay in the group chat.' },
      { start: '17:50', title: 'Arrive at London City Airport', place: 'London City Airport', tag: 'Inbound', summary: 'BA 7304 from Milan Linate.', details: 'Flight details are from the group plan; verify timing with the airline before travel.' },
      { start: '18:15', end: '19:15', title: 'Transfer to Chelsea', place: 'Chelsea, London', tag: 'Approx. 50 min', summary: 'Black cab or Uber XL from London City Airport.', details: 'Travel time is an estimate and will vary with evening traffic.', directions: { origin: 'London City Airport', destination: 'Chelsea London', mode: 'driving' } },
      { start: '19:15', end: '20:00', title: 'Settle in', place: 'Chelsea, London', tag: 'At the house', summary: 'Drop bags and ease into welcome refreshments.' },
      { start: '20:15', end: '22:30', title: 'Welcome dinner', place: 'Chelsea, London', tag: 'Choose together', summary: 'Chelsea dinner options for the first night.', options: ["PJ’s Chelsea Brasserie", 'Hawksmoor Knightsbridge', 'The Cadogan Arms'] },
      { start: '22:30', title: 'Chelsea nightcap', place: 'Chelsea, London', tag: 'Late', summary: 'One more, if the mood is right.', options: ['The Admiral Codrington', 'The Surprise Chelsea', 'Barts Speakeasy at Chelsea Cloisters'] }
    ]
  },
  {
    id: 'fri', date: '20261009', label: 'Friday', theme: 'Royal London & West End',
    events: [
      { start: '09:30', end: '13:00', title: 'Royal London walk', place: 'Westminster, London', tag: 'On foot + Tube', summary: 'Sloane Square to the landmarks of Westminster.', details: 'Take the District line from Sloane Square to St James’s Park. Walk Buckingham Palace → St James’s Park → Westminster Abbey → Big Ben → Whitehall.', directions: { origin: 'Buckingham Palace', destination: 'Whitehall London', mode: 'walking', waypoints: ['St James’s Park London','Westminster Abbey','Big Ben'] } },
      { start: '13:00', end: '14:30', title: 'Lunch at Ye Olde Cheshire Cheese', place: 'Ye Olde Cheshire Cheese, 145 Fleet Street London', tag: 'Historic pub', summary: 'A Fleet Street institution, rebuilt in 1667.', details: '145 Fleet Street. Settle into one of the old wood-panelled rooms for lunch.' },
      { start: '15:00', end: '17:30', title: 'Covent Garden stroll', place: 'Covent Garden London', tag: 'Wander', summary: 'Piazza, Neal’s Yard and Seven Dials.', details: 'Leave room for shops, street performers, and a slow loop through the colourful courtyard at Neal’s Yard.', directions: { origin: 'Covent Garden Piazza', destination: 'Seven Dials London', mode: 'walking', waypoints: ["Neal's Yard London"] } },
      { start: '18:00', end: '20:00', title: 'Casual group dinner', place: 'Covent Garden London', tag: 'Choose one · nothing booked', summary: 'Blacklock for chops, steaks and sharing sides; Pizza Pilgrims for casual Italian; or Seven Dials Market for varied tastes.', details: 'Target an 18:00 seating and aim to finish around 19:45–20:00 before heading to Mayfair for roughly 20:30, or Bar Antoine around 20:45. Times are estimates and nothing is booked.', dinnerGuide: true },
      { start: '20:00', title: 'Friday cocktails', place: 'London', tag: 'Mayfair recommendation', summary: 'The Connaught around 20:30 leads a broader shortlist of polished cocktail options.', details: 'Choose by mood, location and travel. The optional Saturday Scarfes nightcap remains a separate choice after Dishoom.', barsCta: true }
    ]
  },
  {
    id: 'sat', date: '20261010', label: 'Saturday', theme: 'Markets, pubs & Dishoom',
    planningAlert: 'A relaxed crawl: two main pubs, one optional third stop, then the fixed 17:50 Dishoom arrival.',
    planningNote: 'Aim for roughly 30–45 minutes per pub, but treat every time as a suggestion: skip anywhere busy or linger where the group is happy. The Blackfriar and Lamb & Flag are the main anchors; The Harp is optional if there is room. Pub stops are not booked; anyone can join partway. Pub details checked 20 September 2026.',
    routeStrip: 'The Blackfriar → The Harp (optional) → Lamb & Flag → Dishoom',
    events: [
      { start: '09:30', end: '11:30', title: 'Borough Market breakfast', place: 'Borough Market', tag: 'Come hungry', summary: 'Start with Monmouth coffee, then choose Kappacasein or Ginger Pig; The Black Pig is the heartier alternative.', details: 'Borough Market’s published Saturday hours begin at 09:00. Our 09:30–11:30 visit fits the regular hours listed for all seven guide picks; prepared food, flavours and stock vary on the day.', source: 'https://boroughmarket.org.uk/visit-us/', sourceLabel: 'Official market hours', boroughGuide: true, uid: '20261010-0@london-field-guide' },
      { start: '11:30', end: '13:30', title: 'Thames & Tower Bridge walk', place: 'Tower Bridge', tag: 'Riverside walk', summary: 'Walk from Borough to Tower Bridge, cross the river and finish at Tower Hill for north-end views.', details: 'This is a free riverside walk; no paid tour is planned.', directions: { origin: 'Borough Market', destination: 'Tower Hill Station', mode: 'walking', waypoints: ['Tower Bridge'] }, uid: '20261010-1@london-field-guide' },
      { start: '13:30', end: '14:00', title: 'Tower Hill to Blackfriars', place: 'Blackfriars Station London', tag: '30-minute transfer budget', summary: 'Take the District or Circle line west from Tower Hill to Blackfriars.', details: 'Allow for the station walk and weekend service conditions.', directions: { origin: 'Tower Hill Station', destination: 'Blackfriars Station London', mode: 'transit' }, tfl: true, uid: 'saturday-towerhill-blackfriars-20261010@london-field-guide' },
      { start: '14:00', end: '14:40', title: 'Pub crawl: The Blackfriar', place: 'The Blackfriar, 174 Queen Victoria Street London EC4V 4EG', tag: 'Main stop · nothing booked', summary: 'An ornate Art Nouveau pub known for its friar mosaics and character.', details: 'Keep the stop flexible and move on if it is busy.', source: 'https://www.nicholsonspubs.co.uk/restaurants/london/theblackfriarblackfriarslondon', sourceLabel: 'Official pub information', status: 'TENTATIVE', uid: '20261010-2@london-field-guide' },
      { start: '15:10', end: '15:50', title: 'Optional: The Harp', place: 'The Harp, 47 Chandos Place London WC2N 4HS', tag: 'Optional if there is room', summary: 'A compact traditional alehouse for cask ale and cider.', details: 'Allow an estimated 25–30 minutes to walk here via Fleet Street and the Strand from The Blackfriar. Saturday hours are listed as 11:00–23:00; skip it if busy or linger depending on space and mood.', source: 'https://www.harpcoventgarden.com/', sourceLabel: 'Official pub information', directions: { origin: 'The Blackfriar London', destination: 'The Harp Covent Garden', mode: 'walking' }, status: 'TENTATIVE', uid: 'saturday-harp-20261010@london-field-guide' },
      { start: '16:00', end: '16:45', title: 'Lamb & Flag', place: 'Lamb & Flag, 33 Rose Street London WC2E 9EB', tag: 'Main stop · nothing booked', summary: 'A historic Covent Garden pub tucked into an alley.', details: 'Allow an estimated 8–10 minute walk from The Harp, or start earlier if the group skips The Harp. Saturday hours are listed as 11:00–23:00. From 16:45, linger here or wander Covent Garden and Seven Dials; leave by about 17:40 with a generous 10-minute walk budget to Dishoom.', source: 'https://www.lambandflagcoventgarden.co.uk/', sourceLabel: 'Official pub information', directions: { origin: 'The Harp Covent Garden', destination: 'Lamb and Flag Covent Garden', mode: 'walking' }, status: 'TENTATIVE', uid: 'saturday-lamb-flag-20261010@london-field-guide' },
      { start: '18:00', end: '20:30', title: 'Dinner at Dishoom Covent Garden', place: "Dishoom Covent Garden, 12 Upper St Martin's Lane London WC2H 9FB", tag: 'Booked · per group plan', summary: 'Arrive 17:50 · table for 8.', details: 'Feast notes: House Black Daal, Chicken Ruby, lamb chops, biryani, garlic naan and Keema Pau.', uid: '20261010-3@london-field-guide' },
      { start: '21:00', end: '22:00', title: 'Optional nightcap at Scarfes', place: 'Scarfes Bar, Rosewood London, 252 High Holborn London WC1V 7EN', tag: 'Optional · walk-in · not booked', summary: 'Walk an estimated 15–20 minutes from Dishoom for an optional one-hour nightcap.', details: 'Walk-ins are welcome and tables are normally allocated for 90 minutes. In-house guests and parties of six or more can contact the bar about reservations. Nothing is booked.', source: 'https://scarfesbar.com/', sourceLabel: 'Official entry & group policy', directions: { origin: "Dishoom Covent Garden, 12 Upper St Martin's Lane London", destination: 'Scarfes Bar, 252 High Holborn London', mode: 'walking' }, status: 'TENTATIVE', uid: 'bar-scarfes-20261010@london-field-guide' }
    ]
  },
  {
    id: 'sun', date: '20261011', label: 'Sunday', theme: 'Eagles day & an early night',
    planningAlert: 'Passyunk is in Fitzrovia, central London—not near Tottenham Hotspur Stadium in north London. Allow an estimated 60–75 minutes between them by Tube and walking.',
    planningNote: 'Passyunk is the chosen pregame stop, not a stadium fan zone or a short walk from the ground. Tailgate tickets are currently listed at £20 per person and are not booked; anyone skipping it can go directly to Tottenham. Suggested stadium entry is 13:45, 45 minutes before kickoff, with a target of being seated by 14:20. Target home remains 19:30–20:00.',
    routeStrip: 'Chelsea → Passyunk, Fitzrovia → Tottenham stadium',
    alternative: true,
    events: [
      { start: '09:30', end: '10:15', title: 'Breakfast on Pavilion Road', place: 'Pavilion Road Chelsea', tag: '45 minutes', summary: 'Coffee and a proper breakfast before heading north.', uid: '20261011-0@london-field-guide' },
      { start: '10:15', end: '11:00', title: 'Chelsea to Fitzrovia', place: 'Passyunk Avenue, 80 Cleveland Street London W1T 6NE', tag: 'Est. 45 minutes', summary: 'Sloane Square to Warren Street, then walk to Passyunk.', details: 'Take the District or Circle line east one stop to Victoria → Victoria line north to Warren Street → walk to 80 Cleveland Street. Travel time is an estimate.', directions: { origin: 'Sloane Square Station', destination: 'Passyunk Avenue 80 Cleveland Street London W1T 6NE', mode: 'transit' }, uid: 'sunday-chelsea-fitzrovia-20261011@london-field-guide' },
      { start: '11:00', end: '12:15', title: 'Passyunk Eagles tailgate in Fitzrovia', place: 'Passyunk Avenue, 80 Cleveland Street London W1T 6NE', tag: 'Chosen stop · £20 · not booked', summary: 'A 75-minute slice of the official 09:00–21:00 Philly event in central London.', details: 'Meet at 80 Cleveland Street, W1T 6NE. Our visit is 11:00–12:15; leave at 12:15 for Tottenham. Food trucks, mobile bars, live entertainment and a big screen are listed. Tickets are £20, non-refundable and do not include a free drink; plan food and drinks separately. The tailgate ticket is separate from the sold-out in-venue watch party. Check ticket availability on the booking page. For arrival or re-entry questions: eaglesweek@passyunkavenue.com.', source: 'https://passyunkavenue.com/eagles-week-events/', sourceLabel: 'Official tailgate details', secondarySource: 'https://www.sevenrooms.com/events/ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgIDCqt-xzAoM?event_id=ahNzfnNldmVucm9vbXMtc2VjdXJlcjkLEg9uaWdodGxvb3BfVmVudWUYgIDCqt-xzAoMCxIQc3JfR2VuVmVudWVFdmVudBiAgMe414rXCgw', secondarySourceLabel: 'Check tailgate tickets', tertiarySource: 'https://passyunkavenue.com/fitzrovia/', tertiarySourceLabel: 'Official Fitzrovia venue', status: 'TENTATIVE', uid: '20261011-2@london-field-guide' },
      { start: '12:15', end: '13:30', title: 'Fitzrovia to Tottenham', place: 'Tottenham Hotspur Stadium', tag: 'Est. 60–75 minutes', summary: 'Warren Street to Seven Sisters, then continue on foot toward the stadium.', details: 'Walk to Warren Street → Victoria line north to Seven Sisters → allow roughly 30–35 minutes to walk along the High Road toward the stadium, plus queues. Follow stewards and check live TfL guidance. Spurs advises using Liverpool Street for Overground journeys because of the Seven Sisters transfer diversion.', source: 'https://www.tottenhamhotspur.com/the-stadium/attending-matches/getting-here/', sourceLabel: 'Official stadium travel advice', tfl: true, uid: '20261011-1@london-field-guide' },
      { start: '13:30', end: '13:45', title: 'Find the ticket entrance', place: 'Tottenham Hotspur Stadium', tag: 'Outside buffer', summary: 'Use the NFL ticket instructions and skip photos if queues build.', details: 'This is a brief planning buffer, not a booked tour or event activation.', uid: 'sunday-stadium-photos-20261011@london-field-guide' },
      { start: '13:45', end: '14:20', title: 'Security & find our seats', place: 'Tottenham Hotspur Stadium', tag: 'Suggested entry · 45 minutes before kickoff', summary: 'Use the entrance and instructions on the NFL ticket; target being seated by 14:20.', details: 'The 13:45 arrival is our suggested target, not an official mandated entry time. Follow the ticket and current game-day guidance.', uid: 'sunday-stadium-entry-20261011@london-field-guide' },
      { start: '14:30', end: '17:45', title: 'Eagles vs Jaguars', place: 'Tottenham Hotspur Stadium', tag: 'Kickoff · 14:30 BST', summary: 'Philadelphia Eagles vs Jacksonville Jaguars.', details: 'Approximate finish; overtime could run later. Kickoff is confirmed by the official Eagles schedule release.', source: 'https://www.philadelphiaeagles.com/news/eagles-jaguars-nfl-london-games-tottenham-hotspur-stadium-2026-schedule-release', sourceLabel: 'Official game details', uid: '20261011-3@london-field-guide' },
      { start: '17:45', end: '20:00', title: 'Return to Chelsea', place: 'Chelsea, London', tag: 'Target home 19:30–20:00', summary: 'Allow for stadium exit, queues and the walk back to Seven Sisters.', details: 'Walk to Seven Sisters → Victoria line south to Victoria → District or Circle line west to Sloane Square. The home time is a planning estimate; check TfL and follow steward directions.', directions: { origin: 'Tottenham Hotspur Stadium', destination: 'Sloane Square Station', mode: 'transit' }, tfl: true, uid: 'sunday-return-chelsea-20261011@london-field-guide' },
      { start: '20:00', end: '20:45', title: 'Easy dinner at home', place: 'Chelsea, London', tag: 'Flexible timing', summary: 'Takeaway or local pickup; move earlier if everyone gets home sooner.', uid: 'sunday-easy-dinner-20261011@london-field-guide' },
      { start: '20:45', end: '21:30', title: 'Pack & wind down', place: 'Chelsea, London', tag: 'Early night', summary: 'Confirm Monday transfer and check-in, get bags ready, then call it a night.', uid: 'sunday-pack-20261011@london-field-guide' }
    ]
  }
];

const SATURDAY_LUNCH = {
  id: 'sat', date: '20261010', label: 'Saturday', theme: 'Tower Bridge, market lunch & pubs',
  planningAlert: 'Recommended alternative: keep breakfast quick, make Borough Market the lunch stop, then continue west.',
  planningNote: 'This plan starts walking at 09:30, visits The George before a 12:15 Borough lunch, then continues to The Blackfriar and Lamb & Flag. The Harp can replace Lamb & Flag. Pub stops are not booked; walking times are estimates and the 17:50 Dishoom arrival stays fixed.',
  routeStrip: 'Tower Bridge loop → The George → Borough lunch → The Blackfriar → Lamb & Flag → Dishoom',
  events: [
    { start: '09:15', end: '09:30', title: 'Grab-and-go breakfast', place: 'London Bridge Station', tag: 'Quick start', summary: 'Pick up coffee and something light near London Bridge or Borough, skip long queues, and be ready to walk at 09:30.', uid: 'saturday-quick-breakfast-20261010@london-field-guide' },
    { start: '09:30', end: '11:00', title: 'Thames & Tower Bridge walk', place: 'Tower Hill London', tag: 'Outdoor walk', summary: 'Walk from Borough to Tower Bridge, cross the river and finish at Tower Hill.', details: 'Outdoor crossings and views only; no paid exhibition. This replaces the original 11:30–13:30 walk.', directions: { origin: 'Borough Market', destination: 'Tower Hill Station', mode: 'walking', waypoints: ['Tower Bridge'] }, uid: '20261010-1@london-field-guide' },
    { start: '11:00', end: '11:30', title: 'Tower Hill to The George', place: 'The George Inn, 75–77 Borough High Street London SE1 1NH', tag: 'Est. 20–30 minute walk', summary: 'Walk back via London Bridge to The George near Borough Market.', directions: { origin: 'Tower Hill Station', destination: 'The George Inn 75-77 Borough High Street London SE1 1NH', mode: 'walking', waypoints: ['London Bridge'] }, uid: 'saturday-towerhill-george-20261010@london-field-guide' },
    { start: '11:30', end: '12:10', title: 'First drink at The George', place: 'The George Inn, 75–77 Borough High Street London SE1 1NH', tag: 'Historic pub · nothing booked', summary: 'London’s last remaining galleried inn, with 17th-century history.', details: 'The courtyard is walk-in only. Regular Saturday hours are 11:00–00:00; allow an estimated 3–5 minutes to walk back to the market.', source: 'https://www.greeneking.co.uk/pubs/greater-london/george-southwark/find-us', sourceLabel: 'Official hours & courtyard policy', secondarySource: 'https://www.nationaltrust.org.uk/visit/london/george-inn', secondarySourceLabel: 'National Trust history', status: 'TENTATIVE', uid: 'saturday-george-20261010@london-field-guide' },
    { start: '12:15', end: '13:15', title: 'Borough Market lunch', place: 'Borough Market', tag: 'Choose one savoury hit', summary: 'Choose one item, or share, from the savoury food guide; prepared food and stock vary on the day.', details: 'Published regular Saturday hours cover this lunch window for the later-food list. This is the main market meal in the lunch plan.', source: 'https://boroughmarket.org.uk/visit-us/', sourceLabel: 'Official market hours', boroughGuide: 'lunch', uid: '20261010-0@london-field-guide' },
    { start: '13:15', end: '14:00', title: 'Walk west to The Blackfriar', place: 'The Blackfriar, 174 Queen Victoria Street London EC4V 4EG', tag: 'Est. 25–35 minute walk + buffer', summary: 'Follow Bankside west via Millennium Bridge toward Blackfriars.', directions: { origin: 'Borough Market', destination: 'The Blackfriar London', mode: 'walking', waypoints: ['Millennium Bridge London'] }, uid: 'saturday-borough-blackfriar-20261010@london-field-guide' },
    { start: '14:00', end: '14:40', title: 'Pub crawl: The Blackfriar', place: 'The Blackfriar, 174 Queen Victoria Street London EC4V 4EG', tag: 'Main stop · nothing booked', summary: 'An ornate Art Nouveau pub known for its friar mosaics and character.', details: 'Keep the stop flexible and move on if it is busy.', source: 'https://www.nicholsonspubs.co.uk/restaurants/london/theblackfriarblackfriarslondon', sourceLabel: 'Official pub information', status: 'TENTATIVE', uid: '20261010-2@london-field-guide' },
    { start: '15:30', end: '16:15', title: 'Lamb & Flag', place: 'Lamb & Flag, 33 Rose Street London WC2E 9EB', tag: 'Main stop · nothing booked', summary: 'A historic Covent Garden pub tucked into an alley.', details: 'Allow 30–40 minutes to walk west with sightseeing buffer. The Harp is an alternative to Lamb & Flag. Afterward, wander Covent Garden or linger before leaving for Dishoom.', source: 'https://www.lambandflagcoventgarden.co.uk/', sourceLabel: 'Official pub information', status: 'TENTATIVE', uid: 'saturday-lamb-flag-20261010@london-field-guide' },
    { start: '18:00', end: '20:30', title: 'Dinner at Dishoom Covent Garden', place: "Dishoom Covent Garden, 12 Upper St Martin's Lane London WC2H 9FB", tag: 'Booked · per group plan', summary: 'Arrive 17:50 · table for 8.', details: 'From 16:15, use the flexible time for Covent Garden or Seven Dials and keep the 17:50 arrival. Feast notes: House Black Daal, Chicken Ruby, lamb chops, biryani, garlic naan and Keema Pau.', uid: '20261010-3@london-field-guide' },
    { start: '21:00', end: '22:00', title: 'Optional nightcap at Scarfes', place: 'Scarfes Bar, Rosewood London, 252 High Holborn London WC1V 7EN', tag: 'Optional · walk-in · not booked', summary: 'Walk an estimated 15–20 minutes from Dishoom for an optional one-hour nightcap.', details: 'Walk-ins are welcome and tables are normally allocated for 90 minutes. In-house guests and parties of six or more can contact the bar about reservations. Nothing is booked.', source: 'https://scarfesbar.com/', sourceLabel: 'Official entry & group policy', directions: { origin: "Dishoom Covent Garden, 12 Upper St Martin's Lane London", destination: 'Scarfes Bar, 252 High Holborn London', mode: 'walking' }, status: 'TENTATIVE', uid: 'bar-scarfes-20261010@london-field-guide' }
  ]
};

const mapsUrl = place => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
const directionsUrl = ({origin, destination, mode = 'transit', waypoints = []}) => {
  const points = waypoints.length ? `&waypoints=${encodeURIComponent(waypoints.join('|'))}` : '';
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}${points}`;
};
const escapeHtml = value => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function boroughGuideMarkup(plan = 'breakfast') {
  const isLunch = plan === 'lunch';
  return `<details class="borough-guide">
    <summary><span>${isLunch ? 'Borough lunch guide · 12 choices' : 'Borough food guide · 7 morning + 5 later'}</span><span aria-hidden="true">＋</span></summary>
    <div class="borough-guide__inner">
      <div class="borough-guide__intro">
        ${isLunch ? '<p><strong>Saturday 10 October · 12:15–13:15 lunch.</strong> Choose one savoury item, or share, before heading west. All seven market favourites below publish regular Saturday hours that cover 12:15; prepared food and stock vary.</p><p class="borough-guide__combo"><strong>Lunch shortlist:</strong> Kappacasein or Ginger Pig for a classic market choice; The Black Pig for a larger appetite. The five savoury hits below add more substantial options.</p>' : '<p><strong>Saturday 10 October · 09:30–11:30 breakfast.</strong> Start with Monmouth coffee, then choose Kappacasein or Ginger Pig. The Black Pig is the larger-appetite alternative. Browse the other well-known traders only if they appeal—these are choices, not a seven-stop challenge.</p><p class="borough-guide__combo"><strong>My morning pick:</strong> Monmouth + Kappacasein, or Monmouth + Ginger Pig for something quicker. Choose The Black Pig instead for a more substantial meal.</p>'}
        <p>Published regular Saturday hours checked 20 September 2026. Prepared food and flavours depend on the day’s stock.</p>
      </div>
      <h4 class="borough-guide__section-title">${isLunch ? 'Market favourites · 7 choices' : 'Morning hit list · 7 choices'}</h4>
      <div class="borough-pick-grid">${BOROUGH_PICKS.map(pick => `<article class="borough-pick">
        <p class="borough-pick__when">${escapeHtml(isLunch ? 'Market favourite · open at 12:15' : pick.when)}</p><h4>${escapeHtml(pick.name)}</h4><p class="borough-pick__order">Known for: <strong>${escapeHtml(pick.knownFor)}</strong></p><p>${escapeHtml(pick.why)}</p>
        <dl><div><dt>Find it</dt><dd>${escapeHtml(pick.area)}</dd></div><div><dt>Regular Saturday hours</dt><dd>${escapeHtml(pick.hours)}</dd></div></dl>
        <div class="borough-pick__links"><a href="${mapsUrl(`${pick.name} ${pick.area} Borough Market London`)}" target="_blank" rel="noopener">Map <span aria-hidden="true">↗</span></a><a href="${pick.source}" target="_blank" rel="noopener">Trader details <span aria-hidden="true">↗</span></a>${pick.secondarySource ? `<a href="${pick.secondarySource}" target="_blank" rel="noopener">Market listing <span aria-hidden="true">↗</span></a>` : ''}</div>
      </article>`).join('')}</div>
      <section class="borough-later" aria-labelledby="borough-later-title">
        <h4 id="borough-later-title">Open later · savoury top hits</h4>
        <p>“Open later” means these traders publish regular Saturday hours into the afternoon, before the market’s 17:00 close. Keep these options handy for lunch or afternoon food. Kitchen cutoffs are not separately published and stock varies.</p>
        <div class="borough-pick-grid">${BOROUGH_LATER_PICKS.map(pick => `<article class="borough-pick">
          <p class="borough-pick__when">Afternoon reference</p><h4>${escapeHtml(pick.name)}</h4><p class="borough-pick__order">Known for: <strong>${escapeHtml(pick.knownFor)}</strong></p><p>${escapeHtml(pick.why)}</p>
          <dl><div><dt>Find it</dt><dd>${escapeHtml(pick.area)}</dd></div><div><dt>Regular Saturday hours</dt><dd>${escapeHtml(pick.hours)}</dd></div></dl>
          <div class="borough-pick__links"><a href="${mapsUrl(`${pick.name} ${pick.area} Borough Market London`)}" target="_blank" rel="noopener">Map <span aria-hidden="true">↗</span></a><a href="${pick.source}" target="_blank" rel="noopener">Trader details <span aria-hidden="true">↗</span></a></div>
        </article>`).join('')}</div>
      </section>
      <p class="borough-guide__sources">Further reading: <a href="https://www.timeout.com/london/things-to-do/borough-market" target="_blank" rel="noopener">Time Out market guide · 25 Jun 2026</a> · <a href="https://www.timeout.com/london/restaurants/londons-best-bakeries" target="_blank" rel="noopener">Time Out bakery guide · 30 Jun 2026</a> · <a href="https://www.theinfatuation.com/london/guides/best-borough-market-restaurant-bars" target="_blank" rel="noopener">The Infatuation market guide · 22 Jul 2026</a>.</p>
    </div>
  </details>`;
}

function fridayDinnerGuideMarkup() {
  return `<details class="dinner-guide">
    <summary><span>Dinner guide · Blacklock / Pizza Pilgrims / Seven Dials Market</span><span aria-hidden="true">＋</span></summary>
    <div class="dinner-guide__inner">
      <p class="dinner-guide__intro"><strong>Choose one:</strong> Blacklock is my Friday pick for chops, steaks and sharing sides in a casual seated format; Pizza Pilgrims is the easiest casual Italian choice; Seven Dials Market offers the most variety. Target 18:00 and aim to finish by 19:45–20:00 before heading toward Mayfair. Nothing is booked.</p>
      <div class="dinner-option-grid">${FRIDAY_DINNER_OPTIONS.map((option, index) => `<article class="dinner-option${index === 0 ? ' dinner-option--recommended' : ''}">
        ${index === 0 ? '<p class="dinner-option__flag">My Friday pick</p>' : ''}<h4>${escapeHtml(option.name)}</h4>
        <dl><div><dt>Where</dt><dd>${escapeHtml(option.address)}</dd></div><div><dt>Known for</dt><dd>${escapeHtml(option.knownFor)}</dd></div><div><dt>Why it fits</dt><dd>${escapeHtml(option.fit)}</dd></div><div><dt>Hours</dt><dd>${escapeHtml(option.hours)}</dd></div><div><dt>Booking</dt><dd>${escapeHtml(option.booking)}</dd></div><div><dt>Tradeoff</dt><dd>${escapeHtml(option.tradeoff)}</dd></div></dl>
        <div class="dinner-option__links"><a href="${mapsUrl(option.address)}" target="_blank" rel="noopener">Map <span aria-hidden="true">↗</span></a><a href="${option.source}" target="_blank" rel="noopener">Official venue details <span aria-hidden="true">↗</span></a><a href="${option.bookingSource}" target="_blank" rel="noopener">Booking terms <span aria-hidden="true">↗</span></a>${option.faqSource ? `<a href="${option.faqSource}" target="_blank" rel="noopener">FAQ <span aria-hidden="true">↗</span></a>` : ''}</div>
      </article>`).join('')}</div>
    </div>
  </details>`;
}

function eventMarkup(event, dayId, index) {
  const detailId = `details-${dayId}-${index}`;
  const options = event.options || [];
  const expandedContent = [
    event.details ? `<p>${escapeHtml(event.details)}</p>` : '',
    options.length ? `<p class="event__option-links">${options.map(option => `<a href="${mapsUrl(option)}" target="_blank" rel="noopener">${escapeHtml(option)} <span aria-hidden="true">↗</span></a>`).join('')}</p>` : ''
  ].filter(Boolean).join('');
  const links = [
    event.place ? `<a href="${mapsUrl(event.place)}" target="_blank" rel="noopener">Open in Maps <span aria-hidden="true">↗</span></a>` : '',
    event.directions ? `<a href="${directionsUrl(event.directions)}" target="_blank" rel="noopener">Directions <span aria-hidden="true">↗</span></a>` : '',
    event.tfl ? '<a href="https://tfl.gov.uk/plan-a-journey/" target="_blank" rel="noopener">TfL journey planner <span aria-hidden="true">↗</span></a>' : '',
    event.source ? `<a href="${event.source}" target="_blank" rel="noopener">${escapeHtml(event.sourceLabel || 'Official game details')} <span aria-hidden="true">↗</span></a>` : '',
    event.secondarySource ? `<a href="${event.secondarySource}" target="_blank" rel="noopener">${escapeHtml(event.secondarySourceLabel || 'Venue details')} <span aria-hidden="true">↗</span></a>` : '',
    event.tertiarySource ? `<a href="${event.tertiarySource}" target="_blank" rel="noopener">${escapeHtml(event.tertiarySourceLabel || 'More details')} <span aria-hidden="true">↗</span></a>` : '',
    event.barsCta ? '<a href="#bars">Compare the bar shortlist <span aria-hidden="true">→</span></a>' : '',
    expandedContent ? `<button class="event__toggle" type="button" aria-expanded="false" aria-controls="${detailId}">More detail</button>` : ''
  ].filter(Boolean).join('');

  return `<li class="event">
    <time class="event__time" datetime="${event.start}">${escapeHtml(event.start)}${event.end ? `<br>– ${escapeHtml(event.end)}` : ''}</time>
    <article class="event__body">
      <p class="event__meta">${escapeHtml(event.tag)}</p>
      <h3>${escapeHtml(event.title)}</h3>
      <p class="event__summary">${escapeHtml(event.summary)}</p>
      <div class="event__links">${links}</div>
      ${expandedContent ? `<div class="event__details" id="${detailId}" hidden>${expandedContent}</div>` : ''}
      ${event.boroughGuide ? boroughGuideMarkup(event.boroughGuide === 'lunch' ? 'lunch' : 'breakfast') : ''}
      ${event.dinnerGuide ? fridayDinnerGuideMarkup() : ''}
    </article>
  </li>`;
}

function saturdayPubShortlistMarkup() {
  return `<section class="pub-shortlist" aria-labelledby="pub-shortlist-title">
    <header class="pub-shortlist__head">
      <p class="eyebrow">Saturday swaps · details checked 20 September 2026</p>
      <h3 id="pub-shortlist-title" tabindex="-1">More pubs to choose from</h3>
      <p>Pick whichever appeals on the day—these are alternatives to the main crawl, not extra obligations. Two or three stops leave plenty of time; keep the 17:50 Dishoom arrival fixed.</p>
      <p class="pub-shortlist__take"><strong>My picks:</strong> Old Bank or Princess Louise for interiors, Seven Stars for quirky character, Porterhouse for beer, and Philomena’s for a sports-pub atmosphere.</p>
    </header>
    <div class="pub-swap-grid">${SATURDAY_PUBS.map(pub => `<details class="pub-swap">
      <summary><span><small>${escapeHtml(pub.tag)}</small><strong>${escapeHtml(pub.name)}</strong></span><span aria-hidden="true">＋</span></summary>
      <div class="pub-swap__body">
        <p>${escapeHtml(pub.why)}</p>
        <dl><div><dt>Where it fits</dt><dd>${escapeHtml(pub.fit)}</dd></div><div><dt>Hours</dt><dd>${escapeHtml(pub.hours)}</dd></div><div><dt>Walk to Dishoom</dt><dd>${escapeHtml(pub.dishoom)}</dd></div>${pub.policy ? `<div><dt>Entry</dt><dd>${escapeHtml(pub.policy)}</dd></div>` : ''}</dl>
        <div class="pub-swap__links"><a href="${mapsUrl(pub.address)}" target="_blank" rel="noopener">Map <span aria-hidden="true">↗</span></a><a href="${directionsUrl({origin: pub.address, destination: 'Dishoom Covent Garden', mode: 'walking'})}" target="_blank" rel="noopener">Walk to Dishoom <span aria-hidden="true">↗</span></a><a href="${pub.source}" target="_blank" rel="noopener">${escapeHtml(pub.sourceLabel)} <span aria-hidden="true">↗</span></a></div>
      </div>
    </details>`).join('')}</div>
  </section>`;
}

const viewIds = [...DAYS.map(day => day.id), 'bars'];
const initialHash = location.hash.slice(1);
let currentView = viewIds.includes(initialHash) ? initialHash : 'thu';
let selectedSaturdayPlan = new URLSearchParams(location.search).get('sat') === 'lunch' ? 'lunch' : 'breakfast';
const activeSaturday = () => selectedSaturdayPlan === 'lunch' ? SATURDAY_LUNCH : DAYS.find(day => day.id === 'sat');
const activeDays = () => DAYS.map(day => day.id === 'sat' ? activeSaturday() : day);

function saturdayPlanSelectorMarkup() {
  return `<section class="sat-plan-picker" aria-labelledby="sat-plan-title">
    <div><p class="eyebrow">Choose Saturday</p><h3 id="sat-plan-title">Breakfast plan or market lunch?</h3><p>The timeline, printout and calendar use the selected plan.</p></div>
    <div class="sat-plan-picker__buttons" role="radiogroup" aria-label="Saturday itinerary plan">
      <button type="button" role="radio" data-sat-plan="lunch" aria-checked="${selectedSaturdayPlan === 'lunch'}" tabindex="${selectedSaturdayPlan === 'lunch' ? '0' : '-1'}" class="${selectedSaturdayPlan === 'lunch' ? 'is-active' : ''}"><span>Recommended</span><strong>Borough Market lunch</strong></button>
      <button type="button" role="radio" data-sat-plan="breakfast" aria-checked="${selectedSaturdayPlan === 'breakfast'}" tabindex="${selectedSaturdayPlan === 'breakfast' ? '0' : '-1'}" class="${selectedSaturdayPlan === 'breakfast' ? 'is-active' : ''}"><span>Original</span><strong>Breakfast plan</strong></button>
    </div>
  </section>`;
}

function renderDayPanels() {
  document.querySelector('#day-panels').innerHTML = activeDays().map(day => `
    <section class="day-panel" id="panel-${day.id}" role="tabpanel" aria-labelledby="tab-${day.id}" ${day.id !== currentView ? 'hidden' : ''} tabindex="0">
      <header class="day-heading">
        <div><p>${day.label} · ${day.date.slice(6,8)} October</p><h2>${day.theme}</h2><span class="day-heading__zone">All times BST · London</span></div>
        <button class="day-calendar" type="button" data-calendar-day="${day.id}">${day.id === 'sat' ? `Add ${selectedSaturdayPlan} plan` : 'Add day'}</button>
      </header>
      ${day.id === 'sat' ? saturdayPlanSelectorMarkup() : ''}
      ${day.planningNote ? `<aside class="sunday-note"><strong>${escapeHtml(day.planningAlert || 'Sunday pacing')}</strong>${day.routeStrip ? `<div class="route-strip">${escapeHtml(day.routeStrip)}</div>` : ''}<p>${escapeHtml(day.planningNote)}</p>${day.id === 'sat' ? '<button class="pub-shortlist-jump" type="button">Browse 5 other pub options <span aria-hidden="true">↓</span></button>' : ''}</aside>` : ''}
      ${day.alternative ? `<details class="route-alternative"><summary>Skipping Passyunk? Go straight to Tottenham</summary><div><p>Anyone skipping the tailgate can leave Chelsea around 11:30. Allow 75–90 minutes via Victoria and Seven Sisters, including the walk, to arrive around 12:45–13:00.</p><p>Use any remaining time for quick food and photos, then keep the same suggested 13:45 entry. This replaces the Fitzrovia stop; it is not an extra detour.</p></div></details>` : ''}
      <ol class="timeline">${day.events.map((event, index) => eventMarkup(event, day.id, index)).join('')}</ol>
      ${day.id === 'sat' ? saturdayPubShortlistMarkup() : ''}
    </section>`).join('');
}

renderDayPanels();

function barCardMarkup(bar, night) {
  const plan = bar.plans[night];
  const suggested = plan.time ? `${NIGHT_META[night].label} at ${plan.time}` : NIGHT_META[night].label;
  return `<article class="bar-card${plan.recommended ? ' bar-card--recommended' : ''}" data-bar-id="${bar.id}">
    <div class="bar-card__content">
      ${plan.recommended ? `<p class="bar-card__flag">${night === 'fri' ? 'Friday recommendation' : 'Recommendation'}</p>` : ''}${plan.nightcap ? '<p class="bar-card__flag">Optional Saturday nightcap</p>' : ''}
      <p class="bar-card__area">${escapeHtml(bar.area)}</p>
      <h3>${escapeHtml(bar.name)}</h3>
      ${bar.rank ? `<p class="bar-card__recognition">Recognised at #${bar.rank} in The World’s 50 Best Bars 2025 · <a href="https://www.the50.com/bars/best-in-the-world/list/1-50" target="_blank" rel="noopener">source <span aria-hidden="true">↗</span></a></p>` : ''}
      <dl class="bar-card__highlights"><div><dt>Known for</dt><dd>${escapeHtml(bar.knownFor)}</dd></div><div><dt>Tradeoff</dt><dd>${escapeHtml(bar.tradeoff)}</dd></div></dl>
      <div class="bar-card__take"><span>My take</span><p>${escapeHtml(bar.ourTake)}</p></div>
      ${bar.policy ? `<p class="bar-card__policy"><strong>Entry:</strong> ${escapeHtml(bar.policy)}</p>` : ''}
      ${bar.reviewSummary ? `<aside class="bar-card__review"><span>Review notes</span><p>${escapeHtml(bar.reviewSummary)}</p>${bar.reviewSource ? `<a href="${bar.reviewSource}" target="_blank" rel="noopener">${escapeHtml(bar.reviewLabel || 'Review source')} <span aria-hidden="true">↗</span></a>` : ''}</aside>` : ''}
      <dl class="bar-card__facts">
        <div><dt>Fit</dt><dd>${escapeHtml(plan.fit)}</dd></div>
        <div><dt>Journey</dt><dd>${escapeHtml(plan.travel)}</dd></div>
        <div><dt>Hours</dt><dd>${escapeHtml(plan.status)}</dd></div>
      </dl>
      <div class="bar-card__actions">
        <a href="${mapsUrl(bar.address)}" target="_blank" rel="noopener">Map <span aria-hidden="true">↗</span></a>
        <a href="${bar.source}" target="_blank" rel="noopener">Official site <span aria-hidden="true">↗</span></a>
        ${bar.policySource ? `<a href="${bar.policySource}" target="_blank" rel="noopener">Entry & group policy <span aria-hidden="true">↗</span></a>` : ''}
        ${bar.phone ? `<a href="tel:${bar.phone}">Reservations · ${escapeHtml(bar.phoneLabel)}</a>` : ''}
      </div>
      <button type="button" class="bar-calendar" data-bar-calendar="${bar.id}" data-night="${night}">Add ${escapeHtml(suggested)} <span>· tentative</span></button>
    </div>
  </article>`;
}

let selectedNight = 'fri';
function renderBars(night) {
  selectedNight = night;
  document.querySelectorAll('.night-picker [data-night]').forEach(button => {
    const active = button.dataset.night === night;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#night-rationale').innerHTML = `<strong>${escapeHtml(NIGHT_META[night].label)}</strong><p>${escapeHtml(NIGHT_META[night].rationale)}</p>`;
  document.querySelector('#bar-grid').innerHTML = BARS
    .slice()
    .filter(bar => bar.plans[night])
    .sort((a, b) => Number(Boolean(b.plans[night].recommended || b.plans[night].nightcap)) - Number(Boolean(a.plans[night].recommended || a.plans[night].nightcap)) || (a.editorialOrder ?? 99) - (b.editorialOrder ?? 99))
    .map(bar => barCardMarkup(bar, night)).join('');
}

renderBars(selectedNight);

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectDay(id, moveFocus = false) {
  currentView = id;
  tabs.forEach(tab => {
    const selected = tab.dataset.day === id;
    tab.setAttribute('aria-selected', selected);
    tab.tabIndex = selected ? 0 : -1;
    document.querySelector(`#panel-${tab.dataset.day}`).hidden = !selected;
    if (selected && moveFocus) tab.focus();
  });
  if (history.replaceState) {
    const url = new URL(location.href);
    url.hash = id;
    history.replaceState(null, '', url.toString());
  }
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectDay(tab.dataset.day));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    let target = index;
    if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') target = 0;
    if (event.key === 'End') target = tabs.length - 1;
    selectDay(tabs[target].dataset.day, true);
  });
});

document.addEventListener('click', event => {
  const planButton = event.target.closest('[data-sat-plan]');
  if (planButton) {
    selectedSaturdayPlan = planButton.dataset.satPlan;
    const url = new URL(location.href);
    url.searchParams.set('sat', selectedSaturdayPlan);
    url.hash = 'sat';
    history.replaceState(null, '', url.toString());
    currentView = 'sat';
    renderDayPanels();
    selectDay('sat');
    document.querySelector(`[data-sat-plan="${selectedSaturdayPlan}"]`).focus();
    return;
  }
  const dayCalendar = event.target.closest('[data-calendar-day]');
  if (dayCalendar) {
    const day = activeDays().find(item => item.id === dayCalendar.dataset.calendarDay);
    const suffix = day.id === 'sat' ? `-${selectedSaturdayPlan}` : '';
    makeCalendar([day], `london-${day.label.toLowerCase()}-${day.date}${suffix}.ics`);
    return;
  }
  const pubJump = event.target.closest('.pub-shortlist-jump');
  if (pubJump) {
    const heading = document.querySelector('#pub-shortlist-title');
    heading.scrollIntoView({block: 'start'});
    heading.focus({preventScroll: true});
    return;
  }
  const toggle = event.target.closest('.event__toggle');
  if (!toggle) return;
  const details = document.getElementById(toggle.getAttribute('aria-controls'));
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.textContent = open ? 'More detail' : 'Less detail';
  details.hidden = open;
});

document.addEventListener('keydown', event => {
  const planButton = event.target.closest('[data-sat-plan]');
  if (!planButton || !['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) return;
  event.preventDefault();
  const next = planButton.dataset.satPlan === 'lunch' ? 'breakfast' : 'lunch';
  document.querySelector(`[data-sat-plan="${next}"]`).click();
});

document.querySelector('#bars-entry').addEventListener('click', () => {
  selectDay('bars');
  document.querySelector('#panel-bars').focus({preventScroll: true});
  document.querySelector('.day-nav').scrollIntoView();
});
document.querySelectorAll('.night-picker [data-night]').forEach(button => button.addEventListener('click', () => renderBars(button.dataset.night)));

function icsEscape(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}
function utcStamp(date, time) {
  const year = Number(date.slice(0,4));
  const month = Number(date.slice(4,6)) - 1;
  const day = Number(date.slice(6,8));
  const [hour, minute] = time.split(':').map(Number);
  return new Date(Date.UTC(year, month, day, hour - 1, minute)).toISOString().replace(/[-:]/g,'').replace(/\.000/,'');
}
function foldIcs(line) {
  const encoder = new TextEncoder();
  const chunks = [];
  let chunk = '';
  let limit = 75;
  for (const character of line) {
    if (encoder.encode(chunk + character).length > limit) {
      chunks.push(chunk);
      chunk = character;
      limit = 74;
    } else {
      chunk += character;
    }
  }
  chunks.push(chunk);
  return chunks.join('\r\n ');
}
function makeCalendar(days, filename) {
  const stamp = new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//London 2026 Field Guide//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:London · Oct 8–11 2026','X-WR-TIMEZONE:Europe/London'];
  days.forEach(day => day.events.forEach((event, index) => {
    lines.push('BEGIN:VEVENT', `UID:${event.uid || `${day.date}-${index}@london-field-guide`}`, `DTSTAMP:${stamp}`, `DTSTART:${utcStamp(day.date,event.start)}`);
    if (event.end) lines.push(`DTEND:${utcStamp(day.date,event.end)}`);
    lines.push(`SUMMARY:${icsEscape(event.title)}`);
    if (event.place) lines.push(`LOCATION:${icsEscape(event.place)}`);
    lines.push(`DESCRIPTION:${icsEscape([event.summary,event.details,'All times shown in London time (BST).'].filter(Boolean).join('\n'))}`);
    if (event.status) lines.push(`STATUS:${event.status}`);
    lines.push('END:VEVENT');
  }));
  lines.push('END:VCALENDAR');
  const content = lines.map(foldIcs).join('\r\n') + '\r\n';
  const url = URL.createObjectURL(new Blob([content], {type:'text/calendar;charset=utf-8'}));
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = filename; document.body.append(anchor); anchor.click(); anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.querySelector('#calendar-all').addEventListener('click', () => makeCalendar(activeDays(), `london-8-11-october-2026-${selectedSaturdayPlan}.ics`));
document.querySelector('#bar-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-bar-calendar]');
  if (!button) return;
  const bar = BARS.find(item => item.id === button.dataset.barCalendar);
  const night = button.dataset.night;
  const plan = bar.plans[night];
  makeCalendar([{
    date: NIGHT_META[night].date,
    events: [{
      start: plan.time,
      end: plan.end || (bar.id === 'scarfes' && night === 'sat' ? '22:00' : undefined),
      title: `Suggested: ${bar.name}`,
      place: bar.address,
      summary: `${plan.fit}. Tentative suggestion only; this is not booked. Reconfirm hours and entry policy before going.`,
      status: 'TENTATIVE',
      uid: `bar-${bar.id}-${NIGHT_META[night].date}@london-field-guide`
    }]
  }], `tentative-${bar.id}-${NIGHT_META[night].date}.ics`);
});

document.querySelector('#share-button').addEventListener('click', async () => {
  const status = document.querySelector('#share-status');
  const data = {title: document.title, text: 'London · Oct 8–11, 2026', url: location.href};
  if (navigator.share) {
    try { await navigator.share(data); status.textContent = 'Guide shared.'; return; }
    catch (error) { if (error.name === 'AbortError') return; }
  }
  if (navigator.clipboard) {
    try { await navigator.clipboard.writeText(location.href); status.textContent = 'Link copied.'; return; }
    catch (error) { /* Use the manual copy fallback below. */ }
  }
  window.prompt('Copy this link:', location.href);
  status.textContent = 'Copy the link above to share.';
});
document.querySelector('#print-button').addEventListener('click', () => window.print());

selectDay(currentView);
window.addEventListener('hashchange', () => {
  const day = location.hash.slice(1);
  if (viewIds.includes(day)) selectDay(day);
});

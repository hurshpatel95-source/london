const POLL_URL = 'https://strawpoll.com/XOgOVx51rn3';
const POLL_RESULTS_URL = 'https://strawpoll.com/XOgOVx51rn3/results';

const BARS = [
  {
    id: 'connaught', rank: 6, name: 'Connaught Bar', area: 'Mayfair', address: 'The Connaught, Carlos Place, London W1K 2AL',
    source: 'https://www.maybourne.com/en/hotels/the-connaught/restaurants-bars/connaught-bar',
    note: 'The classic Mayfair choice, known for its martini trolley. Walk-ins only; no reservations.',
    plans: {
      fri: { time: '20:30', fit: 'Best Friday fit', travel: 'Est. 25–35 min walk or 15–25 min taxi', status: 'Open · 16:00–01:00' },
      sat: { time: '21:00', fit: 'Elegant, longer transfer', travel: 'Est. 25–35 min walk or 15–25 min taxi', status: 'Open · 16:00–01:00' }
    }
  },
  {
    id: 'satans', rank: 21, name: 'Satan’s Whiskers', area: 'Bethnal Green', address: '343 Cambridge Heath Road, London E2 9RA',
    source: 'https://www.satanswhiskers.com/', phone: '+442077398362', phoneLabel: '+44 20 7739 8362',
    note: 'Neighbourhood cocktail bar with reservations recommended by phone; walk-ins are also accepted.',
    plans: {
      fri: { time: '20:45', fit: 'East London wildcard', travel: 'Est. 25–40 min by transit or taxi', status: 'Open · Friday runs “a little later”' },
      sat: { time: '21:15', fit: 'For a livelier detour', travel: 'Est. 25–40 min by transit or taxi', status: 'Open · Saturday runs “a little later”' }
    }
  },
  {
    id: 'scarfes', rank: 31, name: 'Scarfes Bar', area: 'Holborn', address: 'Rosewood London, 252 High Holborn, London WC1V 7EN',
    source: 'https://www.rosewoodhotels.com/en/london/dining/scarfes-bar',
    policySource: 'https://scarfesbar.com/',
    note: 'The easiest move after Dishoom. For a group of five, plan on a walk-in. If parents join and we’re six or more, contact the bar about a group reservation. Tables are normally allocated for 90 minutes; nothing is booked.',
    plans: {
      fri: { time: '20:30', fit: 'Excellent Friday alternative', travel: 'Est. 15–20 min walk from Covent Garden', status: 'Open · 16:00 till late' },
      sat: { time: '21:00', fit: 'Editor’s pick · best fit', travel: 'Est. 15–20 min walk from Dishoom', status: 'Open · 16:00 till late', recommended: true }
    }
  }
];

const NIGHT_META = {
  fri: { date: '20261009', label: 'Friday 9 October', rationale: 'The existing cocktail window begins around 20:00. The Connaught is the signature choice; Scarfes is an excellent, easier alternative from Covent Garden.' },
  sat: { date: '20261010', label: 'Saturday 10 October', rationale: 'Best overall fit: walk about 15–20 minutes from Dishoom to Scarfes for a suggested 21:00 arrival. It adds a world-ranked bar without moving dinner.' }
};

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
      { start: '18:00', end: '20:00', title: 'Casual group dinner', place: 'Seven Dials London', tag: 'Venue TBD', summary: 'Dinner around Covent Garden or Seven Dials.' },
      { start: '20:00', title: 'Cocktails', place: 'Mayfair, London', tag: 'Late', summary: 'Choose Mayfair polish or a Strand rooftop.', options: ['The Connaught Bar London', 'Red Room at The Connaught London', 'Radio Rooftop at ME London'], barsCta: true }
    ]
  },
  {
    id: 'sat', date: '20261010', label: 'Saturday', theme: 'Markets, pubs & Dishoom',
    planningAlert: 'A relaxed crawl: two main pubs, one optional third stop, then the fixed 17:50 Dishoom arrival.',
    planningNote: 'Aim for roughly 30–45 minutes per pub, but treat every time as a suggestion: skip anywhere busy or linger where the group is happy. The Blackfriar and Lamb & Flag are the main anchors; The Harp is optional if there is room. Pub stops are not booked. Parents and anyone else can join partway. Pub details checked 20 September 2026.',
    routeStrip: 'The Blackfriar → The Harp (optional) → Lamb & Flag → Dishoom',
    events: [
      { start: '09:30', end: '11:30', title: 'Borough Market breakfast', place: 'Borough Market', tag: 'Come hungry', summary: 'Coffee, sausage rolls, raclette and pastries.', details: 'Look for Monmouth coffee, Ginger Pig sausage rolls, raclette and whatever pastries catch the eye.', uid: '20261010-0@london-field-guide' },
      { start: '11:30', end: '13:30', title: 'Thames & Tower Bridge walk', place: 'Tower Bridge', tag: 'Riverside walk', summary: 'Walk from Borough to Tower Bridge, cross the river and finish at Tower Hill for north-end views.', details: 'This is a free riverside walk; no paid tour is planned.', directions: { origin: 'Borough Market', destination: 'Tower Hill Station', mode: 'walking', waypoints: ['Tower Bridge'] }, uid: '20261010-1@london-field-guide' },
      { start: '13:30', end: '14:00', title: 'Tower Hill to Blackfriars', place: 'Blackfriars Station London', tag: '30-minute transfer budget', summary: 'Take the District or Circle line west from Tower Hill to Blackfriars.', details: 'Allow for the station walk and weekend service conditions.', directions: { origin: 'Tower Hill Station', destination: 'Blackfriars Station London', mode: 'transit' }, tfl: true, uid: 'saturday-towerhill-blackfriars-20261010@london-field-guide' },
      { start: '14:00', end: '14:40', title: 'Pub crawl: The Blackfriar', place: 'The Blackfriar, 174 Queen Victoria Street London EC4V 4EG', tag: 'Main stop · nothing booked', summary: 'An ornate Art Nouveau pub known for its friar mosaics and character.', details: 'Keep the stop flexible and move on if it is busy.', source: 'https://www.nicholsonspubs.co.uk/restaurants/london/theblackfriarblackfriarslondon', sourceLabel: 'Official pub information', status: 'TENTATIVE', uid: '20261010-2@london-field-guide' },
      { start: '15:10', end: '15:50', title: 'Optional: The Harp', place: 'The Harp, 47 Chandos Place London WC2N 4HS', tag: 'Optional if there is room', summary: 'A compact traditional alehouse for cask ale and cider.', details: 'Allow an estimated 25–30 minutes to walk here via Fleet Street and the Strand from The Blackfriar. Saturday hours are listed as 11:00–23:00; skip it if busy or linger depending on space and mood.', source: 'https://www.harpcoventgarden.com/', sourceLabel: 'Official pub information', directions: { origin: 'The Blackfriar London', destination: 'The Harp Covent Garden', mode: 'walking' }, status: 'TENTATIVE', uid: 'saturday-harp-20261010@london-field-guide' },
      { start: '16:00', end: '16:45', title: 'Lamb & Flag', place: 'Lamb & Flag, 33 Rose Street London WC2E 9EB', tag: 'Main stop · nothing booked', summary: 'A historic Covent Garden pub tucked into an alley.', details: 'Allow an estimated 8–10 minute walk from The Harp, or start earlier if the group skips The Harp. Saturday hours are listed as 11:00–23:00. From 16:45, linger here or wander Covent Garden and Seven Dials; leave by about 17:40 with a generous 10-minute walk budget to Dishoom.', source: 'https://www.lambandflagcoventgarden.co.uk/', sourceLabel: 'Official pub information', directions: { origin: 'The Harp Covent Garden', destination: 'Lamb and Flag Covent Garden', mode: 'walking' }, status: 'TENTATIVE', uid: 'saturday-lamb-flag-20261010@london-field-guide' },
      { start: '18:00', end: '20:30', title: 'Dinner at Dishoom Covent Garden', place: "Dishoom Covent Garden, 12 Upper St Martin's Lane London WC2H 9FB", tag: 'Booked · per group plan', summary: 'Arrive 17:50 · table for 8.', details: 'Feast notes: House Black Daal, Chicken Ruby, lamb chops, biryani, garlic naan and Keema Pau.', uid: '20261010-3@london-field-guide' }
    ]
  },
  {
    id: 'sun', date: '20261011', label: 'Sunday', theme: 'Eagles day & an early night',
    planningAlert: 'Passyunk is in Fitzrovia, central London—not near Tottenham Hotspur Stadium in north London. Allow an estimated 60–75 minutes between them by Tube and walking.',
    planningNote: 'Passyunk is the chosen pregame stop, not a stadium fan zone or a short walk from the ground. Tailgate tickets are currently listed at £20 per person and are not booked; guests and parents can opt out and go directly to Tottenham. Suggested stadium entry is 13:45, 45 minutes before kickoff, with a target of being seated by 14:20. Target home remains 19:30–20:00.',
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

const mapsUrl = place => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
const directionsUrl = ({origin, destination, mode = 'transit', waypoints = []}) => {
  const points = waypoints.length ? `&waypoints=${encodeURIComponent(waypoints.join('|'))}` : '';
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}${points}`;
};
const escapeHtml = value => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

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
    </article>
  </li>`;
}

document.querySelector('#day-panels').innerHTML = DAYS.map((day, dayIndex) => `
  <section class="day-panel" id="panel-${day.id}" role="tabpanel" aria-labelledby="tab-${day.id}" ${dayIndex ? 'hidden' : ''} tabindex="0">
    <header class="day-heading">
      <div><p>${day.label} · ${day.date.slice(6,8)} October</p><h2>${day.theme}</h2><span class="day-heading__zone">All times BST · London</span></div>
      <button class="day-calendar" type="button" data-calendar-day="${day.id}">Add day</button>
    </header>
    ${day.planningNote ? `<aside class="sunday-note"><strong>${escapeHtml(day.planningAlert || 'Sunday pacing')}</strong>${day.routeStrip ? `<div class="route-strip">${escapeHtml(day.routeStrip)}</div>` : ''}<p>${escapeHtml(day.planningNote)}</p></aside>` : ''}
    ${day.alternative ? `<details class="route-alternative"><summary>Skipping Passyunk? Go straight to Tottenham</summary><div><p>Guests or parents who opt out can leave Chelsea around 11:30. Allow 75–90 minutes via Victoria and Seven Sisters, including the walk, to arrive around 12:45–13:00.</p><p>Use any remaining time for quick food and photos, then keep the same suggested 13:45 entry. This replaces the Fitzrovia stop; it is not an extra detour.</p></div></details>` : ''}
    <ol class="timeline">${day.events.map((event, index) => eventMarkup(event, day.id, index)).join('')}</ol>
  </section>`).join('');

function barCardMarkup(bar, night) {
  const plan = bar.plans[night];
  const suggested = plan.time ? `${NIGHT_META[night].label} at ${plan.time}` : NIGHT_META[night].label;
  return `<article class="bar-card${plan.recommended ? ' bar-card--recommended' : ''}${plan.unavailable ? ' bar-card--unavailable' : ''}${bar.closed ? ' bar-card--watchlist' : ''}" data-bar-id="${bar.id}">
    <div class="bar-card__rank"><span>WORLD<br>RANK</span><strong>#${bar.rank}</strong></div>
    <div class="bar-card__content">
      ${plan.recommended ? '<p class="bar-card__flag">Saturday recommendation</p>' : ''}${bar.closed ? '<p class="bar-card__flag bar-card__flag--closed">Ranked, but temporarily closed</p>' : ''}
      <p class="bar-card__area">${escapeHtml(bar.area)}</p>
      <h3>${escapeHtml(bar.name)}</h3>
      <p class="bar-card__note">${escapeHtml(bar.note)}</p>
      <dl class="bar-card__facts">
        <div><dt>Fit</dt><dd>${escapeHtml(plan.fit)}</dd></div>
        <div><dt>Journey</dt><dd>${escapeHtml(plan.travel)}</dd></div>
        <div><dt>Hours</dt><dd>${escapeHtml(plan.status)}</dd></div>
      </dl>
      <div class="bar-card__actions">
        <a href="${mapsUrl(bar.address)}" target="_blank" rel="noopener">Map <span aria-hidden="true">↗</span></a>
        <a href="${bar.source}" target="_blank" rel="noopener">Official site <span aria-hidden="true">↗</span></a>
        <a href="https://www.the50.com/bars/best-in-the-world/list/1-50" target="_blank" rel="noopener">Rank source <span aria-hidden="true">↗</span></a>
        ${bar.policySource ? `<a href="${bar.policySource}" target="_blank" rel="noopener">Entry & group policy <span aria-hidden="true">↗</span></a>` : ''}
        ${bar.phone ? `<a href="tel:${bar.phone}">Reservations · ${escapeHtml(bar.phoneLabel)}</a>` : ''}
      </div>
      ${plan.unavailable ? '<p class="bar-card__calendar-note">No visit suggested for this night.</p>' : `<button type="button" class="bar-calendar" data-bar-calendar="${bar.id}" data-night="${night}">Add ${escapeHtml(suggested)} <span>· tentative</span></button><a class="bar-vote-link" href="${POLL_URL}" target="_blank" rel="noopener">Vote in shared poll <span aria-hidden="true">↗</span></a>`}
    </div>
  </article>`;
}

let selectedNight = 'sat';
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
    .sort((a, b) => Number(Boolean(b.plans[night].recommended)) - Number(Boolean(a.plans[night].recommended)) || a.rank - b.rank)
    .map(bar => barCardMarkup(bar, night)).join('');
}

function renderPoll() {
  const mount = document.querySelector('#poll-mount');
  mount.innerHTML = `<div class="poll-live"><strong>Voting opens in StrawPoll</strong><p>Anyone joining can vote using their first name; results are shared. Choose one of the three practical options while Tayēr remains temporarily closed. The poll allows one vote per browser and lets you update your own choice.</p><div class="poll-live__actions"><a class="poll-primary" href="${POLL_URL}" target="_blank" rel="noopener">Vote with your name <span aria-hidden="true">↗</span></a><a href="${POLL_RESULTS_URL}" target="_blank" rel="noopener">View group results <span aria-hidden="true">↗</span></a></div></div>`;
}

renderBars(selectedNight);
renderPoll();

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectDay(id, moveFocus = false) {
  tabs.forEach(tab => {
    const selected = tab.dataset.day === id;
    tab.setAttribute('aria-selected', selected);
    tab.tabIndex = selected ? 0 : -1;
    document.querySelector(`#panel-${tab.dataset.day}`).hidden = !selected;
    if (selected && moveFocus) tab.focus();
  });
  if (history.replaceState) history.replaceState(null, '', `#${id}`);
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
  const toggle = event.target.closest('.event__toggle');
  if (!toggle) return;
  const details = document.getElementById(toggle.getAttribute('aria-controls'));
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.textContent = open ? 'More detail' : 'Less detail';
  details.hidden = open;
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

document.querySelector('#calendar-all').addEventListener('click', () => makeCalendar(DAYS, 'london-8-11-october-2026.ics'));
document.querySelectorAll('[data-calendar-day]').forEach(button => button.addEventListener('click', () => {
  const day = DAYS.find(item => item.id === button.dataset.calendarDay);
  makeCalendar([day], `london-${day.label.toLowerCase()}-${day.date}.ics`);
}));
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

const viewIds = [...DAYS.map(day => day.id), 'bars'];
const initialDay = location.hash.slice(1);
if (viewIds.includes(initialDay)) selectDay(initialDay);
window.addEventListener('hashchange', () => {
  const day = location.hash.slice(1);
  if (viewIds.includes(day)) selectDay(day);
});

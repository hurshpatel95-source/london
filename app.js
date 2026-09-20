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
      { start: '20:00', title: 'Cocktails', place: 'Mayfair, London', tag: 'Late', summary: 'Choose Mayfair polish or a Strand rooftop.', options: ['The Connaught Bar London', 'Red Room at The Connaught London', 'Radio Rooftop at ME London'] }
    ]
  },
  {
    id: 'sat', date: '20261010', label: 'Saturday', theme: 'Markets, Thames & Dishoom',
    events: [
      { start: '09:30', end: '11:30', title: 'Borough Market breakfast', place: 'Borough Market', tag: 'Come hungry', summary: 'Coffee, sausage rolls, raclette and pastries.', details: 'Look for Monmouth coffee, Ginger Pig sausage rolls, raclette and whatever pastries catch the eye.' },
      { start: '11:30', end: '13:30', title: 'Walk the Thames', place: 'South Bank London', tag: 'Riverside walk', summary: 'South Bank to Tower Bridge, with Tower of London views.', directions: { origin: 'Borough Market', destination: 'Tower Bridge', mode: 'walking' } },
      { start: '14:00', end: '17:30', title: 'Football pub crawl', place: 'London', tag: 'Subject to fixtures', summary: 'Three possible pubs, depending on the football schedule.', details: 'Match availability is subject to fixtures.', options: ['Greenwood Victoria London', 'The Faltering Fullback London', 'The Famous Three Kings London'] },
      { start: '18:00', end: '20:30', title: 'Dinner at Dishoom Covent Garden', place: "Dishoom Covent Garden, 12 Upper St Martin's Lane London WC2H 9FB", tag: 'Booked · per group plan', summary: 'Arrive 17:50 · table for 8.', details: 'Feast notes: House Black Daal, Chicken Ruby, lamb chops, biryani, garlic naan and Keema Pau.' }
    ]
  },
  {
    id: 'sun', date: '20261011', label: 'Sunday', theme: 'Eagles in London',
    events: [
      { start: '08:30', end: '10:00', title: 'Chelsea coffee run', place: 'Pavilion Road Chelsea', tag: 'Wear midnight green', summary: 'Flat whites and pastries on Pavilion Road.' },
      { start: '10:15', end: '11:00', title: 'Head north to Tottenham', place: 'Tottenham Hotspur Stadium', tag: 'Travel time estimate', summary: 'Walk, Tube and Overground to White Hart Lane.', details: 'Walk to Sloane Square (~8 min per plan) → District line one stop to Victoria → Victoria line north to Seven Sisters → London Overground Weaver line to White Hart Lane → walk to the stadium.', tfl: true },
      { start: '11:00', end: '14:00', title: 'Passyunk Avenue Philly Tailgate', place: 'Tottenham Hotspur Stadium South Podium', tag: 'Reconfirm details', summary: 'Planned meetup at South Podium / Stadium Plaza.', details: 'Cheesesteaks, beer and pretzels. Event and exact location to be reconfirmed.' },
      { start: '14:30', end: '17:45', title: 'Eagles vs Jaguars', place: 'Tottenham Hotspur Stadium', tag: 'Kickoff · 14:30 BST', summary: 'Philadelphia Eagles vs Jacksonville Jaguars.', details: 'Approximate finish. Kickoff confirmed by the official Eagles schedule release.', source: 'https://www.philadelphiaeagles.com/news/eagles-jaguars-nfl-london-games-tottenham-hotspur-stadium-2026-schedule-release' }
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
    event.source ? `<a href="${event.source}" target="_blank" rel="noopener">Official game details <span aria-hidden="true">↗</span></a>` : '',
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
    <ol class="timeline">${day.events.map((event, index) => eventMarkup(event, day.id, index)).join('')}</ol>
  </section>`).join('');

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
    lines.push('BEGIN:VEVENT', `UID:${day.date}-${index}@london-field-guide`, `DTSTAMP:${stamp}`, `DTSTART:${utcStamp(day.date,event.start)}`);
    if (event.end) lines.push(`DTEND:${utcStamp(day.date,event.end)}`);
    lines.push(`SUMMARY:${icsEscape(event.title)}`);
    if (event.place) lines.push(`LOCATION:${icsEscape(event.place)}`);
    lines.push(`DESCRIPTION:${icsEscape([event.summary,event.details,'All times shown in London time (BST).'].filter(Boolean).join('\n'))}`, 'END:VEVENT');
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

const initialDay = location.hash.slice(1);
if (DAYS.some(day => day.id === initialDay)) selectDay(initialDay);
window.addEventListener('hashchange', () => {
  const day = location.hash.slice(1);
  if (DAYS.some(item => item.id === day)) selectDay(day);
});

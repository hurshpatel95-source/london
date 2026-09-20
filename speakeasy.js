const SPEAKEASIES = [
  {
    name: 'Blind Spot', area: 'Covent Garden · closest West End fit', address: "St Martins Lane London, 45 St Martin's Lane, London WC2N 4HX",
    entrance: 'Inside St Martins Lane hotel, look for the boutique tea counter and golden-hand door.',
    vibe: 'Moody and sophisticated with globally inspired cocktails; DJ nights bring livelier energy.',
    fit: 'A close swap after Friday dinner or Saturday Dishoom; choose it instead of stacking another nightcap.', hours: 'Fri–Sat 17:00–02:00',
    entry: 'Non-hotel guests are welcome. Book a table through the official venue page; confirm larger groups directly.',
    website: 'https://morgansoriginals.com/st-martins-lane/restaurants-bars/blind-spot/', menu: 'https://issuu.com/ennismore_/docs/blind_spot_london_-_drinks_menu_-_oct_22?fr=sOWVjOTY5NjkyNjY', menuLabel: 'Bar menu', booking: 'https://morgansoriginals.com/st-martins-lane/restaurants-bars/blind-spot/'
  },
  {
    name: 'The Luggage Room', area: 'Mayfair · calmer option', address: 'London Marriott Hotel Grosvenor Square, London W1K 6JP',
    entrance: 'A discreet 1920s-inspired hideaway inside the London Marriott Grosvenor Square, entered through its signature Luggage Entrance.',
    vibe: 'Dim, elegant and conversation-friendly. Special entertainment may appear, but it is not a nightly promise.',
    fit: 'A hidden-style Friday alternative aligned with the Mayfair bars, without an extra cross-city detour.', hours: 'Thu–Sat 17:00–02:00',
    entry: 'Smart casual. Reservations are recommended because the room is often busy.',
    website: 'https://www.luggageroom.co.uk/', menu: 'https://www.luggageroom.co.uk/our-menus', menuLabel: 'Menus', booking: 'https://www.luggageroom.co.uk/'
  },
  {
    name: 'Cahoots Underground', area: 'Soho / Carnaby · full themed experience', address: '13 Kingly Court London W1B 5PW',
    entrance: 'Hidden below Kingly Court as a theatrical 1940s Underground station, with an entry kiosk, platforms and a life-size carriage.',
    vibe: 'Immersive and energetic: swing, DJs, piano singalongs and theatrical serves. This is the fun choice, not the quietest drink.',
    fit: 'A Friday Soho alternative, or a replacement for Saturday’s nightcap rather than an extra stop.', hours: 'Thu–Fri 16:00–02:00 · Sat 12:00–02:00',
    entry: 'Strictly 21+. Online bookings cover up to 12; groups of 13+ contact the venue. Steps and narrow passages make it inaccessible to wheelchairs.',
    website: 'https://www.cahoots.co.uk/underground/', menu: 'https://www.cahoots.co.uk/underground/menus/', menuLabel: 'Menus', booking: 'https://www.cahoots.co.uk/underground/'
  },
  {
    name: 'Opium Chinatown', area: 'Chinatown · choose your room', address: '15–16 Gerrard Street London W1D 6JE',
    entrance: 'Look for the jade-coloured door between Lotus Garden and Dumplings’ Legend.',
    vibe: 'A multi-room, 1920s-Shanghai-inspired cocktail and dim sum parlour. Apothecary is vibrant; Peony is more intimate; room feel varies on busy nights.',
    fit: 'A Friday or Saturday West End alternative, farther west than Blind Spot but still near the evening route.', hours: 'Fri–Sat 17:00–03:00 · kitchen to 02:00',
    entry: 'Strictly 18+ with Challenge 25; bring physical ID. Two-hour bookings are held 15 minutes. Book up to 12 online; larger groups enquire.',
    website: 'https://www.opiumchinatown.com/', menu: 'https://www.opiumchinatown.com/apothecary-bar', menuLabel: 'Cocktails & dim sum', booking: 'https://www.opiumchinatown.com/reservations', extraMenu: 'https://www.opiumchinatown.com/dim-sum-menu', extraMenuLabel: 'Dim sum menu'
  },
  {
    name: 'Barts', area: 'Chelsea · lively wildcard', address: 'Chelsea Cloisters, Sloane Avenue, London SW3 3DW',
    entrance: 'An unassuming black door inside Chelsea Cloisters opens into a hidden 1920s speakeasy and Agave Garden.',
    vibe: 'Low-lit and playful with elaborate cocktails, becoming party-led later. It is livelier than the relaxed Thursday nightcap guide.',
    fit: 'The closest hidden-bar option for an optional Thursday Chelsea stop if the group still has energy.', hours: 'Thu 17:00–02:00 · Fri–Sat 17:00–02:30',
    entry: 'Strictly 21+. Smart casual is encouraged. Use the official booking or guestlist process for entry instructions; walk-in entry is not guaranteed.',
    website: 'https://www.barts-london.com/', menu: 'https://www.barts-london.com/menus/', menuLabel: 'Menus', booking: 'https://www.barts-london.com/'
  }
];

(() => {
  const STORAGE_KEY = 'london-secret-room-v1';
  const dialog = document.querySelector('#secret-dialog');
  const trigger = document.querySelector('#secret-trigger');
  const riddle = document.querySelector('#secret-riddle');
  const room = document.querySelector('#secret-room');
  const form = document.querySelector('#secret-form');
  const answer = document.querySelector('#secret-answer');
  const error = document.querySelector('#secret-error');
  const hintButton = document.querySelector('#secret-hint');
  const hintText = document.querySelector('#secret-hint-text');
  const skip = document.querySelector('#secret-skip');
  const closeButton = dialog.querySelector('.secret-close');
  let hintCount = 0;
  let unlockedThisSession = false;
  let lastTrigger = trigger;
  let openingTimer = null;

  const storage = {
    get() { try { return localStorage.getItem(STORAGE_KEY) === 'unlocked'; } catch (_) { return false; } },
    set() { try { localStorage.setItem(STORAGE_KEY, 'unlocked'); } catch (_) {} },
    clear() { try { localStorage.removeItem(STORAGE_KEY); } catch (_) {} }
  };
  const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const mapUrl = address => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const normalize = value => value.toLowerCase().replace(/[^a-z]/g, '');
  const accepted = new Set(['thames', 'thethames', 'riverthames', 'theriverthames', 'thamesriver']);

  function cardMarkup(bar) {
    return `<article class="secret-card">
      <p class="secret-card__area">${escapeHtml(bar.area)}</p><h3>${escapeHtml(bar.name)}</h3>
      <p><strong>The entrance:</strong> ${escapeHtml(bar.entrance)}</p>
      <dl><div><dt>Atmosphere</dt><dd>${escapeHtml(bar.vibe)}</dd></div><div><dt>When it fits</dt><dd>${escapeHtml(bar.fit)}</dd></div><div><dt>Hours</dt><dd>${escapeHtml(bar.hours)}</dd></div><div><dt>Entry</dt><dd>${escapeHtml(bar.entry)}</dd></div></dl>
      <div class="secret-card__links"><a href="${mapUrl(bar.address)}" target="_blank" rel="noopener">Map ↗</a><a href="${bar.website}" target="_blank" rel="noopener">Website ↗</a><a href="${bar.menu}" target="_blank" rel="noopener">${escapeHtml(bar.menuLabel)} ↗</a>${bar.extraMenu ? `<a href="${bar.extraMenu}" target="_blank" rel="noopener">${escapeHtml(bar.extraMenuLabel)} ↗</a>` : ''}<a href="${bar.booking}" target="_blank" rel="noopener">Booking ↗</a></div>
    </article>`;
  }

  function renderRoom() {
    if (room.firstChild) return;
    room.innerHTML = `<section class="secret-room" aria-labelledby="secret-room-title"><header class="secret-room__head"><p class="secret-kicker">Unlocked · five doors worth knowing</p><h2 id="secret-room-title" tabindex="-1">The Night Ledger</h2><p>Five doors, five different moods. Choose one that fits your evening: Chelsea on Thursday, Mayfair or the West End on Friday, or near Dishoom on Saturday.</p></header><div class="secret-room__grid">${SPEAKEASIES.map(cardMarkup).join('')}</div><button type="button" class="secret-lock">Lock the door & reset the riddle</button></section>`;
    room.querySelector('.secret-lock').addEventListener('click', lockRoom);
  }

  function revealRoom(remember = true, immediate = false) {
    if (openingTimer) return;
    error.textContent = '';
    answer.setAttribute('aria-invalid', 'false');
    if (remember) { unlockedThisSession = true; storage.set(); }
    if (immediate || room.firstChild) {
      renderRoom(); riddle.hidden = true; dialog.classList.add('is-unlocked');
      dialog.setAttribute('aria-labelledby', 'secret-room-title');
      trigger.querySelector('strong').textContent = 'Back to the room';
      trigger.setAttribute('aria-label', 'Back to the hidden London bar guide');
      room.querySelector('#secret-room-title').focus();
      return;
    }
    dialog.classList.add('is-opening');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    openingTimer = setTimeout(() => {
      openingTimer = null;
      if (!dialog.open) return;
      renderRoom();
      riddle.hidden = true;
      dialog.classList.remove('is-opening');
      dialog.classList.add('is-unlocked');
      dialog.setAttribute('aria-labelledby', 'secret-room-title');
      trigger.querySelector('strong').textContent = 'Back to the room';
      trigger.setAttribute('aria-label', 'Back to the hidden London bar guide');
      room.querySelector('#secret-room-title').focus();
    }, reduced ? 0 : 430);
  }

  function resetRiddle() {
    hintCount = 0; answer.value = ''; error.textContent = ''; hintText.textContent = ''; answer.setAttribute('aria-invalid', 'false');
    hintButton.hidden = false; hintButton.textContent = 'A quiet hint'; skip.hidden = true;
  }

  function lockRoom() {
    if (openingTimer) { clearTimeout(openingTimer); openingTimer = null; }
    storage.clear(); unlockedThisSession = false; room.replaceChildren(); riddle.hidden = false;
    dialog.classList.remove('is-unlocked', 'is-opening'); trigger.querySelector('strong').textContent = 'Knock quietly';
    trigger.setAttribute('aria-label', 'Knock quietly to discover the hidden London bar guide');
    dialog.setAttribute('aria-labelledby', 'secret-title');
    resetRiddle(); answer.focus();
  }

  trigger.addEventListener('click', () => {
    lastTrigger = trigger;
    dialog.showModal();
    document.body.classList.add('secret-dialog-open');
    if (unlockedThisSession || storage.get()) revealRoom(false, true);
    else { resetRiddle(); requestAnimationFrame(() => { if (dialog.open && !riddle.hidden) answer.focus(); }); }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const value = normalize(answer.value);
    if (!value) { answer.setAttribute('aria-invalid', 'true'); error.textContent = 'Offer the doorman an answer first.'; answer.focus(); return; }
    if (!accepted.has(value)) { answer.setAttribute('aria-invalid', 'true'); error.textContent = 'The latch stays still. Try the river running through the clues.'; answer.select(); return; }
    revealRoom(true);
  });

  hintButton.addEventListener('click', () => {
    hintCount += 1;
    if (hintCount === 1) {
      hintText.textContent = 'Think of the view between Westminster and Tower Bridge.';
      hintButton.textContent = 'One more hint';
    } else {
      hintText.textContent = 'London’s river. Six letters.';
      hintButton.hidden = true;
      skip.hidden = false;
    }
  });
  skip.addEventListener('click', () => revealRoom(true));
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    if (openingTimer) { clearTimeout(openingTimer); openingTimer = null; }
    document.body.classList.remove('secret-dialog-open');
    dialog.classList.remove('is-opening');
    if (lastTrigger) lastTrigger.focus();
  });
})();

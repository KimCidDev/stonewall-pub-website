# Stonewall Pub — new website (preview)

New mobile-first site for **Stonewall Pub**, a neighbourhood pub at
735 Ranchlands Blvd NW, Calgary, AB. Built by Femik.

**Status:** prototype — homepage preview only, not yet validated.
**Repository:** https://github.com/KimCidDev/stonewall-pub-website
**Public link (GitHub Pages):** https://kimciddev.github.io/stonewall-pub-website/

Tested on mobile (390px) and desktop (1024px and 1440px).

## What's in the preview

- The pub's real logo (`assets/logo-stonewall.png`; a cream copy for dark backgrounds)
- Visual direction: a pub at night — dark mahogany, bottle green, aged brass and the
  oxblood of the logo; chalkboard for the daily special; Cormorant Garamond + Source Serif 4

- Sticky action bar: **Book a table**, **See the menu**, tap-to-call — always on screen
- Live "Open now / Closed" status in Calgary time
- Today's special with the real date, plus the whole week
- Food menu with a **photo slot per dish** (no stock photos). Appetizers (15 dishes)
  are the real menu; Sliders, Handhelds, Pies, Sides, Main Course and Breakfast are
  **example dishes for the mockup** — descriptions and prices are placeholders
- Nights at Stonewall (karaoke, game nights, live music, free pool Sunday, darts)
- Booking form with readable 12-hour slots, only inside opening hours
- Address, directions, hours table (today highlighted), working Instagram link

Booking **simulates the full flow** (sending → confirmation with reference number,
next steps, example confirmation text, working "Add to calendar" .ics, directions).
Nothing is actually booked: it must be connected to the pub's current booking
system before launch.

## How to open

No build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
# then open http://localhost:8000 (on your phone: http://<your-computer-ip>:8000)
```

## Files

| File | What it does |
| --- | --- |
| `index.html` | Homepage markup |
| `css/styles.css` | All styles, mobile-first |
| `js/data.js` | **Content to edit**: hours, daily specials, menu, booking rules |
| `assets/` | Logo (original + cream), favicon; `assets/dishes/` for dish photos |
| `docs/dish-photo-prompts.md` | Prompts and file names for the 39 dish photos |
| `js/main.js` | Behaviour: open status, specials, menu tabs, time slots, form |

## Still to confirm with the owner — `[a confirmar]`

Prices (as shown Nov 15, 2026) · specials Tue–Fri · happy hour outside Sunday ·
event dates · what happens after a booking request · group limit & cancellation
policy · last seating time · dietary/allergen info · menu PDF · parking & transit ·
the other menu categories (Sliders, Handhelds, Pies, Sides, Main Course, Breakfast).

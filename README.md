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
- Food menu (Appetizers, 15 dishes) with a reserved **photo slot per dish** —
  no stock photos; the slots are for the in-house photo session
- Nights at Stonewall (karaoke, game nights, live music, free pool Sunday, darts)
- Booking form with readable 12-hour slots, only inside opening hours
- Address, directions, hours table (today highlighted), working Instagram link

Booking is a **preview only**: the form validates and shows a summary but sends
nothing. It must be connected to the pub's current booking system before launch.

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
| `assets/` | Logo (original + cream), favicon |
| `js/main.js` | Behaviour: open status, specials, menu tabs, time slots, form |

## Still to confirm with the owner — `[a confirmar]`

Prices (as shown Nov 15, 2026) · specials Tue–Fri · happy hour outside Sunday ·
event dates · what happens after a booking request · group limit & cancellation
policy · last seating time · dietary/allergen info · menu PDF · parking & transit ·
the other menu categories (Sliders, Handhelds, Pies, Sides, Main Course, Breakfast).

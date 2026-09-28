# Europe 2027 invitation

A lightweight public invitation: proposed 21-night route, city and day itineraries, alternative routes, transport, lodging comparison, budget, and Tally RSVP. Includes two representative lodging photographs. No database, analytics or private attendee data.

## Develop
Requires Node 20+. No third-party dependencies.

```sh
npm run build
npm run check
npm start
```

Preview: http://127.0.0.1:4173. Rebuild and reload after edits.

## Files
- `trip.mjs`: public city data, costs, routes and published Tally link.
- `additions.mjs`: corrected 14-night routes, finance timeline and international airfare.
- `lodging.mjs`: full-stay quote calculator and hostel/apartment experience comparison.
- `build.mjs`: semantic HTML and route graphic; generates `dist/index.html`.
- `styles.css`: responsive dark green / lime layout and typography.
- `app.js`: optional Tally embed, city links and lodging comparison.
- `check.mjs`: route, budget, assets and release consistency checks.
- `serve.mjs`: localhost preview server.
- `vercel.json`: static build and deployment configuration.

Survey: https://tally.so/r/q46ev9

## Deploy
Import this repository into Vercel on the free Hobby plan. Framework: Other. Build: `npm run build`. Output: `dist`. No environment variables, paid features or custom domain needed.

Before release: `npm run build` then `node check.mjs --release`.

## Editorial constraints
All plans and costs are provisional. Keep international airfare separate. The original inside-Europe target is $2,600–$2,700; category allocations illustrate a $2,600 plan. The wider range is a planning model, not verified 2027 quotes. Named hostels, clubs and attractions are possibilities. Linked providers supply current details.

The lodging calculator takes a complete apartment quote and divides it by a visible group size (default six). It compares group and individual totals with dorm allowances. No apartment is selected or priced. Real listings require dates, capacity, taxes and fees.

Tally owns responses. Do not commit attendee names, private contact details, credentials or responses. Keep unrelated conversations out of this project.

The static content works without JavaScript. JavaScript enables the quote calculator and optional embed. A direct Tally link is always available. Typography uses Google Fonts with local fallbacks.

## Short routes and airfare
London is a one-night entry stop in addition to the main-country count. Four main countries: London 1 / Paris 3 / Amsterdam 3 / Berlin 4 / Prague 3. Three main countries: London 1 / Paris 4 / Amsterdam 4 / Berlin 5. Both total 14 nights (approximately 15 days). Inside-Europe ranges: $1,460–$2,325 and $1,500–$2,370. International airfare: $500–$750 extra. Combined ranges: $1,960–$3,075 and $2,000–$3,120. Featured-trip target plus airfare: $3,100–$3,450.

Two lodging photos load from Unsplash; Google Fonts and Tally are the other external resources. Photos are representative, not listings. Official sources are linked in the finance and lodging sections.

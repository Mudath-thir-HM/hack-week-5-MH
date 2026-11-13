# Alumni — AFCSC Jaji

Hall of Fame kiosk screen for the Department of Air Warfare: the alumni of the
Junior Course and the Senior Course, travelled as a timeline.

## Run
- `run.bat` — Edge kiosk, fullscreen.
- `prepare.bat` — once, puts a shortcut on the Desktop.
- No server, no build, no network. `index.html` also opens in a tab.

## Structure
1. **Timeline** — five eras, 1978 → today. Drag, use the arrows, or touch a year on
   the rail. Each panel brings its own photograph, a giant year, and floating cards.
2. **Chapters** — the menu overlay: The College, Junior Course, Senior Course,
   Best participants, Allied officers.
3. **Roll** — the browsable list, filterable by course, best participants, allied officers.
4. **Profile** — rank insignia, name, course and year, why they are on the wall,
   achievements, career milestones.

## Data
`data/alumni.js` — one file, sample content from the client's workbook, clearly
marked. Every profile renders without a photograph: the rank insignia stands in
for the portrait, and a typographic plate is used where no insignia was supplied.

## Dev flags
`?snap=panel0…panel4 | nav | gallery | best | profile` freezes a state for review.

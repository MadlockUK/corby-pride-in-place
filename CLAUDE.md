# Rules for this repo

## Plain English for every data set (standing rule)

Anything that presents data to the public must be explained in plain English, aimed at a resident with no statistics background.

- Every indicator in `index.html` (the `IND` list) must have a `plain` description: what it measures, and whether higher or lower is worse. No unexplained jargon or acronyms (IMD, LSOA, IDACI, FSM6, EHCP and so on) without saying what they mean.
- Every live layer in `OVERLAYS` needs a `plain` description too, and option labels (e.g. planning types) must explain themselves.
- Every new data set, layer or popup field needs the same, and a source line in the README.
- Add the description in the same change as the data. Don't ship data without it.
- Run `node scripts/check-plain-english.js` before committing; it fails if an indicator has no description.

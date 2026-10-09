# Corby Pride in Place – Interactive Map

**Live map:** https://madlockuk.github.io/corby-pride-in-place/

An interactive map of the Corby Pride in Place neighbourhood (Kingswood, Hazel Leys & Exeter), showing deprivation, Census 2021 and claimant data by LSOA.

## What the map shows

- Nine LSOAs: those in MSOA E02005617, plus the Exeter LSOAs E01026951 and E01026950
- 14,178 residents
- All nine LSOAs are in England's most deprived 25%

The boundary and data file is in [`data/corby-pip-khle.geojson`](data/corby-pip-khle.geojson).

## Sources

- ONS Open Geography Portal boundaries (LSOA Dec 2021 BGC V5, MSOA Dec 2021 BGC V3). Contains OS data © Crown copyright and database right 2021. Source: Office for National Statistics licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
- English Indices of Deprivation 2025 (MHCLG)
- Census 2021 and claimant count (ONS via Nomis)
- DfE school data 2024/25 (school locations approximate)
- Base map © Mapbox © OpenStreetMap contributors

## Plain English rule

Every data set on the map is explained in plain English: each indicator has a short description of what it measures and which way is worse (shown under the "Show on map" dropdown), and jargon in popups is spelled out. This applies to any data added in future. See [`CLAUDE.md`](CLAUDE.md); `node scripts/check-plain-english.js` checks every indicator has a description.

### Glossary

- **LSOA** (Lower-layer Super Output Area): a small statistical area of roughly 1,500 people. The map shows nine.
- **MSOA** (Middle-layer Super Output Area): a larger area made up of several LSOAs.
- **IMD** (Index of Multiple Deprivation): the government's official measure of how deprived an area is. Rank 1 is the most deprived of 33,755 areas in England.
- **IDACI / IDAOPI**: the share of children / older people living in low-income families.
- **Claimant rate**: the share of 16-64 year-olds claiming Universal Credit or Jobseeker's Allowance for being out of work or on a low income.

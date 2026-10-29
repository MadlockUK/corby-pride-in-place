# Corby Pride in Place – Interactive Map

**Live map:** https://madlockuk.github.io/corby-pride-in-place/

An interactive map of the Corby Pride in Place neighbourhood (Kingswood, Hazel Leys & Exeter), showing deprivation, Census 2021, claimant, benefits, health, crime and street-fault data by LSOA. The Pride in Place boundary stays the focus; the other 28 neighbourhoods in the Corby Town Council area are shown faded for comparison, and a **Whole town (37)** switch ranks all of them.

## What the map shows

- Nine LSOAs: those in MSOA E02005617, plus the Exeter LSOAs E01026951 and E01026950
- 14,178 residents
- All nine LSOAs are in England's most deprived 25%
- For comparison: all 37 LSOAs in Corby civil parish (the Corby Town Council area, 62,335 residents), with the four town council wards (Corby West, Kingswood, Lloyds, Oakley)

The page's data (all 37 LSOAs, the Pride in Place boundary, wards and schools) is in [`data/corby-town.geojson`](data/corby-town.geojson). The original nine-LSOA data pack file is kept unchanged in [`data/corby-pip-khle.geojson`](data/corby-pip-khle.geojson).

## Indicators added for the whole town

| Indicator | Source | Period |
|---|---|---|
| People on Universal Credit, % of residents | DWP Stat-Xplore (UC_Monthly) | May 2026 |
| Personal Independence Payment, % of residents | DWP Stat-Xplore (PIP_Monthly_new) | July 2026 |
| Bad or very bad health; unpaid carers 20+ hours a week | Census 2021 TS037, TS039 (Nomis) | March 2021 |
| Police-recorded crime and anti-social behaviour, per 1,000 residents | data.police.uk, counted into each LSOA by location | Sep 2025 to Aug 2026 |
| Street faults reported to the council, per 1,000 residents | NNC FixMyStreet Pro Open311 feed, counted by location | Oct 2025 to Sep 2026 |
| Claimant rate (refreshed for all 37) | ONS/DWP claimant count via Nomis | September 2026 |

For the 28 LSOAs outside the Pride in Place boundary, IMD 2025 ranks come from MHCLG File 7 and Census figures from Nomis, worked out the same way as the data pack. The method reproduces the pack's figures exactly for all nine Pride in Place LSOAs. Wards are the parish wards in the North Northamptonshire (Electoral Changes) Order 2024 (SI 2024/157), drawn as the May 2025 council wards clipped to Corby parish. Six LSOAs straddle a ward line and are listed under the ward that holds most of their output areas.

## Live open data layers

Below the indicator list, the panel has a set of **live layers** a viewer can switch on. Each one is fetched in the browser, when ticked, straight from a public UK open-data API (no keys, nothing stored):

| Layer | Source | What you get |
|---|---|---|
| Police-recorded crime and ASB | [data.police.uk](https://data.police.uk/docs/) | Incidents inside the boundary for a chosen month and category, grouped by anonymised map point, with outcomes |
| Police neighbourhood teams | data.police.uk | The team area(s) covering the estate, with current published priorities and contact |
| Storm overflows: live status | Anglian Water via Stream (ArcGIS) | Overflows within ~3 km, coloured spilling / not spilling / offline |
| Planning and land designations | [planning.data.gov.uk](https://www.planning.data.gov.uk/docs) | Brownfield sites, conservation areas, listed buildings, tree preservation orders, ancient woodland and more |

Also in the panel, **Find a postcode**: looks a postcode up on [postcodes.io](https://postcodes.io), drops a pin, and says whether it is inside the Pride in Place boundary, with its ward, constituency, LSOA and IMD 2025 rank.

If a source is down or refuses a request from the page, that layer shows an error and the rest of the map keeps working.

## Sources

- ONS Open Geography Portal boundaries (LSOA Dec 2021 BGC V5, MSOA Dec 2021 BGC V3). Contains OS data © Crown copyright and database right 2021. Source: Office for National Statistics licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
- English Indices of Deprivation 2025 (MHCLG)
- Census 2021 and claimant count (ONS via Nomis)
- DfE school data 2024/25 (school locations approximate)
- Town council area and wards: ONS Parishes Dec 2025 (BGC), Wards May 2025 (BGC), OA21 to ward and parish lookups (OGL v3.0)
- DWP Stat-Xplore: Universal Credit and Personal Independence Payment by LSOA (Crown copyright, OGL v3.0)
- Crime by LSOA: data.police.uk (Home Office, OGL v3.0)
- Street faults: North Northamptonshire Council FixMyStreet Pro (public Open311 feed). Residents' reports, not checked faults; highways categories only
- Live layers: data.police.uk (Home Office, OGL v3); Anglian Water Services storm overflow data (CC BY 4.0); Planning Data Platform (OGL v3); postcodes.io (ONS Postcode Directory, OGL)
- Base map © Mapbox © OpenStreetMap contributors

## Plain English rule

Every data set on the map is explained in plain English: each indicator has a short description of what it measures and which way is worse (shown under the "Show on map" dropdown), and jargon in popups is spelled out. This applies to any data added in future. See [`CLAUDE.md`](CLAUDE.md); `node scripts/check-plain-english.js` checks every indicator has a description.

### Glossary

- **LSOA** (Lower-layer Super Output Area): a small statistical area of roughly 1,500 people. The map shows nine.
- **MSOA** (Middle-layer Super Output Area): a larger area made up of several LSOAs.
- **IMD** (Index of Multiple Deprivation): the government's official measure of how deprived an area is. Rank 1 is the most deprived of 33,755 areas in England.
- **IDACI / IDAOPI**: the share of children / older people living in low-income families.
- **Universal Credit**: the main means-tested benefit for working-age people, in or out of work.
- **PIP** (Personal Independence Payment): a benefit for the extra costs of long-term illness or disability.
- **ASB** (anti-social behaviour): nuisance, rowdy or intimidating behaviour reported to the police. It is counted separately from crime.
- **Per 1,000 residents**: the count divided by the number of people living there (Census 2021), times 1,000, so areas of different sizes can be compared.
- **Claimant rate**: the share of 16-64 year-olds claiming Universal Credit or Jobseeker's Allowance for being out of work or on a low income.

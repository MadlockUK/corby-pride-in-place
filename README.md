# Corby Pride in Place – Interactive Map

**Live map:** https://madlockuk.github.io/corby-pride-in-place/

An interactive map of the Corby Pride in Place neighbourhood (Kingswood, Hazel Leys & Exeter), showing deprivation, Census 2021 and claimant data by LSOA.

## What the map shows

- Nine LSOAs: those in MSOA E02005617, plus the Exeter LSOAs E01026951 and E01026950
- 14,178 residents
- All nine LSOAs are in England's most deprived 25%

The boundary and data file is in [`data/corby-pip-khle.geojson`](data/corby-pip-khle.geojson).

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
- Live layers: data.police.uk (Home Office, OGL v3); Anglian Water Services storm overflow data (CC BY 4.0); Planning Data Platform (OGL v3); postcodes.io (ONS Postcode Directory, OGL)
- Base map © Mapbox © OpenStreetMap contributors

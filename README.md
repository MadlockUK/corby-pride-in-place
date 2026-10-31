# Corby Pride in Place – Interactive Map

**Live map:** https://madlockuk.github.io/corby-pride-in-place/

An interactive map of the Corby Pride in Place neighbourhood (Kingswood, Hazel Leys & Exeter), showing deprivation, Census 2021, claimant, benefits, health, fuel poverty, crime and street-fault data by LSOA. The Pride in Place boundary stays the focus; the other 28 neighbourhoods in the Corby Town Council area are shown faded for comparison, and a **Whole town (37)** switch ranks all of them.

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
| Pension Credit and Attendance Allowance, % of residents 65+ | DWP Stat-Xplore (PC_New, AA_Entitled_New) | March 2026 |
| Carer's Allowance, % of residents 16+ | DWP Stat-Xplore (CA_Entitled_New) | March 2026 |
| Children in low-income families (relative, before housing costs), % of under-16s | DWP Stat-Xplore (CILIF_REL), LSOA level | 2024/25 (trend from 2021/22) |
| Households in fuel poverty (Low Income Low Energy Efficiency measure), % of households | DESNZ Sub-regional fuel poverty data 2026, Table 4 (LSOA) | 2024 |
| Homes rated D or below, and E to G, for energy efficiency (EPCs), % of homes with a certificate; heating fuel | MHCLG Get energy performance of buildings data (domestic EPC register) | Certificates lodged 2008 to Oct 2026 |
| Life expectancy at birth (men, women), by MSOA | OHID Fingertips, Local Health profile (indicator 93283) | 2019 to 2023 |
| Healthy life expectancy at birth (men, women), by MSOA | OHID Fingertips, Local Health profile (indicator 94359, Census 2021 based) | 2019 to 2023 |
| Children with obesity, Reception and Year 6, by MSOA | OHID Fingertips (indicators 93105, 93107; National Child Measurement Programme) | 2022/23 to 2024/25 |
| Emergency hospital admissions, all causes (England = 100), by MSOA | OHID Fingertips (indicator 93227) | 2016/17 to 2020/21 |
| Homes within 400 m of a bus stop with 2+ buses an hour (weekday 7am to 7pm), 4+ after 7pm, or any on Sunday; bus stops layer | DfT Bus Open Data Service, East Midlands GTFS timetable feed (version 22 Oct 2026) | Timetable for Tue 3, Sat 7, Sun 8 Nov 2026 |
| Road casualties, and killed or seriously injured, per 1,000 residents; road collisions layer | DfT road safety data (STATS19), collisions and casualties last-5-years files | 2021 to 2025 |
| Police stop and searches per 1,000 residents; stop and search layer | data.police.uk stops-force, Northamptonshire | Sep 2025 to Aug 2026 |
| Food businesses with the top hygiene rating (5), % of rated businesses; takeaways and sandwich shops per 1,000 residents | Food Standards Agency Food Hygiene Rating Scheme API (v2) | Ratings published to 30 Oct 2026 |
| Median house price paid, with sales and new-build share | HM Land Registry Price Paid Data (linked data endpoint) | Sales Nov 2023 to Sep 2026 |
| Average private rent and annual change (council area only) | ONS Price Index of Private Rents, 21 Oct 2026 release | September 2026 |
| Schools: pupils, free school meals, first language, SEN, absence, attainment, for all 26 schools in or serving Corby | DfE Explore Education Statistics and GIAS | School year 2024/25 |
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
- Schools: DfE school data 2024/25, for all open schools in or serving Corby (26): Get Information about Schools register (GIAS) for the list; Explore Education Statistics for pupils and free school meals (Schools, pupils and their characteristics), SEN support and EHC plans (Special educational needs in England), absence (Pupil absence in schools in England), and KS2 / KS4 attainment (OGL v3.0). Locations are postcode centroids (approximate). England comparisons are for state-funded schools of the same phase from the same files. Free school meals = pupils known to be eligible on census day, which replaces the earlier FSM6 figure for the original four schools.
- Town council area and wards: ONS Parishes Dec 2025 (BGC), Wards May 2025 (BGC), OA21 to ward and parish lookups (OGL v3.0)
- DWP Stat-Xplore: Universal Credit, Personal Independence Payment, Pension Credit, Attendance Allowance, Carer's Allowance and Children in Low Income Families by LSOA (Crown copyright, OGL v3.0). Shares use Census 2021 age groups (TS007B) as the base, so they are a guide rather than official rates; DWP applies small random adjustments to small-area counts
- Fuel poverty: Department for Energy Security and Net Zero, [Sub-regional fuel poverty data 2026 (2024 data)](https://www.gov.uk/government/statistics/sub-regional-fuel-poverty-data-2026-2024-data), LSOA table, with North Northants and England from the same release (OGL v3.0). Modelled estimates: DESNZ advises using them to spot areas of high or low fuel poverty, not to track one LSOA over time. Pride in Place and Corby town figures add up the LSOA estimates
- Energy ratings (EPCs): Ministry of Housing, Communities and Local Government, [Get energy performance of buildings data](https://get-energy-performance-data.communities.gov.uk/), domestic certificates full-load CSV (regenerated 13 Oct 2026; OGL v3.0). Latest certificate per property (by UPRN, or by address where there is none), placed in an LSOA through its postcode (postcodes.io, 2021 LSOAs). Rates are of homes that have a certificate, not of all homes: only homes sold, let or improved since 2008, and new builds, have one; ratings can be years old; coverage varies by tenure. North Northants and England use the same method on every certificate in the file. Pride in Place and Corby town figures add up the LSOA counts.
- Health: Office for Health Improvement and Disparities, [Fingertips](https://fingertips.phe.org.uk/) Local Health profile at MSOA level (OGL v3.0): life expectancy and healthy life expectancy at birth, Reception and Year 6 obesity (National Child Measurement Programme), emergency hospital admissions. Published for MSOAs only, so each LSOA shows the value of the MSOA it sits in (matched through postcodes.io msoa21 codes; the 37 LSOAs fall in 8 MSOAs). Pride in Place and Corby town figures are population-weighted averages of the MSOA values (approximate); North Northants and England are Fingertips' own. The obesity indicators are for children (no adult obesity at MSOA level); the admissions figures stop at 2020/21.
- Buses: Department for Transport, [Bus Open Data Service](https://www.bus-data.dft.gov.uk/) East Midlands GTFS timetable feed (OGL v3.0), counted per stop for Tue 3, Sat 7 and Sun 8 Nov 2026. Homes are represented by address postcodes (postcodes.io) weighted by the number of homes with an energy certificate, and measured straight-line to the nearest qualifying stop (not walking routes). North Northants uses the same method on all its postcodes; England is not calculated. Scheduled, not actual, services.
- Road collisions: Department for Transport, [Road safety data (STATS19)](https://www.gov.uk/government/statistics/road-safety-data), collision and casualty files for 2021 to 2025 (OGL v3.0, no key). Police-reported injury collisions only; placed in LSOAs by coordinates; rates use Census 2021 populations, with North Northants and England on the same basis. The map shows the collisions themselves (date, severity, vehicles, who was hurt).
- Stop and search: data.police.uk (Home Office, OGL v3.0), `stops-force` for Northamptonshire, Sep 2025 to Aug 2026, stops with a location placed in LSOAs by coordinates; locations are anonymised to nearby map points. No North Northants or England comparison. Only the type of search, outcome and age band are shown on the map; ethnicity and gender are not shown.
- Food hygiene and takeaways: Food Standards Agency, [Food Hygiene Rating Scheme API](https://api.ratings.food.gov.uk/) (OGL v3.0, no key), North Northamptonshire (local authority 70), fetched 2026-10-30. Premises placed in LSOAs by geocode or postcode centroid; ratings 0 to 5 only (awaiting inspection and exempt left out); LSOAs with fewer than 5 rated businesses are blank. Takeaways = business type "Takeaway/sandwich shop". North Northants and England from the same API (England: the 298 English authorities, via filtered counts per authority). Individual businesses are not shown on the map.
- House prices: HM Land Registry, [Price Paid Data](https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads) (OGL v3.0), read through the linked-data SPARQL endpoint (`landregistry.data.gov.uk/landregistry/query`) for North Northamptonshire postcode sectors, sales 1 Nov 2023 to 28 Sep 2026. Sales placed in LSOAs by postcode (postcodes.io); median over three years; LSOAs with fewer than 10 sales are blank. North Northants uses the same method; England is not shown. The bulk Price Paid files (`prod1.publicdata.landregistry.gov.uk`) could not be reached from this environment (gateway 502).
- Private rents: Office for National Statistics, [Price Index of Private Rents, UK: monthly price statistics](https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics), release of 21 October 2026 (OGL v3.0), North Northamptonshire and England average monthly rent for September 2026. Council-area level only, so it appears as context in the popup, not as a neighbourhood indicator. Official statistics in development.
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
- **Pension Credit**: a top-up for pensioners on a low income.
- **Attendance Allowance**: a benefit for pensioners who need help with personal care because of illness or disability.
- **Carer's Allowance**: a benefit for people on a low income who care for someone at least 35 hours a week.
- **Children in low-income families**: children in families with income below 60% of the national average, before housing costs (the government's main local child poverty measure).
- **Fuel poverty**: in England, a household is fuel poor if its home has an energy efficiency rating of band D or below and paying for energy leaves it with an income below the poverty line (the Low Income Low Energy Efficiency, or LILEE, measure).
- **EPC** (Energy Performance Certificate): a certificate that rates a home's energy efficiency from A (cheapest to heat) to G (most expensive). Homes need one when they are sold, let or built, and many get one after improvements.
- **Energy efficiency bands A to G**: A and B are the most efficient; C is in the middle; D to G are less efficient, and E, F and G are the worst. Band D or below is the line used for fuel poverty.
- **MSOA** (Middle layer Super Output Area): a statistical area of roughly 5,000 to 15,000 people, made up of several LSOAs. Health figures are published at this level.
- **Life expectancy at birth**: how many years a newborn could expect to live if current death rates stayed the same.
- **Healthy life expectancy**: how many of those years a newborn could expect to live in good health, rather than with a long-term illness or disability.
- **Emergency admissions ratio (SAR)**: emergency hospital admissions compared with what you would expect for England given the area's age and sex mix. 100 is the England average; 125 means 25% more.
- **Obesity (children)**: children measured at school (Reception, aged 4 to 5; Year 6, aged 10 to 11) whose body mass index is in the obese range for their age.
- **Bus frequency measures**: a stop with 2+ buses an hour means at least 24 scheduled departures on a weekday between 7am and 7pm; "within 400 m" is roughly a five-minute walk in a straight line.
- **GTFS**: the standard file format bus timetables are published in; it lists every stop, route and scheduled departure.
- **STATS19**: the national record of road collisions that the police attend or are told about, where someone is injured. Maintained by the Department for Transport.
- **Killed or seriously injured (KSI)**: people who died within 30 days of a collision, or whose injuries were judged serious (for example, a fracture or a hospital stay).
- **Stop and search**: when a police officer stops and searches a person because they have reasonable suspicion they are carrying drugs, a weapon, stolen goods or similar.
- **Food hygiene rating**: a score from 0 (urgent improvement necessary) to 5 (very good) given to a food business after a council inspection. 3 is "generally satisfactory"; 0 to 2 means improvement is needed.
- **Median house price**: the middle price of all homes sold in the period (half sold for more, half for less). It is less thrown off by a few very expensive sales than an average.
- **Price Paid Data**: HM Land Registry's record of every home sale in England and Wales.
- **PIPR** (Price Index of Private Rents): the ONS measure of what private tenants pay in rent, for new and existing tenancies.
- **Persistent absence**: a pupil who misses 10% or more of school sessions (about half a day a week) for any reason.
- **SEN support / EHC plan**: extra help for children with special educational needs. An Education, Health and Care (EHC) plan is the formal legal plan for children who need the most support.
- **Attainment 8 / KS2 expected standard**: Attainment 8 is the average GCSE-type score per pupil (England average about 46); the Key Stage 2 expected standard is the share of Year 6 pupils reaching the expected level in reading, writing and maths.
- **Universal Credit**: the main means-tested benefit for working-age people, in or out of work.
- **PIP** (Personal Independence Payment): a benefit for the extra costs of long-term illness or disability.
- **ASB** (anti-social behaviour): nuisance, rowdy or intimidating behaviour reported to the police. It is counted separately from crime.
- **Per 1,000 residents**: the count divided by the number of people living there (Census 2021), times 1,000, so areas of different sizes can be compared.
- **Claimant rate**: the share of 16-64 year-olds claiming Universal Credit or Jobseeker's Allowance for being out of work or on a low income.

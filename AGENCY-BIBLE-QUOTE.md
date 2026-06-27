# MyKeyz — External Agency Build Quote (from the Product Bible)

> Forward SOW estimate: what an **external software agency** would quote to build the *entire* MyKeyz product, greenfield, with a human team (no AI), sized from the 82k-word Product Bible (20 docs). 14 workstreams, each scoped by a delivery-lead reading the spec. Costed at **Agency rates** (market-rates.md) across 5 markets. person-month = 160 billable hours. +15% fixed-bid contingency (agency PM/QA/margin already in the rates).

**Total effort: 288.4 person-months = 24 person-YEARS.**

## The quote — all 5 markets (delivery → with contingency)

| Market | Delivery | **With +15% contingency** | AED |
|---|---|---|---|
| Pakistan | $0.91M–$2.04M | **$1.05M–$2.34M** | 3.85M AED–8.61M AED |
| Ukraine | $1.45M–$2.45M | **$1.67M–$2.81M** | 6.13M AED–10.33M AED |
| Dubai | $2.30M–$3.82M | **$2.64M–$4.39M** | 9.70M AED–16.13M AED |
| Israel | $3.29M–$5.02M | **$3.78M–$5.78M** | 13.88M AED–21.21M AED |
| US | $4.90M–$8.19M | **$5.63M–$9.42M** | 20.67M AED–34.59M AED |

## Effort by workstream (person-months)

| Workstream | p-months |
|---|--:|
| Care Hub (provider app + admin) | 37 |
| Marketplace | 33 |
| QA program & automation | 26.5 |
| Core backend platform & data | 24.5 |
| AI / vision layer | 24 |
| TimeSeal verification engine | 22 |
| Design system + UX/UI (all screens) | 21 |
| Reports generation | 19.5 |
| DevOps / infra / observability | 18 |
| Deposit recovery | 15.75 |
| Security & compliance program | 13.5 |
| Offline sync | 13 |
| Inspection capture flow | 11.900000000000002 |
| Notifications & reminders | 8.7 |

## Effort by role (person-months)

| Role | p-months |
|---|--:|
| Backend | 72.5 |
| QA | 49.5 |
| Mobile | 34 |
| Design | 28 |
| Lead | 24 |
| Security | 22.25 |
| DevOps | 18.8 |
| Product | 16.8 |
| Frontend | 12.5 |
| AIML | 10 |

Reproducible: `node extract/agency-bible.mjs` → `extract/agency-bible.json`. Source spec: `mykeyz/docs/product-bible/` (20 docs).

*This is the forward, spec-based quote — distinct from the git retro (`COST-DASHBOARD.md`) which prices only code that survived. An agency quotes the whole product to be built; the retro prices what an AI already produced.*

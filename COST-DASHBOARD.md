# MyKeyz — Human-Build Cost (retrospective)

> What MyKeyz would have cost a **real human team** to build by hand, from the git history.
> Method: the `commit-human-cost` skill — reuse/copy-paste discount, 3.5h deep-work/day, per-discipline In-House-loaded rates, session-grouped. Counterfactual upper-bound, not an exact claim.

**Days analyzed:** 39 work-sessions  ·  **Effort:** 2,776 team-equiv hours = 793 person-days = 36 person-months

## Total build cost — In-House loaded, all 5 markets

| Market | Total |
|---|---|
| Pakistan | **$19,275 – $35,848** |
| Ukraine | **$53,295 – $87,760** |
| Dubai | **$94,555 – $144,760** |
| Israel | **$130,234 – $192,999** |
| US | **$212,399 – $289,847** |

## Effort by discipline (team-equiv hours)

| Discipline | Hours |
|---|---|
| Backend | 717 |
| Mobile | 420 |
| Product | 336 |
| QA | 298 |
| Frontend | 285 |
| Security | 266 |
| Product/docs | 126 |
| Design | 120 |
| AI/ML | 108 |
| DevOps | 89 |
| AI-ML | 10 |

## Daily timeline — who worked, what they did

### 2026-05-06  ·  48h (13.7 person-days)  ·  Dubai $1,653 – $2,561 / US $3,678 – $5,153
- **Mobile** 13.5h — Built the Expo Router app shell — navigation groups plus login/register/forgot-password, onboarding role/rooms, and inspection screens wired through Zustand stores.
- **Product** 26h — Wrote ~34k words across 76 markdown docs — 20 templated UI screen specs plus onboarding, auth-flow and architecture notes that drove the build.
- **Design** 3h — Authored the design-system tokens (colors/spacing/typography) and core UI components (Button, TextField, SegmentedControl, RoleCard).
- **Backend** 2.5h — Wired the Supabase client with a SecureStore/localStorage storage adapter, plus session and API service layers.
- **QA** 3h — Smoke-tested the auth and onboarding flows and the Zod form-validation paths.

### 2026-05-07  ·  80h (22.9 person-days)  ·  Dubai $2,901 – $4,311 / US $6,605 – $8,770
- **Backend** 33h — Stood up the Node backend from scratch — JWT+bcrypt auth, inspections CRUD, watermark/vision/payments/signatures/reports/notifications/addons routes, R2 storage and SQL migrations; pivoted Supabase to Railway Postgres + custom auth.
- **Mobile** 24h — Built the full React Native inspection flow — auth/onboarding screens, camera+gallery+video capture with compression, chat interface, tier-selection, payment, signature, summary, report-preview, settings, history and comparison mode.
- **AI/ML** 5h — Wired OpenAI Vision — a cheap gpt-4o-mini binary triage classifier plus deep defect analysis constrained to a fixed category/severity schema.
- **DevOps** 5h — Dockerized the backend, added railway.json deploy config and GitHub Actions CI (frontend + backend-with-Postgres + Cloudflare Pages deploy), wired R2/Stripe/Dropbox env config and wrote the DEPLOY runbook.
- **QA** 5h — Wrote 32 vitest tests across front and back — auth round-trip + bcrypt, watermark, sha256, videoFrames, validation schemas, password strength and default-rooms.
- **Design** 3h — Styled the inspection-flow screens and the report-preview / room-complete surfaces.
- **Product** 5h — Backfilled DEVELOPER_NOTES sprint logs, wrote the DEPLOY runbook prose and flipped TODO/sprint checkboxes.

### 2026-05-08  ·  38h (10.9 person-days)  ·  Dubai $1,296 – $1,973 / US $2,990 – $3,985
- **Mobile** 20h — Built the RN UI atom kit (Button/Card/TextField/HeroBackground/DevNav) and re-skinned ~18 Expo screens (auth, onboarding, tier+payment, inspection, settings, chat) onto the new design tokens, plus a net-new comparison screen wired to /vision/compare.
- **Design** 7h — Authored the Apple-meets-teal visual language: navy+teal+gold palette, elevation/radius/type scales, gradient stops, 12 hand-coded BrandIcon SVG paths, and art direction for six gpt-image-1 hero illustrations.
- **Backend** 7h — Wrote the locale-aware (en/he/ar) RTL PDF report template with font-stack swap, flex mirroring and mono isolation; added the no-leak forgot-password endpoint and switched Stripe currency USD to EUR.
- **QA** 3h — Verified the new backend endpoints and locale PDF paths (vitest 12/12), exercised the payment and comparison flows, and regression-checked the restyled screens.
- **Product** 1h — Recorded the generated R2 keys and rewrote DEVELOPER_NOTES to resolve the stack/storage decisions (Node/Fastify + R2), narrowing open blockers to Stripe and Dropbox Sign keys.

### 2026-05-09  ·  5.3h (1.51 person-days)  ·  Dubai $186 – $292 / US $398 – $583
- **Product** 5.3h — Rewrote the Dubai launch plan into an annotated v2 — authored a mandatory security/dependency policy (no-new-npm, built-ins-over-SDK table, REST-over-SDK) and added per-item IMPL implementation blocks for UAE Pass, Ejari/Makani, bilingual EN/AR report, AED 299 IAP pricing, and the broker referral program.

### 2026-05-09  ·  114h (32.6 person-days)  ·  Dubai $4,048 – $6,095 / US $9,134 – $12,275
- **Backend** 42h — Built 3-SKU AED pricing + payment routes, Apple/Google IAP receipt verification (RS256 JWT REST), refund automation with idempotent webhooks, DB-backed durable job queue, server-side hard caps/rate limits/timestamping/error_logs, broker referral payouts, Unifonic SMS, and reviewer demo mode.
- **Mobile** 20h — Re-skinned all 21 React Native screens onto the new design system, wired the StoreKit IAP client + camera photo-quota auto-paywall, the expo-updates OTA client, and report-preview; drove the bundle to 0 TS errors after the design pass.
- **Frontend** 7h — Redesigned the public Verify page to brand quality, built the magic-link /sign web page, and rebuilt the villa-grade report PDF HTML template with multi-photo issue grids.
- **Design** 6h — Landed the Apple-meets-navy design system + tokens (Manus pass), destroyed the dead teal/gold/cream palette to navy + clean white, and replaced the placeholder app icon with a brand-consistent one.
- **QA** 7h — Authored 4 Maestro end-to-end production flows + config covering the payment, auth, and report paths.
- **DevOps** 6h — Wired OTA EAS Update channels + server-driven config, set up the Maestro E2E CI workflow on a macOS simulator, deployed Cloudflare Pages, and fixed the Docker chromium install for puppeteer.
- **Security** 8h — Implemented UAE Pass OAuth + single-use magic-link signature security, pinned the Apple cert chain to AppleRootCA-G3, and routed all Manus AI traffic through the backend (removed the API key from the client).
- **AI/ML** 8h — Integrated the Manus API with structured-output schemas, hardened response parsing (flat task_id, ContentParts array, root upload_url), and aligned the generate-report SQL with the actual schema.
- **Product** 10h — Wrote the Dubai Launch Plan v2 + strategic re-plan, the cross-reference launch checklist, and the onboarding/signature/payment spec alignment to UAE Pass + Apple IAP.

### 2026-05-10  ·  102h (29.1 person-days)  ·  Dubai $3,582 – $5,441 / US $8,096 – $10,895
- **Backend** 30h — Shipped the broker-portal API (email-OTP auth, broker-scoped /me/tenants/reports/commission routes, migrations) and SSO token issuance, and deleted the dead Manus vision service + manusProxy.
- **Mobile** 18h — Rebuilt the media-preview and chat capture screens, added voice notes, fixed the iOS cold-start splash hang, and reverted unfinished features to Coming Soon per the product-truth audit.
- **Frontend** 14h — Stood up the Next.js broker self-service portal (login, dashboard, tenants/reports/commission tables) and reworked the demo flow to stream the user's real report instead of a hardcoded mock.
- **Security** 12h — Hardened auth end-to-end: atomic refresh-token rotation (TOCTOU), JWT alg/aud/iss pinning, brute-force + per-broker/per-user OTP rate caps, one-shot reset tokens, revoked-PDF blocking, and media-type byte validation.
- **Product/docs** 8h — Wrote the product-truth + Apple/backend/mobile/money audit docs and the codebase architecture/stack/structure notes that drove the day's reverts and blocker closures.
- **AI-ML** 6h — Made /v1/ai/analyze-photo auto-persist the issue and folded the full AI inspector output into the bilingual AR/EN PDF report.
- **DevOps** 5h — Wired the EAS ASC API key for non-interactive iOS submit, set the encryption-exempt flag, and added Railway deploy config for the broker portal.
- **QA** 5h — Authored the Maestro E2E flows and watermark unit tests, plus a retry-button audit pass across capture screens.
- **Design** 4h — Replaced hardcoded colors with design-system tokens and polished the media-preview UI (full-width CTA, dynamic GPS badge, safe-area/keyboard handling).

### 2026-05-11  ·  155h (44.3 person-days)  ·  Dubai $5,460 – $8,170 / US $12,200 – $16,250
- **Security** 55.2h — Built real admin auth (inline RFC-6238 TOTP, bcrypt, rotated refresh sessions, append-only audit log), closed SSRF/path-traversal/prompt-injection, hardened IAP idempotency+replay window, added per-route rate-limit buckets and zod max-lengths, pinned JWT alg/aud/iss, fixed sign-in user-enumeration timing, patched 114 CVEs.
- **Backend** 27.6h — Added DB pool/statement + slowloris timeouts, pg_advisory_lock multi-replica migrations and new indexes, hourly cleanup worker, jobQueue status guards, Manus status-based retry classification, DLQ + /health/deep, graceful SIGTERM shutdown, route pagination.
- **Mobile** 17.3h — Shipped delete-account UI with OAuth re-auth, root ErrorBoundary against blank-screen crashes, chat AsyncStorage persistence, role-selector backend wiring, useNetwork OS-event listeners, removed fake splash counter, SSR-safe PostHog/Bugsnag init.
- **Frontend** 15.5h — Built broker-portal admin login + Edge JWT verify gate, page/root error boundaries, proxy body validation and upstream-error sanitization; hardened marketing CSP (dropped unsafe-inline), real 404, OpenGraph/JSON-LD, signup honeypot.
- **DevOps** 6.9h — Ran backend/broker-portal containers as non-root, added .dockerignore files, upgraded base images to clear CVEs, injected PostHog + Google OAuth client IDs into EAS preview+production builds.
- **AI/ML** 6h — Sanitized roomName/userNote to block prompt injection, validated Manus structured output with Zod before DB write, added magic-byte + multipart-header validation on the voice-transcription endpoint.
- **QA** 12.1h — Wrote ~1,000 lines of vitest integration+unit coverage (IAP webhook, media magic-bytes, broker OTP limits, PDF idempotency/auth/ownership/canonical, AI ownership, watermark EXIF regression) with mocked DB/auth.
- **Product/docs** 14h — Authored the Damagix-to-brand rebrand touchpoint map (every file:line, multiple coverage passes) plus the AGENTS 'Deep Polish' autonomous-improvement protocol — ~7,800 finished words.

### 2026-05-12  ·  113h (32.3 person-days)  ·  Dubai $3,796 – $5,674 / US $8,533 – $11,490
- **Backend** 55h — Built OTS blockchain anchoring, RERA dispute-letter generator, fair-wear deposit calc + landlord-score engine, Unifonic SMS DLR webhooks, EXIF capture, i18n backend, counter-photo magic-link, plus complex audit fixes (Postgres multi-replica rate-limit, IAP replay/refund, R2->Manus streaming).
- **QA** 28h — Wrote ~3,500 lines of route/unit/integration tests across AI async jobs, auth/account-delete, payments, signatures, dispute-letter, notifications, EXIF and the Unifonic webhook.
- **AI/ML** 6h — Added RERA classifier to defect analysis output, GET confidence-histogram endpoint, analyze-photo dedup guard and Manus job-endpoint polling.
- **Mobile** 10h — Wired Arabic/English i18n + RTL to all screens, added dispute-letter and confidence-histogram report buttons, RERA/fair-wear DefectCard badges, offline upload queue, and 35 a11y labels.
- **DevOps** 4h — Alpine Dockerfiles, puppeteer-core/openai dependency bumps with lockfile sync, and multi-replica rate-limit infra wiring.
- **Security** 6h — Enforced auth nonce requirement, IAP replay + REFUND_REVERSED guards, SSRF render guards, and moved web token from localStorage to sessionStorage.
- **Product** 4h — Maintained AGENTS.md fixed-commits table and AUTO_IMPROVEMENT_LOG.md, added synthetic-data disclosure notes and updated user-facing copy.

### 2026-05-13  ·  23h (6.57 person-days)  ·  Dubai $713 – $1,094 / US $1,594 – $2,183
- **QA** 7h — Wrote ~140 unit tests across inspections, issues, addons, admin, appConfig, landlordScore, brokers and IAP routes on a shared vitest mock harness (4 commits, ~2570 test lines).
- **Security** 5.5h — Triaged and patched 7 high/critical CVEs: Snyk fixes (CWE-918/79/798), form-data + qs npm overrides, swapped opentimestamps for a maintained fork, enforced Unifonic HMAC in prod.
- **Backend** 5.5h — Hardened routes: AbortSignal.timeout on all fetch/apiFetch calls, S3 request timeout, rate-limit buckets (PUSH/DELETE_ACCOUNT), pagination + LIMIT guards, shared isUuid util, cleanup sweeps, small refactors.
- **Frontend** 2h — Added try-catch around async calls in 7 RN/web files, removed unnecessary as-any casts, and added a retry button on history.tsx.
- **DevOps** 2h — Added a media composite index, graceful shutdown, S3 timeout config, and managed the lockfile/dependency override changes.
- **Product/docs** 1h — Updated AGENTS.md and AUTO_IMPROVEMENT_LOG.md session entries (sessions 9-12).

### 2026-05-14  ·  5.7h (1.63 person-days)  ·  Dubai $201 – $299 / US $444 – $593
- **Security** 2.4h — Triaged Snyk SAST findings, added path-traversal guards (resolve + startsWith) in reports.ts/storage.ts, an SSRF allowlist helper (assertSafeUploadUrl) in manusProxy.ts, and justified deepcode-ignore suppressions for the proven false positives (timing bcrypt hash, i18n password labels, allowlisted broker proxy fetch).
- **Backend** 1.2h — Wired the guards into the Fastify file-serving and storage read/stream paths (readStoredBuffer/readStoredFileStream/readStoredStream) and the Manus upload PUT call sites without breaking stream handling.
- **QA** 1h — Extracted inline test secrets into named vi.hoisted() fixture constants across admin/auth/unifonicWebhook tests and re-ran the full 363-test suite to confirm green with 0 TS errors.
- **AI/ML** 0.6h — Validated the SSRF guard against the Manus vision-pipeline upload contract — restricting upload_url to manus.im/amazonaws.com HTTPS hosts so a compromised AI vendor response cannot pivot to internal hosts.
- **Product** 0.5h — Logged the SAST remediation and the follow-up suppression session in AGENTS.md and AUTO_IMPROVEMENT_LOG.md (~50 lines of changelog prose).

### 2026-05-15  ·  16h (4.6 person-days)  ·  Dubai $440 – $702 / US $999 – $1,420
- **QA** 8h — Authored a 28-flow Maestro E2E suite covering every user journey (auth, inspection, payments, reports, RTL, offline), then rewrote them with real TestFlight credentials and fixed all flows to pass Maestro 2.4 syntax.
- **DevOps** 3.5h — Aligned the whole dependency tree to Expo SDK 55 — bumped RN to 0.83.6, pinned reanimated/worklets to bundled versions, and applied a postcss ^8.5.14 override to patch the metro-config XSS CVE.
- **Security** 2h — Eliminated the remaining Snyk SAST findings — renamed credential-looking constants, added a password_label i18n key, and committed a .snyk policy documenting reviewed false positives.
- **Mobile** 1.5h — Added a crypto polyfill and an AbortSignal.timeout shim to the RN runtime so api/appConfig/mediaUpload services work on device.
- **Product/docs** 1h — Logged the session's work in AGENTS.md and AUTO_IMPROVEMENT_LOG.md (sessions 12e and 13).

### 2026-05-16  ·  42h (12 person-days)  ·  Dubai $1,395 – $2,109 / US $3,133 – $4,265
- **Backend** 10h — Fixed the silent ESM-require bug that left rate-limiting disabled in production, added per-email brute-force lockout, scoped admin session-touch to its owner, gated Apple Sandbox receipts for TestFlight via env flag, and tightened config validation + data retention.
- **Security** 6h — Closed enumeration/abuse holes: per-email login lockout, public landlord-score rate bucket, admin idle-timeout bypass, 24-char min admin token, and validated alert-email config.
- **DevOps** 6h — Made CONCURRENTLY migrations run outside transactions one-statement-per-query, fixed migration 0048 UUID type, added magic-link partial indexes, and wrote the 5-check env quality gate.
- **Mobile** 5h — Landed batch-2 RN security/UX fixes across camera/chat/history/settings/register screens plus api/notifications/session stores and Android runtime permissions (FINE/COARSE_LOCATION, POST_NOTIFICATIONS, READ_MEDIA_IMAGES).
- **QA** 8h — Authored the brutal end-to-end QA architect audit (verdict + 4 critical/10 major), the build-12 known-issues list, and the 22-step E2E prod sweep + journey shell scripts.
- **Product/docs** 7h — Wrote the production-state single-source-of-truth snapshot, rewrote the docs README, and organized the 200+ finding backend/frontend/infra audit docs.

### 2026-05-20  ·  9.2h (2.6 person-days)  ·  Dubai $300 – $468 / US $683 – $950
- **Mobile** 3h — Ran the scripted Damagix to MyKeyz rename across 260 RN files with case-preservation + preserve-list, fixed IAP SKU/storage-key/config constants, swapped wordmark assets, verified the app still builds.
- **DevOps** 1.8h — Configured Cloudflare zone for mykeyz.net/.io via API: api/www CNAMEs to Railway (proxied), enabled Email Routing with auto MX/SPF/DKIM, re-triggered destination verification.
- **Product/docs** 2.4h — Authored the 12-phase rebrand plan in TODO.md and locked the load-bearing decisions: canonical domain, com.mykeyz.app bundle + 3 IAP SKUs, JWT/storage namespaces, DB-wipe, KBR parent entity stays.
- **QA** 1.2h — Ran the post-rename audit: 0 residual damagix occurrences, 53 KBR refs preserved, 52 bundle-ID refs intact, no hardcoded Railway URLs, build smoke-checked.
- **Design** 0.8h — Swapped in the new MyKeyz brand binaries: app icon, adaptive-icon, favicon and wordmark (white + color) replacing the old Damagix assets.

### 2026-05-21  ·  12.8h (3.66 person-days)  ·  Dubai $363 – $629 / US $828 – $1,218
- **Frontend** 6.6h — Rebuilt the MyKeyz marketing landing page by hand in HTML/CSS — custom grid sections, responsive clamp() typography, inline SVG icons, hero phone+PDF composition, pricing tiers, FAQ, plus nav scroll-state logic in site.js.
- **Design** 3.3h — Set the redesign's visual direction: cream/paper ledger aesthetic, evidence-map card system, hero layout and section rhythm (image assets themselves were AI-generated, scored near-zero).
- **DevOps** 1.8h — Added the iOS GitHub Actions build+auto-submit workflow, switched it to --local on the macOS runner to dodge EAS cloud billing, and repointed extra.eas.projectId to the new mykeyz Expo project.
- **Product/docs** 1.1h — Wrote MYKEYZ-MARKETING-DESIGN.md (612 words) documenting the landing-page sections, messaging and pricing, retiring the old HANDOFF-FOR-MANUS doc.

### 2026-05-25  ·  15.5h (4.43 person-days)  ·  Dubai $535 – $787 / US $1,204 – $1,600
- **Backend** 8.5h — Reworked refresh-token storage to persist sha256(secret) instead of the raw jti across both user and admin auth services (login/refresh/logout/touch), with a UUID-guarded legacy fallback, migration 0057, and preserved TOCTOU-safe atomic claim + family-revocation; also scoped /property-timeline to the caller's own inspections.
- **Security** 2h — Threat-modeled the two QA-audit findings — leaked refresh_tokens/admin_sessions rows enabling full session resumption (CR-4) and the severity-8 cross-tenant PII leak in /property-timeline (MA-2) — and reviewed the hardening for replay/rotation correctness.
- **DevOps** 3h — Authored a nightly GitHub Actions workflow that pg_dumps Railway Postgres (compressed), validates each archive with pg_restore -l, uploads to the private R2 backups bucket and prunes >30 days; then fixed the runner to use the explicit pg17 binary path.
- **QA** 2h — Validated the auth/security changes against the existing suites — 26/26 auth+admin route tests and 14/14 landlordScore route tests — confirming on-the-wire UUID shape and idle-timeout behavior held.

### 2026-05-26  ·  27.5h (7.9 person-days)  ·  Dubai $781 – $1,350 / US $1,768 – $2,608
- **Frontend** 15h — Built the build-site.js static-site generator + 1350-line site.css brand design system + site.js (JS-independent reveal fallback, OS-aware download button) and wired ~20 marketing pages.
- **Design** 5h — Defined the navy+gold design system, curated 40 AI-generated illustrations, and explored/swapped headline+body fonts (Inter -> Chillax/Satoshi -> Satoshi).
- **Product/docs** 4.5h — Rewrote every page in the calm-premium voice, added freemium pricing copy, and aligned site-wide meta/SEO text.
- **DevOps** 1.5h — Added the Cloudflare Pages GitHub Actions deploy workflow and tore down the old Railway/Docker/nginx infra.
- **QA** 1.5h — Verified OS-detection download routing, the no-JS reveal fallback, and cross-page nav/footer links.

### 2026-05-27  ·  92h (26.3 person-days)  ·  Dubai $3,391 – $5,054 / US $7,637 – $10,215
- **Backend** 26h — Built compare-photos API + Manus two-file proxy, migrated pricing to feature-tier across appConfig/iap (+migration SQL), added Ed25519 report-signing routes, and hardened error masking + stalled-job reaper.
- **Mobile** 24h — Rewrote comparison.tsx with a baseline-gallery picker + per-pair confirm/edit cards, built the counterparty post-sign verify/dispute screen, the inspection element picker + defect fields, the new pricing/payment screens, and StatusBar/iPad readiness fixes.
- **Product** 18h — Authored the verified feature-spec system + master TODO, storage/role-flow/web-portal/accelerator specs, the RESUME crash-point doc, and purged 95 superseded design/spec/audit docs (8209-line deletion).
- **Security** 9h — Implemented Ed25519 issuer signatures on generated reports and the 4xx error-disclosure policy plus the 7d->24h signed-URL TTL tightening.
- **AI/ML** 7h — Wired AI inspection element-capture end-to-end and the move-in <-> move-out photo-comparison agent integration through the job handler.
- **QA** 4h — Corrected the wrong sha256 expected-hash test and reconciled the iap/appConfig/brokers test suites for the new feature-tier pricing.
- **DevOps** 3h — Fixed the EAS production ascAppId, excluded the stale mykeyz-build/ dir from tsc, and tuned the cleanup stalled-job sweep.
- **Frontend** 1h — Surfaced the new pricing tier on the broker-portal reports web page.

### 2026-05-28  ·  30h (8.57 person-days)  ·  Dubai $1,067 – $1,590 / US $2,450 – $3,223
- **Mobile** 14.5h — Rebuilt the inspection journey as inspection-first (new record-ready + property-details screens, rooms refactor), shipped the 3-slide first-launch intro carousel, the background analyzing->verified chat UX, pinch-to-zoom/retake camera, skip-rooms, and plain-language 'what does this mean' explainer sheets
- **Backend** 8h — Added PATCH /inspections/:id, room-skipped (0011) and ejari/gps (0012) migrations, the PAYWALL_ENABLED flag gating cloud upload/AI/report, report-ready push + 'Get MyKeyz' email CTA, and report-template legends
- **Design** 2.5h — Laid out the 3-slide intro carousel, wired the on-brand static illustrations, and added report confidence (High/Med/Low) tooltips and the 'How to read this report' legend
- **Security** 1.5h — Fixed Apple Sign-In nonce hashing and configured Google Sign-In on iOS (redirect URL scheme plugin + enable flag)
- **QA** 2h — Updated the media-upload 402 test to assert the gate only under paywall-enabled, and validated the new flow/payment/auth gating behavior
- **Product** 1.5h — Purged ~3,060 lines of implemented status/plan/codebase-intel docs and replaced them with a lean live TODO, plus the brand-tone copy sweep dropping legal/crypto framing

### 2026-05-29  ·  14h (4 person-days)  ·  Dubai $516 – $788 / US $1,148 – $1,587
- **Backend** 3.5h — Built the server-only /v1/geo/static-map Google proxy route and fixed the Postgres-numeric-string GPS coercion that was 500-ing every report containing a defect photo.
- **AI/ML** 2.6h — Unblocked the whole Manus analysis pipeline: added description_ar to the structured-output required[] and made the poller tolerate the transient post-create 404 (eventual consistency).
- **Mobile** 2h — Added the static-map Image preview (with onError self-hide) to property-details and reordered the multipart upload so form fields precede the file part.
- **QA** 1h — Ran the live signup→create→upload→report E2E smoke test that surfaced the fetch duplex and multipart field-ordering failures.
- **Product** 4.5h — Wrote the ~1,900-word report-builds-in-background design walkthrough spec.
- **Design** 0.5h — Styled the map-preview card and shaped the report-design layout described in the spec.

### 2026-05-30  ·  4.3h (1.23 person-days)  ·  Dubai $134 – $220 / US $289 – $431
- **Product** 2.6h — Authored the report-builds-in-background UX spec — vision/non-goals, room-nudge + AI-override flows, share-with-landlord hero flow with delivery/read receipts, and pivoted the hero CTA from landlord co-sign to share-with-receipts; wrote E2E test scenarios and the future-spec roadmap.
- **Design** 1.7h — Wrote the §11 Visual & Interaction Design Notes from the design war-room — 8-col grid + asymmetric record-ready zones, typography/color system, defect-counter restraint rules, share-first screen layout, Hebrew calm-trust microcopy table, and anti-dark-pattern ethical guardrails.

### 2026-06-07  ·  24h (6.86 person-days)  ·  Dubai $908 – $1,388 / US $2,040 – $2,793
- **AI/ML** 9h — Replaced the Manus proxy with a direct Claude-vision engine (claudeVision.ts: structured-output JSON schema + server-side Zod re-validation + prompt-injection sanitization + RERA/fair-wear classification), rebuilt the 12-category defect taxonomy from the knowledge base, added the formal description_full report paragraph, the 'every photographed photo is a defect' walkthrough contract, and bounded-concurrency (4) photo comparison.
- **Backend** 6h — Built the bilingual PDF report rendering engine in reportTemplate.ts (premium v2 layout, Arabic-primary lang=ar/dir=rtl, defects grouped by element within each room, Arabic room-name banners) and rewired config/routes/jobHandlers after deleting the 567-line Manus service.
- **Mobile** 4h — Added continuous-camera walkthrough mode with a global 'N analyzing' indicator backed by a new non-persisted inflight registry store, a defect-card Remove escape hatch, the approval gate so only confirmed defects enter the report, and fixed the note input hiding behind the iOS keyboard.
- **QA** 2.5h — Wrote scripts/quality-check.sh, a live-prod AI content-quality suite that asserts on the structured result (description_full length/sentence count, Arabic-script presence, severity, rera_article, negative controls), and repaired journey-full.sh staleness breaks to 22/22 green.
- **Design** 1.5h — Directed the premium bilingual report aesthetic (typographic/RTL layout system in the v2 template) and swapped in the house-key app icon across all asset slots.
- **Product** 1h — Set the Arabic-primary 'AR is the primary voice' report decision and updated the RESUME doc to reflect the Claude vision engine, walkthrough UX, and current build state.

### 2026-06-08  ·  141h (40.3 person-days)  ·  Dubai $4,987 – $7,537 / US $11,154 – $15,190
- **Backend** 56h — Shipped the full RERA tenant-protection backend suite (90-day lease reminder, deposit-protection panel, notice-to-landlord PDF, rent-cheque + rent-increase-legality calculators, responsibility tags), the staged Deposit Recovery payment subsystem (Claim Pack/Lawyer Filing ladder, Stripe web checkout, dependency-free ZIP writer), WalletConnect-style QR web login, and Part B property-history migrations 0065/0070-0074.
- **Product** 33h — Authored the 260-defect / 32-category DIY repair-guide knowledge base content plus the locked architecture-decision doc, the RERA article-to-feature map, and the running RESUME state docs.
- **Mobile** 16h — Built six build-#8 React Native screens (Protection Kit, Property History, landlord response thread, data-sharing consent toggle, App Store review prompt, recover deep-link) and wired them to the new endpoints via api.ts.
- **Frontend** 9h — Built the public mykeyz.net verify portal and the recover portal (Google/Booking-style search, premium green verified card, full-bleed responsive layout, custom SVG icons) and polished the marketing mobile hero.
- **QA** 9h — Authored the test suites across the new endpoints (verify-portal privacy assertions, deposit-recovery pricing/ownership, ZIP round-trip, repair-guides loader), keeping the suite green at ~380-400 passing.
- **AI/ML** 7h — Added move-out repair-cost estimation and tenant-facing repair tips, and grounded the fair-wear/RERA defect classification in actual Dubai tenancy law.
- **DevOps** 5h — Added Docker HEALTHCHECK and Redis-backed rate limiting with Postgres fallback, fixed Railway IPv6-only redis (family:0), and repaired a timestamptz migration that crashed prod boot.
- **Security** 3h — Overrode transitive uuid@7 (CWE-1285), validated photo URLs before <Image> render, and sanitised verify-portal HTML with DOMPurify as XSS defence-in-depth.
- **Design** 3h — Visual design for the verify/recover portals — premium green verified card, brand-asset hero, and custom SVG iconography in the navy+white system.

### 2026-06-09  ·  46h (13.1 person-days)  ·  Dubai $1,625 – $2,450 / US $3,698 – $4,966
- **Mobile** 19h — Built bottom-tab nav shell + first-class Reports tab (pull-to-refresh, swipe pin/delete via gesture-handler, persisted pin store), wired async report polling, and fixed camera Done/payment back/capture/voice flows.
- **Backend** 10h — Moved report generation to a background job with idempotency + a status-polling endpoint (the core dead-spinner fix) and added a DELETE-inspection route with 409-on-generated guard.
- **AI/ML** 1.8h — Reworked the claudeVision prompt/schema to emit labour_hours + materials instead of a fabricated total, enabling server-side grounded repair-cost arithmetic.
- **QA** 3.6h — Updated and added backend route tests for the new enqueue/idempotency and DELETE behavior (409+ backend tests green).
- **Design** 2.2h — Defined the tab-shell layout, swipe affordances, pin/trash icons, and photo/keyboard proportion fixes.
- **Product** 9h — Authored the full app-overhaul plan, 18-bug inventory, UX-completeness map, and locked the free/paid tier model as planning docs (~5,400 words).

### 2026-06-10  ·  93h (26.6 person-days)  ·  Dubai $3,262 – $4,990 / US $7,376 – $10,041
- **Backend** 26.5h — Shipped the v2.0 backend wave: vendor marketplace engine + consent gate + agent RevShare, document-vault routes, apartment-timeline & lease-scan endpoints, Mikey checklist/inbox service, agent-portal magic-link auth, reports background generation, plus migrations 0077/0083/0084; also decoupled/neutralized the octypo content engine extracted from Travi.
- **Mobile** 21.8h — Built the v2.0 RN screens: document-vault, Mikey checklist + Meet-Mikey intro, agent-portal UI, vendor-marketplace quote/offers flow, full-screen pinch-zoom photo viewer, per-inspection role picker + dashboard badges, 4 missing phase-4 states, and free-vs-verified report upsell.
- **Frontend** 6.2h — Stood up the Astro marketing site/ and app marketing-v2 workspaces (BaseLayout + Lenis/ScrollTrigger bridge, tokens) and ported the approved hero + Vault/Problem/Records sections into Astro+React components.
- **AI/ML** 9.4h — Wired lease-scan AI auto-fill of tenancy dates and ported/neutralized the octypo AI content pipeline (multi-model provider, gatekeeper, dedup/LSH, quality-108) into a standalone domain-agnostic engine.
- **Product** 12.5h — Authored the Version 2.0 product vision & screen spec, process-gap map + execution plan, Marketing V2 'Proof Engine' redesign plan, review-pass security/pipeline/UX plans, and refreshed README/DEPLOY/ARCHITECTURE.
- **Design** 7.8h — Translated approved marketing directions (hero, Vault, Camera-Roll Autopsy, The Strata) into on-brand HTML/Astro sections with design tokens and the rescued gpt-image-1 icon set.
- **QA** 6.2h — Added/kept the report-preview QA harness and IAP screenshot tool and extended backend test coverage (verified 412–416 tests green across the feature wave).
- **DevOps** 2.3h — Set up octypo standalone infra: docker-compose, drizzle config, .env.example and the engine package/registry wiring for independent deploy.

### 2026-06-11  ·  167h (47.7 person-days)  ·  Dubai $5,519 – $8,637 / US $12,407 – $17,135
- **Backend** 40h — Built octypo admin API + HMAC token auth, document-library content mining, rewrote the report job-queue/bounded-cache for the near-instant capture loop, added Stripe idempotency + free-tier 30-photo quota, and bilingual legal-doc backend.
- **Frontend** 40h — Built the octypo admin React SPA (dashboard, feeds, articles CRUD, BlockNote editor), the full marketing Astro site (audience/use-case/legal/pricing pages) + SSR /guides, and wired i18n t() across dozens of app screens.
- **Mobile** 16h — Shipped build #8 React Native screens — notice-to-landlord, repair-guide, payment-reminders — plus their services and inspection store changes.
- **Security** 14h — Made admin TOTP mandatory (enrollment-only token for password-only login), encrypted TOTP secrets at rest, closed the refresh-token bypass, and hardened JWT/jti and rate limits.
- **QA** 16h — Authored test suites for jobQueue, adminAuth, rateLimit, boundedCache, pendingCompression and documents/agents/admin routes, and ran 31/31 octypo E2E against dockerized Postgres.
- **Design** 7h — Ported the approved ice-palette / brand-voice marketing pages and built the octypo admin UI components and layout (toasts, badges, skeletons, modals).
- **AI/ML** 6h — Wired the octypo gpt-image-1 hero/body image pipeline to R2, the content-mining gatekeeper, and TOPICS_JSON-driven config.
- **DevOps** 2h — Added the octypo production start script and deploy/env config for Railway.
- **Product** 26h — Produced the 33-language locale set (664 keys each, natively written and verified) + first-launch language flow, assembled the verbatim locked marketing copy, and the bilingual legal-doc content.

### 2026-06-12  ·  90.5h (25.9 person-days)  ·  Dubai $3,100 – $4,630 / US $6,800 – $9,180
- **Security** 36h — Built the TimeSeal crypto evidence layers: hand-rolled RFC 3161 timestamp DER (no ASN.1 lib), per-inspection Merkle tree with selective-disclosure proofs, hash-chained tamper-evident custody log, and capture-integrity + issuer-signature binding.
- **Backend** 14h — Wired the new evidence services into the reports/inspections/media routes and added migrations 0091-0097 (freshness beacon, TSA receipt, Merkle root, custody log, capture integrity, sealed report versions).
- **QA** 14h — Authored the heavy test suites covering custody chains, RFC3161 receipts, Merkle proofs, capture integrity and report canonicalization.
- **Product** 18h — Wrote the TimeSeal v2 master architecture spec (adversary model A1-A8, defensibility sections 7-12), the Admin Control Panel pre-launch gate spec, the setup-screen redesign spec, red-team audit findings and resume docs.
- **Mobile** 5h — Rebuilt the inspection setup screen as a one-screen record-style flow and gated the deposit letter to move-out only.
- **Design** 3h — Defined the record-style setup layout, value-strip copy rules and the TimeSeal trust-pillar presentation.
- **AI-ML** 0.5h — Shortened the triage TL;DR card to one line for faster, cheaper Haiku output.

### 2026-06-13  ·  40h (11.4 person-days)  ·  Dubai $1,406 – $2,101 / US $3,173 – $4,255
- **Backend** 17h — Shipped a live single-use capture nonce (atomic race-safe one-shot consume), closed a free-report TOCTOU with a partial unique index + 23505 backstop, enforced per-tier photo caps from a single source of truth, added reliability guards (Anthropic 60s timeouts, idempotent claim-pack delivery, advisory-lock report enqueue, webhook/reminder claim release, crash handlers), and deleted the dead addons/subscriptions monetization path.
- **Mobile** 10h — Reimplemented the splash screen to the approved Figma design with RN Animated (3D seal pulse + ambient float), floored navigation at MIN_SPLASH_MS, and fixed paying-moment trust gaps (Send error feedback, native Share for the verify-link copy, geocode-failure address hint).
- **Product** 6.5h — Authored and updated specs/audit trail: anti-fraud capture-authenticity spec, MK-REDESIGN dark re-skin handoff, Dubai RDC deposit-recovery research draft, full-system improvement audit, SBP launch gate, light-theme lock, and per-commit RESUME bookkeeping.
- **QA** 4h — Wrote unit tests pinning nonce mint/consume one-shot + TTL binding, photo-cap values and no-drift, and the concurrent free-report race, keeping the 640+ backend suite green.
- **Design** 2h — Validated splash visual fidelity to Figma 128:7 and locked the approved light-theme spec (slate kickers, tint background, gold reserved for functional-only).
- **AI/ML** 0.5h — Roughly halved the dominant image-token cost of the per-defect enrich call by sending a 1024px image to Sonnet while keeping Haiku triage at 1568px.

### 2026-06-14  ·  108h (30.9 person-days)  ·  Dubai $3,423 – $5,470 / US $7,697 – $10,715
- **Security** 13h — Built the anti-fraud network-integrity brain (VPN/proxy/geo + risk-score ladder) and behavioral/velocity brain (impossible-travel, capture-cadence, pHash duplicate); pure, calibrated, 35 unit tests.
- **Backend** 25h — Shipped the standalone two-sided vendor marketplace module (auth/leads/bids/jobs/ledger/monetization/disputes + migrations 0105-0107), claim-session + 160-bit public_ref, and RDC report-generation endpoints.
- **Mobile** 2.5h — Built the in-app claim entry screen with eligibility check and web/QR handoff, and wired the 'Recover your deposit' CTA on report-ready.
- **Frontend** 38h — Ported ~35 screens from Figma to React Native pixel-exact (home, onboarding, auth, rooms, the Reveal, admin panel), plus the dual-theme foundation and prototype-driven nav wiring.
- **Design** 11.5h — Drove the deep-navy vault / ice-light theme migration, the no-black sweep across 20 files, and per-screen visual fidelity against the approved Figma frames.
- **QA** 7h — Validated anti-fraud risk paths, claim eligibility/session, marketplace bid-to-job flows and report rendering (746 tests green end-to-end).
- **Product/docs** 9h — Authored the anti-fraud F-J spec, vendor-marketplace v2 + 34-screen build guide, RDC legal decision/change logs and the merge/RESUME handoffs.
- **AI-ML** 1h — Extended the vision legal-fault map (RERA Art. 21 permit basis + explicit 3-category fault framework).
- **DevOps** 1h — Added the marketplace standalone deployable server entry-point and migration wiring.

### 2026-06-15  ·  56.5h (16.1 person-days)  ·  Dubai $1,971 – $3,015 / US $4,508 – $6,098
- **Mobile** 26h — Built ~13 approved Figma RN screens (auth, capture, deposit-recovery, meters, dashboards), shipped the useResponsive/Screen layout system and converted all screens to flex, wired flows + DevNav + demo-seed; absorbed the scaler spike/revert churn.
- **Product** 10h — Authored the governance/spec doc system (CLAUDE.md, 919-line team roster, app/brand/qa/systems/website authority+spec docs), the full coverage audit, and the i18n pending-localization manifest.
- **Design** 7h — Drove the dark-vault theme passes (de-white capture/checkout), approved/exported Figma frames, and produced lottie + logo-exploration brand assets.
- **Backend** 6h — Shipped migration 0102 (12 handover columns) + PATCH /v1/inspections/:id/handover with owner checks, wired the captured data into report generation, and removed the dead Manus provider path.
- **QA** 3h — Added route tests for the handover endpoint (+63 lines, 638-test suite green) and verified the layout scaler + demo-seed render on web.
- **DevOps** 2.5h — Added the Cloudflare functions/api Pages function, bumped version to 1.8.0, set OTA testmode, and did .gitignore/asset-archiving repo hygiene.
- **AI/ML** 2h — Purged the dead Manus vision provider and wired the Claude vision client as the sole inference engine across the app.

### 2026-06-16  ·  21.5h (6.1 person-days)  ·  Dubai $698 – $1,099 / US $1,564 – $2,145
- **Frontend** 8h — Built the QR connect screen and the single-file claim workspace SPA (case list, tier/pricing cards, paid-polling, checklist rendering, authed fetch wrapper) plus the landing page and its Door-A pivot restructure.
- **Security** 7h — Designed and implemented the anti-phishing Claim Pair Protocol in the browser: ephemeral X25519 ECDH key exchange, HKDF-SHA256 (salt=pairId) and AES-GCM sealed-token decrypt mirroring the backend seal, with code-entry plus QR device-confirm.
- **Backend** 2h — Wrote a zero-dependency Node http static server with a public-file allowlist, health endpoint and directory-traversal stripping, plus package.json and the claim/pair join+poll endpoint wiring on the client side.
- **DevOps** 1h — Deployed the portal to Railway and pointed the QR LINK_ORIGIN to the custom claim.mykeyz.net domain.
- **Product** 2h — Authored the HANDOFF-CLAIM-WORKSPACE doc and TODO plan, and made the Door-A pivot decision (private email-link claim flow) that deleted the public-QR landing path.
- **QA** 1.5h — Exercised the claim flow and crypto pairing end to end: code entry, device-confirm, sealed-token handoff and re-link on auth expiry.

### 2026-06-16  ·  86.5h (24.7 person-days)  ·  Dubai $2,786 – $4,480 / US $6,278 – $8,808
- **Frontend** 32h — Neutralized ~55 RN screens to a light/midnight flex skeleton (killed fixed-375 layouts, Colors->WF tokens), and wired ~20 UX fixes: room-mapping cascade tile selector, space-selection persistence, summary finding editor, media-preview picker, station shells to real data, connect-computer + verify-record QR scanners, WhatsApp/Email share chips.
- **Backend** 20h — Built the deposit-claim pair protocol (claimPair.ts + 0112 migration, code+QR confirm), dual-auth requireAuthOrClaim preHandler with 72h single-use grant TTL, Stripe return-to-claim-origin, invite-landlord API, claim-pair rate limiting, OAuth account-linking (Apple-after-Google), and the space-mapping inspection routes/migration.
- **AI/ML** 8h — Merged the two-pass triage+enrich vision pipeline into a single Sonnet call (-623 lines), rewrote the prompt so the photo is authoritative (junk photo -> isDefect=false, no fabricated SEVERE defect), threaded real confidence through, and enriched the legal-paragraph generation.
- **Design** 6h — Defined the wireframe light/midnight token system and flex-skeleton rules driving the app-wide neutralization, and styled the TimeSeal verify portal (PNG icon set, refined typography, proof-layout polish).
- **QA** 7h — Rewrote/updated the test suites for the changed behavior — claudeVision single-call contract, jobHandlers (enrich removed), claim-pair flow, and adminPanel metrics — covering auth, payments and the AI pipeline.
- **DevOps** 2.5h — Split marketing/marketing-v2/verify-portal out of the app monorepo (-12k lines, 142 files), stood up the verify portal Cloudflare config (_headers/_redirects/wrangler.toml), and added CORS for recover.mykeyz.io.
- **Security** 5h — Hardened auth/privacy paths: surfaced real delete-code email failures instead of fake ok:true, wiped ALL chat rooms on sign-out/account-delete, made the claim grant single-use with eligibility re-check at redeem, and applied group-A/B root-file security fixes.
- **Product/docs** 6h — Authored launch-prep prose — privacy-policy.md + terms-of-service.md (~260 lines), the space-mapping design spec, SCREEN-REVIEW and several session-handoff/E2E trackers — plus completed Arabic localization to 867/867 keys (ar.json).

### 2026-06-17  ·  303h (86.6 person-days)  ·  Dubai $9,496 – $15,318 / US $21,091 – $30,255
- **Product** 100h — Authored the ~106K-word forensic launch audit (CLAUDE-AUDIT-PARTIAL, CODE-UX-AUDIT, FIX-LOG) plus 17 per-section audit files and closed stale audit rows ahead of submission.
- **Frontend** 80h — Reworked UX across screens: back buttons, camera-permission->Settings deep link, guided room checklist, inline legal form errors, pre-seal summary confirmation, manual finding flow, external PDF open, unread inbox filter, locale lock to English.
- **QA** 46h — Wrote ~80 test files / 5.2K lines covering offline native sync, media-upload policy, summary reconcile, analytics privacy, chat store, OTA updates and request-id utils.
- **Backend** 40h — Built media pipeline (HEIC/EXIF/GPS/hard_block/delete + video frames), R2 URL signing and orphan-leak fixes, per-file offline upload recovery, payment reminders, notices/push priority, and the summaryReconcile service.
- **Security** 12h — Gated web-link start on trusted origin, validated scoped web-session users, blocked fake-user offline session restore, signed R2 URLs with TTL, and recorded capture-cadence risk signals.
- **AI/ML** 10h — Added image quality gate (dark/blurry rejection), Arabic input validation, comparison-image resize, and preserved issue metadata from the vision analysis.
- **Design** 10h — Laid out the new flow states: guided camera checklist, inline error display, pre-seal summary, and report-ready proof-status surfaces.
- **DevOps** 5h — Wired OTA update handling and Bugsnag, and adjusted deploy/config for the launch build.

### 2026-06-18  ·  65.5h (18.7 person-days)  ·  Dubai $2,318 – $3,464 / US $5,178 – $7,005
- **Backend** 25.5h — Split the backend god-files (report/job handlers, inspection routes, public-verify, report service) into modules, added the defect-KB service + extracted create route, and shipped offline/AI/api-root error-hiding and privacy fixes.
- **Product** 14h — Authored the 45-category property defect knowledge base (~23k lines of structured content) + master taxonomy, the FINAL pricing-packages source-of-truth doc, and trimmed the code-UX audit to open work.
- **Mobile** 7h — Broke the app's monolithic API layer into typed contracts plus transport/auth/domain clients and split the frontend inspection stores.
- **QA** 7h — Wrote and updated test suites for the defect KB, report signing/tamper, the cleanup advisory-lock skip path, and verify-page forgery integration.
- **Security** 5h — Enforced a tampered verdict and pinned the issuer signing key in the public verify flow, with JSON/HTML forgery integration tests (audit §9).
- **DevOps** 4h — Added a Railway /health check and production synthetic readiness checks, and wrapped the multi-replica hourly cleanup in a pg advisory lock so only one replica sweeps.
- **AI/ML** 3h — Wired the new defect KB into the Claude vision pipeline and suppressed internal AI-job error detail from user-facing responses.

### 2026-06-19  ·  112h (32 person-days)  ·  Dubai $3,840 – $5,684 / US $8,636 – $11,530
- **Backend** 62h — Forensic audit remediation night: closed the IAP refund-before-verify SERIALIZABLE race + JWS cert-chain validation, scrubbed PII from error logs, added DB-level append-only triggers (sealed reports, admin audit log) and FK ON-DELETE integrity, fail-closed rate-limit buckets, least-privilege admin defaults, frozen-canonical-snapshot verify, plus mechanical god-file splits of depositRecovery and reportTemplate into pure layers (byte-identical).
- **QA** 22h — Wrote/updated tests for nearly every fix (937-961 backend tests green), captured the 5193-line golden report-HTML snapshot that proved the template refactor was byte-identical, and added the multi-replica job-queue load-test harness.
- **Mobile** 8h — Built the generic offline-warning banner + offline-duration hook, stopped losing evidence captured offline, fixed push taps deep-linking to the right screen, the in-flight-photo room-skip bug, and removed the legal classification layer from the app.
- **DevOps** 7h — Added live queue-depth-by-type gauge, batch self-nudge so one replica drains bursts, authored the worker-scaling guide (startup/queue-safety proof), and triggered the Railway backend rebuild.
- **Security** 7h — Owned the concurrency/integrity hardening: refund snapshot race, Apple JWS expired-cert rejection, append-only audit triggers, PII scrubbing, separating webhook secret from admin token, and stopping anti-fraud signal leakage on the public record.
- **AI/ML** 4h — Rebuilt per-photo vision analysis around the renter and image-as-truth, and stripped AI-authored prose + repair-cost estimation from the issue/data model (condition report = facts, not fault).
- **Product/docs** 2h — Documented why issue responses are deliberately not seal-locked, marked dormant anti-fraud signals, and fixed the migrations path in the code map.

### 2026-06-20  ·  106.2h (30.3 person-days)  ·  Dubai $3,683 – $5,685 / US $8,085 – $11,359
- **Backend** 15h — Auth/JWT hardening (post-reset token invalidation, refresh replay/family-revocation), signature double-sign race fixes, claimPair device-handshake, notifications kill-switch, taxonomy enforcement + past-due payment reminders, server re-fingerprint/Merkle and dedicated rate buckets.
- **Security** 10h — Removed hardcoded JWT_SECRET from source, https guard + fail-open signal, Google Android audience/azp validation, magic-link/verify rate-limit + liveness, recover-portal XSS and security-header hardening.
- **QA** 7.5h — Wrote 858 lines of real-DB tests: refreshSession replay/family-revocation, handshakeCrypto seal/unseal + key validation, claimPair, and requireAuth A11 coverage.
- **Mobile** 7h — Zero-delay capture refactor (camera reopens instantly), torch/floor options/review-tray delete/push-to-talk, offline-state surfacing, GPS timeout + honest time/location labels, walk-&-talk disabled behind feature flag.
- **Frontend** 5h — claim and landlord-claims screens, emoji/LTR glyph to brand-icon sweep, and recover portal web UI hardening.
- **AI/ML** 4h — Aligned comparePhotoBuffers to the renter/documentary vision philosophy and made failed AI jobs return 200 instead of 502.
- **Design** 2h — Replaced emoji and LTR-baked arrow glyphs with real brand icons and fixed misleading capture-tray chip visuals.
- **DevOps** 0.7h — Untracked self-referential node_modules symlink and bumped OTA testmode markers 00132 to 00134.
- **Product/docs** 55h — Authored ~55k words: audit2 findings/scope/closure ledgers for units 01/02/03/05 plus the 17-file design spec system (DESIGN-DNA, VISUAL-SYSTEM, TRUST-CEREMONY, UX-AUDIT) and V3.0 deferral roadmap.

### 2026-06-21  ·  60h (17.1 person-days)  ·  Dubai $2,096 – $3,147 / US $4,758 – $6,328
- **Backend** 10h — Reworked the capture data model to a single user-selected video frame, added 48h-free/1yr-paid retention, and shipped the new POST /inspections/:id/spaces endpoint to append furniture rooms post-walkthrough.
- **Security** 11h — Hardened inspection DELETE and property-seal paths against TOCTOU (SELECT FOR UPDATE + transactional re-guards), made media upload idempotent, and added DB-level CHECK/LOCK integrity guards on GPS bounds and fraud signals.
- **Mobile** 20h — Built the walk-room-by-room flow end to end: new video frame-picker screen, damage-led and picture-led room pickers (where.tsx), the space-mapping walk-order list redesign of plan.tsx, the furniture step, and camera UI fixes.
- **QA** 6h — Updated and extended the test suites (inspections, media, upload-policy, spaces) covering delete races, idempotency replay, tier-gated retention and the new endpoint to a green ~995-test backend run.
- **Design** 5h — Drove the UX redesign of the capture flow (method-of-loci walk-order list, recognition-over-recall room tiles, calm seal-nudge on the Free tier, real video glyph) grounded in persona research.
- **DevOps** 2.5h — Diagnosed the EAS pod-install failure to GoogleSignIn AppCheckCore, forced modular headers for the Google pods, and aligned the Expo SDK 55 native modules.
- **Product/docs** 3.5h — Wrote the LOCKED walk-it-room-by-room capture spec, the FIX-PLAN and EAS-blocked handoff notes, and routed/closed the audit2/03 fresh-pass findings.
- **AI-ML** 2h — Adapted the aiVision pipeline and media-upload policy to score the single user-selected frame instead of extracted video frames.

### 2026-06-22  ·  157h (44.9 person-days)  ·  Dubai $5,518 – $8,167 / US $12,340 – $16,410
- **Backend** 64h — Closed the audit2 forensic-fix campaign across payments (webhook-origin + refund/dispute clawback), antifraud (IPQS, risk scoring), sharing (idempotent ON CONFLICT race), reports, retention/cleanup, admin-ops audit-log and jobs/rate-limit.
- **Security** 30h — Hardened access-token liveness (block/delete/pre-reset), TOTP replay, Apple nonce single-use, anti-enumeration signup, magic-link revocation, fail-closed artifact deletion, and sealing-integrity (OTS, RFC3161, custody log, merkle proofs).
- **QA** 22h — Wrote and extended the test suites proving each fix — auth, sealing/reportCanonical, payments, logoVotes, document routes and job handlers.
- **Mobile** 18h — Built the walk-flow inspection: station screen, calm/adaptive camera start, room picker, whole-sub-space offer card and Quick Checks/forgot-catcher across phases 4-5.
- **AI/ML** 6.5h — Tuned the Claude vision pipeline, defect KB/taxonomy and added the media AI-analysis marker migration.
- **Design** 4.5h — Shaped the calm camera-start, station layout and offer-card UX and wired 36 Dubai room photos into the picker.
- **DevOps** 1h — Applied the safe Snyk base-image bump and shipped backend migrations live plus OTA testmode 00150 to production.
- **Product/docs** 11h — Authored forensic FINDINGS for ~10 audit units, the Dubai inspection-reminders spec and the v2.5/roadmap deferral notes.

### 2026-06-25  ·  52h (14.9 person-days)  ·  Dubai $1,850 – $2,786 / US $4,280 – $5,640
- **Mobile** 33h — Migrated the full Sleek design system and ~200 already-approved screens into the RN/Expo app, plus inspection UX fixes (camera contrast, sub-area selection, review back button, processing-waits-for-analysis), resume-to-exact-room, and the living in-app report with per-finding repair tips.
- **Backend** 4h — Rewired the account-deletion auth route so OAuth/social-login users can delete via emailed code (Apple 5.1.1 compliance), and wired in care actions and offline-sync handling.
- **Security** 3h — Redesigned the append-only sealed_report_versions DB trigger (migration 0149) to permit right-to-be-forgotten (PDPL Art.6) account deletion without breaking the forensic audit trail.
- **Design** 6h — Authored the Sleek design tokens (colors/typography/spacing/shadows/radius) and the brandbook deck the migrated screens render from.
- **Product** 4h — Wrote the living-report plan, forensic-migration audit, and OTA-00157 design-handoff specs that scoped the day's work.
- **QA** 2h — Updated auth and offline-sync test suites covering the account-deletion and pending-media-deletion paths.

### 2026-06-26  ·  98.5h (28.1 person-days)  ·  Dubai $3,311 – $5,105 / US $7,525 – $10,300
- **Mobile** 34h — Built the entire MyKeyz Care provider Expo app from scratch (~35 screens: auth, 6-step setup, tabs, jobs/quotes/chat/earnings) plus the inspection-app furniture-capture loop, capture-first lock, junk-photo block and sub-area persistence.
- **Product** 22h — Wrote the full Care product planning set (10 spec docs, roadmap), night handoff, and OTA QA issue logs/checklists driving the testmode 00162-00168 fixes.
- **Backend** 14h — Stood up the Care API (Fastify + pg schema for suppliers/jobs/quotes/reveals/conversations/messages, auth, R2) and added the app's /reports/sample.json endpoint serving real sample findings and photos.
- **QA** 13h — Authored the Codex forensic audit (532 lines) and validated each OTA's testable behavior — capture-lock, findings semantics, email-login reachability, zero-mock home — across the full inspection flow.
- **Frontend** 6h — Wired shared Care UI primitives and web (+html) shell, and reworked the inspection app's report-online/sample living-report rendering.
- **Design** 5h — Produced the Care design tokens/theme and product components (TradeOrbit, BrandMark, cards), and exported the new Apple-spec app icon set (icon/adaptive/splash/favicon) from Figma.
- **DevOps** 3h — Configured Care API Dockerfile/railway.json + EAS build, bumped the TestFlight build number, and wrote the TestFlight deployment runbook.
- **AI/ML** 1.5h — Built the voice-price speech parser and speech-recognition/analytics integration for spoken quote entry in the Care app.


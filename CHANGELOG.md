# Changelog

## 2026-03-04

### Added
- New local SEO service hub page at `/services`.
- New intent-focused pages:
  - `/services/headstones-near-me`
  - `/services/cemeteries-near-me`
- Shared local SEO data module with:
  - service-area coverage
  - cemetery coverage lists
  - reusable `LocalBusiness` structured data payload.

### Changed
- Enhanced site layout metadata handling with support for:
  - canonical URLs
  - Open Graph + Twitter meta tags
  - robots directives
  - page-level JSON-LD injection.
- Updated navbar and footer links to route to `/services`.
- Updated homepage services cards to link to the new local-intent pages.
- Added service-page internal links on the contact page.

### Notes
- Build verified successfully with `npm run build` after the SEO page and metadata updates.

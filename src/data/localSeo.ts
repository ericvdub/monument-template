import { siteConfig } from '../config/site';

export const localBusinessId = `${siteConfig.urls.siteUrl}/#local-business`;
export const googleMapsUrl = siteConfig.contact.googleMapsUrl;
export const serviceAreas = siteConfig.serviceAreas;
export const cemeteryCoverage = siteConfig.cemeteryCoverage;

export const localBusinessSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": localBusinessId,
  name: siteConfig.company.name,
  url: siteConfig.urls.siteUrl,
  hasMap: googleMapsUrl,
  image: `${siteConfig.urls.siteUrl}/favicon.svg`,
  telephone: siteConfig.contact.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.state,
    postalCode: siteConfig.contact.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.contact.coordinates.latitude,
    longitude: siteConfig.contact.coordinates.longitude,
  },
  areaServed: serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

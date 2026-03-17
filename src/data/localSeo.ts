import { siteConfig } from '../config/site';

export const localBusinessId = `${siteConfig.urls.siteUrl}/#local-business`;
export const googleMapsUrl = siteConfig.contact.googleMapsUrl;
export const serviceAreas = siteConfig.serviceAreas;
export const serviceAreaCounties = siteConfig.serviceAreaCounties;
export const serviceAreaCities = siteConfig.serviceAreaCities;
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
  email: siteConfig.contact.email,
  description: siteConfig.seo.defaultDescription,
  foundingDate: String(siteConfig.company.foundedYear),
  priceRange: "$$",
  paymentAccepted: "Cash, Check, Credit Card",
  currenciesAccepted: "USD",
  additionalType: "http://www.productontology.org/id/Headstone",
  sameAs: [googleMapsUrl],
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
  areaServed: [
    ...serviceAreaCounties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    ...serviceAreaCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Granite Headstones",
        description:
          "Custom-designed granite headstones including upright monuments, flat markers, slants, and companion memorials.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Monument Design & Engraving",
        description:
          "Personalized monument design with custom engraving, etched portraits, and artwork using our digital design system.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cemetery Monument Installation",
        description:
          "Professional monument delivery and cemetery-compliant installation on prepared foundations.",
      },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export const faqSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

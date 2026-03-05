export const localBusinessId = "https://iveymonuments.com/#local-business";
export const googleMapsUrl =
  "https://maps.app.goo.gl/2SU9LYN2vjZGx93y8";

export const serviceAreas = [
  "Carroll County, Illinois",
  "Whiteside County, Illinois",
  "Jo Daviess County, Illinois",
  "Ogle County, Illinois",
  "Lee County, Illinois",
];

export const cemeteryCoverage = [
  {
    county: "Carroll County",
    cemeteries: [
      "Mt Carroll Cemetery",
      "Shannon Cemetery",
      "Milledgeville Cemetery",
      "Lanark Township Cemetery",
    ],
  },
  {
    county: "Whiteside County",
    cemeteries: [
      "Morrison City Cemetery",
      "Tampico Cemetery",
      "Prophetstown Cemetery",
    ],
  },
  {
    county: "Jo Daviess County",
    cemeteries: ["Galena Township Cemetery", "Elizabeth Township Cemetery"],
  },
  {
    county: "Ogle County",
    cemeteries: ["Oregon Cemetery", "Rochelle Township Cemetery"],
  },
  {
    county: "Lee County",
    cemeteries: ["Dixon Cemetery", "Amboy Township Cemetery"],
  },
];

export const localBusinessSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": localBusinessId,
  name: "Ivey Monuments",
  url: "https://iveymonuments.com",
  hasMap: googleMapsUrl,
  image: "https://iveymonuments.com/favicon.svg",
  telephone: "+1-815-244-3034",
  address: {
    "@type": "PostalAddress",
    streetAddress: "204 W Market St",
    addressLocality: "Mt Carroll",
    addressRegion: "IL",
    postalCode: "61053",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.098543,
    longitude: -89.974097,
  },
  areaServed: serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
};

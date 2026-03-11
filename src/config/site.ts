// ============================================================================
// SITE CONFIGURATION
// ============================================================================
// Edit this file to customize the template for your monument company.
// All company-specific content is centralized here.
// ============================================================================

export const siteConfig = {
  // --------------------------------------------------------------------------
  // Company Info
  // --------------------------------------------------------------------------
  company: {
    name: "Example Monuments",
    tagline: "Serving Our Community With Care",
    foundedYear: 1950,
    foundingLocation: "Springfield",
    currentLocation: "Springfield",
    state: "Illinois",
    stateAbbr: "IL",
    region: "central Illinois",
    /** Used in stats like "75+ Years in Business" */
    yearsInBusiness: "75+",
    familiesServed: "3,000+",
    qualityGuarantee: "100%",
    locationsCount: "1",
    /** The location label shown in stats (e.g., "Illinois Location") */
    locationLabel: "Illinois Location",
  },

  // --------------------------------------------------------------------------
  // Contact Info
  // --------------------------------------------------------------------------
  contact: {
    phone: "(555) 123-4567",
    phoneTel: "tel:555-123-4567",
    phoneRaw: "+1-555-123-4567",
    email: "info@examplemonuments.com",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
      full: "123 Main St, Springfield, IL 62701",
    },
    coordinates: {
      latitude: 39.7817,
      longitude: -89.6501,
    },
    googleMapsUrl: "https://maps.google.com/?q=123+Main+St+Springfield+IL+62701",
    /** Google Maps embed URL for the contact page iframe */
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-89.6501!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s123+Main+St%2C+Springfield%2C+IL+62701!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    hours: [
      { days: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
    ],
    hoursNote: "Or by appointment",
  },

  // --------------------------------------------------------------------------
  // Website / External URLs
  // --------------------------------------------------------------------------
  urls: {
    siteUrl: "https://www.examplemonuments.com",
    /** Online memorial designer tool URL (e.g., Lasting Memori) */
    designerUrl: "https://lastingmemori.com/designer/example-monuments",
  },

  // --------------------------------------------------------------------------
  // Brand Colors (also update CSS variables in src/styles/global.css)
  // --------------------------------------------------------------------------
  colors: {
    primary: "#d97706",
    primaryBg: "#F8F0DE",
    gradientFrom: "#fef3c7",
    gradientTo: "#fff7ed",
  },

  // --------------------------------------------------------------------------
  // Service Areas
  // --------------------------------------------------------------------------
  serviceAreas: [
    "Sangamon County, Illinois",
    "Menard County, Illinois",
    "Morgan County, Illinois",
    "Logan County, Illinois",
    "Christian County, Illinois",
  ],

  cemeteryCoverage: [
    {
      county: "Sangamon County",
      cemeteries: [
        "Oak Ridge Cemetery",
        "Camp Butler National Cemetery",
        "Calvary Cemetery",
        "Roselawn Memorial Park",
      ],
    },
    {
      county: "Menard County",
      cemeteries: [
        "Oakland Cemetery",
        "Rose Hill Cemetery",
      ],
    },
    {
      county: "Morgan County",
      cemeteries: [
        "Diamond Grove Cemetery",
        "East Cemetery",
        "Memorial Lawn Cemetery",
      ],
    },
    {
      county: "Logan County",
      cemeteries: [
        "Union Cemetery",
        "Zion Cemetery",
      ],
    },
    {
      county: "Christian County",
      cemeteries: [
        "Graceland Cemetery",
        "Harristown Cemetery",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // Hero Section
  // --------------------------------------------------------------------------
  hero: {
    headline: "Crafted to Honor Every Story",
    subheadline:
      "Decades of experience helping families honor their loved ones with compassionate, personalized design.",
  },

  // --------------------------------------------------------------------------
  // About Section (homepage)
  // --------------------------------------------------------------------------
  about: {
    heading: `Serving Our Community Since 1950`,
    paragraphs: [
      "Example Monuments has been serving local families for over seven decades. Founded in 1950 in Springfield, our family business continues to uphold the values of quality craftsmanship, personal service, and compassionate care.",
      "We understand that choosing a memorial is a deeply personal decision. Our experienced team works closely with each family to create a lasting tribute that truly honors their loved one's memory and legacy.",
      "From traditional granite monuments to custom-designed memorials, we use only the finest materials and time-honored techniques to ensure your monument stands the test of time.",
    ],
  },

  // --------------------------------------------------------------------------
  // About Page (full page)
  // --------------------------------------------------------------------------
  aboutPage: {
    heroSubtitle: `Serving Our Community Since 1950`,
    heroDescription:
      "For over 75 years, Example Monuments has honored the lives of those we've lost — with granite, with care, and with the deep roots of a local family business.",
    storyHeading: "A 75-Year Legacy",
    storyParagraphs: [
      "Example Monuments was founded in 1950 in Springfield, Illinois by the Smith family. For decades the business has served the local community, operating out of the same building at 123 Main St.",
      "Today the business continues under new ownership, while maintaining the same familiar service that families have counted on for generations.",
      "Example Monuments offers a modern computer design system for personalized stone layouts, a full range of granite options, and the equipment to handle monument relocation. The tradition of craftsmanship and compassion is as strong as ever.",
    ],
    valuesDescription:
      "The principles that have guided Example Monuments for over seven decades.",
    timeline: [
      { year: "1950", event: "Founded in Springfield, Illinois by the Smith family." },
      { year: "1965", event: "Moved into the current location at 123 Main St — still our home today." },
      { year: "1980", event: "Second generation takes over operations, continuing the family tradition." },
      { year: "2000", event: "Expanded services to include digital design and online consultations." },
      { year: "2020", event: "New ownership takes the helm, preserving legacy and community ties." },
    ],
    /** Photo captions and years for the About page lightbox gallery */
    photos: [
      { alt: "Original storefront", caption: "The original storefront", year: "c. 1950s" },
      { alt: "Store mid-century", caption: "The business, mid-century", year: "Mid-century" },
      { alt: "Founder portrait", caption: "Company founder", year: "1950" },
      { alt: "Storefront today", caption: "123 Main St — today", year: "2024" },
      { alt: "Monument yard today", caption: "The monument yard today", year: "2024" },
    ],
  },

  // --------------------------------------------------------------------------
  // Testimonials
  // --------------------------------------------------------------------------
  testimonials: {
    heading: "What Families Say",
    subheading:
      "We're honored to serve families during their time of need.",
    items: [
      {
        name: "Sarah Johnson",
        location: "Springfield, IL",
        text: "The team at Example Monuments helped us create a beautiful memorial for my father. They were patient, understanding, and the craftsmanship is exceptional. We couldn't be more grateful.",
      },
      {
        name: "Michael and Linda Chen",
        location: "Jacksonville, IL",
        text: "From design to installation, everything was handled with professionalism and care. The monument is exactly what we envisioned. Thank you for honoring our mother's memory so beautifully.",
      },
      {
        name: "Robert Martinez",
        location: "Lincoln, IL",
        text: "I highly recommend Example Monuments. They restored my grandparents' headstone and it looks brand new. Their attention to detail and respect for family history is outstanding.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  faqs: [
    {
      question: "How long does it take to make a monument?",
      answer:
        "Most monuments are completed within 8-12 weeks after the design is approved. Custom designs or specialty materials may take a bit longer. We'll give you a specific timeline when your order is placed.",
    },
    {
      question: "What materials do you offer?",
      answer:
        "We work primarily with granite in a variety of colors — including Black, Gray, Pink, Blue Pearl, and Red — as well as marble and bronze. Visit our Materials page for a full overview of available options.",
    },
    {
      question: "Can I see a proof before my monument is made?",
      answer:
        "Absolutely. We provide a detailed digital proof for your approval before any work begins. No monument goes into production until you are completely satisfied with the design.",
    },
    {
      question: "Do you offer installation?",
      answer:
        "Yes. We handle delivery and professional installation at the cemetery. We coordinate directly with cemetery offices to ensure all placement requirements are met.",
    },
    {
      question: "What is your quality guarantee?",
      answer:
        "We stand behind every monument we create with a 100% satisfaction guarantee. If there is ever a defect in materials or craftsmanship, we will make it right — at no cost to you.",
    },
    {
      question: "How does the online designer work?",
      answer:
        "Our online designer lets you choose a monument shape, select a granite color, and add lettering or artwork to see a preview before you contact us. It's a great starting point for your design consultation.",
    },
    {
      question: "Which cemeteries do you serve?",
      answer:
        "We serve cemeteries throughout our local area and the surrounding region. Contact us if you're unsure whether we serve your area.",
    },
  ],

  // --------------------------------------------------------------------------
  // Online Designer CTA Section
  // --------------------------------------------------------------------------
  designerCTA: {
    heading: "Honor Their Story, Your Way",
    description:
      "Creating a memorial shouldn't add stress. Design a tribute that truly reflects their spirit — from anywhere, with anyone who loved them.",
    footerNote: "No account required · Free to use · Bring your design to our showroom",
  },

  // --------------------------------------------------------------------------
  // SEO Defaults
  // --------------------------------------------------------------------------
  seo: {
    defaultTitle: "Example Monuments | Serving Our Community Since 1950",
    defaultDescription:
      "Example Monuments has served local families since 1950. We craft quality granite monuments, headstones, and memorials in Springfield, IL.",
    aboutTitle: "About Example Monuments | Serving Our Community Since 1950",
    aboutDescription:
      "Learn the story of Example Monuments — a family-owned monument company serving the local community since 1950. Quality granite memorials with a 100% satisfaction guarantee.",
    contactTitle: "Contact Example Monuments | Springfield, IL | (555) 123-4567",
    contactDescription:
      "Contact Example Monuments in Springfield, IL. Call (555) 123-4567 or send a message for a free monument consultation.",
    galleryTitle: "Monument Gallery | Example Monuments | Springfield, IL",
    galleryDescription:
      "Browse granite monuments, flat markers, slants, benches, and custom memorial designs by Example Monuments.",
    materialsTitle: "Granite & Material Colors | Example Monuments | Springfield, IL",
    materialsDescription:
      "Explore granite colors and materials available from Example Monuments — including Black, Gray, Pink, Blue Pearl, Red granite, marble, and bronze.",
    servicesTitle:
      "Monument Services | Headstones & Cemetery Memorials",
    servicesDescription:
      "Explore headstone and cemetery monument services from Example Monuments in Springfield, IL.",
  },

  // --------------------------------------------------------------------------
  // Footer
  // --------------------------------------------------------------------------
  footer: {
    description: `Creating lasting tributes with care, compassion, and craftsmanship since 1950.`,
  },
} as const;

// Export shorthand accessors for convenience
export const { company, contact, urls, colors, serviceAreas, cemeteryCoverage } = siteConfig;

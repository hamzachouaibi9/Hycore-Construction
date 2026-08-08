import { mockLocations } from "./data";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://hycoreconstruction.com";

export const BUSINESS = {
  name: "Hycore Construction",
  legalName: "Hycore Construction",
  phone: "+1-813-531-2173",
  phoneDisplay: "(813) 531-2173",
  email: "hycoreconstruction@gmail.com",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  addressLocality: "Tampa",
  addressRegion: "FL",
  addressCountry: "US",
  priceRange: "$$",
};

export const absoluteUrl = (path: string) => `${BASE_URL}${path}`;

/** Trim long body copy down to a meta-description-sized excerpt. */
export function metaDescription(text: string, max = 158): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Site-wide GeneralContractor schema — rendered once in the root layout. */
export function generalContractorJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: mockLocations.map((l) => ({
      "@type": "City",
      name: l.name,
    })),
    knowsAbout: [
      "New home construction",
      "Home remodeling",
      "Kitchen remodeling",
      "Bathroom remodeling",
      "Home additions",
      "Storm damage repair",
      "Grading and excavation",
    ],
  };
}

export function breadcrumbsJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: metaDescription(opts.description, 500),
    url: absoluteUrl(opts.path),
    ...(opts.image ? { image: opts.image.startsWith("http") ? opts.image : absoluteUrl(opts.image) } : {}),
    serviceType: opts.name,
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: mockLocations.map((l) => ({ "@type": "City", name: l.name })),
  };
}

export function projectGalleryJsonLd(project: {
  title: string;
  description: string;
  slug: string;
  heroImage: string;
  gallery: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: project.title,
    description: metaDescription(project.description, 300),
    url: absoluteUrl(`/projects/${project.slug}`),
    primaryImageOfPage: absoluteUrl(project.heroImage),
    image: [project.heroImage, ...project.gallery].map((g) => absoluteUrl(g)),
    publisher: { "@id": `${BASE_URL}/#business` },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/**
 * Ties the separately-marketed projects and services together:
 * project categories map to the service page that sells that work,
 * so every project page links up to its service and every service
 * page can surface proof-of-work projects.
 */
export const categoryToServicePath: Record<string, string> = {
  "New Construction": "/services/new-construction",
  "Kitchen Remodeling": "/services/home-renovation-remodeling/kitchen-remodeling",
  "Bathroom Remodeling": "/services/home-renovation-remodeling/bathroom-remodeling",
  "Interior Remodeling": "/services/home-renovation-remodeling/interior-remodeling",
  "Grading & Excavation": "/services/grading-excavation",
  "Outdoor Structures": "/services/home-renovation-remodeling/exterior-home-remodeling",
};

/** Categories that belong to each top-level service page, for related-project sections. */
export const serviceSlugToCategories: Record<string, string[]> = {
  "new-construction": ["New Construction"],
  "personalized-design": ["New Construction"],
  "home-renovation-remodeling": [
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Interior Remodeling",
    "Outdoor Structures",
  ],
  "grading-excavation": ["Grading & Excavation"],
};

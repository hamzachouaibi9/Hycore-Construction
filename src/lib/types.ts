export interface SubService {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  categorySlug: string;
  whatIsIncluded: { title: string; description: string }[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  heroImage: string;
  whatIsIncluded: { title: string; description: string }[];
  featured: boolean;
  subServices?: SubService[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  client: string;
  budget: string;
  deadline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  featured: boolean;
}

export interface Author {
  id: string;
  name: string;
  image: string;
  role: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  author: Author;
  heroImage: string;
  excerpt: string;
  content: string;
  featured: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface SiteSettings {
  address: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  hoursWeekdays: string;
  hoursSaturday: string;
  hoursSunday: string;
}

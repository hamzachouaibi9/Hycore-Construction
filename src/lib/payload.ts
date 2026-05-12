import type { Service, SubService, Project, Article, FAQ, SiteSettings } from "./types";
import {
  mockServices,
  mockProjects,
  mockArticles,
  mockFAQs,
  mockSiteSettings,
} from "./data";

const PAYLOAD_URL = process.env.PAYLOAD_URL || "";

async function payloadFetch<T>(path: string, fallback: T): Promise<T> {
  if (!PAYLOAD_URL) return fallback;
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/${path}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;
    const json = await res.json();
    return (json.docs ?? json) as T;
  } catch {
    return fallback;
  }
}

export async function getServices(): Promise<Service[]> {
  return payloadFetch<Service[]>("services?limit=100&sort=order", mockServices);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  if (!PAYLOAD_URL) {
    return mockServices.find((s) => s.slug === slug) ?? null;
  }
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/services?where[slug][equals]=${slug}&limit=1`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.docs?.[0] ?? null;
  } catch {
    return mockServices.find((s) => s.slug === slug) ?? null;
  }
}

export async function getSubServiceBySlug(
  categorySlug: string,
  subSlug: string
): Promise<SubService | null> {
  if (!PAYLOAD_URL) {
    const category = mockServices.find((s) => s.slug === categorySlug);
    return category?.subServices?.find((s) => s.slug === subSlug) ?? null;
  }
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/sub-services?where[slug][equals]=${subSlug}&where[category.slug][equals]=${categorySlug}&limit=1`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.docs?.[0] ?? null;
  } catch {
    const category = mockServices.find((s) => s.slug === categorySlug);
    return category?.subServices?.find((s) => s.slug === subSlug) ?? null;
  }
}

export async function getProjects(): Promise<Project[]> {
  return payloadFetch<Project[]>("projects?limit=100&sort=-createdAt", mockProjects);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!PAYLOAD_URL) {
    return mockProjects.find((p) => p.slug === slug) ?? null;
  }
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/projects?where[slug][equals]=${slug}&limit=1`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.docs?.[0] ?? null;
  } catch {
    return mockProjects.find((p) => p.slug === slug) ?? null;
  }
}

export async function getArticles(): Promise<Article[]> {
  return payloadFetch<Article[]>(
    "articles?limit=100&sort=-publishedDate",
    mockArticles
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!PAYLOAD_URL) {
    return mockArticles.find((a) => a.slug === slug) ?? null;
  }
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/articles?where[slug][equals]=${slug}&limit=1`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.docs?.[0] ?? null;
  } catch {
    return mockArticles.find((a) => a.slug === slug) ?? null;
  }
}

export async function getFAQs(): Promise<FAQ[]> {
  return payloadFetch<FAQ[]>("faqs?limit=100&sort=order", mockFAQs);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return payloadFetch<SiteSettings>("globals/site-settings", mockSiteSettings);
}

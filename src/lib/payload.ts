import type { Service, SubService, Project, Article, FAQ, Location } from "./types";
import {
  mockServices,
  mockProjects,
  mockArticles,
  mockFAQs,
  mockLocations,
} from "./data";

export async function getServices(): Promise<Service[]> {
  return mockServices;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return mockServices.find((s) => s.slug === slug) ?? null;
}

export async function getSubServiceBySlug(
  categorySlug: string,
  subSlug: string
): Promise<SubService | null> {
  const category = mockServices.find((s) => s.slug === categorySlug);
  return category?.subServices?.find((s) => s.slug === subSlug) ?? null;
}

export async function getProjects(): Promise<Project[]> {
  return mockProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return mockProjects.find((p) => p.slug === slug) ?? null;
}

export async function getArticles(): Promise<Article[]> {
  return mockArticles;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return mockArticles.find((a) => a.slug === slug) ?? null;
}

export async function getFAQs(): Promise<FAQ[]> {
  return mockFAQs;
}

export async function getLocations(): Promise<Location[]> {
  return mockLocations;
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  return mockLocations.find((l) => l.slug === slug) ?? null;
}

import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  ogImage: z.string().optional(),
  twitterCard: z.string().optional(),
});

const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  series: z.string(),
  lang: z.string().optional(),
  type: z.string().optional(),
  tags: z.array(z.string()).optional(),
  summary: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  canonicalUrl: z.string().optional(),
  author: z.string().optional(),
  publishedDate: z.string().optional(),
  modifiedDate: z.string().optional(),
  category: z.string().optional(),
  subcategory: z.string().optional(),
  featured: z.boolean().optional(),
  business_concept: z.string().optional(),
  bookReference: z.object({
    title: z.string(),
    author: z.string(),
    isbn: z.string().optional(),
    publisher: z.string().optional(),
    year: z.number().optional(),
  }).optional(),
  links: z.array(z.object({
    title: z.string(),
    url: z.string(),
  })).optional(),
  readingTime: z.number().optional(),
  wordCount: z.number().optional(),
  difficulty: z.string().optional(),
  social: z.object({
    thread: z.boolean().optional(),
    ig: z.boolean().optional(),
    x: z.boolean().optional(),
    fb: z.boolean().optional(),
  }).optional(),
  // AI SEO 優化欄位
  entities: z.array(z.string()).optional(),
  related_topics: z.array(z.string()).optional(),
  content_type: z.string().optional(),
  expertise_level: z.string().optional(),
  last_fact_check: z.string().optional(),
  primary_sources: z.array(z.string()).optional(),
  targetAudience: z.array(z.string()).optional(),
  seo: seoSchema.optional(),
});

const cryptoCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    ticker: z.string().optional(),
  }),
});

const aiCollection = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const startupCollection = defineCollection({
  type: 'content',
  schema: baseSchema,
});

export const collections = {
  crypto: cryptoCollection,
  ai: aiCollection,
  startup: startupCollection,
};
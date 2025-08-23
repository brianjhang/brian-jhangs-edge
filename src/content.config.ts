import { defineCollection, z } from 'astro:content';

const base = {
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  summary: z.string().max(180),
  type: z.enum(["education","opinion","story"]).default("education"),
  lang: z.enum(["zh-TW","zh-CN","en"]).default("zh-TW"),
  social: z.object({
    thread: z.boolean().default(true),
    ig: z.boolean().default(true),
    x: z.boolean().default(true),
    fb: z.boolean().default(true)
  }).default({})
};

export const collections = {
  // New knowledge base structure
  ai: defineCollection({
    type: "content",
    schema: z.object({
      ...base,
      difficulty: z.enum(["beginner","intermediate","advanced"]).default("beginner"),
      category: z.string().optional(),
      keywords: z.array(z.string()).default([]),
      links: z.array(z.object({
        title: z.string().optional(),
        url: z.string().optional(),
      })).default([]),
      readingTime: z.number().default(5)
    })
  }),
  startup: defineCollection({
    type: "content",
    schema: z.object({
      ...base,
      difficulty: z.enum(["beginner","intermediate","advanced"]).default("beginner"),
      category: z.string().optional(),
      framework: z.string().optional(),
      keywords: z.array(z.string()).default([]),
      bookReference: z.object({
        title: z.string(),
        author: z.string(),
        isbn: z.string().optional(),
        publisher: z.string().optional(),
        year: z.number().optional()
      }).optional(),
      links: z.array(z.object({
        title: z.string().optional(),
        url: z.string().optional(),
      })).default([]),
      readingTime: z.number().default(5)
    })
  }),
  crypto: defineCollection({
    type: "content",
    schema: z.object({
      ...base,
      difficulty: z.enum(["beginner","intermediate","advanced"]).default("beginner"),
      category: z.string().optional(),
      ticker: z.string().optional(),
      keywords: z.array(z.string()).default([]),
      links: z.array(z.object({
        title: z.string().optional(),
        url: z.string().optional(),
      })).default([]),
      readingTime: z.number().default(5)
    })
  }),
  // Legacy daily collection (keep for backward compatibility during transition)
  daily: defineCollection({
    type: "content",
    schema: z.object({
      ...base,
      series: z.enum(["crypto","ai","startup"]),
      ticker: z.string().optional(),
      links: z.array(z.object({
        title: z.string().optional(),
        url: z.string().optional(),
      })).default([]),
      readingTime: z.number().default(2)
    })
  }),
  // Topic planning and tracking collection
  ideas: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      category: z.enum(["ai","crypto","startup"]),
      status: z.enum(["draft","planned","published"]).default("draft"),
      priority: z.enum(["high","medium","low"]).default("medium"),
      tags: z.array(z.string()).default([]),
      lastUpdated: z.string()
    })
  }),
};

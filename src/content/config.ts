import { defineCollection, z } from "astro:content";

const base = {
  title: z.string(),
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
  daily: defineCollection({
    type: "content",
    schema: z.object({
      ...base,
      series: z.enum(["crypto","ai","founder"]),
      ticker: z.string().optional(),
      links: z.array(z.object({ title: z.string(), url: z.string() })).default([]),
      readingTime: z.number().default(2)
    })
  }),
  weekly: defineCollection({
    type: "content",
    schema: z.object({ ...base, edition: z.string().optional() })
  }),
  monthly: defineCollection({
    type: "content",
    schema: z.object({ ...base, edition: z.string().optional() })
  }),
};

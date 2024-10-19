import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    heroImage: z.string().optional(),
		heroThumb: z.string().optional(),
		heroImageScroll: z.string().optional(),
		siteUrl: z.string().optional(),
		role: z.string().optional(),
		platform: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		status: z.string().optional()
  }),
});

export const collections = { blog, work, projects };

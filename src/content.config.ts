// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 3. Define your collection(s)
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    techStack: z.array(z.string()),
    role: z.string().optional(),
    type: z.enum(["academic", "personal", "freelance", "internship", "volunteer"]),
    startDate: z.date(),
    endDate: z.date().optional(),
    featured: z.boolean().default(false),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    images: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
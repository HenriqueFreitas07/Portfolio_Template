// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 3. Define your collection(s)
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    role: z.string().optional(),
    type: z.enum(["academic", "personal", "freelance", "internship", "volunteer"]),
    startDate: z.date(),
    endDate: z.date().optional(),
    repoUrl: z.array(z.string().url()),
    liveUrl: z.string().url().optional(),
    image: z.string().optional()
  }),
});

export const collections = { projects };

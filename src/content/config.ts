import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().int().nonnegative(),
  }),
});

const cardEntrySchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string().optional(),
  interval: z.string().optional(),
  logo: z.string().optional(),
  topics: z.array(z.string()).optional(),
  link: z.string().url().optional(),
  order: z.number().int().nonnegative(),
});

const education = defineCollection({
  type: 'data',
  schema: z.object({
    institution: z.string(),
    program: z.string(),
    interval: z.string(),
    logo: z.string().min(1),
    order: z.number().int().nonnegative(),
    topics: z.array(z.string()).optional(),
  }),
});

const about = defineCollection({ type: 'data', schema: cardEntrySchema });
const career = defineCollection({ type: 'data', schema: cardEntrySchema });
const publications = defineCollection({ type: 'data', schema: cardEntrySchema });
const projects = defineCollection({ type: 'data', schema: cardEntrySchema });

export const collections = { sections, education, about, career, publications, projects };

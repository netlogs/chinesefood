// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const bestChineseFoodCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    description: z.string(),
    highlights: z.string(), //Texture and Taste
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    category: z.string(),
    author: z.string(),
    featured: z.boolean().default(false),
    publishDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
  }),
});

const cityGuidesCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    highlights: z.string(), //Texture and Taste
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    category: z.string(),
    author: z.string(),
    featured: z.boolean().default(false),
    city: z.string().optional(),
    description: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
  }),
});

const foodCultureCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    highlights: z.string(), //Texture and Taste
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    category: z.string(),
    author: z.string(),
    city: z.string().optional(),
    description: z.string(),
    featured: z.boolean().default(false),
    publishDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
  }),
});

const foodCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    category: z.string(),
    region: z.string(),
    city: z.string().optional(),
    publishDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'best-chinese-food': bestChineseFoodCollection,
  'blog': blogCollection,
  'team': teamCollection,
  'city-guides': cityGuidesCollection,
  'food-culture': foodCultureCollection,
  'food': foodCollection,
};
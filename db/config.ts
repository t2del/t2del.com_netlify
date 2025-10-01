import { defineDb, defineTable, column } from 'astro:db';

const Blog = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    content: column.text(),
    thumbnail: column.text({ optional: true }), // URL or path to the image
    status: column.text({ default: 'draft' }), // e.g., 'published', 'draft', 'archived'
    datePublished: column.date({ default: new Date() }), // Defaults to the current date
  },
});

export default defineDb({
  tables: { Blog },
});
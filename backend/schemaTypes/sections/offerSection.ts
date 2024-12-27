import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'featureSection',
  title: 'Features',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'text',
      title: 'Features',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

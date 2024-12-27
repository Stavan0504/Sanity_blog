import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'arrays',
      title: 'Arrays',
      type: 'array',
      of: [
        {
          type: 'heroSection',
        },
        {
            type: 'blogSection',
        },
        {
          type:'faqSection',
        },
        {
          type:'mainSection'
        },
        {
          type:'featureSection'
        },
        {
          type:'testimonialSection'
        }
      ],
    }),
  ],
});

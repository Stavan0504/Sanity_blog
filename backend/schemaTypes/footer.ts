import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'footerName',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'rights',
        title: 'Rights',
        type: 'string',
      }),
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        defineField({
          name: 'navItem',
          title: 'Navigation Item',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: (doc, options) => options.parent.label,
                maxLength: 96,
              },
            }),
            defineField({
                name: 'navUrl',
                title: 'NavUrl',
                type: 'url',
                validation: (Rule:any) => Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel']
                  })
              }),
              defineField({
                name: 'path',
                title: 'Path',
                type: 'string',
              }),
          ],
        })
      ],
    }),
  ],
});

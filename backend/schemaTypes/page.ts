import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [
                {
                    name: 'sections',
                    title: 'Section',
                    type: 'reference',
                    to: {type: 'section'},
                    
                }
              ],
        }),
        defineField({
            name: 'header',
            title: 'Header',
            type: 'reference',
            to: {type: 'header'},
            options: {
                modal: 'popover', 
            },
        }),
    ],
});

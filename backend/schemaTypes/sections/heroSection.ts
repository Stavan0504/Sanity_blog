import { defineField, defineType } from 'sanity';

export default defineType({
    name:'heroSection',
    title:'Hero Section',
    type:'object',
    fields: [
        defineField({
            name:'title',
            title:'Title',
            type:'string',
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'blockContent',
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
        })
    ]
    }
)

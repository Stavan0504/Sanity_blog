import {defineType, defineField} from 'sanity';

export default defineType({
    name:'testimonialSection',
    title:'Testimonial Section',
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
            type:'array',
            of:[{type:'block'},{type:'image'}],
        }),

    ]
    }
)
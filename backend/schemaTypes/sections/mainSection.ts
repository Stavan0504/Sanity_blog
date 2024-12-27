import {defineField,defineType} from 'sanity'

export default defineType({
    name:'mainSection',
    title:'Main',
    type:'object',
    fields:[
        defineField({
            name:'text',
            title:'Text',
            type:'blockContent'
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        })
    ]
})
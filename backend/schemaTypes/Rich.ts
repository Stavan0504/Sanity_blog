import {defineType,defineField} from 'sanity'

export default defineType({
    name:'Rich',
    title:'Rich Text',
    type:'object',
    fields:[
        defineField({
            name:'body',
            title:'Body',
            type:'blockContent',
        })
    ]
})
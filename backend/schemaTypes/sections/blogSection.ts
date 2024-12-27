import { defineType, defineField } from "sanity"; 

export default defineType({
    name: "blogSection",
    title: "Blog Section",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "posts",
            title: "Posts",
            type: "array",
            of: [{ type: "reference", to: [{ type: "post" }] }],
        }),
    ],
});
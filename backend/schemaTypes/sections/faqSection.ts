import { defineType, defineField } from "sanity";
export default defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        defineField({
          name: "faq",
          title: "FAQ",
          type: "object",
          fields: [
            { name: "questions", title: "Question", type: "blockContent" },
            { name: "answer", title: "Answer", type: "blockContent" },
          ],
        }),
      ],
    }),
  ],
});
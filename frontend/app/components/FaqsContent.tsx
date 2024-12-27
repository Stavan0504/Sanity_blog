import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { PortableText } from "@portabletext/react";
import { customComponents } from "./SerializerComponent";
import faqTypes from "../types/faqTypes";

const FAQSection = ({ sections }: faqTypes) => {


  return (
    <div className="p-6 rounded-lg mt-8">
      <h2 className="text-3xl font-semibold text-center text-white">
        Frequently Asked Questions
      </h2>
      <div className="mt-4 space-y-4">
        <Accordion type="single" collapsible>
          {sections[0]?.faqs.map((faq) => (
            <AccordionItem key={faq._key} value={faq._key}>
              <AccordionTrigger>
                <PortableText value={faq.question} components={customComponents} />
              </AccordionTrigger>
              <AccordionContent>
                <PortableText value={faq.answer} components={customComponents} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;

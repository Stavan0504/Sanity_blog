import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortableText } from '@portabletext/react'
import { customComponents } from "./SerializerComponent";
import { testimonial } from "../types/testimonialTypes";
import imageUrlBuilder from "@sanity/image-url";


import { projectId, dataset } from "../Authorization";
export default function Testimonials({sections}:testimonial){
   const builder = imageUrlBuilder({ projectId, dataset });
    function urlFor(source: string) {
      return builder.image(source).url();
    }
    return(
        <section className="py-16 px-6 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((testimonial, index) => (
           <>
              <div className="flex items-center mb-4">
               
                <div className="p-5">
              <PortableText
                value={testimonial.description}
                components={{
                  ...customComponents,
                  types: {
                    image: ({ value }) => (
                      <Image
                        src={urlFor(value.asset._ref)}
                        alt={value.alt || 'Testimonial Image'}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    ),
                  },
                }}
              />
                </div>
              </div>
              </>
          ))}
        </div>
      </section>
    )
}
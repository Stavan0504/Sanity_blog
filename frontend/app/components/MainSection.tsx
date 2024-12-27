"use client";

import { PortableText } from "@portabletext/react";
import { customComponents } from "./SerializerComponent";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { MainSection } from "../types/mainTypes";
import { projectId, dataset } from "../Authorization";

export default function LandingPage({ sections }: MainSection) {
  const builder = imageUrlBuilder({ projectId, dataset });
  function urlFor(source: string) {
    return builder.image(source).url();
  }

  return (
    <main>

      <section className="relative w-full h-screen">

        <div className="relative w-full h-full">
          <Image
            src={urlFor(sections[0].image)}
            alt="Earth Background"
            fill
            className="object-cover"
            priority
          />
 
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-6">

          {sections.map((item, index) => (
            <PortableText
              key={index}
              value={item.text}
              components={customComponents}
            />
          ))}
          <Link href="/blogs">
            <button className="mt-6 bg-black text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition transform hover:scale-105">
              Explore
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

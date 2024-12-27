
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import {PortableText} from '@portabletext/react';
import Link from 'next/link';
import { data } from '../types/HeroTypes';
import { customComponents } from './SerializerComponent';
import { dataset,projectId } from '../Authorization';

export default function Hero({data}:data) {
     const builder = imageUrlBuilder({projectId, dataset});
      function urlFor(source: string) {
        return builder.image(source).url();
      }
    return(
        <header className="relative w-full h-screen z-10">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center">
          <div className="mb-80">
            <PortableText
              value={data[0].description}
              components={customComponents}>
            </PortableText>
            <Link href="#posts">
              <button className="mt-8 px-6 py-3 bg-amber-500 text-gray-900 font-semibold rounded hover:bg-amber-400 transition">
                View Posts
              </button>
            </Link>
          </div>
        </div>
        <Image
        src={urlFor(data[0].image)}
          alt="Earth Background"
          fill
          className="object-cover"
          priority
        />
      </header>
    )
}

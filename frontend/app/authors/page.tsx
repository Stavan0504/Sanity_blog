
import { client } from '../lib/client';
import { ALL_AUTHOR } from '../lib/queries';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import PortableText from 'react-portable-text';
import Link from 'next/link';
import { Author } from '../types/authorTypes';

export default async function Authors() {
    const data = await client.fetch(ALL_AUTHOR);
    const builder = imageUrlBuilder(client);
      function urlFor(source: string) {
        return builder.image(source).url();
      }
    return(
       <>
           <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
             <div className="container mx-auto p-6 flex-1">
               <div className="flex flex-col md:flex-col justify-start  items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-md mb-10">
                {data.pages.map((data:Author) => (
                    <>
                    <Link href={`/authors/${data.slug.current}`} className='w-full'>
                    <div className='flex flex-col md:flex-row items-center  hover:shadow-gray-500 w-full gap-6 transition-all duration-300 hover:scale-105 bg-black p-6 rounded-lg shadow-md' >
                     <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden">
                     <Image
                       src={urlFor(data.image)}
                       alt={data.name}
                       fill
                       className="object-cover"
                     />
                   </div>
                   <div className="text-center md:text-left">
                     <h1 className="text-3xl font-bold text-amber-400 mb-4">{data.name}</h1>
                     <PortableText
                       content={data.bio}
                       projectId="alm73foo"
                       dataset="production"
                       className="text-gray-300 space-y-4"
                     />
                   </div>
                   </div>
                   </Link>
                   </>
                ))}
                
               </div>
               </div>
               </div>
               </>
    
    )

}

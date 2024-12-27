
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { customComponents } from './SerializerComponent';
import BlogImage from './BlogImage';
import Toc from './TableofContent';

export default function BlogContent({ data }: { data: any }) {
  let headingCounter = 0;

  return (
    <div className="container mx-auto p-6 flex-1">
      <h1 className="text-4xl font-bold text-center mb-8">{data.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div className="bg-black shadow-md rounded-lg p-6 mb-10">
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg mx-auto m-6">
              <BlogImage image={data.mainImage} title={data.title} />
            </div>
            <div className="m-10">
              {data.body?.map((section: any, index: number) => {
                const isHeading = ['h1', 'h2', 'h3'].includes(section.style);
                const blockId = isHeading ? `id-${headingCounter++}` : undefined;

                return (
                  <div key={index} id={blockId} className="mb-10">
                    <PortableText value={[section]} components={customComponents} />
                  </div>
                );
              })}
            </div>
            <h4 className="text-sm text-gray-400">
              By{' '}
              <Link href={`/authors/${data.author.slug.current}`} className="underline">
                {data.author.name}
              </Link>
            </h4>
            <h4 className="text-sm text-gray-400 mb-4">
              Published on: {new Date(data.publishedAt).toDateString()}
            </h4>
          </div>
        </div>
        <div className="h-fit p-5 col-span-1  bg-black sticky top-0">
          <Toc data={data} />
        </div>
      </div>
    </div>
  );
}

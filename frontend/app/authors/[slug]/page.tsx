
import React from 'react';
import { client } from '../../lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { AUTHOR_QUERY, AUTHOR_POSTS_QUERY } from '../../lib/queries';
import { Button } from '@/components/ui/button';
import { GetServerSideProps } from 'next';
import PortableText from 'react-portable-text';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../../types/postTypes';

export async function generateStaticParams() {
  const authors = await client.fetch(`
    *[_type == "author"]{
      "slug": slug.current
    }
  `);

  return authors.map((author: { slug: string }) => ({
    slug: author.slug,
  }));
}

const Author = async ( { params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const {slug} = await params;
  const data = await client.fetch(AUTHOR_QUERY, { slug });
  const builder = imageUrlBuilder(client);
  function urlFor(source: string) {
    return builder.image(source).url();
  }
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex-1">
        <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-md mb-10">
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
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-center mb-6">Posts by {data.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.post!=null ?(data.post.map((post:Post) => (
              <Link href={`/blogs/${post.slug.current}`} key={post._id}>
                <div className="bg-gray-800 shadow-lg rounded-lg hover:shadow-gray-500 overflow-hidden hover:scale-105 transition transform duration-300">
                  <div className="relative h-48">
                    <Image
                      src={urlFor(post.mainImage)}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <h4 className="text-sm text-gray-400">
                      {new Date(post.publishedAt).toDateString()}
                    </h4>
                  </div>
                </div>
              </Link>
            ))) : <p>No posts found</p>}
          </div>
        </section>
      </div>

    </div>
  );
}

export default Author;

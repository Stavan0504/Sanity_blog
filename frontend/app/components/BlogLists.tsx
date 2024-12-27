"use client";

import { client } from '../lib/client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import PortableText from 'react-portable-text';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import { Post } from '../types/postTypes';
import { dataset, projectId } from '../Authorization';
import { BLOGS_QUERY } from '../lib/queries';
import { Data } from '../types/blogListTypes';
interface BlogListProps {
  data: Data;
}

export default function BlogLists({data}:BlogListProps) {
  const builder = imageUrlBuilder({ projectId, dataset });

  function urlFor(source: string) {
    return builder.image(source).url();
  }

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    setPosts(data.arrays[0].paginatedPosts as unknown as Post[]);
  }, [data]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMorePosts = async () => {
    try {
      const postsPerPage = 3;
      const start = page * postsPerPage;
      const end = start + postsPerPage !== 7 ? start + postsPerPage : 8;
      const data = await client.fetch(BLOGS_QUERY, { start, end });

      const newPosts = data?.arrays?.flatMap((array: any) =>
        array._type === 'blogSection' ? array.paginatedPosts : []
      );

      if (newPosts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching more posts:', error);
    }
  };

  return (
    <main id="posts" className="container mx-auto p-6 flex-1 z-20">
      <h1 className="text-3xl font-semibold text-center mb-8">Sanity Posts</h1>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={<p className="text-center text-gray-400 mt-4 mb-4"></p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 overflow-x-hidden overflow-y-hidden mb-16">
          {posts?.map((item: Post) => (
            <div
              key={item._id}
              className="bg-gray-800 shadow-lg mx-7 my-7 rounded-lg overflow-hidden hover:scale-105 hover:shadow-gray-500 transition transform duration-300 relative"
            >
              <div className="relative h-48">
                <Link href={`/blogs/${item?.slug?.current}`}>
                  <Image
                    src={urlFor(item?.mainImage)}
                    alt={item.title}
                    fill  
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <h3 className="text-sm text-gray-400">
                  By{' '}
                  <Link href={`/authors/${item.author.slug.current}`} className="underline">
                    {item.author.name}
                  </Link>
                </h3>
                <h4 className="text-sm text-gray-400">
                  {new Date(item.publishedAt).toDateString()}
                </h4>
                <PortableText
                  content={item.preview}
                  projectId="alm73foo"
                  dataset="production"
                  className="text-sm text-gray-400"
                />
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
}

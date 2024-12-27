import { client } from '../../lib/client';
import { PAGE_QUERY, SUGGESTED_POSTS_QUERY, FAQ_QUERY } from '../../lib/queries';
import SuggestedPosts from '@/app/components/SuggestedPosts';
import BlogContent from '@/app/components/BlogContent';
import { Post } from '../../types/postTypes';
import FaqsContent from '@/app/components/FaqsContent';

interface Params {
  slug: string;
}

interface PageProps {
  params: Params;
}
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{"slug": slug.current}`);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

 async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const data: Post = await client.fetch(PAGE_QUERY, { slug });
  const FAQs = await client.fetch(FAQ_QUERY);
  const suggestedPosts: Post[] = await client.fetch(SUGGESTED_POSTS_QUERY, { excludeSlug: slug });

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex-1">
        <BlogContent data={data} />
        <FaqsContent sections={FAQs.sections.arrays} />
        <SuggestedPosts suggestedPosts={suggestedPosts} />
      </div>
    </div>
  );
}

export default Page;

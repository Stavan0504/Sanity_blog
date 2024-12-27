import Link from 'next/link';
import BlogImage from './BlogImage';
import { Post } from '../types/postTypes';
interface SuggestedPostsProps {

  suggestedPosts: Post[];

}
export default function SuggestedPosts({ suggestedPosts }: SuggestedPostsProps) {
    return(
        <section className="mb-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Suggested Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {suggestedPosts.map((post) => (
            <Link href={`/blogs/${post.slug.current}`} key={post._id}>
              <div className="bg-gray-800 shadow-lg rounded-lg hover:shadow-gray-500 overflow-hidden hover:scale-105 transition transform duration-300">
                <div className="relative h-48">
                  <BlogImage
                    image={post.mainImage}
                    title={post.title}
                  />
                </div>
                <div className="mt-36 p-5">
                  <h3 className="text-lg font-bold flex justify-center my-auto mx-auto">{post.title}</h3>
                  <h4 className="text-sm text-gray-400 flex justify-center my-auto mx-auto">
                    {new Date(post.publishedAt).toDateString()}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
}
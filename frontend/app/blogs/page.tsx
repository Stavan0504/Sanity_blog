
import { client } from '../lib/client';
import { HOME_PAGE, BLOGS_QUERY,HERO_QUERY} from '../lib/queries';
import imageUrlBuilder from '@sanity/image-url';
import BlogLists from '../components/BlogLists';
import Hero from '../components/Hero';
async function Home() {
  const page = await client.fetch(HOME_PAGE,{slug:"home"});
  const start=0
  const end=3
  const blog = await client.fetch(HERO_QUERY);
  const data = await client.fetch(BLOGS_QUERY, { start, end,});
  const builder = imageUrlBuilder(client);
  return (
    <>
      <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col relative overflow-hidden">
       <Hero data={page.sections[0].arrays}/>
       <BlogLists data={data}/>
      </div>
    </>
  );
}

export default Home;

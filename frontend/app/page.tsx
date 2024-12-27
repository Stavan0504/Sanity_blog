
import { client } from './lib/client';
import { MAIN_QUERY } from './lib/queries';
import LandingPage from './components/MainSection';
import Features from './components/featureComponent';
import Testimonials from './components/testimonial';
import FAQSection from './components/FaqsContent';
async function Home() {
  const main = await client.fetch(MAIN_QUERY,{slug:'main'});
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white" >
    {main.sections.map((section:any, index:number) => (
      index === 0 ? <LandingPage key={index} sections={section.arrays}/> : index===1 ? <Features key={index} sections={section.arrays}/>: index===2 ? <Testimonials key={index} sections={section.arrays}/>:<FAQSection key={index} sections={section.arrays}/>
    ))}
    </div>
  );
}

export default Home;

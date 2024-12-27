
import { GET_FOOTER } from "../lib/queries"
import Link from 'next/link';
import { client } from "../lib/client";
import { footerItem } from "../types/footerTypes"

export default async function Footer() {
  const data = await client.fetch(GET_FOOTER);
  return (
    <footer className=" bg-black py-8">
      <div className="container mx-auto text-center text-gray-400">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-300">Follow Me</h2>
        </div>
        <div className="flex justify-center space-x-6 ml-24">
          {data[0].navigationItems.map((item:footerItem) => (
            <>
              <Link
                href={`${item.navUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <svg
                  className="w-10 h-10"
                  fill={item.slug.current === 'github' ? 'yellow' : item.slug.current === 'instagram' ? '#E1306C' :item.slug.current === 'x'? 'white':'blue'}
                  viewBox="0 13 50 25"
                >
                  <path d={item.path}></path>
                </svg>
              </Link>
            </>
          ))}

          <Link
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-800 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="..."></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="..."></path>
            </svg>
          </Link>
        </div>
        <p className="mt-4">{data[0].rights}</p>
      </div>
    </footer>
  );
}
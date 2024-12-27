import Link from 'next/link';
import { GET_HEADER } from '../lib/queries';
import { client } from '../lib/client';
import { headerItem } from '../types/headerType';

export default async function Header() {
    const data = await client.fetch(GET_HEADER);
    return(
    <header className="bg-black py-6 shadow-lg z-30 w-full">
    <div className="container mx-auto flex justify-evenly items-center">
    <h1 className="text-3xl font-bold text-amber-500">{data[0].headerName}</h1>
    <nav key={data._id} className="space-x-6">
    {data[0].navigationItems.map((item:headerItem) => (
      <Link href={item.link} key={data._id} className="text-gray-200 hover:text-amber-400">
      {item.label}
      </Link>
    ))}
   </nav>
</div>
</header>
)}
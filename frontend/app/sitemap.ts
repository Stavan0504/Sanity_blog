import { MetadataRoute } from 'next'
import { client } from './lib/client'
import { url } from './Authorization'
import { ALL_AUTHOR, } from './lib/queries';
import { LIST_QUERY } from './lib/queries';
import { Data } from './types/blogListTypes';

export default async function sitemap() :Promise<MetadataRoute.Sitemap> {
    const lists:Data = await client.fetch(LIST_QUERY);
    const data = await client.fetch(ALL_AUTHOR);
    const ListsUrl : MetadataRoute.Sitemap = lists.arrays[0].posts.map((list:any) => {
        return {
            url:`${url}blogs/${list.slug.current}`,
            lastModified:new Date(list.publishedAt),
            changeFrequency:'daily',
            priority:0.5
            
        }
})

    const authUrl : MetadataRoute.Sitemap = data.pages.map((author:any) => {
        return {
            url:`${url}author/${author.slug.current}`,
            lastModified:new Date(),
            changeFrequency:'daily',
            priority:0.9
        }
    }
    )

    return[
        {   
            url:`${url}`,
            lastModified:new Date(),
            changeFrequency:'daily',
            priority:0.7
        },
        {
            url:`${url}blogs`,
            lastModified:new Date(),
            changeFrequency:'daily',
            priority:0.3,
        },
        {
            url:`${url}author`,
            lastModified:new Date(),
            changeFrequency:'daily',
            priority:1,
        },
        ...ListsUrl,
        ...authUrl
    ]
}

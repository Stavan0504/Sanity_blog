import Image from 'next/image'
import  imageUrlBuilder  from '@sanity/image-url';
import {dataset,projectId} from '../Authorization'
interface BlogImageProps {

    image: string;
  
    title: string;
  
  }
  
export default function BlogImage({ image, title }: BlogImageProps) {
     const builder = imageUrlBuilder({dataset,projectId});
      const urlFor = (source: string) => builder.image(source).url()
    return (
       
                   <Image
                     src={urlFor(image)}
                     alt={title}
                     height={700}
                     width={700}
                     objectFit="cover"
                     className="rounded-lg"
                   />
    
    )
}
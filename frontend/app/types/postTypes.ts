export interface Post {
  suggestedPosts: main[];
  _id: string;
  title: string;
  slug: {current: string;}
  mainImage: string;
  publishedAt: Date;
  author: {
    name: string;
    image: string;
    slug: {current: string;}
  };
  body: object[];
  length: number;
  preview: object[];
}
interface main {
  _id: string;
  title: string;
  slug: {current: string;}
  mainImage: string;
  publishedAt: Date;
}
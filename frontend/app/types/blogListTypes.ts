export interface Data {
    _id: string;
    title: string;
    arrays: BlogSectionArray[];
  }
  
  interface BlogSectionArray {
    _type: string;
    _id: string;
    _key: string;
    title: string;
    paginatedPosts: PaginatedPost[];
    posts: PostReference[];
  }
  
  interface PaginatedPost {
    _id: string;
    title: string;
    slug: Slug;
    publishedAt: string;
    author: Author;
    mainImage: MainImage;
    preview: Preview[];
  }
  
  interface Slug {
    _type: string;
    current: string;
  }
  
  interface Author {
    name: string;
    slug: Slug;
    image: AuthorImage;
  }
  
  interface AuthorImage {
    _type: string;
    asset: Asset;
  }
  
  interface MainImage {
    _type: string;
    asset: Asset;
  }
  
  interface Asset {
    _ref: string;
    _type: string;
  }
  
  interface Preview {
    _type: string;
    style: string;
    _key: string;
    markDefs: any[];
    children: Children[];
  }
  
  interface Children {
    _type: string;
    marks: any[];
    text: string;
    _key: string;
  }
  
  interface PostReference {
    _ref: string;
    _type: string;
    _key: string;
  }
  
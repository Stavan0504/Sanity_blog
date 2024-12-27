import {defineQuery} from 'next-sanity'

export const AUTHOR_QUERY = defineQuery(`*[_type == "author" && slug.current == $slug][0]{
    bio,
    name,
    image,
    post[]->{
      _id,
      title,
      mainImage,
      slug,
      publishedAt,
}}`)

export const  GET_HEADER = defineQuery(`*[_type == "header"]{
    headerName,
    navigationItems[]}`)

export const GET_FOOTER = defineQuery(`*[_type == "footer"]{
    footerName,
    rights,
    navigationItems[]}`)    

export const ALL_AUTHOR = defineQuery(`*[_type == "page"][0]{
  pages[]->{
     bio,
    name,
    image,
    slug,
    post[]->{
      _id,
      title,
      mainImage,
      slug,
      publishedAt,
}
}}
    `)

    export const HOME_PAGE = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
      sections[]->{...},
}
    `)

    export const MAIN_QUERY = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
      sections[]->{...}
      }
      `)
    
export const FAQ_QUERY = defineQuery(`*[_type == "page"][2]{
  sections[0]->{
    ...,
    _type == "faqSection" => {
      title,
      questions
    }
}
  }`)

  export const HERO_QUERY = defineQuery(`*[_type == "page"]{
    sections[]->{
      _type,
      ...,
      _type == "heroSection" => {
        text,
        image,
      },
      _type == "faqSection" => {
        title,
        questions
      }
    }
  }`)
  

export const BLOGS_QUERY = defineQuery(`*[_type == "section"][1]{
  _id,
  title,
  arrays[] {
    ...,
    _type == "blogSection" => {
      title,
      "paginatedPosts": posts[$start...$end]->{
        _id,
        title,
        mainImage,
        preview,
        slug,
        publishedAt,
        author->{
          name,
          image,
          slug
        }
      }
    }
  }
}

`)


export const LIST_QUERY = defineQuery(`*[_type == "section"][1]{
  _id,
  title,
  arrays[] {
    ...,
    _type == "blogSection" => {
      title,
     posts[]->{
        _id,
        title,
        mainImage,
        preview,
        slug,
        publishedAt,
        author->{
          name,
          image,
          slug
        }
      }
    }
  }
}

`)



export const PAGE_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    mainImage,
    publishedAt,
    author->{
      name,
      image,
      slug
    }
    }`)  
  

export const SUGGESTED_POSTS_QUERY = defineQuery(`*[_type == "post" && slug.current != $excludeSlug][0...2]{
    _id,
    title,
    mainImage,
    slug,
    publishedAt,
    author->{
      name,
      image,
      slug
    }
    }`)
export const AUTHOR_POSTS_QUERY = defineQuery(`*[_type == "post" && author.slug.current == $slug]{
    _id,
    title,
    mainImage,
    slug,
    post,
    publishedAt}]`)

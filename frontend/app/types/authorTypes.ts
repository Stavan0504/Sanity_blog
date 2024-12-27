
export interface Author{
    name: string;
    image: string;
    bio: object[];
    post: object[];
    slug: { current: string };
}
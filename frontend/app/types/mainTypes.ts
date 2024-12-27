export interface MainSection{
    sections:Main[]
}
interface Main{
    title: string;
    _updatedAt: string;
    _createdAt: string;
    _rev: string;
    _type: string;
    _id: string;
    text: MainSectionArray[];
    image:string
}
interface MainImage{
    _rev: string;
    _type: string;
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    url: string;    
    }

interface MainSectionArray{
    _type: string;
    text: MainSectionArrayText[];
    _key: string;
}
interface MainSectionArrayText{
    children: MainSectionArrayTextChildren[];
    _type: string;
    style: string;
    _key: string;
    markDefs: any[];
}
interface MainSectionArrayTextChildren{
    _type: string;
    marks: any[];
    text: string;
    _key: string;
    markDefs: any[];
}
[
    {
        "image": {
            "asset": {
                "_ref": "image-e1679047adfea7d115f50b24f79bd879f839f2e9-3419x1923-jpg",
                "_type": "reference"
            },
            "_type": "image"
        },
        "_type": "heroSection",
        "description": [
            {
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "Explore Amazing Articles ",
                        "_key": "b2ee7ab8af240"
                    }
                ],
                "_type": "block",
                "style": "h1",
                "_key": "41b378290d34"
            },
            {
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "",
                        "_key": "3e821c3ac74a"
                    }
                ],
                "_type": "block",
                "style": "normal",
                "_key": "8feef327728a"
            },
            {
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "explore blogs of around the world,countries",
                        "_key": "863d9684a18f"
                    }
                ],
                "_type": "block",
                "style": "normal",
                "_key": "71be17afb1a4"
            }
        ],
        "_key": "126f3dbcc2bc",
        "title": "HeroSection"
    }
] 
export interface data{
    data:dataArray[]
}
interface dataArray{
    image:string,
    _type:string,
    description:Description[],
}
interface Description{
    _type:string,
    children:Children[],
    markDefs:MarkDefs[]

}
interface Children{
    _type:string,
    marks:MarkDefs[],
    text:string,
    _key:string
}
interface MarkDefs{
    _type:string
}

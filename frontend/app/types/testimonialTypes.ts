[
    {
        "_type": "testimonialSection",
        "description": [
            {
                "_type": "block",
                "style": "h3",
                "_key": "1c5395a59eb4",
                "markDefs": [],
                "children": [
                    {
                        "text": "Alice Johnson",
                        "_key": "c5f973087df80",
                        "_type": "span",
                        "marks": []
                    }
                ]
            },
            {
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "This blog offers insightful articles and fresh perspectives. A must-read!",
                        "_key": "a53bf10c76050"
                    }
                ],
                "_type": "block",
                "style": "normal",
                "_key": "15cf6fbb8f87"
            }
        ],
        "_key": "80b585ea2528",
        "title": "First Testimonial"
    },
    {
        "_type": "testimonialSection",
        "description": [
            {
                "_key": "bf363524a6f1",
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "Mark Lee",
                        "_key": "c7a86177cb5d0"
                    }
                ],
                "_type": "block",
                "style": "h3"
            },
            {
                "markDefs": [],
                "children": [
                    {
                        "text": "The content here always leaves me inspired and informed. Highly recommended!",
                        "_key": "f81f3a8ad3c70",
                        "_type": "span",
                        "marks": []
                    }
                ],
                "_type": "block",
                "style": "normal",
                "_key": "faed57624d26"
            }
        ],
        "_key": "95fa07ddc93a",
        "title": "Second Testimonial"
    }
]

export interface testimonial{
sections:testimonialArray[]
}
interface testimonialArray{
    _type:string,
    description:testimonialDescription[],
    _key:string,
    image:string,
    title:string
}
interface testimonialDescription{
    _type:string,
    style:string,
    _key:string,
    markDefs:[],
    image:string,
    children:textString[]
}
interface textString{
    text:string,
    _key:string,
    type:string,
    marks:[]
}
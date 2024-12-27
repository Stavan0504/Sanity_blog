// {
//     "_id": "1c0f8738-3bf0-451e-8fc6-4f666800fc2a",
//     "arrays": [
//         {
//             "_type": "featureSection",
//             "text": [
//                 {
//                     "_key": "4f5d8725b624",
//                     "markDefs": [],
//                     "children": [
//                         {
//                             "_type": "span",
//                             "marks": [],
//                             "text": "In-Depth Analysis",
//                             "_key": "2ebec2009a6a0"
//                         }
//                     ],
//                     "_type": "block",
//                     "style": "h1"
//                 },
//                 {
//                     "children": [
//                         {
//                             "_type": "span",
//                             "marks": [],
//                             "text": "Dive into detailed explorations of current topics.",
//                             "_key": "b204d26aed140"
//                         }
//                     ],
//                     "_type": "block",
//                     "style": "normal",
//                     "_key": "5d388186ef64",
//                     "markDefs": []
//                 }
//             ],
//             "_key": "6b1f5eb66381",
//             "title": "First feature"
//         },
//         {
//             "_type": "featureSection",
//             "text": [
//                 {
//                     "_type": "block",
//                     "style": "h1",
//                     "_key": "99905ef84a95",
//                     "markDefs": [],
//                     "children": [
//                         {
//                             "_key": "01c31c4766c90",
//                             "_type": "span",
//                             "marks": [],
//                             "text": "Creative Inspiration"
//                         }
//                     ]
//                 },
//                 {
//                     "_key": "f8827aa2dd23",
//                     "markDefs": [],
//                     "children": [
//                         {
//                             "_key": "b9082ad8e55b0",
//                             "_type": "span",
//                             "marks": [],
//                             "text": "Unleash your imagination with our creative content."
//                         }
//                     ],
//                     "_type": "block",
//                     "style": "normal"
//                 }
//             ],
//             "_key": "409004e23cdd",
//             "title": "Second Feature"
//         },
//         {
//             "_type": "featureSection",
//             "text": [
//                 {
//                     "markDefs": [],
//                     "children": [
//                         {
//                             "_type": "span",
//                             "marks": [],
//                             "text": "Engaging Stories",
//                             "_key": "9e72ef2d8e1b0"
//                         }
//                     ],
//                     "_type": "block",
//                     "style": "h1",
//                     "_key": "c2cf2cf0ead3"
//                 },
//                 {
//                     "style": "normal",
//                     "_key": "cf22d7a3dce9",
//                     "markDefs": [],
//                     "children": [
//                         {
//                             "_key": "86aafdae57300",
//                             "_type": "span",
//                             "marks": [],
//                             "text": "Experience compelling narratives and personal tales."
//                         }
//                     ],
//                     "_type": "block"
//                 }
//             ],
//             "_key": "4adee37e5be5",
//             "title": "Third Feature"
//         }
//     ],
//     "title": "featureSection",
//     "_updatedAt": "2024-12-26T07:11:13Z",
//     "_createdAt": "2024-12-26T05:59:37Z",
//     "_rev": "R4zj9VDraGU9JFViHCwcsa",
//     "_type": "section"
// }

export default interface features{
    sections:featuresArray[]
    
}
interface featuresArray{
    _type:string,
    text:text[] 
    }
interface text{
    _key:string,
    markdefs:[],
    children:textChildren[]
    _type:string,
    style:string


}
interface textChildren{
    _key:string,
    _type:string,
    marks:[],
    text:string,
}

interface PageData {
    id:string,
    title:string
}
// interface Dummy{
//     Products:Array<PageData>
// }
type Dummy = Array<PageData>

export let array:Dummy =[
            {id:'1',title:'product 1'},
            {id:'2',title:'product 2'},
            {id:'3',title:'product 3'}
            ]


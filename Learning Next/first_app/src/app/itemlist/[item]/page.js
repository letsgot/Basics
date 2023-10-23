'use client'
export default function Item({params}){
    console.log(params);
    return(
        <div>
           <h3>Hello {params.item} item</h3>
        </div>
    )
}
// server side component

async function getProducts(){
   let data = await fetch('https://dummyjson.com/products/')
   data = await data.json();
//    console.log(data.products);
   return data.products;
}

export default async function Product(){
    let products = await getProducts();
   
    return(
        <div>
            <div>Products :-</div>
            {
                products.map((product)=>{
                    // console.log(product);
                   return <div>{product.title} and its price is {product.price}</div>
                })
            }
        </div>
    )
}




















// //////////////////////////////////////////////////

// // client side component for fetch data from api
// "use client"

// import { useEffect, useState } from "react"

// export default function Product(){
//     let [products,setProducts] = useState([]);
//     useEffect(async()=>{
//       let data = await fetch('https://dummyjson.com/products/');
//       data = await data.json();

//       setProducts(data.products);
//     },[])
//     return(
//         <div>
//             <div>Products :-</div>
//             {
//                 products.map((product,i,products)=>{
//                     console.log(product);
//                    return <div>{product.title} and its price is {product.price}</div>
//                 })
//             }
//         </div>
//     )
// }
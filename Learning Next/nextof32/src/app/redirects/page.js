// Optimized way to redirect
export default function Page(){
    return(
        <div>
            <h2>
                Hello Users
            </h2>
        </div>
    )
}


// One way to use redirects
// import { redirect } from "next/navigation"
// export default function Page(){
//     redirect('/about')
//     return(
//         <div>
//             <h2>Hello Users</h2>
//         </div>
//     )
// }
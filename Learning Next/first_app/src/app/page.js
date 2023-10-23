// lecture 8 Linking and Navigate 
'use client'  // used for handle event for client sider rendering
import styles from './page.module.css'
import { useRouter } from 'next/navigation'  // used for navigation in routing
import Link from 'next/link'
export default function Home() {
  const router = useRouter();  // make a variable for using useRouter

  const handleClick = ()=>{
    alert("Hello nextjs")
  }

  const handleNavigate = (name) => {
    router.push(name);
  } 

  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
       <button onClick={handleClick}>Click me</button>
       <Link href={"/login"}>Go to Login</Link>
       <div onClick={()=>handleNavigate("/login")}>Login Navigation</div>
       <div onClick={()=>handleNavigate("/about")}>About Navigation</div>
    </main>
  )
}


// lecture 5 
// 'use client'  // used for handle event for client sider rendering
// import styles from './page.module.css'

// export default function Home() {
//   const handleClick = ()=>{
//     alert("Hello nextjs")
//   }
//   return (
//     <main className={styles.main}>
//       <h1>Hello World</h1>
//       {/* <button onClick={()=>alert("Hello next js")}>Click me</button>
//        */}
//        <button onClick={handleClick}>Click me</button>
//     </main>
//   )
// }












// 'use client'  // used for handle event for client sider rendering
// // lecture 4
// import styles from './page.module.css'

// export default function Home() {
//   const handleClick = ()=>{
//     alert("Hello nextjs")
//   }
//   return (
//     <main className={styles.main}>
//       <h1>Hello World</h1>
//       {/* <button onClick={()=>alert("Hello next js")}>Click me</button>
//        */}
//        <button onClick={handleClick}>Click me</button>
//     </main>
//   )
// }




// lecture 1
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1>Hello World</h1>
//     </main>
//   )
// }

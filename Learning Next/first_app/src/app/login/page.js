"use client"
import Link from 'next/link'
import {useRouter}  from 'next/navigation';
const Login = ()=>{
    const router = useRouter();
    const handleNavigate = (name)=>{
        console.log(name);
       router.push("/login/login" + name);
    }
    return (
        <div>
            <h1>Login page will appear here</h1>
            <Link href={"/"}>Back to Home</Link>
            <button onClick={()=>handleNavigate("student")}>Go to student login</button>
            <button onClick={()=>handleNavigate("staff")}>Go to staff login</button>
        </div>
    )
}

export default Login;
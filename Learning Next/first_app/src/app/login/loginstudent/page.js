"use client"
import Link from 'next/link'
const LoginStudent = ()=>{
    return (
        <div>
            <h1>Hello Login Student</h1>
            <Link href={"/login"}>Go to Login</Link>
        </div>
    )
}

export default LoginStudent;
"use client"
import Link from 'next/link'

const LoginStaff = ()=>{
    return (
        <div>
            <h1>
                Hello Login Staff
            </h1>

            <Link href={"/login"}>Go to Login</Link>
        </div>
    )
}

export default LoginStaff;
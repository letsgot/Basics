'use client'

import '../../../styles/upage.css'
export async function Page(){
  return(
    <div>
        <Link href={"/users/"+user.id+"/updateuser/"}><span >Edit</span></Link>
    </div>
  )
}
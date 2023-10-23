import Link from "next/link";
import './../../../styles/upage.css'
import {DeleteUser} from '../deleteuser/page'

export async function getUsers(){
    let data = await fetch('http://localhost:3000/api/users/');
    data = await data.json();
    return data.users;
}

export default async function Page(){
    let users = await getUsers();
    // console.log(users);
    return(
        <div>
            <h2>Hello Users</h2>
            {
                users.map((user)=>{
                    console.log(user);
                     return <div key={user.id} className="main">
                        <span><Link href={`/users/${user.id}`}>{user.name }</Link></span>
                        <Link href={"/users/"+user.id+"/updateuser/"}><span >Edit</span></Link> 
                        <DeleteUser></DeleteUser>
                    </div>
                })
            }
        </div>
    )
}
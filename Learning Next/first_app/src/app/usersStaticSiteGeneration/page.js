import Link from "next/link";
import { getUsersData } from "../../../services/getUsers"

export default async function Page(){
    let users = await getUsersData(); 
    // console.log(users);
    return(
        <div>
            <h2>this is the first names of our users</h2>
            {
                users.map((user)=>{
                    // console.log(user.id);
                    return<h4 key={user.id}>
                        <Link href={`/usersStaticSiteGeneration/${user.id}`}> {user.firstName} </Link>
                    </h4>
                })
            }
        </div>
    )
}
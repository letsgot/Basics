import { getUsersData } from "../../../../services/getUsers";

export default async function Page(props){
    let usersList = await getUsersData();
    let users = await usersList;
    let currentId = props.params.userId;

    let user = users[currentId-1];
    // console.log(user);

    return(
        <div>
            <h3>{user.id}</h3>
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
        </div>
    )
}

export async function generateStaticParams(){
    let usersList = await getUsersData();
    let users = await usersList;
    return users.map(user=>{
       userId : user.id.toString()
    })
}
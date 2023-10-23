export async function getUser(id){
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.userData[0];
}

export default async function Page({params}){
    // console.log(params);
    let user = await getUser(params.userid);
    console.log(user);
    return(
        <div>
            <h2>User comes here</h2>
            <div>name :- {user.name}</div>
            <div>id :- {user.id}</div>
            <div>age :- {user.age}</div>
            <div>location :- {user.location}</div>
            <h1>The End</h1>
        </div>
    )
}
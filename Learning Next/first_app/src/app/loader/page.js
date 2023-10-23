export async function getData(){
    let users =  await fetch('https://dummyjson.com/users');
    users = await users.json();
    // console.log(users);
    return users.users;
}

export default async function getApiData(){
  let users = await getData();
//   console.log(users);
  return(
    <div>
        <h1>User List</h1>

        {
           users.map((user,index,users)=>{
              return <div>
                    <h2>Hello {user.firstName}</h2>
               </div>
           })
        }
        
    </div>
  )
}
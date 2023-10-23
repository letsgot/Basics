export async function getUsersData(){
    let users =  await fetch('https://dummyjson.com/users');
    users = await users.json();
    // console.log(users);
    return users.users;
}

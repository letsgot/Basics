'use client'
import { NextResponse } from "next/server";
import { useEffect, useState } from "react"
// api integration and add data
export default function Page({params}) {
    let id = params.userid;
    // console.log();
    let [name,setName] = useState("");
    let [age,setAge] = useState();

    let handleClick = async()=>{
        let response = await fetch(`http://localhost:3000/api/users/${id}`,{
            method : "PUT",
            body:JSON.stringify({name,age})
        });
 
        response = await response.json();
        console.log(response);
        if(!response.success){
            alert("Error found")
        }
        else{
            alert("Data accepted successfully")
        }
    }

    useEffect(()=>{
      getUserDetails();
    },[])

    async function getUserDetails(){
         let data = await fetch(`http://localhost:3000/api/users/${id}`);
         data = await data.json();
        //  console.log(data.userData[0].name);
         setName(data.userData[0].name);
         setAge(data.userData[0].age);
    }


    return(
        <div>
            <h1>Hello Add New User</h1>
            <div>
                <label>Name:</label>
                <input onChange={(e)=>{
                      setName(e.target.value);
                      console.log(name);
                }} type="text" name="name" value={name} />
                </div>
            
                <div>
                <label>Age:</label>
                <input type="text" name="age" value={age} onChange={(e)=>{
                      setAge(e.target.value);
                      console.log(age);
                }}
                />
                </div>
                <div>
                <input type="submit" onClick={handleClick} value="Update User" />
            </div>
      
        </div >
    )
}
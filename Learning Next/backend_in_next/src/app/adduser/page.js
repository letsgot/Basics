'use client'
import { NextResponse } from "next/server";
import { useState } from "react"
// api integration and add data
export default function Page() {
    let [name,setName] = useState("");
    let [age,setAge] = useState();
    let [id,setId] = useState();

    let handleClick = async()=>{
        let response = await fetch("http://localhost:3000/api/users/",{
            method : "post",
            body:JSON.stringify({name,id,age})
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

    return (
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
                <label>Id :</label>
                <input type="text" name="id" value={id} onChange={(e)=>{
                      setId(e.target.value);
                      console.log(id);
                }}
                />
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
                <input type="submit" onClick={handleClick} value="Add User" />
            </div>
      
        </div >
    )
}
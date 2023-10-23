import { NextResponse } from "next/server";
import { users } from "@/app/util/db";
export async function GET(request,content){
    // console.log(request , content);
    let userData = users.filter((item)=>{
       return content.params.id==item.id;
    })

    // console.log(userData);
    
    return userData.length==0 ? NextResponse.json({
        message :"No user found with this id",
        status : false
    }):NextResponse.json({userData,success:true})  
    
}

export async function PUT(request,content){
    let data = await request.json();
    // console.log(data);
    
    if(!data.name||!data.age){
        return NextResponse.json({
            "error" : "Data not found",
            "success" : false
        },
        {
            status : 400
        })
    }

    return NextResponse.json({
       result : "Data found",
       "success" : true
    },{status:200})
    
}

export async function DELETE(request,content){
   let id = content.params.id;

   if(id){
        return NextResponse.json({
            "result" : "User Deleted",
            "success" : true
        },
        {
            status : 201
        })
   }
   else{
        return NextResponse.json({
            "error" : "Invalid data",
            "success" : false
        },
        {
            status : 400
        })
   }
}
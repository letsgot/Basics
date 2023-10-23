import { NextResponse } from "next/server";
import { users } from "@/app/util/db";

// for dynamic route 
export async function GET(request,content){
    return NextResponse.json({"users" : users,success:true})
}

export async function POST(request){
    // console.log(request);
    let data = await request.json();
    console.log(data);
    
    if(!data.name||!data.id||!data.age){
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

// normal syntax for working 
// export async function GET(request){
//     return  NextResponse.json(users,{success:true});
// }
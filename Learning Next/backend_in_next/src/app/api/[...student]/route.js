import { NextResponse } from "next/server";

export async function GET(request,content){
    console.log(content);
    let data = content.params.student;
    return NextResponse.json({
        "result" : "All route all starts from /student",
        data : data
    })
}
import { dbLink } from "@/lib/db";
import { Product } from "@/lib/models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let data = [];
    let success = true;
    try {
        await mongoose.connect(dbLink);
        data = await Product.find();
    } catch (error) {
        data = error.message 
        return NextResponse.json({
            result : data
        },{success : false})
    }

    return NextResponse.json({
       result : data
    },{success : true})
}

export async function POST(request){
   let payload = await request.json();
   console.log(payload);
   await mongoose.connect(dbLink);
   let product = new Product(payload);
   const result = await product.save();
   return  NextResponse.json({
    result,
    success : true
   })
}
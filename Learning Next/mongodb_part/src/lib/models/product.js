import mongoose, { mongo } from "mongoose";

let productSchema = new mongoose.Schema({
    name : String,
    price : String,
    company : String,
    category : String,
    color : String
})

export const Product = mongoose.models.products || mongoose.model("products",productSchema);
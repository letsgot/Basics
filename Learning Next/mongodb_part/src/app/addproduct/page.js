'use client'
import { useState } from 'react'
import styles from '../../../styles/addProduct.module.css'
export default function Page() {
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let [color,setColor] = useState("");
    let [company,setCompany] = useState("");
    let [category,setCategory] = useState("");

    let handleClick = async(e)=>{
        e.preventDefault();
        // console.log(111111111);
        // console.log(name,price,color,company,category);
        if(name==""||price==""||color==""||company==""||category==""){
            alert("Invalid input details");
            return;
        }

        let response = await fetch('http://localhost:3000/api/products',{
            method : "POST",
            body : JSON.stringify({
                name,price,color,company,category
            })
        })
        
        // console.log(response);
        alert("Product added successfully")
        setName("");
        setPrice("");
        setColor("");
        setCompany("");
        setCategory("");
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.head}>Add New Product</h2>
                <p className={styles.input}>
                    <label className={styles.input}>Name : <input name='name' onChange={(e)=>{setName(e.target.value)}} type="text" value={name} placeholder="Enter name"/></label>
                </p>

                <p className={styles.input}>
                    <label>Price : <input name='price' value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" placeholder="Enter price"/></label>
                </p>

                <p className={styles.input}>
                    <label>Color : <input name='color' value={color} onChange={(e)=>{setColor(e.target.value)}} type="text" placeholder="Enter color" /></label>
                </p>

                <p className={styles.input}>
                    <label>Company : <input name='company' type="text" onChange={(e)=>{setCompany(e.target.value)}} value={company} placeholder="Enter company" /></label>
                </p>

                <p className={styles.input}>
                    <label>Category : <input name='category' type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter category" /></label>
                </p>

                <p className={styles.input}>
                    <button onClick={(e)=>handleClick(e)}>Submit</button>
                </p>
        </div>
    )
}
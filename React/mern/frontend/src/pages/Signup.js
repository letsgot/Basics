import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Signup = () => {

  let [value, setValues] = useState({
    name : "",
    email : "",
    password : ""
  }); 

  let {name,email,password} = value;

  const handleChange =  (e,n) =>{
    console.log(e.target.value+" "+n);
    setValues({...value, [n]: e.target.value});
  }

  const handleClick =  async(e) =>{
    e.preventDefault();
    console.log(name);
    try {
      const singleUser = await axios.post('/api/signup',{
       name,
       email,
       password
      }) 

      console.log(singleUser);
      if(singleUser.data.status){
        toast.success("Sign up successfully, please Login!");
        setValues({...value,"name":"",email:"",password:""});
      }
      
    } catch (err) {
      console.log(err.response.data.error);
      toast.error(err.response.data.error);
    }
  }


  return (
    <>
     <Header></Header>
          <div className="container custom_className pt-5">
              <h2 className="signup_title text-center">SIGN UP</h2>
              <form className=" col-sm-6 offset-3 pt-5 signup_form">
                  
                  <div className="form-outline mb-4">
                      <input onChange={e=>handleChange(e,"name")} type="text" id="form4Example1" className="form-control"  value={value.name} />
                      <label className="form-label" htmlFor="form4Example1">Name</label>
                  </div>

                  
                  <div className="form-outline mb-4">
                      <input onChange={e=>handleChange(e,"email")} type="email" id="form4Example2" className="form-control"  value={value.email} />
                      <label className="form-label" htmlFor="form4Example2">Email </label>
                  </div>

              
                  <div className="form-outline mb-4">
                      <input onChange={e=>handleChange(e,"password")} type="password" id="form4Example3" className="form-control" value={value.password}  />
                      <label className="form-label" htmlFor="form4Example3">Password</label>
                  </div>
              
                  <button onClick={handleClick} type="submit" className="btn btn-primary btn-block mb-4">Register</button>
              </form>
          </div>
          <Footer></Footer>
          </>
  )
}

export default Signup
import React from 'react'
import "../styles/login.css"
import background from "../assets/loginBackground.png";

const Login = () => {
  return (
    <div className='login'
    style={{

        backgroundImage:
            `url(${background})`,
        backgroundPosition: "fixed",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height : "100vh",
        maxWidth: "100vw",
        // height: "auto"
        
    }}
    >

        <div className='outer'>
           <div className='upper'>
             <div className='upperBox1'>
                <div className='box1InupperBox1'>ALREADY MEMBERS</div>
                <div className='box2InupperBox1'>Need help ?</div>
             </div>
             <div className='upperBox2'>
                <input type='text' className='inputBox name' placeholder='Enter your name'></input>
                <input type="password" className='inputBox password' placeholder='Enter password'></input>
             </div>
             <div className='upperBox3'>
                <button className='btnSignin'>Sign in</button>
             </div>
           </div>
           <div className='lower'>
              <div className='lowerBox1'>Don't have any account yet</div>
              <div className='lowerBox2'>Create an account</div>
           </div>
        </div>
    </div>
  )
}

export default Login
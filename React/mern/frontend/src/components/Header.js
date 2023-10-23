import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    const logOut = () =>{
        axios.get('/api/logout')
        .then(result =>{
            const auth = JSON.parse(localStorage.getItem('token'))||null;
            if(auth!=null&&!auth.token){
                toast.success('Log out successfully');
                localStorage.removeItem('token');
                return navigate('/')
            }
            else{
                toast.success('User must be logged in for logout');
                return navigate('/signin')
            }
        })
        .catch(error =>{
            console.log(error);
        })

    }
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container">

                    <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                        <Link className="navbar-brand mt-2 mt-lg-0" href="#">
                            MERN STACK
                        </Link>
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                
                            <li className="nav-item">     
                                <Link className="nav-link" to ="/" >Home </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to ="/signup" >Sign Up </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to ="/signin" >Sign In </Link>
                           </li>

                            <li className="nav-item">
                                <Link className="nav-link" to ="" onClick={logOut} >Log out </Link>
                           </li>

                    
                        </ul>
                    
                    </div>

                </div>

            </nav>
        </div>
    )
}

export default Header
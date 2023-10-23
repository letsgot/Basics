// import React from 'react'
// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Signin from './pages/Signin';
// import NoPageFound from './pages/NoPageFound'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import UserDashboard from './pages/user/UserDashboard';

// import PrivateRoute from './components/PrivateRoute';
import React from 'react'
import './App.css';
import Home from './pages/Home'
import SignUp from './pages/Signup'
import SignIn from './pages/Signin'
import UserDashboard from './pages/user/UserDashboard'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';


const App = () => {
  return (
    <>
      <ToastContainer/>
        <BrowserRouter>
         <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
          {/* <PrivateRoute exact path="" element={UserDashboard}/> */}
          <Route path='/user/dashboard' element= { <PrivateRoute><UserDashboard /></PrivateRoute>}/>
          </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

// const App = () => {
//   return (
//     <>
//     <ToastContainer/>
//     {/* <Header></Header> */}
//     <BrowserRouter>
//       <Routes>
//         <Route exact path='/' Component={Home}></Route>
//         <Route exact path='/signup' Component={Signup}></Route>
//         <Route exact path='/login' Component={Signin}></Route>
//         <PrivateRoute exact path='/user/dashboard' Component={UserDashboard}></PrivateRoute>
//         <Route path="*" Component={NoPageFound} />
//       </Routes>
//     </BrowserRouter>
//     {/* <Footer></Footer> */}
//     </>
//   )
// }

// export default App
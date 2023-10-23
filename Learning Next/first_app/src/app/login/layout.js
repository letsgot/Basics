// the name of this layout is always layout
// this layout works on every file which comes under the folder name login
const Layout = ({children})=>{
   return(
    <div>
        <h1>Common Layout for login and its child</h1>
        {children}
    </div>
   )
}

export default Layout;
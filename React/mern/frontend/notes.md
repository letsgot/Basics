
make the components of signup signin and all 
  do the routing part like this 

   <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/signup' Component={Signup}></Route>
        <Route exact path='/login' Component={Signin}></Route>
        <Route path="*" Component={NoPageFound} />
      </Routes>
    </BrowserRouter>

    by using react-router-dom

import google fonts material ui links in index.html in public folder

   <!-- Font Awesome -->
  <link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
  />
  <!-- Google Fonts -->
  <link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
  />
  <!-- MDB -->
  <link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css"
  rel="stylesheet"
  />
    <title>React App</title>

add a js script also in index.html
  <script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js"
  ></script>
</html>

write signup components basically jsx code

Now, open a new terminal of backend folder and install cors
 beacuse our front end is in localhost 3000
 and backend backend in localhost 8000 to match this situation we use cors as a middleware function
 after that go to app.js of backend and require cors 
 then app.use(cors);

Now, add a proxy in package.json file frontend
 like this,
 "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy" : "http://localhost:8000/" //because our backend is hosted on localhost 8000
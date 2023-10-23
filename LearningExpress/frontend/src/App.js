import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddWorkout from './components/AddWorkout';
import Home from './components/Home';
import NoPage from './components/NoPage';


// await axios.post('/api/signin',{
//   email,
//   password
//  }) 

// add the proxy in package.json file to http://localhost:4000/api/workouts/

function App() {
  return (
    
      
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route exact path="/addWorkout" element={<AddWorkout />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

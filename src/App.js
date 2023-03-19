import Navbar from './components/Navbar'
import Main from './pages/Main'
import Home from './pages/Home'
import SignIn from './components/SignIn'
import {Route, Routes} from 'react-router-dom'
import SingleMovie from './components/SingleMovie'
import SignUp from "./components/SignUp";

  import 'react-toastify/dist/ReactToastify.css';

import './App.css' 
function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/main' element={<Main></Main>} />
      <Route path="SignIn" element={<SignIn></SignIn>} />
      <Route path="/SignUp" element={<SignUp></SignUp>} />
      <Route path="movie/:moviesID" element={<SingleMovie></SingleMovie>} />
  


     </Routes>
    </>
    
   
  );
}

export default App;

import './App.css';
import Navbar from './componets/Navbar';
import { Routes, Route } from "react-router-dom"

import Login from './componets/Login';
import Register from './componets/Register';
import Home from './componets/Home';
import ForgetPassord from './componets/Forgetpassword';


function App() {
  return (
    <div className="App">
     
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassord />} />
        </Routes>
     

    </div>
  );
}

export default App;

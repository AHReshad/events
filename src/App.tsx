
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Forms/Login";
import Signup from "./pages/Forms/Signup";
import Homepage from "./pages/Homepage/Homepage";
import Nav from "./component/Nav";

function App() {
  return (
    <>
    <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
                    <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

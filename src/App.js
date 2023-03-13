import Signin from "./pages/login";
import logo from "./logo.svg";
import { Helmet } from "react-helmet";
import "./App.css";
import LandingPage from "./pages/landinpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

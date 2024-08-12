import "./App.css";
import { Route, Routes } from "react-router-dom";
import Entry from "./Entry/Entry";
import CLogin from "./ServiceProvider/Components/Login/Clogin";
import CSignUp from "./ServiceProvider/Components/SignUp/CSignUp";
import CDetailsPage from "./ServiceProvider/Pages/CDetailsPage";
import PSignUp from "./ServiceSeeker/Components/PSignUp/PSignUp";
import PLogin from "./ServiceSeeker/Components/PLogin/PLogin";
import CHomePage from "./ServiceProvider/Pages/CHomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Entry />} />

        <Route path="/customer/login" element={<CLogin />} />
        <Route path="/customer/signup" element={<CSignUp />} />
        <Route path="/customer/details" element={<CDetailsPage />} />
        <Route path="/customer/home" element={<CHomePage />} />

        <Route path="/provider/login" element={<PLogin />} />
        <Route path="/provider/signup" element={<PSignUp />} />
      </Routes>
    </>
  );
}

export default App;

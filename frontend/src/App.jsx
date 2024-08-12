import "./App.css";
import { Route, Routes } from "react-router-dom";
import Entry from "./Entry/Entry";
import CLogin from "./Customer/Components/Login/Clogin";
import CSignUp from "./Customer/Components/SignUp/CSignUp";
import CDetailsPage from "./Customer/Pages/CDetailsPage";
import CHomePage from "./Customer/Pages/CHomePage";
import PSignUp from "./Provider/Components/PSignUp/PSignUp";
import PLogin from "./Provider/Components/PLogin/PLogin";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
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

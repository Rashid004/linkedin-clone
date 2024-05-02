/** @format */
import Login from "./components/Login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AppLayout from "./Layout/AppLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

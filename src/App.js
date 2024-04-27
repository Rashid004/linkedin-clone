/** @format */
import Login from "./components/Login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/** @format */
import Login from "./components/Login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AppLayout from "./Layout/AppLayout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuth } from "./actions/auth.js";
import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);
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

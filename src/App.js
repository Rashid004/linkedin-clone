/** @format */
import React from "react";

import "./App.css";
import Header from "./features/Header";
import Sidebar from "./features/Sidebar";
import Feed from "./features/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;

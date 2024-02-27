/** @format */
import React from "react";

import "./App.css";
import Header from "./features/Header";
import Sidebar from "./features/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* App body */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;

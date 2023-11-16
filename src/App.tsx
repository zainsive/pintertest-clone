import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

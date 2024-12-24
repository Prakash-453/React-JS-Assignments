import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// <> </> - Fragments : It acts as a container div and it will holds multiple components together

// why Fragements : It will not added into DOM loading will get fast

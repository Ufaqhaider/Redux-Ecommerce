import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import SingleProducts from "./components/FilterProducts/SingleProducts";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    <div className="App">
      {authUser && <Navbar />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filteredProducts/:type" element={<FilterProducts />} />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProducts />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

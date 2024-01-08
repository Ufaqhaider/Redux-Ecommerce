import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import SingleProducts from "./components/FilterProducts/SingleProducts";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import Navbar from './components/Navbar/Navbar';

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    <div className="App">
      {authUser && <Navbar/>}
      <BrowserRouter>
        <Routes>
        {authUser ? (
            <>

              <Route path="/" element={<Main />} />
              <Route path="/filteredProducts/:type" element={<FilterProducts />} />
              <Route path="/filteredProducts/:type/:id" element={<SingleProducts />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

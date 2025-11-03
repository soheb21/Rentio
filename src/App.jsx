import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cars from "./pages/cars/Cars";
import CarDetails from "./pages/cars/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* cars */}
        <Route path="/cars" element={<Cars />} />
        <Route path={`/cars/:id`} element={<CarDetails />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Homepage from "./pages/home";
import Navbar from "./components/navbar";
import Service from "./pages/service";

const App = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};

export default App;

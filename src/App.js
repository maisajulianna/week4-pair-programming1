import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Registration from "./components/Registration";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="tours" element={<Tours />} />
          <Route path="contact" element={<About />} />
          <Route part="registration" element={<Registration />}/>
          <Route path="hero" element={<Hero />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

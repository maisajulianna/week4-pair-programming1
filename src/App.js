import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Registrations from "./components/Registrations";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="services" element={<Services />} />
          <Route path="tours" element={<Tours />} />
          <Route path="contact" element={<About />} />
          <Route path="registration" element={<Registrations />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

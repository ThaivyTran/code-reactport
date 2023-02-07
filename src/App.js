import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import React from 'react';
import About from './routes/About';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import Contact from './routes/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div className="App">
    {/* Routes for nav bar */}
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </div>)
}

export default App;

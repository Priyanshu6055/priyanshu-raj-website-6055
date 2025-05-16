import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects'; // ← Import your Projects page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Projects Page */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;

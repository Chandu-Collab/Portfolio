import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '././styles/GlobalStyles';
import { theme } from '././styles/theme';
import Navbar from '././components/Navbar/Navbar';
import Home from '././pages/Home/Home';
import About from '././pages/About/About';
import Projects from '././pages/Projects/Projects';
import Contact from '././pages/Contact/Contact';
import Footer from '././components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

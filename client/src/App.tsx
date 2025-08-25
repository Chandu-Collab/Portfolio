import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyles from '././styles/GlobalStyles';
import { theme } from '././styles/theme';
import Navbar from '././components/Navbar/Navbar';
import Home from '././pages/Home/Home';
import About from '././pages/About/About';
import Projects from '././pages/Projects/Projects';
import ServicesPage from '././pages/Services/Services';
import BlogPage from '././pages/Blog/Blog';
import Contact from '././pages/Contact/Contact';
import Footer from '././components/Footer/Footer';
import PageTransition from '././components/PageTransition/PageTransition';
import ErrorBoundary from '././components/ErrorBoundary/ErrorBoundary';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 60px; /* Reduced padding for less space */
  min-height: auto; /* Let content determine height */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 55px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 50px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Router>
          <AppContainer>
            <Navbar />
            <MainContent>
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </PageTransition>
            </MainContent>
            <Footer />
          </AppContainer>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

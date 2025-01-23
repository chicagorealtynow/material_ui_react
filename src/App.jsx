import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import { ThemeProvider, createTheme } from '@mui/material/styles';
    import CssBaseline from '@mui/material/CssBaseline';
    import Home from './pages/Home';
    import AboutUs from './pages/AboutUs';
    import Services from './pages/Services';
    import Blog from './pages/Blog';
    import Contact from './pages/Contact';
    import Navigation from './components/Navigation';
    import Footer from './components/Footer';

    const theme = createTheme({
      palette: {
        primary: {
          main: '#2196f3', // Blue
        },
        secondary: {
          main: '#f50057', // Pink
        },
        background: {
          default: '#f0f0f0', // Light Grey
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
        },
        h2: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
        },
        body1: {
          fontSize: '1rem',
        },
      },
    });

    function App() {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      );
    }

    export default App;

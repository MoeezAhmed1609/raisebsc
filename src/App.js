import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import "./App.css";

// Pages
import Home from "./pages/Home";

// Components
import ScrollToHashElement from "./components/Layout/ScrollToHashElement";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  const theme = createTheme({
    palette: {
      main: "#0844a4",
      dark: "#000000",
      light: "#ffffff",
    },
  });
  return (
    <Router>
      <ScrollToHashElement />
      <Header />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </Router>
  );
}

export default App;

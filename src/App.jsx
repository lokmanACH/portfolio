import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Contact />
      <Footer /> 
    </ThemeProvider>
  );
}

export default App;

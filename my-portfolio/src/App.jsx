import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import Navigation from "./components/Layout/Navigation";
import Background3D from "./components/Layout/Background3D";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import Contact from "./pages/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div
        className="app-container"
        style={{ minHeight: "100vh", overflowX: "hidden" }}
      >
        <Background3D />

        <div
          className="content-wrapper"
          style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}
        >
          <Navigation
            activePage={activePage}
            setActivePage={setActivePage}
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <AnimatePresence mode="wait">
            {activePage === "home" && (
              <Home key="home" setActivePage={setActivePage} />
            )}
            {activePage === "about" && <About key="about" />}
            {activePage === "projects" && <Projects key="projects" />}
            {activePage === "contact" && <Contact key="contact" />}
            {activePage === "resume" && <Resume key="resume" />}
          </AnimatePresence>
        </div>
        <Footer setActivePage={setActivePage} />
      </div>
    </ThemeProvider>
  );
}

export default App;

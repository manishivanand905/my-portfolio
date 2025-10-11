import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../../styles/theme";
import { FaMoon, FaSun } from "react-icons/fa";

import {
  NavContainer,
  NavContent,
  Logo,
  NavList,
  NavItem,
  NavLink,
  RightControls,
  ThemeToggle,
  CallButton,
} from "./Navigation.styles";

function Navigation({ activePage, setActivePage, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <NavContainer
      scrolled={scrolled}
      theme={currentTheme}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <NavContent>
        <Logo
          theme={currentTheme}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          Mani's Portfolio
        </Logo>

        <NavList>
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                theme={currentTheme}
                className={activePage === item.id ? "active" : ""}
                onClick={() => setActivePage(item.id)}
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavList>

        <RightControls>
          <ThemeToggle
            theme={currentTheme}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </ThemeToggle>

          <CallButton
            theme={currentTheme}
            onClick={() => setActivePage("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Now
          </CallButton>
        </RightControls>
      </NavContent>
    </NavContainer>
  );
}

export default Navigation;

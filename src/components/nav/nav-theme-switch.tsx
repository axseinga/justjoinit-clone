"use client";

import { NavThemeSwitchButton } from "./nav.styles";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

export const NavThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeContextProvider");
  }

  const { setMode } = themeContext;

  return (
    <NavThemeSwitchButton
      onChange={(e) => {
        if (e.target.checked) {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    />
  );
};

"use client";

import React from "react";
import { createTheme } from "@mui/material";
import { Theme } from "@emotion/react";
import { openSans } from "@/styles/fonts";

interface CustomPalettes {
  buttonHover: string;
  buttonHoverPink: string;
  buttonHollow: string;
}
declare module "@mui/material/styles" {
  interface PaletteOptions extends CustomPalettes {}
}
declare module "@mui/material/styles/createPalette" {
  interface Palette extends CustomPalettes {}
}

type ThemeContextType = {
  mode: "light" | "dark";
  setMode: (param: "light" | "dark") => void;
  theme: Theme;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const theme = createTheme({
    typography: {
      fontFamily: openSans.style.fontFamily,
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: { main: "#2C2C2C", dark: "#111111" },
            text: {
              primary: "#bcbcbc",
              secondary: "#bcbcbc",
            },
            buttonHover: "#505050",
            buttonHoverPink: "#4f3940",
            buttonHollow: "#505050",
          }
        : {
            primary: { main: "#FFFFFF", dark: "#f3f6f8" },
            text: {
              primary: "#757575",
              secondary: "#000000",
            },
            buttonHover: "#f3f6f8",
            buttonHoverPink: "#FEF8FB",
            buttonHollow: "#eaeaea",
          }),
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

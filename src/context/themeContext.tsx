"use client";

import React from "react";
import { createTheme } from "@mui/material";
import { Theme } from "@emotion/react";
import { openSans } from "@/styles/fonts";

interface CustomPalettes {
  buttonHover: string;
  buttonHoverPink: string;
  buttonHollow: string;
  borderColor: string;
  logo: string;
  greyBackground: string;
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
            primary: { main: "#2C2C2C", dark: "#111111",  },
            text: {
              primary: "#bcbcbc",
              secondary: "#dddddd",
            },
            buttonHover: "#111111",
            buttonHoverPink: "#4f3940",
            buttonHollow: "#505050",
            borderColor: "#505050",
            logo: "#f3f6f8",
            greyBackground: "#1D1E25"
          }
        : {
            primary: { main: "#FFFFFF", dark: "#f3f6f8" },
            text: {
              primary: "#757575",
              secondary: "#1d1e25",
            },
            buttonHover: "#f3f6f8",
            buttonHoverPink: "#FEF8FB",
            buttonHollow: "#eaeaea",
            borderColor: "#f3f6f8",
            logo: "#1D1E25",
            greyBackground: "#f3f6f8"

          }),
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

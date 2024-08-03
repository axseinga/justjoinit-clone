"use client";

import React from "react";
import { ThemeProvider } from "@mui/material";
import { ThemeContext, ThemeContextProvider } from "@/context/themeContext";

type ThemeWrapperProps = {
  children: React.ReactNode;
};

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const themeContext = React.useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeContextProvider");
  }

  const { theme } = themeContext;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

type ThemeContextProvidersProps = {
  children: React.ReactNode;
};

export const ThemeContextProviders = ({
  children,
}: ThemeContextProvidersProps) => {
  return (
    <ThemeContextProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeContextProvider>
  );
};

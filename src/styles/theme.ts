"use client";

import { Open_Sans } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material";

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
} as ThemeOptions);

export default theme;

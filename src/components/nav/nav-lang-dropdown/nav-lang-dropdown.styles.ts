"use client";

import { styled } from "@mui/material/styles";
import {
  Box,
  BoxProps,
  List,
  ListProps,
} from "@mui/material";

export const NavLangDropdownWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    border: "1px solid",
    borderColor: theme.palette.borderColor,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    padding: "24px 8px 5px 8px",
    marginTop: "4px",
    gap: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: theme.palette.text.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  }));
  
  export const NavLangDropdownCurrencyList = styled(List)<ListProps>(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  }));
  
  export const NavLangDropdownCurrencyListButton = styled(Box)<BoxProps>(
    ({ theme }) => ({
      width: "100%",
      borderRadius: "13px",
      padding: "8px 14px",
      display: "flex",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.palette.buttonHoverPink,
      },
    })
  );
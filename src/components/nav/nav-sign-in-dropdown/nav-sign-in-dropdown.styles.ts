"use client";

import { styled } from "@mui/material/styles";
import {
  Box,
  BoxProps,
  List,
  ListProps,
} from "@mui/material";

export const NavSignInDropdownWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    border: "1px solid",
    borderColor: theme.palette.borderColor,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    padding: "24px",
    marginTop: "4px",
    gap: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: theme.palette.text.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  }));
  
  export const NavSignInDropdownContent = styled(Box)<BoxProps>(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  }));
  
  export const NavSignInDropdownListItem = styled(Box)<BoxProps>(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "1rem",
  }));
  
  export const NavSignInDropdownListItemHeader = styled(Box)<BoxProps>(() => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  }));
  
  export const NavSignInDropdownListItemHeaderIcon = styled(Box)<BoxProps>(
    ({ theme }) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.primary.dark,
      padding: "0.5rem",
      borderRadius: "10px",
    })
  );
  
  export const NavSignInDropdownListItemLinks = styled(List)<ListProps>(() => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: "0.5rem",
  }));
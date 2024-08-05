"use client";

import { styled } from "@mui/material/styles";
import {
  Button,
  ButtonProps,
  Box,
  BoxProps,
  InputBase,
} from "@mui/material";
import { openSans } from "@/styles/fonts";

export const FiltersNavWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "fixed",
  top: "64px",
  height: "64px",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: "5",
}));

export const Search = styled("div")(({ theme }) => ({
  height: "40px",
  position: "relative",
  border: "1px solid",
  borderColor: theme.palette.buttonHollow,
  borderRadius: "25px",
  backgroundColor: theme.palette.greyBackground,
  "&:hover": {
    border: `1px solid ${theme.palette.text.secondary}}`,
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export const FiltersNavLocationDropdownWrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    border: "1px solid",
    width: "600px",
    borderColor: theme.palette.borderColor,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    paddingTop: "24px",
    marginTop: "4px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: theme.palette.text.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  })
);

export const FiltersNavLocationDropdownClearButton = styled(
  Button
)<ButtonProps>(({ theme }) => ({
  fontFamily: openSans.style.fontFamily,
  fontWeight: "500",
  fontSize: "0.8125rem",
  lineHeight: "1.75",
  borderRadius: "24px",
  color: theme.palette.text.secondary,
  textTransform: "none",
  padding: "10px 16px",
  "&:disabled": {
    color: theme.palette.text.primary,
  },
  "&:hover": {
    backgroundColor: theme.palette.buttonHover,
  },
}));

export const FiltersNavLocationDropdownHeader = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "24px",
  })
);

export const FiltersNavLocationDropdownFeatured = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingInline: "24px",
  })
);

export const FiltersNavLocationDropdownFeaturedCategory = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  })
);

export const FiltersNavLocationDropdownLocationButton = styled(
    Button
  )<ButtonProps>(({ theme }) => ({
    fontFamily: openSans.style.fontFamily,
    fontWeight: "500",
    fontSize: "0.8125rem",
    lineHeight: "1.75",
    border: "1px solid",
    borderColor: theme.palette.buttonHollow,
    borderRadius: "24px",
    color: theme.palette.text.secondary,
    textTransform: "none",
    height: "max-content",
    padding: "10px 16px",
    "&:hover": {
      textDecoration: "none",
      border: "1px solid",
      borderColor: theme.palette.text.secondary,
    },
  }));

export const FiltersNavLocationDropdownFooter = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.greyBackground,
    padding: "24px 24px",
  })
);

export const FiltersNavLocationDropdownSubmitButton = styled(
  Button
)<ButtonProps>(({ theme }) => ({
  backgroundColor: "#FF4081",
  color: "#FFFFFF",
  borderRadius: "24px",
  textTransform: "none",
  minWidth: "150px",
  padding: "10px 16px",
  "&:hover": {
    backgroundColor: "#b82d5b",
  },
}));



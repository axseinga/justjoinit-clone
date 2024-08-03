"use client";

import { openSans } from "@/styles/theme";
import { styled } from "@mui/material/styles";
import {
  Typography,
  TypographyProps,
  Paper,
  PaperProps,
  Button,
  ButtonProps,
  Box,
  BoxProps,
  List,
  ListProps,
} from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export const NavPaper = styled(Paper)<PaperProps>(() => ({
  width: "100cqw",
  paddingInline: "24px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#757575",
}));

export const ListLink = styled(Typography)<TypographyProps>(() => ({
  backgroundColor: "transparent",
  "& .MuiTypography": {
    "&:hover, &.Mui-focusVisible": {
      backgroundColor: "#f3f6f8",
    },
    "&.Mui-active": {
      backgroundColor: "#f3f6f8",
    },
  },
}));

export const NavTitle = styled(Typography)<TypographyProps>(() => ({
  fontFamily: openSans.style.fontFamily,
  fontSize: 12,
  letterSpacing: "0.15px",
}));

export const NavText = styled(Typography)<TypographyProps>(() => ({
  fontFamily: openSans.style.fontFamily,
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "28px",
  letterSpacing: "0.15px",
  display: "flex",
}));

export const NavPostAJobButton = styled(Button)<ButtonProps>(() => ({
  borderColor: "#eaeaea",
  borderRadius: "24px",
  color: "#000000",
  textTransform: "none",
  height: "max-content",
  padding: "10px 16px",
  "&:hover": {
    border: "1px solid #000000",
    backgroundColor: "#FFFFFF",
  },
}));

export const NavMenuToggle = styled(Button)<ButtonProps>(() => ({
  borderRadius: "50%",
  padding: "5px",
  minWidth: "40px",
  width: "40px",
  height: "40px",
  color: "#000000",
  "&:hover": {
    backgroundColor: "#f3f6f8",
  },
}));

export const NavBoxCenter = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

export const NavSavedIcon = styled(StarOutlineRoundedIcon)(() => ({
  width: "50px",
  height: "50px",
  color: "#000000",
  borderRadius: "50%",
  padding: "8px",
  "&:hover": {
    backgroundColor: "#f3f6f8",
  },
}));

export const NavSignInDropdownWrapper = styled(Box)<BoxProps>(() => ({
  border: "1px solid rgb(243, 246, 248)",
  backgroundColor: "#FFFFFF",
  borderRadius: "20px",
  padding: "24px",
  marginTop: "4px",
  gap: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  color: "#757575",
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
  () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f6f8",
    padding: "0.5rem",
    borderRadius: "10px",
  })
);

export const NavSignInDropdownListItemLinks = styled(List)<ListProps>(() => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "0.5rem",
}));

export const NavLangDropdownWrapper = styled(Box)<BoxProps>(() => ({
  border: "1px solid rgb(243, 246, 248)",
  backgroundColor: "#FFFFFF",
  borderRadius: "20px",
  padding: "24px 8px 5px 8px",
  marginTop: "4px",
  gap: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  color: "#757575",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
}));

export const NavLangDropdownCurrencyList = styled(List)<ListProps>(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}));

export const NavLangDropdownCurrencyListButton = styled(Box)<BoxProps>(() => ({
  width: "100%",
  borderRadius: "13px",
  padding: "8px 14px",
  display: "flex",
  "&:hover": {
    backgroundColor: "#FEF8FB",
  },
}));

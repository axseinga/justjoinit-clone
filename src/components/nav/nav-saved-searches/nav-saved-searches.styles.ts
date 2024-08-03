"use client";

import { openSans } from "@/styles/fonts";
import { styled } from "@mui/material/styles";
import {
  Typography,
  TypographyProps,
  Button,
  ButtonProps,
  Box,
  BoxProps,
} from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export const NavSavedSearchesIcon = styled(StarOutlineRoundedIcon)(
  ({ theme }) => ({
    width: "50px",
    height: "50px",
    color: theme.palette.text.secondary,
    borderRadius: "50%",
    padding: "8px",
    "&:hover": {
      backgroundColor: theme.palette.buttonHover,
    },
  })
);

export const NavSavedSearchesWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: "500px",
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

export const NavSavedSearchesContent = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  textAlign: "center",
}));

export const NavSavedSearchesTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: openSans.style.fontFamily,
    fontSize: "18px",
    letterSpacing: "0.15px",
    color: theme.palette.text.primary,
  })
);

export const NavSearchesCloseIcon = styled(Button)<ButtonProps>(
  ({ theme }) => ({
    borderRadius: "50%",
    padding: "5px",
    minWidth: "40px",
    width: "40px",
    height: "40px",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.buttonHover,
    },
  })
);

"use client";

import { styled } from "@mui/material/styles";
import {
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  Link,
  LinkProps,
  Button,
  ButtonProps,
} from "@mui/material";
import { openSans } from "@/styles/fonts";

export const JobListWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.greyBackground,
  display: "flex",
  color: theme.palette.text.primary,
  marginTop: "130px",
}));

export const JobListTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: openSans.style.fontFamily,
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: "0.15px",
    color: theme.palette.text.primary,
    margin: "0.5rem 0rem 0.3rem 2rem",
  })
);

export const JobListItemWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.greyBackground,
  display: "flex",
  justifyContent: "center",
  paddingTop: "0.5rem",
}));

export const JobListItemLink = styled(Link)<LinkProps>(({ theme }) => ({
  height: "80px",
  width: "97%",
}));

export const JobListItemInner = styled(Box)<BoxProps>(({ theme }) => ({
  padding: "0.5rem 2rem",
  display: "grid",
  gridTemplateColumns: "100px 2fr",
  gap: "1rem",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  borderRadius: "10px",
  boxShadow:
    "0px 1px 2px 0px rgba(0 ,0, 0, 0.06), 0px 1px 3px 0px rgba(0 ,0, 0, 0.1)",

  "&:hover": {
    boxShadow:
      "0px 1px 4px 0px rgba(0 ,0, 0, 0.06), 0px 3px 3px 0px rgba(0 ,0, 0, 0.1)",
  },
}));

export const JobListItemLogoBox = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  padding: "0.8rem",
}));

export const JobListItemLogo = styled("img")(() => ({
  width: "100%",
  height: "auto",
}));

export const JobListItemContent = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
}));

export const JobListItemContentTop = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.5rem",
}));

export const JobListItemTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: openSans.style.fontFamily,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "0.15px",
    color: theme.palette.text.secondary,
  })
);

export const JobListItemNewLabel = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  color: theme.palette.text.secondary,
  padding: "2px 4px",
  borderRadius: "25px",
  backgroundColor: theme.palette.buttonHover,
}));

export const JobListItemContentBottom = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.5rem",
}));

export const JobListItemContentBottomTextSmall = styled(
  Typography
)<TypographyProps>(() => ({
  fontFamily: openSans.style.fontFamily,
  fontSize: 12,
  letterSpacing: "0.15px",
}));

export const JobListItemFullyRemote = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  color: theme.palette.text.secondary,
  padding: "2px 7px 2px 4px",
  borderRadius: "25px",
  backgroundColor: theme.palette.buttonHover,
}));

export const JobListItemFriendlyIcon = styled(Box)<BoxProps>(() => ({
  width: "20px",
  height: "20px",
  background:
    "linear-gradient(0deg, rgb(246, 214, 96) 50%, rgb(74, 137, 220) 50%)",
  borderRadius: "50%",
  overflow: "hidden",
}));

export const JobListItemTechLabel = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  color: theme.palette.text.secondary,
  padding: "2px 7px 2px 4px",
  borderRadius: "25px",
  minWidth: "25px",
  border: "1px solid",
  borderColor: theme.palette.buttonHollow,
}));

export const JobListFooterWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: "#E4E8F0",
  borderRadius: "10px",
  height: "70px",
  width: "97%",
  marginInline: "auto",
  padding: "0.5rem 2rem",
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "0.5rem"
}));

export const JobListFooterContent = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  maxWidth: "40rem"
}));

export const JobListFooterButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontFamily: openSans.style.fontFamily,
  fontWeight: "500",
  fontSize: "0.8125rem",
  lineHeight: "1.75",
  borderRadius: "24px",
  backgroundColor: theme.palette.greyBackground,
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

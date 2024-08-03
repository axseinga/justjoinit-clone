"use client";

import { openSans } from "@/styles/fonts";
import { styled } from "@mui/material/styles";
import {
  Typography,
  TypographyProps,
  Link,
  LinkProps,
  Box,
  BoxProps,
  List,
  ListProps,
  ListItem,
  ListItemProps,
} from "@mui/material";

export const FooterWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "40px 24px",
  display: "flex",
  alignItems: "center",
}));

export const FooterInner = styled(Box)<BoxProps>(({ theme }) => ({
  marginInline: "auto",
  maxWidth: "1220px",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "40px 24px 40px 24px",
}));

export const FooterListTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: openSans.style.fontFamily,
    fontWeight: 500,
    letterSpacing: "0.15px",
    color: theme.palette.text.secondary,
    fontSize: "22px",
  })
);

export const FooterLink = styled(Link)<LinkProps>(({ theme }) => ({
  fontFamily: openSans.style.fontFamily,
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "22px",
  letterSpacing: "0.1px",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

export const FooterSocialsList = styled(List)<ListProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "25px",
}));

export const FooterSocialsListItem = styled(ListItem)<ListItemProps>(
  ({ theme }) => ({
    width: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

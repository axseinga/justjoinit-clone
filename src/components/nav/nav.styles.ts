"use client";

import { openSans } from "@/styles/fonts";
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
  Switch,
  SwitchProps,
  Link,
  LinkProps,
} from "@mui/material";

export const NavPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  width: "100cqw",
  paddingInline: "24px",
  borderRadius: 0,
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
  backgroundImage: "none"
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

export const NavPostAJobButton = styled(Link)<LinkProps>(({ theme }) => ({
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

export const NavMenuToggle = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "50%",
  padding: "5px",
  minWidth: "40px",
  width: "40px",
  height: "40px",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.buttonHover,
  },
}));

export const NavBoxCenter = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

export const NavThemeSwitchButton = styled(Switch)<SwitchProps>(() => ({
  width: "56px",
  height: "32px",
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#7B7B7B",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#9E9E9E"
        )}" d="M17.5 10C17.5 12.0833 16.7708 13.8542 15.3125 15.3125C13.8542 16.7708 12.0833 17.5 10 17.5C8.12501 17.5 6.53473 16.9479 5.22917 15.8437C3.92362 14.7396 3.08334 13.2917 2.70834 11.5C2.59723 10.9306 2.69445 10.5417 3.00001 10.3333C3.30556 10.125 3.72223 10.1319 4.25001 10.3542C4.56945 10.4792 4.89584 10.5764 5.22917 10.6458C5.56251 10.7153 5.90278 10.75 6.25001 10.75C7.50001 10.75 8.5625 10.3125 9.4375 9.4375C10.3125 8.5625 10.75 7.5 10.75 6.25C10.75 5.90278 10.7188 5.56597 10.6563 5.23958C10.5938 4.91319 10.5069 4.59722 10.3958 4.29167C10.1736 3.69444 10.184 3.25 10.4271 2.95833C10.6701 2.66667 11.0833 2.59028 11.6667 2.72917C13.3472 3.10417 14.7396 3.94444 15.8438 5.25C16.9479 6.55555 17.5 8.13889 17.5 10Z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#2C2C2C",
        opacity: 1,
        border: "1px solid #444444",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#2C2C2C",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "#7B7B7B",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: "24px",
    height: "24px",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#7B7B7B"
      )}" d="M 5.83333 10.0001 C 5.83333 12.3001 7.69999 14.1667 9.99999 14.1667 C 12.3 14.1667 14.1667 12.3001 14.1667 10.0001 C 14.1667 7.70008 12.3 5.83342 9.99999 5.83342 C 7.69999 5.83342 5.83333 7.70008 5.83333 10.0001 Z M 10.8333 18.3334 L 10.8333 16.6667 C 10.8333 16.2084 10.4583 15.8334 9.99999 15.8334 C 9.54166 15.8334 9.16666 16.2084 9.16666 16.6667 L 9.16666 18.3334 C 9.16666 18.7917 9.54166 19.1667 9.99999 19.1667 C 10.4583 19.1667 10.8333 18.7917 10.8333 18.3334 Z M 10.8333 3.33342 L 10.8333 1.66675 C 10.8333 1.20842 10.4583 0.833416 9.99999 0.833416 C 9.54166 0.833416 9.16666 1.20842 9.16666 1.66675 L 9.16666 3.33342 C 9.16666 3.79175 9.54166 4.16675 9.99999 4.16675 C 10.4583 4.16675 10.8333 3.79175 10.8333 3.33342 Z M 1.66666 10.8334 L 3.33333 10.8334 C 3.79166 10.8334 4.16666 10.4584 4.16666 10.0001 C 4.16666 9.54175 3.79166 9.16675 3.33333 9.16675 L 1.66666 9.16675 C 1.20833 9.16675 0.833328 9.54175 0.833328 10.0001 C 0.833328 10.4584 1.20833 10.8334 1.66666 10.8334 Z M 16.6667 10.8334 L 18.3333 10.8334 C 18.7917 10.8334 19.1667 10.4584 19.1667 10.0001 C 19.1667 9.54175 18.7917 9.16675 18.3333 9.16675 L 16.6667 9.16675 C 16.2083 9.16675 15.8333 9.54175 15.8333 10.0001 C 15.8333 10.4584 16.2083 10.8334 16.6667 10.8334 Z M 3.81666 15.0084 C 3.49166 15.3334 3.49166 15.8667 3.81666 16.1834 C 4.14166 16.5084 4.67499 16.5084 4.99166 16.1834 L 5.87499 15.3001 C 6.19999 14.9751 6.19999 14.4417 5.87499 14.1251 C 5.54999 13.8084 5.01666 13.8001 4.69999 14.1251 L 3.81666 15.0084 Z M 14.125 4.70008 C 13.8 5.02508 13.8 5.55842 14.125 5.87508 C 14.45 6.20008 14.9833 6.20008 15.3 5.87508 L 16.1833 4.99175 C 16.5083 4.66675 16.5083 4.13341 16.1833 3.81675 C 15.8583 3.49175 15.325 3.49175 15.0083 3.81675 L 14.125 4.70008 Z M 4.99166 3.81675 C 4.66666 3.49175 4.13333 3.49175 3.81666 3.81675 C 3.49166 4.14175 3.49166 4.67508 3.81666 4.99175 L 4.69999 5.87508 C 5.02499 6.20008 5.55833 6.20008 5.87499 5.87508 C 6.19166 5.55008 6.19999 5.01675 5.87499 4.70008 L 4.99166 3.81675 Z M 15.3 14.1251 C 14.975 13.8001 14.4417 13.8001 14.125 14.1251 C 13.8 14.4501 13.8 14.9834 14.125 15.3001 L 15.0083 16.1834 C 15.3333 16.5084 15.8667 16.5084 16.1833 16.1834 C 16.5 15.8584 16.5083 15.3251 16.1833 15.0084 L 15.3 14.1251 Z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: "25px",
    backgroundColor: "#f3f6f8",
    border: "1px solid #eaeaea",
    opacity: 1,
  },
}));

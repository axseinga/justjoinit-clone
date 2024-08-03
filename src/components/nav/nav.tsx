"use client";

import React from "react";
import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { NavSignInDropdown } from "@/components/nav/nav-sign-in-dropdown/nav-sign-in-dropdown";
import { NavLangDropdown } from "@/components/nav/nav-lang-dropdown/nav-lang-dropdown";
import { navLinks } from "@/components/nav/content";
import {
  NavTitle,
  NavText,
  NavPaper,
  NavPostAJobButton,
  NavMenuToggle,
  NavBoxCenter,
} from "@/components/nav/nav.styles";
import { NavThemeSwitch } from "./nav-theme-switch";
import { Theme, useTheme } from "@mui/material/styles";
import { NavSavedSearches } from "./nav-saved-searches/nav-saved-searches";
import { Logo } from "@/components/logo";

export const Nav = () => {
  const theme: Theme = useTheme();
  const [isSignInDropdownOpen, setIsSignInDropdownOpen] = React.useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = React.useState(false);
  const [isSavedSearchesOpen, setIsSavedSearchesOpen] = React.useState(false);

  return (
    <NavPaper component="header" elevation={1}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Box sx={{ position: "relative", width: 119, height: 24 }}>
          <Logo/>
        </Box>
        <NavTitle>#1 Job Board for tech industry in Europe</NavTitle>
        <NavThemeSwitch />
      </Box>
      <NavBoxCenter>
        <NavBoxCenter>
          <List sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {navLinks.map(({ href, label }, index) => (
              <ListItem
                key={`${index}_${label}`}
                sx={{
                  padding: 0,
                  width: "max-content",
                }}
              >
                <Link href={href}>
                  <NavText
                    sx={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: theme.palette.buttonHover,
                      },
                    }}
                  >
                    {label}
                  </NavText>
                </Link>
              </ListItem>
            ))}
          </List>
          <NavPostAJobButton
            href="/pricing"
            component={Link}
          >
            Post a job
          </NavPostAJobButton>
          <NavSignInDropdown
            open={isSignInDropdownOpen}
            setOpen={setIsSignInDropdownOpen}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <NavSavedSearches
              open={isSavedSearchesOpen}
              setOpen={setIsSavedSearchesOpen}
            />
            <NavLangDropdown
              open={isLangDropdownOpen}
              setOpen={setIsLangDropdownOpen}
            />
            <NavMenuToggle aria-label="Toggle menu">
              <MenuIcon aria-hidden="true" fontSize="medium" color="inherit" />
            </NavMenuToggle>
          </Box>
        </NavBoxCenter>
      </NavBoxCenter>
    </NavPaper>
  );
};

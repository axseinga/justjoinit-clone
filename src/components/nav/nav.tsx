"use client";

import React from "react";
import { Box, Switch, List, ListItem, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { NavSignInDropdown } from "@/components/nav/nav-sign-in-dropdown";
import { NavLangDropdown } from "@/components/nav/nav-lang-dropdown";
import { navLinks } from "@/components/nav/content";
import {
  NavTitle,
  NavText,
  NavPaper,
  NavPostAJobButton,
  NavMenuToggle,
  NavBoxCenter,
  NavSavedIcon,
} from "@/components/nav/nav.styles";

export const Nav = () => {
  const [isSignInDropdownOpen, setIsSignInDropdownOpen] = React.useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = React.useState(false);

  return (
    <NavPaper component="header" elevation={1}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Box sx={{ position: "relative", width: 119, height: 24 }}>
          <Image
            src="/assets/logos/logo.svg"
            alt="logo"
            fill
            objectFit="contain"
          />
        </Box>
        <NavTitle>#1 Job Board for tech industry in Europe</NavTitle>
        <Switch />
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
                <a href={href}>
                  <NavText
                    sx={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#E4E8F0",
                      },
                    }}
                  >
                    {label}
                  </NavText>
                </a>
              </ListItem>
            ))}
          </List>
          <NavPostAJobButton
            href="/pricing"
            LinkComponent={Link}
            size="small"
            variant="outlined"
            disableElevation
          >
            Post a job
          </NavPostAJobButton>
          <NavSignInDropdown
            open={isSignInDropdownOpen}
            setOpen={setIsSignInDropdownOpen}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Button
              aria-label="Saved searches"
              sx={{
                padding: 0,
                minWidth: "40px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <NavSavedIcon
                aria-hidden="true"
                fontSize="large"
                color="inherit"
              />
            </Button>
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

"use client";

import React from "react";
import {
  FiltersNavWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./filters-nav.styles";
import SearchIcon from "@mui/icons-material/Search";
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
  InputBase,
} from "@mui/material";
import { FiltersNavLocationDropdown } from "./filters-nav-location-dropdown";

export const FiltersNav = () => {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] =
    React.useState(false);

  return (
    <FiltersNavWrapper>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <FiltersNavLocationDropdown
        open={isLocationDropdownOpen}
        setOpen={setIsLocationDropdownOpen}
      />
      <Box>categories</Box>
      <Box>More filters</Box>
    </FiltersNavWrapper>
  );
};

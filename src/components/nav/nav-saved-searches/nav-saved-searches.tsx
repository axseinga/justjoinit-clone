"use client";

import * as React from "react";
import { PopperWrapper } from "@/components/popper-wrapper/popper-wrapper";
import {
  NavSavedSearchesIcon,
  NavSavedSearchesContent,
  NavSavedSearchesTitle,
  NavSavedSearchesWrapper,
  NavSearchesCloseIcon,
} from "@/components/nav/nav-saved-searches/nav-saved-searches.styles";
import { Typography, Box } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type NavSeavedSearchesProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export const NavSavedSearches = ({ open, setOpen }: NavSeavedSearchesProps) => {
  const theme: Theme = useTheme();
  return (
    <PopperWrapper
      open={open}
      setOpen={setOpen}
      buttonStyle={{
        padding: 0,
        minWidth: "40px",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      buttonLabel={
        <NavSavedSearchesIcon
          aria-hidden="true"
          fontSize="large"
          color="inherit"
        />
      }
      popperPlacement="bottom-end"
      buttonAriaLabel="Saved searches"
    >
      <NavSavedSearchesWrapper>
        <NavSavedSearchesContent>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              color={theme.palette.text.primary}
              paddingX="12px"
            >
              Saved searches
            </Typography>
            <NavSearchesCloseIcon
              aria-label="Close popup"
              onClick={() => setOpen(false)}
            >
              <CloseRoundedIcon
                aria-hidden="true"
                fontSize="medium"
                color="inherit"
              />
            </NavSearchesCloseIcon>
          </Box>
          <img src="/assets/searches-duck.svg" alt="" />
          <NavSavedSearchesTitle>
            You haven't saved your search criteria yet
          </NavSavedSearchesTitle>
          <Typography
            variant="body2"
            component="p"
            color={theme.palette.text.primary}
            paddingX="12px"
          >
            Filter the portal with your most wanted filters and add them to your
            saved searches via the "Subscribe" button.
          </Typography>
        </NavSavedSearchesContent>
      </NavSavedSearchesWrapper>
    </PopperWrapper>
  );
};

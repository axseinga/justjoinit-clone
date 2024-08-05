"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { PopperWrapper } from "@/components/popper-wrapper/popper-wrapper";
import { Theme, useTheme } from "@mui/material/styles";
import {
  FiltersNavLocationDropdownClearButton,
  FiltersNavLocationDropdownFeatured,
  FiltersNavLocationDropdownFeaturedCategory,
  FiltersNavLocationDropdownFooter,
  FiltersNavLocationDropdownHeader,
  FiltersNavLocationDropdownLocationButton,
  FiltersNavLocationDropdownSubmitButton,
  FiltersNavLocationDropdownWrapper,
} from "./filters-nav.styles";

type FiltersNavLocationDropdownProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export const FiltersNavLocationDropdown = ({
  setOpen,
  open,
}: FiltersNavLocationDropdownProps) => {
  const theme: Theme = useTheme();

  const featuredLocations = [
    {
      label: "Top Poland",
      items: ["Krakow", "Slask", "Trojmiasto", "Warszawa", "Wroclaw"],
    },
    {
      label: "Top World",
      items: ["Berlin", "London", "New York", "San Francisco", "Sydney"],
    },
    {
      label: "Other locations",
      items: [
        "Białystok",
        "Bielsko-Biała",
        "Bydgoszcz",
        "Częstochowa",
        "Kielce",
        "Łódź",
        "Lublin",
        "Olsztyn",
        "Opole",
        "Poznań",
        "Rzeszów",
        "Szczecin",
        "Toruń",
        "Zielona Góra",
      ],
    },
  ];

  return (
    <PopperWrapper
      open={open}
      setOpen={setOpen}
      buttonStyle={{
        fontWeight: "500",
        fontSize: "0.8125rem",
        lineHeight: "1.75",
        border: "1px solid",
        backgroundColor: "transparent",
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
          backgroundColor: "transparent",
        },
      }}
      buttonLabel={"Locations"}
      popperPlacement="bottom"
    >
      <FiltersNavLocationDropdownWrapper>
        <FiltersNavLocationDropdownHeader>
          <Typography
            variant="h6"
            component="h2"
            color={theme.palette.text.secondary}
            paddingX="12px"
          >
            Location
          </Typography>
          <FiltersNavLocationDropdownClearButton>
            Clear filters
          </FiltersNavLocationDropdownClearButton>
        </FiltersNavLocationDropdownHeader>
        <FiltersNavLocationDropdownFeatured>
          {featuredLocations.map((location, index) => (
            <FiltersNavLocationDropdownFeaturedCategory
              key={`${location.label}_${index}`}
            >
              <Typography
                variant="h6"
                component="h2"
                color={theme.palette.text.secondary}
                paddingX="12px"
              >
                {location.label}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {location.items.map((item, itemIndex) => (
                  <Box key={`${itemIndex}_${item}`}>
                    <FiltersNavLocationDropdownLocationButton>
                      {item}
                    </FiltersNavLocationDropdownLocationButton>
                  </Box>
                ))}
              </Box>
            </FiltersNavLocationDropdownFeaturedCategory>
          ))}
        </FiltersNavLocationDropdownFeatured>
        <FiltersNavLocationDropdownFooter>
          <FiltersNavLocationDropdownSubmitButton
            onClick={() => setOpen(false)}
          >
            Show offers
          </FiltersNavLocationDropdownSubmitButton>
        </FiltersNavLocationDropdownFooter>
      </FiltersNavLocationDropdownWrapper>
    </PopperWrapper>
  );
};

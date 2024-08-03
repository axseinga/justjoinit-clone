"use client";

import * as React from "react";
import { Box, Typography, ListItem } from "@mui/material";
import {
  NavCurrencyDropdownCurrencyList,
  NavCurrencyDropdownCurrencyListButton,
  NavCurrencyDropdownWrapper,
} from "@/components/nav/nav-currency-dropdown/nav-currency-dropdown.styles";
import { NavTitle } from "@/components/nav/nav.styles";
import { currenciesLists } from "@/components/nav/content";
import { PopperWrapper } from "@/components/popper-wrapper/popper-wrapper";
import { Theme, useTheme } from "@mui/material/styles";

type CurrencyT = {
  label: string;
  value: string;
};

type NavCurrencyDropdownProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export const NavCurrencyDropdown = ({ setOpen, open }: NavCurrencyDropdownProps) => {
  const theme: Theme = useTheme();

  const [selectedCurrency, setSelectedCurrency] = React.useState<CurrencyT>({
    label: "PLN",
    value: "pln",
  });

  const handleCurrencySelect = (selectedCurrency: CurrencyT) => {
    setOpen(false);
    setSelectedCurrency(selectedCurrency);
  };

  return (
    <PopperWrapper
      open={open}
      setOpen={setOpen}
      buttonStyle={{
        display: { xs: "none", sm: "none", md: "flex" },
        borderRadius: "50%",
        padding: "5px",
        minWidth: "40px",
        width: "40px",
        height: "40px",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: theme.palette.buttonHover,
        },
      }}
      buttonLabel={
        <NavTitle
          color={theme.palette.text.secondary}
          component="p"
          sx={{ fontSize: "11px", fontWeight: "600" }}
        >
          {selectedCurrency.label}
        </NavTitle>
      }
      popperPlacement="bottom"
    >
      <NavCurrencyDropdownWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            color={theme.palette.text.secondary}
            paddingX="12px"
          >
            Select your currency
          </Typography>
          <NavCurrencyDropdownCurrencyList>
            {currenciesLists.map((currency) => (
              <NavCurrencyDropdownCurrencyListButton
                key={currency.value}
                onClick={() => handleCurrencySelect(currency)}
              >
                <ListItem sx={{ padding: 0 }}>
                  <Typography
                    variant="body1"
                    color={currency.value === selectedCurrency.value ? "#FF4081" : theme.palette.text.primary}
                  >
                    {currency.label}
                  </Typography>
                </ListItem>
              </NavCurrencyDropdownCurrencyListButton>
            ))}
          </NavCurrencyDropdownCurrencyList>
        </Box>
      </NavCurrencyDropdownWrapper>
    </PopperWrapper>
  );
};

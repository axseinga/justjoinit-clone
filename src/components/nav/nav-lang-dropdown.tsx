"use client";

import * as React from "react";
import { Box, Typography, ListItem } from "@mui/material";
import {
  NavLangDropdownCurrencyList,
  NavLangDropdownCurrencyListButton,
  NavLangDropdownWrapper,
  NavTitle,
} from "./nav.styles";
import { currenciesLists } from "./content";
import { PopperWrapper } from "@/components/popper-wrapper/popper-wrapper";

type CurrencyT = {
  label: string;
  value: string;
};

type NavLangDropdownProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export const NavLangDropdown = ({ setOpen, open }: NavLangDropdownProps) => {
  const [currency, setCurrency] = React.useState<CurrencyT>({
    label: "PLN",
    value: "pln",
  });

  const handleCurrencySelect = (selectedCurrency: CurrencyT) => {
    setOpen(false);
    setCurrency(selectedCurrency);
  };

  return (
    <PopperWrapper
      open={open}
      setOpen={setOpen}
      buttonStyle={{
        borderRadius: "50%",
        padding: "5px",
        minWidth: "40px",
        width: "40px",
        height: "40px",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#f3f6f8",
        },
      }}
      buttonLabel={
        <NavTitle
          color="#000000"
          component="p"
          sx={{ fontSize: "11px", fontWeight: "600" }}
        >
          {currency.label}
        </NavTitle>
      }
      popperPlacement="bottom"
    >
      <NavLangDropdownWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            color="#000000"
            paddingX="12px"
          >
            Select your currency
          </Typography>
          <NavLangDropdownCurrencyList>
            {currenciesLists.map((currency) => (
              <NavLangDropdownCurrencyListButton
                key={currency.value}
                onClick={() => handleCurrencySelect(currency)}
              >
                <ListItem sx={{ padding: 0 }}>
                  <Typography variant="body1" color="#757575">
                    {currency.label}
                  </Typography>
                </ListItem>
              </NavLangDropdownCurrencyListButton>
            ))}
          </NavLangDropdownCurrencyList>
        </Box>
      </NavLangDropdownWrapper>
    </PopperWrapper>
  );
};

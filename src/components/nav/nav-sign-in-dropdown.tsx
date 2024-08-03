"use client";

import * as React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import {
  Typography,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { signInDropdownList } from "@/components/nav/content";
import { PopperWrapper } from "@/components/popper-wrapper/popper-wrapper";
import {
  NavSignInDropdownContent,
  NavSignInDropdownListItem,
  NavSignInDropdownListItemHeader,
  NavSignInDropdownListItemHeaderIcon,
  NavSignInDropdownListItemLinks,
  NavSignInDropdownWrapper,
} from "@/components/nav/nav.styles";
import { Theme, useTheme } from "@mui/material/styles";

type NavSignInDropdownProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export const NavSignInDropdown = ({
  open,
  setOpen,
}: NavSignInDropdownProps) => {
  const theme: Theme = useTheme();
  return (
    <PopperWrapper
      open={open}
      setOpen={setOpen}
      buttonStyle={{
        backgroundColor: "#FF4081",
        color: "#FFFFFF",
        borderRadius: "24px",
        textTransform: "none",
        height: "max-content",
        padding: "10px 16px",
        "&:hover": {
          backgroundColor: "#b82d5b",
        },
      }}
      buttonIcon={
        <KeyboardArrowDownRoundedIcon
          fontSize="large"
          color="inherit"
          aria-label="toggle dropdown"
          aria-hidden="true"
        />
      }
      buttonLabel="Sign in"
      popperPlacement="bottom-end"
    >
      <NavSignInDropdownWrapper>
        <NavSignInDropdownContent>
          {signInDropdownList.map((list, index) => (
            <NavSignInDropdownListItem key={`${index}_${list.label}`}>
              <NavSignInDropdownListItemHeader>
                <NavSignInDropdownListItemHeaderIcon>
                  {list.icon}
                </NavSignInDropdownListItemHeaderIcon>
                <Typography variant="body2" component="span">
                  {list.label}
                </Typography>
              </NavSignInDropdownListItemHeader>
              <NavSignInDropdownListItemLinks>
                {list.links.map((link, index) => (
                  <ListItem key={`ListItem_${index}`} sx={{ padding: "0" }}>
                    <ListItemText
                      sx={{
                        "&:hover": {
                          "& #listLink": {
                            backgroundColor: theme.palette.buttonHover,
                            borderRadius: "10px",
                          },
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        id="listLink"
                        sx={{
                          padding: "0.8rem",
                          display: "flex",
                          fontWeight: 500,
                        }}
                        component="a"
                        href={link.href}
                      >
                        {link.label}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </NavSignInDropdownListItemLinks>
              {index === 0 && <Divider variant="middle" />}
            </NavSignInDropdownListItem>
          ))}
        </NavSignInDropdownContent>
      </NavSignInDropdownWrapper>
    </PopperWrapper>
  );
};

"use client";

import * as React from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Popper, Button, Fade, SxProps } from "@mui/material";

type PopperWrapperProps = {
  buttonStyle?: SxProps;
  buttonIcon?: React.ReactNode;
  buttonLabel: string | React.ReactNode;
  popperPlacement:
    | "bottom-end"
    | "bottom-start"
    | "top-end"
    | "top-start"
    | "bottom"
    | "top";
  children: React.ReactElement<{ setOpen: (open: boolean) => void }>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonAriaLabel?: string;
};

export const PopperWrapper = ({
  buttonStyle,
  buttonIcon,
  buttonLabel,
  popperPlacement,
  children,
  open,
  setOpen,
  buttonAriaLabel,
}: PopperWrapperProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleToggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
    setAnchorEl(e.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Button
          aria-describedby={id}
          type="button"
          onClick={(e) => handleToggleDropdown(e)}
          size="small"
          variant="contained"
          disableElevation
          sx={buttonStyle}
          endIcon={buttonIcon ? buttonIcon : null}
          aria-label={buttonAriaLabel && buttonAriaLabel}
        >
          {buttonLabel}
        </Button>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement={popperPlacement}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <div>{React.cloneElement(children, { setOpen })}</div>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

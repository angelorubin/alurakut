import React, { useState } from "react";
import { Menu as MuiMenu, MenuItem } from "@material-ui/core";

export const Menu = () => {
  const [open, setOpen] = useState(true);
  const anchorEl = "";
  const handleClose = () => {};

  return (
    <MuiMenu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </MuiMenu>
  );
};

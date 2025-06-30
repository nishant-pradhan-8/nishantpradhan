"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sm:hidden">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon className="text-gray-300" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="#">Home</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#skills">Skills</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#experience">Experience</a>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <a href="#projects">Projects</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="blogs">Blogs</a>
        </MenuItem>
      </Menu>
    </div>
  );
}

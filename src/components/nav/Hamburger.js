import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const Hamburger = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div class="hidden-large hamburger-div">
      <IconButton 
        id="hamburger-menu"
        edge="end" 
        color="inherit" 
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a class="hamburger-item" href="#intro">Intro</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="hamburger-item" href="#budget">Budget</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="hamburger-item" href="#sankey">Sankey</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="hamburger-item" href="#timeline">Timeline</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="hamburger-item" href="#faq">FAQ</a></MenuItem>
        <MenuItem onClick={handleClose}><a class="hamburger-item" href="#resources">Resources</a></MenuItem>
      </Menu>
    </div>
  )
}

export default Hamburger;
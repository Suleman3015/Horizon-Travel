import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HorizonLogo from "../Images/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// const pages = ["Tours", "Services", "About Us", "Contact Us"];
const pages = [
  {
    page: "Home",
    url: "/",
    drop: false,
  },
  {
    page: "Tours",
    url: "/",
    drop: true,
    menu: [
      { title: "National", url: "/" },
      { title: "International", url: "/" },
    ],
  },
  {
    page: "About us",
    drop: false,
    url: "/",
  },
  {
    page: "Contact Us",
    url: "/",
    drop: false,
  },
];
const DrawerComp = ({ setDrawState }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openDrawer, setOpenDrawer] = useState(false);
  setDrawState(openDrawer);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F5F5F5",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "15px",
              paddingLeft: "10px",
            }}
          >
            <img
              src={HorizonLogo}
              height={30}
              width={60}
              alt="horizon travels"
            />
          </div>
          <List>
            {pages.map((page, index) => (
              <>
                {" "}
                {page.drop === true ? (
                  <div key={index}>
                    <ListItemButton
                      key={index}
                      id="demo-positioned-button"
                      aria-controls={open ? "demo-positioned-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{ color: "black" }}
                    >
                      Dashboard
                    </ListItemButton>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {page.menu.map((title, index) => {
                        return (
                          <ListItemButton onClick={handleClose} key={index}>
                          <ListItemIcon >
                            <ListItemText>{title.title}</ListItemText>
                          </ListItemIcon>
                          </ListItemButton>

                        );
                      })}
                    </Menu>
                  </div>
                ) : (
                  <ListItemButton key={index}>
                    <ListItemIcon>
                      <ListItemText>{page.page}</ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                )}
              </>
            ))}
          </List>
          {/* <h1>hello world</h1> */}
        </div>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

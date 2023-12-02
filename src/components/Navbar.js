import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import DrawerComp from "./Drawer";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import CommuteSharpIcon from "@mui/icons-material/CommuteSharp";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";

import { Link as LINK, Element } from "react-scroll";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [drawState, setDrawState] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          // background: "transparent",
          position: "absolute",
          /* From https://css.glass */
          background: " rgba(6, 6, 6, 0.35)",
          // borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: " blur(12.7px)",
          WebkitBackdropFilter: "blur(12.7px)",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <NavWrap>
              <div>
                <a href="/">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/LogoTrans.png"
                    width={100}
                    alt="horizon"
                  />
                </a>
              </div>
              <DrawerComp setDrawState={setDrawState} />
            </NavWrap>
          ) : (
            <NavWrap>
              <div>
                <a href="/">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/LogoTrans.png"
                    width={100}
                    alt="horizon"
                  />
                </a>
              </div>

              <div>
                <Link to="/">
                  <Tab
                    sx={{ color: "white", fontWeight: "bolder" }}
                    to="/"
                    label="Home"
                  />
                </Link>
                <Tab
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "white", fontWeight: "bolder" }}
                  label="Tours"
                />
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  PaperProps={{
                    style: {
                      // Set your desired background color
                      marginTop: "35px",
                      background: " rgba(6, 6, 6, 0.35)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      backdropFilter: " blur(12.7px)",
                      WebkitBackdropFilter: "blur(12.7px)",
                      padding: "10px 15px",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <ListItemButton onClick={handleClose}>
                    <ListItemIcon sx={{ color: "white" }}>
                      <Typography
                        sx={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <PublicSharpIcon />
                        International Tours
                      </Typography>
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton onClick={handleClose}>
                    <Typography sx={{ color: "white" }}>
                      <CommuteSharpIcon
                        sx={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      />{" "}
                      National Tours
                    </Typography>
                  </ListItemButton>
                </Menu>
                <LINK to="section1" smooth={true} duration={500}>
                  <Tab
                    sx={{ color: "white", fontWeight: "bolder" }}
                    label="About Us"
                  />
                </LINK>
                <Link to="/international">
                  <Tab
                    sx={{ color: "white", fontWeight: "bolder" }}
                    label="Contact"
                  />
                </Link>
              </div>

              <div>
                <StyledNavLink to="/">
                  <FacebookIcon
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>

                <StyledNavLink to="/">
                  <InstagramIcon
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>
                <StyledNavLink to="/">
                  <CallIcon
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>
              </div>
            </NavWrap>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-left: 10px;

  ${
    "" /* &:hover,
  &:active {
    color: #f48431;
  } */
  }
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default Navbar;

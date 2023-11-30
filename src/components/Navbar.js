import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import DrawerComp from "./Drawer";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
          <img src="/LogoTrans.png" width={100} alt="horizon" />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                indicatorColor="secondary"
                // textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                sx={{
                  marginLeft: "auto",
                  "& .MuiTabs-indicator": { backgroundColor: "#f48431" },
                }}
              >
                <Tab sx={{color:"white"}} label="Tours" />
                <Tab sx={{color:"white"}} label="Services" />
                <Tab sx={{color:"white"}} label="About Us" />
                <Tab sx={{color:"white"}} label="Contact" />
              </Tabs>
              <div style={{ marginLeft: "auto" }}>
                <StyledNavLink to="/">
                  <TwitterIcon
                    sx={{color:"White",opacity:"90%", marginLeft: "auto" }}
                    variant="contained"
                  />
                </StyledNavLink>
                <StyledNavLink to="/">
                  <FacebookIcon
                    sx={{color:"White",opacity:"90%", marginLeft: "10px" }}
                    variant="contained"
                  />
                </StyledNavLink>

                <StyledNavLink to="/">
                  <InstagramIcon
                    sx={{color:"White",opacity:"90%", marginLeft: "10px" }}
                    variant="contained"
                  />
                </StyledNavLink>
                <StyledNavLink to="/">
                  <CallIcon
                    sx={{color:"White",opacity:"90%", marginLeft: "10px" }}
                    variant="contained"
                  />
                </StyledNavLink>
              </div>
            </>
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

  &:hover,
  &:active {
    color: #f48431;
  }
`;

export default Navbar;

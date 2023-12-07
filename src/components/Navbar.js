import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import DrawerComp from "./Drawer";
import { Link, useLocation } from "react-router-dom";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import DirectionsTransitSharpIcon from "@mui/icons-material/DirectionsTransitSharp";
import ConnectingAirportsSharpIcon from "@mui/icons-material/ConnectingAirportsSharp";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";
import { Link as LINK } from "react-scroll";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import Facebook from "../Images/icons/facebook.svg";
import Insta from "../Images/icons/instagram.svg";
import Youtube from "../Images/icons/youtube.svg";
import Tiktok from "../Images/icons/tiktok.svg";
import Twitter from "../Images/icons/twitter.svg"
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navbarColor = currentPath === "/" ? " rgba(6, 6, 6, 0.35)" : "#074090";
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const [anchorEl, setAnchorEl] = useState(null);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          // background: "transparent",
          position: "absolute",
          /* From https://css.glass */
          background: navbarColor,
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
              <DrawerComp />
            </NavWrap>
          ) : (
            <NavWrap>
              <div>
                <a href="/">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/LogoTrans.png"
                    width={150}
                    alt="horizon"
                  />
                </a>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "25px" }}
              >
                <Link style={{ cursor: "pointer" }} to="/">
                  <Typography
                    sx={{
                      display: "flex",
                      gap: "3px",
                      alignItems: "center",
                      color: "lightgray",
                      fontWeight: "bolder",
                    }}
                  >
                    <HomeSharpIcon style={{ fontSize: "20px" }} /> Home
                  </Typography>
                </Link>
                {/* <Tab
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
                  <Link to="/tour">
                    <ListItemButton onClick={handleClose}>
                      <ListItemIcon sx={{ color: "white" }}>
                        <Typography
                          sx={{
                            color: "lightgray",
                            fontWeight: "bolder",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <PublicSharpIcon
                            sx={
                              {
                                // color: "#050f6b",
                              }
                            }
                          />
                          INTERNATIONAL TOURS
                        </Typography>
                      </ListItemIcon>
                    </ListItemButton>
                  </Link>
                  <Link to="/international">
                    <ListItemButton onClick={handleClose}>
                      <Typography
                        sx={{
                          color: "white",
                          display: "flex",
                          color: "lightgray",
                          fontWeight: "bolder",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <CommuteSharpIcon
                          sx={
                            {
                              // color: "#050f6b",
                            }
                          }
                        />{" "}
                        NATIONAL TOURS
                      </Typography>
                    </ListItemButton>
                  </Link>
                </Menu> */}
                <Link to="/tour">
                  <Typography
                    sx={{
                      display: "flex",
                      gap: "3px",
                      alignItems: "center",
                      // color: "white",
                      color: "lightgray",
                      fontWeight: "bolder",
                    }}
                  >
                    <DirectionsTransitSharpIcon style={{ fontSize: "20px" }} />{" "}
                   Domestic Tours
                  </Typography>
                </Link>
                <Link to="/international" smooth={true} duration={500}>
                  <Typography
                    sx={{
                      // color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      color: "lightgray",
                      fontWeight: "bolder",
                    }}
                  >
                    <ConnectingAirportsSharpIcon style={{ fontSize: "20px" }} />{" "}
                    International Tours
                  </Typography>
                </Link>
                {currentPath === "/" ? (
                  <LINK
                    style={{ cursor: "pointer" }}
                    to="section1"
                    smooth={true}
                    duration={500}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        gap: "3px",
                        // color: "white",
                        alignItems: "center",
                        color: "lightgray",
                        fontWeight: "bolder",
                      }}
                    >
                      <PublicSharpIcon style={{ fontSize: "20px" }} /> About
                    </Typography>
                  </LINK>
                ) : null}

                {/* <Link to="/international">
                  <Tab
                    sx={{ color: "white", fontWeight: "bolder" }}
                    label="Contact"
                  />
                </Link> */}
              </div>

              <div style={{
                display:"flex",
                alignItems:"center"
              }}>
                <StyledNavLink to="https://www.facebook.com/profile.php?id=100095119857443&mibextid=ZbWKwL">
                  <img
                    src={Facebook}
                    height={30}
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                      color: "#4267B2",
                    }}
                    variant="contained"
                    alt="horizon tavel"
                  />
                </StyledNavLink>

                <StyledNavLink to="https://instagram.com/the_horizon_travels?igshid=NzZlODBkYWE4Ng==">
                  <img 
                      height={30}
                  src={Insta}
                  alt="horizon"
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>

                <StyledNavLink to="https://www.tiktok.com/@horizon4547?_t=8hw54yO9O1o&_r=1">
                  <img
                      height={33}
                    src={Tiktok}
                    alt="horizon tavel"
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                      color: "#CD201F",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>

                <StyledNavLink to="https://www.youtube.com/channel/UCl8gPd_8p_Tdo72FbqqUMHg">
                  <img
                      height={30}
                    src={Youtube}
                    alt="horizon tavel"
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                      color: "#CD201F",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>

                <StyledNavLink to="https://twitter.com/Horizontravel23">
                  <img
                      height={30}
                    src={Twitter}
                    alt="horizon tavel"
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                      color: "#CD201F",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>
            
                {/* <a href={`tel:+923122775541`}>
                  <CallIcon
                      // height={30}
                    alt="horizon tavel"
                    src={Ph}
                    sx={{
                      color: "White",
                      opacity: "90%",
                      marginLeft: "10px",
                      fontSize:"25px"
                    }}
                    variant="contained"
                  />
                </a> */}
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

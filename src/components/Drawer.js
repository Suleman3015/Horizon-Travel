import React, { useState } from "react";
import styled from "styled-components";
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
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import { NavLink } from "react-router-dom";


// const pages = ["Tours", "Services", "About Us", "Contact Us"];

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


const pages = [
  {
    page: "Home",
    url: "/",
  },
  {
    page: "International Tours",
    url: "/international",
  },
  {
    page: "National Tours",
    url: "/tour",
  },
];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const HandleClick = () => {
    setOpenDrawer(false);
  };


  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F5F5F5",
            justifyContent:"space-between",
            height:"100%",
            paddingBottom:"22px"
          }}
        >
        <div>
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
                <Link to={page.url}>
                  <ListItemButton onClick={HandleClick} key={index}>
                    <ListItemIcon>
                      <ListItemText>{page.page}</ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                  {/* )} */}
                </Link>
              </>
            ))}
          </List>
          </div>
          <div>
                <StyledNavLink to="https://www.facebook.com/profile.php?id=100095119857443&mibextid=ZbWKwL">
                  <FacebookIcon
                    sx={{
                      color: "darkgray",
                      fontWeight:"bolder",
                      opacity: "90%",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>

                <StyledNavLink to="https://instagram.com/the_horizon_travels?igshid=NzZlODBkYWE4Ng==">
                  <InstagramIcon
                    sx={{
                      color: "darkgray",
                      fontWeight:"bolder",
                      opacity: "90%",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                  />
                </StyledNavLink>
                {/* <StyledNavLink to="/"> */}
                  <a href={`tel:+923122775541`}>
                  <CallIcon
                    sx={{
                      color: "darkgray",
                      fontWeight:"bolder",
                      opacity: "90%",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                  />
                {/* </StyledNavLink> */}
                </a>
              </div>
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

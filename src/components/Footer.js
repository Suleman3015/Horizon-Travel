import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#074090",
        color: "white",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#f48431" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary.light">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#f48431" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary.light">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary.light">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary.light">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#f48431" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" target="_blank" color="#fff">
              <Facebook />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/"
              color="#fff"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link target="_blank" href="https://www.twitter.com/" color="#fff">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
            color="text.secondary.light"
            align="center"
          >
            {"Copyright © "}
            <Link color="#f48431" href="https://your-website.com/">
              Horizon Travels
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

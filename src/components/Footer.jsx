import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";

function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CodeIcon
                sx={{
                  mr: 1,
                  color: theme.palette.brandColors.orange,
                  fontSize: 30,
                }}
              />
              <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                lokman
                <span style={{ color: theme.palette.brandColors.pink }}>
                  ACH
                </span>
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              We create cutting-edge websites and applications using modern
              technologies to help businesses thrive in the digital world.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>


              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/lokman-elhakim-achouche-9a8189327/"
                aria-label="LinkedIn"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: theme.palette.brandColors.orange,
                    backgroundColor: `${theme.palette.brandColors.orange}22`,
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component={Link}
                href="https://github.com/lokmanACH"
                aria-label="GitHub"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: theme.palette.brandColors.yellow,
                    backgroundColor: `${theme.palette.brandColors.yellow}22`,
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                // href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                Web Development
              </Link>

              <Link
                // href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                Backend Development
              </Link>
              <Link
                // href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                Database Solutions
              </Link>
              <Link
                // href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                Vps Deployment
              </Link>
            </Box>
          </Grid>

          {/* <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                About Us
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                Our Team
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                Careers
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                Blog
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Grid> */}

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography variant="body2" color="text.secondary">
                Constantine, Elkhroub
              </Typography>
              <Link
                href="mailto:loukmene.achouche@univ-constantine2.dz"
                color="text.secondary"
                underline="hover"
                sx={{ width: "fit-content" }}
              >
                loukmene.achouche@univ-constantine2.dz
              </Link>
              {/* <Typography variant="body2" color="text.secondary">
                +122222222
              </Typography> */}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} lokmanACH. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              // href="#"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Terms of Service
            </Link>
            <Link
              // href="#"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Privacy Policy
            </Link>
            <Link
              // href="#"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

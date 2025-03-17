import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";

const navItems = ["Home", "Services", "Technologies", "Projects"];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <CodeIcon sx={{ mr: 1, color: theme.palette.brandColors.orange }} />
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          lokman
          <span style={{ color: theme.palette.brandColors.pink }}>ACH</span>
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Button
              fullWidth
              onClick={() => scrollToSection(item)}
              sx={{
                textAlign: "center",
                py: 1.5,
                color: "text.primary",
              }}
            >
              <ListItemText primary={item} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? "background.paper" : "transparent",
          transition: "all 0.3s ease",
          backdropFilter: trigger ? "blur(10px)" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <CodeIcon
                sx={{ mr: 1, color: theme.palette.brandColors.orange }}
              />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                lokman
                <span style={{ color: theme.palette.brandColors.pink }}>
                  ACH
                </span>
              </Typography>
            </Box>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex" }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    color="inherit"
                    onClick={() => scrollToSection(item)}
                    sx={{ mx: 1 }}
                  >
                    {item}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ ml: 2 }}
                  onClick={() => scrollToSection("Contact")}
                >
                  Contact Us
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </Box>
  );
}

export default Header;

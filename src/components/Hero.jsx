import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import logo from "../icons/coding.png";

function Hero() {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #1A1A2E 100%)`,
        position: "relative",
        overflow: "hidden",
        pt: 8,
        pb: 10,
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              filter: "blur(80px)",
              opacity: 0.15,
              zIndex: 0,
            }}
            animate={{
              x: [Math.random() * 100, Math.random() * -100],
              y: [Math.random() * 100, Math.random() * -100],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20 + Math.random() * 10,
            }}
            initial={{
              width: 300 + Math.random() * 300,
              height: 300 + Math.random() * 300,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              background: [
                theme.palette.brandColors.yellow,
                theme.palette.brandColors.orange,
                theme.palette.brandColors.pink,
                theme.palette.brandColors.purple,
                theme.palette.brandColors.deepPurple,
              ][i % 5],
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.brandColors.yellow} 0%, ${theme.palette.brandColors.orange} 25%, ${theme.palette.brandColors.pink} 50%, ${theme.palette.brandColors.purple} 75%, ${theme.palette.brandColors.deepPurple} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Transforming Ideas Into Digital Reality
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}
              >
                We build cutting-edge websites and applications using modern
                technologies to help your business thrive in the digital world.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Our Work
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                component="img"
                src={logo}
                alt="Web Development"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "500px",
                  display: "block",
                  mx: "auto",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;

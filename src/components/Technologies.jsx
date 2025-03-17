import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import react from "../icons/react.svg";
import nodejs from "../icons/nodejs.svg";
import express from "../icons/express.svg";
import mongodb from "../icons/mongodb.svg";
import mysql from "../icons/mysql.svg";
import postgresql from "../icons/postgresql.svg";
import php from "../icons/php.svg";
import python from "../icons/python.svg";
import fastapi from "../icons/fastapi.svg";
import mui from "../icons/mui.svg";
import apache from "../icons/apache.svg";
import bun from "../icons/bun.svg";

const technologies = [
  { name: "Node.js", icon: nodejs },
  { name: "Bun", icon: bun },
  { name: "React", icon: react },
  { name: "Material UI", icon: mui },
  { name: "Express", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Python", icon: python },
  { name: "FastAPI", icon: fastapi },
  { name: "PHP", icon: php },
  { name: "Apache", icon: apache },
];

function Technologies() {
  const theme = useTheme();

  return (
    <Box
      id="technologies"
      sx={{
        py: 10,
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: theme.palette.brandColors.orange,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            OUR TECH STACK
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Technologies We Use
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 400,
            }}
          >
            We leverage the latest and most powerful technologies to deliver
            high-performance digital solutions.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {technologies.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: 4,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={tech.icon}
                    alt={tech.name}
                    sx={{
                      width: 60,
                      height: 60,
                      mb: 2,
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="body1" fontWeight={500}>
                    {tech.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Technologies;

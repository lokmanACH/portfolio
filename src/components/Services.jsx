import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with React, Node.js, and other cutting-edge technologies.",
    icon: WebIcon,
    color: "yellow",
  },
  {
    title: "Backend Development",
    description:
      "Robust server-side solutions using Express, FastAPI, PHP, and more.",
    icon: CodeIcon,
    color: "pink",
  },
  {
    title: "Database Solutions",
    description:
      "Efficient data management with MongoDB, MySQL, PostgreSQL, and other database technologies.",
    icon: StorageIcon,
    color: "purple",
  },
  {
    title: "Web Deployment",
    description:
      "Secure and scalable deployment on VPS for optimal performance.",
    icon: CloudIcon,
    color: "deepPurple",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience as the top priority.",
    icon: BrushIcon,
    color: "pink",
  },
];

function Services() {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        py: 10,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: theme.palette.brandColors.pink,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            WHAT WE DO
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Our Services
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
            We offer a comprehensive range of digital solutions to help your
            business succeed in the modern tech landscape.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: `0 12px 40px rgba(0, 0, 0, 0.3)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      justifyContent: "center",
                      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #252538 100%)`,
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${
                          theme.palette.brandColors[service.color]
                        } 20%, ${theme.palette.brandColors.deepPurple} 100%)`,
                        boxShadow: `0 8px 20px rgba(0, 0, 0, 0.2)`,
                      }}
                    >
                      <service.icon sx={{ fontSize: 40, color: "#fff" }} />
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;

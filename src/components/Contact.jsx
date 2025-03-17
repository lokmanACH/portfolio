import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "background.paper",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.brandColors.purple}22 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.brandColors.orange}22 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: theme.palette.brandColors.deepPurple,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Have a project in mind? Let's discuss how we can help bring your
            ideas to life.
          </Typography>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #252538 100%)`,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: { xs: 2, md: 4 },
                    fontWeight: 600,
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.125rem" },
                  }}
                >
                  Let's Build Something Amazing Together
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: { xs: 3, md: 4 } }}
                >
                  Whether you need a new website, a custom web application, or
                  help with your existing digital products, our team is ready to
                  assist you at every step of the way.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: isMobile ? "flex-start" : "center",
                      mb: 4,
                      flexDirection: isMobile ? "column" : "row",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.brandColors.pink} 20%, ${theme.palette.brandColors.purple} 100%)`,
                        mr: isMobile ? 0 : 3,
                        mb: isMobile ? 2 : 0,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <EmailIcon
                        sx={{ color: "#fff", fontSize: { xs: 24, md: 28 } }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight={500}
                        sx={{
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                          wordBreak: "break-word",
                        }}
                      >
                        <Link
                          href="mailto:loukmene.achouche@univ-constantine2.dz"
                          color="inherit"
                          underline="hover"
                        >
                          loukmene.achouche@univ-constantine2.dz
                        </Link>
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: isMobile ? "flex-start" : "center",
                      mb: 4,
                      flexDirection: isMobile ? "column" : "row",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.brandColors.yellow} 20%, ${theme.palette.brandColors.orange} 100%)`,
                        mr: isMobile ? 0 : 3,
                        mb: isMobile ? 2 : 0,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <LocationOnIcon
                        sx={{ color: "#fff", fontSize: { xs: 24, md: 28 } }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Location
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight={500}
                        sx={{
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                        }}
                      >
                        Constantine, El Khroub
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: isMobile ? "flex-start" : "center",
                      flexDirection: isMobile ? "column" : "row",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.brandColors.deepPurple} 20%, ${theme.palette.brandColors.purple} 100%)`,
                        mr: isMobile ? 0 : 3,
                        mb: isMobile ? 2 : 0,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <LinkedInIcon
                        sx={{ color: "#fff", fontSize: { xs: 24, md: 28 } }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        LinkedIn
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight={500}
                        sx={{
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                          wordBreak: "break-word",
                        }}
                      >
                        <Link
                          href="https://www.linkedin.com/in/lokman-elhakim-achouche-9a8189327/"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="inherit"
                          underline="hover"
                        >
                          achouche loukmene elhakim
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact;

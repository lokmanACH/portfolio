import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/devsquad25/ecommerce",
    fullDescription:
      "This comprehensive e-commerce solution provides businesses with everything they need to sell products online. Features include product catalog management, shopping cart functionality, secure checkout with multiple payment options, user account management, order tracking, and an admin dashboard for inventory and order management.",
  },
  {
    title: "Real Estate Portal",
    description:
      "A property listing platform with advanced search filters, interactive maps, and virtual tours for real estate agencies.",
    image: "/projects/realestate.jpg",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Google Maps API",
    ],
    liveUrl: "https://example.com/realestate",
    githubUrl: "https://github.com/devsquad25/realestate",
    fullDescription:
      "This real estate portal allows agencies to showcase their property listings with detailed information, high-quality images, and virtual tours. Users can search for properties using advanced filters, view locations on interactive maps, save favorites, and contact agents directly through the platform. The admin panel provides comprehensive analytics and lead management tools.",
  },
  {
    title: "Healthcare Management System",
    description:
      "A secure platform for healthcare providers to manage patient records, appointments, and medical histories.",
    image: "/projects/healthcare.jpg",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Material UI"],
    liveUrl: "https://example.com/healthcare",
    githubUrl: "https://github.com/devsquad25/healthcare",
    fullDescription:
      "This HIPAA-compliant healthcare management system helps medical facilities streamline their operations. It includes modules for electronic health records (EHR), appointment scheduling, patient portal, billing management, prescription management, and comprehensive reporting. The system prioritizes security and data privacy while providing an intuitive interface for healthcare professionals.",
  },
  {
    title: "Learning Management System",
    description:
      "An educational platform for online courses with video lectures, quizzes, progress tracking, and certification.",
    image: "/projects/lms.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Material UI"],
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/devsquad25/lms",
    fullDescription:
      "This learning management system enables educational institutions and businesses to create and deliver online courses. Features include content management for various media types, interactive quizzes and assignments, progress tracking, discussion forums, virtual classrooms for live sessions, automated certificate generation, and comprehensive analytics for instructors.",
  },
  {
    title: "Financial Dashboard",
    description:
      "A comprehensive financial analytics dashboard with real-time data visualization, reporting, and forecasting tools.",
    image: "/projects/finance.jpg",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "D3.js"],
    liveUrl: "https://example.com/finance",
    githubUrl: "https://github.com/devsquad25/finance",
    fullDescription:
      "This financial dashboard provides businesses with powerful tools to monitor and analyze their financial performance. It includes real-time data visualization, customizable reports, budget tracking, expense management, revenue forecasting, and integration with popular accounting software. The responsive design ensures accessibility across all devices for financial decision-makers.",
  },
  {
    title: "Social Media Platform",
    description:
      "A community-focused social network with profiles, posts, groups, messaging, and content moderation.",
    image: "/projects/social.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    liveUrl: "https://example.com/social",
    githubUrl: "https://github.com/devsquad25/social",
    fullDescription:
      "This social media platform enables users to connect, share content, and build communities. Features include user profiles, news feeds with algorithmic content sorting, group creation and management, real-time messaging, content moderation tools, notification system, and comprehensive privacy controls. The platform is built with scalability in mind to support growing user bases.",
  },
];

function Projects() {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="projects"
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
              color: theme.palette.brandColors.purple,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            OUR PORTFOLIO
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Recent Projects
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
            Explore our latest work and see how we've helped businesses
            transform their digital presence.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* {projects.map((project, index) => (
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
                    overflow: "hidden",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: `0 12px 40px rgba(0, 0, 0, 0.3)`,
                      "& .MuiCardMedia-root": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  <Box sx={{ overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: "transform 0.6s ease",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}
                    >
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: `${
                              theme.palette.brandColors[
                                [
                                  "yellow",
                                  "orange",
                                  "pink",
                                  "purple",
                                  "deepPurple",
                                ][i % 5]
                              ]
                            }22`,
                            color:
                              theme.palette.brandColors[
                                [
                                  "yellow",
                                  "orange",
                                  "pink",
                                  "purple",
                                  "deepPurple",
                                ][i % 5]
                              ],
                            fontWeight: 500,
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          sx={{
                            backgroundColor: `${theme.palette.brandColors.deepPurple}22`,
                            color: theme.palette.brandColors.deepPurple,
                            fontWeight: 500,
                          }}
                        />
                      )}
                    </Box>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      onClick={() => handleClickOpen(project)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))} */}
        </Grid>

        {selectedProject && (
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 3,
                backgroundColor: "background.paper",
              },
            }}
          >
            <DialogTitle sx={{ m: 0, p: 3, pb: 0 }}>
              <Typography variant="h4" component="div" fontWeight={600}>
                {selectedProject.title}
              </Typography>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  color: "text.secondary",
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  mb: 3,
                }}
              />
              <Typography variant="body1" sx={{ mb: 3 }}>
                {selectedProject.fullDescription}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Technologies Used:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                {selectedProject.technologies.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    sx={{
                      backgroundColor: `${
                        theme.palette.brandColors[
                          ["yellow", "orange", "pink", "purple", "deepPurple"][
                            i % 5
                          ]
                        ]
                      }22`,
                      color:
                        theme.palette.brandColors[
                          ["yellow", "orange", "pink", "purple", "deepPurple"][
                            i % 5
                          ]
                        ],
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LaunchIcon />}
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>
    </Box>
  );
}

export default Projects;

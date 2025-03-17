import { createTheme } from "@mui/material/styles";

// Brand colors
const brandColors = {
  yellow: "#FEDA77",
  orange: "#F58529",
  pink: "#DD2A7B",
  purple: "#8134AF",
  deepPurple: "#515BD4",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: brandColors.deepPurple,
    },
    secondary: {
      main: brandColors.pink,
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
    brandColors: {
      ...brandColors,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 20px",
        },
        containedPrimary: {
          background: `linear-gradient(45deg, ${brandColors.purple} 0%, ${brandColors.deepPurple} 100%)`,
          "&:hover": {
            background: `linear-gradient(45deg, ${brandColors.deepPurple} 0%, ${brandColors.purple} 100%)`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(45deg, ${brandColors.orange} 0%, ${brandColors.pink} 100%)`,
          "&:hover": {
            background: `linear-gradient(45deg, ${brandColors.pink} 0%, ${brandColors.orange} 100%)`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export default theme;

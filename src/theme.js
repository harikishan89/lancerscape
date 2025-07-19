


import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C3AED', // Modern purple
      contrastText: '#fff',
    },
    secondary: {
      main: '#A78BFA', // Light purple accent
      contrastText: '#fff',
    },
    background: {
      default: '#F8F7FC',
      paper: '#fff',
    },
    text: {
      primary: '#2D1A47',
      secondary: '#6B7280',
    },
    grey: {
      100: '#F3F0FA',
      200: '#E5E1F6',
      500: '#B0BEC5',
    },
    success: {
      main: '#7C3AED',
    },
    warning: {
      main: '#F59E42',
    },
    info: {
      main: '#6366F1', // Indigo accent
    },
  },
  typography: {
    fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
    h1: { fontWeight: 900, letterSpacing: -1 },
    h2: { fontWeight: 900, letterSpacing: -1 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          background: '#7C3AED',
          color: '#fff',
          '&:hover': {
            background: '#5B21B6',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;

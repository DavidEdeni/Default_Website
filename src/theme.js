import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A1B14', // Deep Walnut
      contrastText: '#F2EFE9',
    },
    secondary: {
      main: '#4B3621', // Warm Cocoa
      light: '#7A624E',
    },
    background: {
      default: '#F2EFE9', // Sophisticated Creme
      paper: '#FDFCFB',
    },
    text: {
      primary: '#2A1B14',
      secondary: '#4B3621',
    },
    divider: '#D7CCC8',
  },

  typography: {
    fontFamily: '"Playfair Display", "serif"',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: '#2A1B14',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      color: '#2A1B14',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      color: '#2A1B14',
    },

    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '0.85rem',
      color: '#4B3621',
    },

    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F2EFE9',
          color: '#2A1B14',
        },

      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          padding: '14px 32px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          backgroundColor: '#2A1B14',
          '&:hover': {
            backgroundColor: '#1A110D',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: '#2A1B14',
          color: '#2A1B14',
          '&:hover': {
            backgroundColor: 'rgba(42, 27, 20, 0.04)',
            borderColor: '#1A110D',
          },
        },

      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
        },
      },
    },
  },
});

export default theme;

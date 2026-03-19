import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B82F6', // Galaxy Blue
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6366F1', // Nebula Indigo
      light: '#818CF8',
    },
    background: {
      default: '#05070A', // Deep Space Black
      paper: '#0F172A',   // Slate 900
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(148, 163, 184, 0.12)',
  },

  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
    h1: {
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: '#F8FAFC',
    },
    h2: {
      fontWeight: 500,
      color: '#F8FAFC',
    },
    h3: {
      fontWeight: 500,
      color: '#F8FAFC',
    },

    h4: {
      fontWeight: 500,
      color: '#F8FAFC',
    },
    h5: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '0.85rem',
      color: '#3B82F6',
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
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#05070A',
          color: '#F8FAFC',
        },

      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '14px 32px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          backgroundColor: '#3B82F6',
          '&:hover': {
            backgroundColor: '#2563EB',
            transform: 'translateY(-1px)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          },
        },
        outlinedPrimary: {
          borderColor: '#3B82F6',
          color: '#3B82F6',
          '&:hover': {
            backgroundColor: 'rgba(59, 130, 246, 0.04)',
            borderColor: '#2563EB',
          },
        },

      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;

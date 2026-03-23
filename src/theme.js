import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#06B6D4', // Cyan Glow
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B5CF6', // Neon Purple
      light: '#A78BFA',
    },
    background: {
      default: '#F8FAFC', // Bright Background
      paper: 'rgba(255, 255, 255, 0.8)', // White with transparency for glassmorphism
    },
    text: {
      primary: '#0F172A', // Slate 900
      secondary: '#475569', // Slate 600
    },
    divider: 'rgba(15, 23, 42, 0.08)',
  },

  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.04em',
      fontSize: 'clamp(3rem, 8vw, 5rem)',
      lineHeight: 1.1,
      color: '#0F172A',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      color: '#0F172A',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontSize: '2rem',
      color: '#0F172A',
    },
    h4: {
      fontWeight: 500,
      color: '#0F172A',
    },
    h5: {
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '0.75rem',
      color: '#0891B2',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#475569',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F8FAFC',
          color: '#0F172A',
          '& ::selection': {
            backgroundColor: 'rgba(6, 182, 212, 0.3)',
            color: '#0F172A',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
          boxShadow: '0 4px 20px rgba(6, 182, 212, 0.2)',
          '&:hover': {
            background: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(6, 182, 212, 0.4)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(6, 182, 212, 0.5)',
          color: '#0891B2',
          '&:hover': {
            backgroundColor: 'rgba(6, 182, 212, 0.05)',
            borderColor: '#06B6D4',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(15, 23, 42, 0.08)',
        },
      },
    },
  },
});

export default theme;

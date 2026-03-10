import React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button, Link } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logo from '../assets/logo.jpg';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (target) => {
    if (location.pathname !== '/') {
      navigate('/?scroll=' + target);
    } else {
      scroller.scrollTo(target, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70
      });
    }
  };

  // Add a small useEffect to handle the scroll after navigation from another page
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scroll');
    if (scrollTo && location.pathname === '/') {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -70
        });
        // Clear the query param without refreshing
        window.history.replaceState({}, document.title, "/");
      }, 100);
    }
  }, [location]);

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)', borderBottom: '1px solid #E0D8D0', backdropFilter: 'blur(8px)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 70, md: 90 } }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'primary.main' }}
          >
            <Box
              component="img"
              src={logo}
              alt="IRD Logo"
              sx={{ height: { xs: 40, md: 50 }, mr: 2 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.25rem' },
                letterSpacing: '0.05em',
                lineHeight: 1.2,
                display: { xs: 'none', sm: 'block' }
              }}
            >
              INTEGRATED RELATIONAL DYNAMICS, PLLC
            </Typography>
          </Box>

          <Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 } }}>
            <NavItem onClick={() => handleNavClick('services')} label="Services" />
            <NavItem onClick={() => handleNavClick('about')} label="About" />
            <NavItem onClick={() => handleNavClick('contact')} label="Contact" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavItem = ({ onClick, label }) => (
  <Link
    component="button"
    onClick={onClick}
    sx={{
      color: 'text.secondary',
      fontSize: '0.85rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'none',
      bgcolor: 'transparent',
      p: 0,
      '&:hover': {
        color: 'primary.main',
        textDecoration: 'underline'
      }
    }}
  >
    {label}
  </Link>
);

export default Header;

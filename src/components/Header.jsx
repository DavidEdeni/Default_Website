import React, { memo, useCallback, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Link } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logo from '../assets/logo.jpg';

const HEADER_STYLES = { 
  bgcolor: 'rgba(255, 255, 255, 0.95)', 
  borderBottom: '1px solid #E0D8D0', 
  backdropFilter: 'blur(8px)' 
};

const LOGO_BOX_STYLES = { 
  display: 'flex', 
  alignItems: 'center', 
  textDecoration: 'none', 
  color: 'primary.main' 
};

const LOGO_IMAGE_STYLES = { 
  height: { xs: 40, md: 50 }, 
  mr: 2 
};

const NAV_ITEM_STYLES = {
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
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback((target) => {
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
  }, [location.pathname, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToTarget = params.get('scroll');
    if (scrollToTarget && location.pathname === '/') {
      const timer = setTimeout(() => {
        scroller.scrollTo(scrollToTarget, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -70
        });
        window.history.replaceState({}, document.title, "/");
      }, 150); // Increased slightly for stability
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.search]);

  return (
    <AppBar position="sticky" elevation={0} sx={HEADER_STYLES}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 70, md: 90 } }}>
          <Box component={RouterLink} to="/" sx={LOGO_BOX_STYLES}>
            <Box component="img" src={logo} alt="IRD Logo" sx={LOGO_IMAGE_STYLES} />
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

const NavItem = memo(({ onClick, label }) => (
  <Link
    component="button"
    onClick={onClick}
    sx={NAV_ITEM_STYLES}
  >
    {label}
  </Link>
));

NavItem.displayName = 'NavItem';

export default memo(Header);

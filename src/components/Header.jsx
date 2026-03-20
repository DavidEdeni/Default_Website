import { memo, useCallback, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Link } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const HEADER_STYLES = { 
  background: 'rgba(5, 7, 10, 0.7)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)', 
  backdropFilter: 'blur(20px)',
  zIndex: 1100,
  position: 'fixed',
  top: 0,
  width: '100%',
};


const LOGO_BOX_STYLES = { 
  display: 'flex', 
  alignItems: 'center', 
  textDecoration: 'none', 
  color: 'primary.contrastText' 
};

const LOGO_TEXT_STYLES = {
  fontWeight: 800,
  fontSize: '1.25rem',
  letterSpacing: '-0.02em',
  background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'block'
};

const TOOLBAR_STYLES = { 
  justifyContent: 'space-between', 
  minHeight: { xs: 70, md: 90 } 
};

const NAV_BOX_STYLES = { 
  display: 'flex', 
  alignItems: 'center', 
  gap: { xs: 2, md: 4 } 
};

const NAV_ITEM_STYLES = {
  color: 'rgba(248, 250, 252, 0.7)',
  fontSize: '0.875rem',
  fontWeight: 500,
  textTransform: 'none',
  letterSpacing: '0.01em',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  bgcolor: 'transparent',
  p: 0,
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '#06B6D4',
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
        <Toolbar disableGutters sx={TOOLBAR_STYLES}>
          <Box component={RouterLink} to="/" sx={LOGO_BOX_STYLES} aria-label="AetherFlow Home">
            <Typography
              variant="h6"
              sx={LOGO_TEXT_STYLES}
            >
              AetherFlow
            </Typography>
          </Box>

          <Box component="nav" sx={NAV_BOX_STYLES}>
            <NavItem onClick={() => handleNavClick('features')} label="Features" ariaLabel="Scroll to Features" />
            <NavItem onClick={() => handleNavClick('solutions')} label="Solutions" ariaLabel="Scroll to Solutions" />
            <NavItem onClick={() => handleNavClick('infrastructure')} label="Infrastructure" ariaLabel="Scroll to Infrastructure" />
            <NavItem onClick={() => handleNavClick('contact')} label="Contact" ariaLabel="Scroll to Contact" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavItem = memo(({ onClick, label, ariaLabel }) => (
  <Link
    component="button"
    onClick={onClick}
    sx={NAV_ITEM_STYLES}
    aria-label={ariaLabel}
  >
    {label}
  </Link>
));

NavItem.displayName = 'NavItem';

export default memo(Header);

import { memo, useCallback, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Link } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const HEADER_STYLES = { 
  background: 'rgba(42, 27, 20, 0.95)',
  borderBottom: '1px solid rgba(215, 204, 200, 0.15)', 
  backdropFilter: 'blur(8px)',
  zIndex: 1100
};


const LOGO_BOX_STYLES = { 
  display: 'flex', 
  alignItems: 'center', 
  textDecoration: 'none', 
  color: 'primary.contrastText' 
};

const LOGO_TEXT_STYLES = {
  fontWeight: 500,
  fontSize: { xs: '0.9rem', md: '1.1rem' },
  letterSpacing: '0.1em',
  lineHeight: 1.2,
  color: '#FFF',
  display: { xs: 'none', sm: 'block' }
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
  color: '#FFF',
  fontSize: '0.8rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  bgcolor: 'transparent',
  p: 0,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#FFF',
    transform: 'translateY(-1px)',
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
        <Toolbar disableGutters sx={TOOLBAR_STYLES}>
          <Box component={RouterLink} to="/" sx={LOGO_BOX_STYLES} aria-label="INTEGRATED RELATIONAL DYNAMICS Home">
            <Typography
              variant="h6"
              sx={LOGO_TEXT_STYLES}
            >
              INTEGRATED RELATIONAL DYNAMICS
            </Typography>
          </Box>

          <Box component="nav" sx={NAV_BOX_STYLES}>
            <NavItem onClick={() => handleNavClick('services')} label="Services" ariaLabel="Scroll to Services section" />
            <NavItem onClick={() => handleNavClick('about')} label="About" ariaLabel="Scroll to About section" />
            <NavItem onClick={() => handleNavClick('contact')} label="Contact" ariaLabel="Scroll to Contact section" />
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

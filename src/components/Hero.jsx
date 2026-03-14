import { memo } from 'react';
import { Box, Container, Typography, Button, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logoImg from '../assets/Screenshot 2026-03-14 141610.png';

const HERO_SECTION_STYLES = {
  bgcolor: 'background.default',
  color: 'text.primary',
  pt: { xs: 8, md: 12 },
  pb: { xs: 8, md: 12 },
  minHeight: '85vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const LOGO_IMAGE_STYLES = {
  width: '100%',
  maxWidth: { xs: '450px', md: '600px' }, // Made image slightly larger
  height: 'auto',
  display: 'block',
  position: 'relative',
  left: { xs: 0, md: '-120px' }, // Shifted exactly 96px left from base position
  top: { xs: 0, md: '-275px' }, // Moved up 1200px
  mixBlendMode: 'multiply', // blends the white background with the theme background
  filter: 'contrast(1.4) saturate(1.1) brightness(0.9) drop-shadow(15px 15px 20px rgba(0,0,0,0.8))' // Darker Bottom-right shadow
};

const SUBTITLE_STYLES = { 
  letterSpacing: '0.15em', 
  fontWeight: 600, 
  color: 'secondary.light',
  fontSize: '0.85rem',
  mb: 3,
  textTransform: 'uppercase'
};

const TITLE_STYLES = { 
  fontSize: { xs: '3rem', md: '4.5rem' }, 
  fontWeight: 500,
  mb: 2,
  lineHeight: 1.1,
  color: 'primary.main'
};

const NAME_STYLES = { 
  color: 'text.secondary', 
  fontWeight: 400, 
  fontSize: { xs: '1.4rem', md: '1.6rem' },
  fontStyle: 'italic',
  mb: 4
};

const CONSULT_BUTTON_STYLES = {
  mt: 2,
  mb: 6,
  borderRadius: '4px', // Slightly sharper corners based on image
  padding: '12px 36px',
  boxShadow: 'none',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  bgcolor: '#3C2F2F', // Dark wood brown matching the quote
  '&:hover': {
    bgcolor: '#2A1B14',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  }
};

const DESCRIPTION_TEXT_STYLES = {
  color: '#4A6FA5', // Muted blue as seen in the screenshot
  fontStyle: 'italic',
  fontSize: '1.2rem',
  fontWeight: 400,
  maxWidth: '600px',
  mx: 'auto',
  lineHeight: 1.6,
  mt: '300px', // Shifted up 200px from previous 500px
  mb: 10
};

const QUOTE_STYLES = { 
  fontStyle: 'italic', 
  color: '#6e615b', // A slightly lighter brown/gray
  fontSize: { xs: '2.5rem', md: '3.5rem' },
  letterSpacing: '0.02em',
  fontWeight: 400,
  fontFamily: '"Playfair Display", serif',
  opacity: 0.9,
  mt: 8 // Push quote down more
};

const Hero = () => {
  return (
    <Box sx={HERO_SECTION_STYLES}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center" justifyContent="center">
          
          {/* Left Column: Image */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <Box
              component="img"
              src={logoImg}
              alt="Integrated Relational Dynamics Logo"
              sx={LOGO_IMAGE_STYLES}
            />
          </Grid>

          {/* Right Column: Text Content */}
          <Grid item xs={12} md={7} sx={{ textAlign: 'center', px: { md: 4 } }}>
            <Typography variant="h6" sx={SUBTITLE_STYLES}>
              Supervision • Consulting • Therapy
            </Typography>
            
            <Typography variant="h1" sx={TITLE_STYLES}>
              Integrated Relational<br />Dynamics
            </Typography>
            
            <Typography variant="h4" sx={NAME_STYLES}>
              Kotia K. Whitaker, LMFT-S
            </Typography>

            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="contained"
              size="large"
              sx={CONSULT_BUTTON_STYLES}
              aria-label="Request a Consultation"
            >
              Request a Consultation
            </Button>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, md: 4 }, flexWrap: 'wrap', mb: 4 }}>
              <LinkRouter to="/therapy" label="Therapy +" />
              <LinkRouter to="/consulting" label="Consulting +" />
              <LinkRouter to="/supervision" label="Supervision +" />
            </Box>
            
            <Typography variant="body1" sx={DESCRIPTION_TEXT_STYLES}>
              A practice based on <span style={{ textDecoration: 'underline' }}>naming truth</span> that <span style={{ textDecoration: 'underline' }}>helps</span> clarify <span style={{ textDecoration: 'underline' }}>what belongs to you</span> and what does not, without forcing repair, control, or closure
            </Typography>

            <Typography variant="h3" sx={QUOTE_STYLES}>
              Clarity without Coercion
            </Typography>
            
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

const LinkRouter = memo(({ to, label }) => (
  <Link
    component={RouterLink}
    to={to}
    aria-label={label}
    sx={{
      color: 'text.secondary',
      textDecoration: 'none',
      fontSize: '0.8rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      borderBottom: '1px solid transparent',
      pb: 0.5,
      transition: 'all 0.3s ease',
      '&:hover': { 
        color: 'primary.main', 
        borderColor: 'primary.main' 
      }
    }}
  >
    {label}
  </Link>
));

LinkRouter.displayName = 'LinkRouter';

export default memo(Hero);

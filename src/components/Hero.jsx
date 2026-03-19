import { memo } from 'react';
import { Box, Container, Typography, Button, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ParticleScene from './ParticleScene';

const HERO_SECTION_STYLES = {
  bgcolor: 'background.default',
  color: 'text.primary',
  pt: { xs: 5, md: 7 },
  pb: { xs: 8, md: 12 },
  minHeight: '85vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'radial-gradient(circle at 15% 15%, #1e1b4b 0%, #05070a 100%)', // Deep galaxy radial gradient
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
  mb: 4,
  borderRadius: '4px',
  padding: '12px 36px',
  boxShadow: 'none',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  bgcolor: '#3B82F6',
  '&:hover': {
    bgcolor: '#2563EB',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
  }
};

const DESCRIPTION_TEXT_STYLES = {
  color: '#93C5FD',
  fontStyle: 'italic',
  fontSize: '1.2rem',
  fontWeight: 400,
  maxWidth: '600px',
  mx: 'auto',
  lineHeight: 1.6,
  mb: 10
};

const QUOTE_STYLES = {
  fontStyle: 'italic',
  color: '#94A3B8', // A slightly lighter blue/gray
  fontSize: { xs: '2.5rem', md: '3.5rem' },
  letterSpacing: '0.02em',
  fontWeight: 400,
  opacity: 0.9,
  mt: 8 // Push quote down more
};

const Hero = () => {
  return (
    <Box sx={HERO_SECTION_STYLES}>
      <ParticleScene />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Centered Text Content */}
          <Grid item xs={12} md={10} lg={8} sx={{ textAlign: 'center', px: { md: 4 } }}>
            <Typography variant="h6" sx={SUBTITLE_STYLES}>
              Supervision • Consulting • Therapy
            </Typography>

            <Typography variant="h1" sx={TITLE_STYLES}>
              Integrated Relational<br />Dynamics
            </Typography>

            <Typography variant="h4" sx={NAME_STYLES}>
              Clinical Supervision & Consulting
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
              <LinkRouter to="/supervision" label="Supervision +" />
              <LinkRouter to="/consulting" label="Consulting +" />
              <LinkRouter to="/therapy" label="Therapy +" />
            </Box>

            <Typography variant="body1" sx={{ ...DESCRIPTION_TEXT_STYLES, mt: 4 }}>
              A practice based on <span style={{ textDecoration: 'underline' }}>naming truth</span> that <span style={{ textDecoration: 'underline' }}>helps</span> clarify <span style={{ textDecoration: 'underline' }}>what belongs to you</span> and what does not, without forcing repair, control, or closure
            </Typography>

            <Typography variant="h3" sx={QUOTE_STYLES}>
              Clarity without Coercion
            </Typography>

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
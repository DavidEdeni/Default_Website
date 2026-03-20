import { memo } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { scroller } from 'react-scroll';


const HERO_SECTION_STYLES = {
  bgcolor: '#05070A',
  color: 'text.primary',
  pt: { xs: 15, md: 25 },
  pb: { xs: 12, md: 20 },
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), #05070A',
};


const SUBTITLE_STYLES = {
  letterSpacing: '0.4em',
  fontWeight: 700,
  color: 'primary.main',
  fontSize: '0.75rem',
  mb: 4,
  textTransform: 'uppercase',
  opacity: 0.8
};

const TITLE_STYLES = {
  fontSize: { xs: '3.5rem', md: '5.5rem' },
  fontWeight: 800,
  mb: 3,
  lineHeight: 1,
  background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  maxWidth: '900px',
  mx: 'auto'
};

const DESCRIPTION_TEXT_STYLES = {
  color: 'text.secondary',
  fontSize: { xs: '1.1rem', md: '1.25rem' },
  fontWeight: 400,
  maxWidth: '700px',
  mx: 'auto',
  lineHeight: 1.6,
  mb: 6,
  opacity: 0.9
};

const CTA_WRAPPER_STYLES = { 
  display: 'flex', 
  gap: 2, 
  justifyContent: 'center',
  mt: 4
};

const Hero = () => {
  return (
    <Box sx={HERO_SECTION_STYLES}>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Centered Text Content */}
          <Grid item xs={12} md={10} lg={8} sx={{ textAlign: 'center', px: { md: 4 } }}>
            <Typography variant="h5" sx={SUBTITLE_STYLES}>
              Next-Gen Infrastructure
            </Typography>

            <Typography variant="h1" sx={TITLE_STYLES}>
              The Future of Fluid<br />Infrastructure
            </Typography>

            <Typography variant="body1" sx={DESCRIPTION_TEXT_STYLES}>
              AetherFlow provides the high-performance backbone for the next generation of digital platforms. Scalable, secure, and entirely autonomous.
            </Typography>

            <Box sx={CTA_WRAPPER_STYLES}>
              <Button
                onClick={() => scroller.scrollTo('features', { duration: 500, smooth: 'easeInOutQuart', offset: -70 })}
                variant="contained"
                size="large"
                aria-label="Get Started"
              >
                Get Started
              </Button>
              <Button
                onClick={() => scroller.scrollTo('infrastructure', { duration: 500, smooth: 'easeInOutQuart', offset: -70 })}
                variant="outlined"
                size="large"
                aria-label="View Specs"
              >
                View Specs
              </Button>
            </Box>

          </Grid>
      </Container>
    </Box>
  );
};



export default memo(Hero);
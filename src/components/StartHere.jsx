import { memo } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { scroller } from 'react-scroll';

const LIFECYCLE_SECTION_STYLES = {
  bgcolor: '#05070A',
  color: 'text.primary',
  py: { xs: 15, md: 20 },
  position: 'relative'
};


const TITLE_STYLES = {
  fontSize: { xs: '2.5rem', md: '3.5rem' },
  fontWeight: 800,
  mb: 6,
  position: 'relative',
};

const STEP_BOX_STYLES = {
  position: 'relative',
  pl: 6,
  pb: 8,
  '&:last-child': { pb: 0 },
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '23px',
    top: '48px',
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(to bottom, #06B6D4 0%, transparent 100%)',
    opacity: 0.2
  }
};

const STEP_NUMBER_STYLES = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: 48,
  height: 48,
  borderRadius: '50%',
  bgcolor: 'rgba(6, 182, 212, 0.1)',
  border: '1px solid rgba(6, 182, 212, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#06B6D4',
  fontWeight: 800,
  fontSize: '0.875rem'
};

const CTA_BUTTON_STYLES = {
  mt: 4,
  px: 4,
  py: 1.5,
  fontSize: '0.875rem'
};

const StartHere = () => {
  return (
    <Box component="section" id="lifecycle" sx={LIFECYCLE_SECTION_STYLES}>
      <Container maxWidth="lg">
        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
              Process
            </Typography>
            <Typography variant="h2" sx={TITLE_STYLES}>
              Aether Implementation Lifecycle
            </Typography>
            
            <Box>
              {[
                {
                  title: "Architecture Design",
                  desc: "Define your node topology and security boundaries with our visual architect and AI validation engine."
                },
                {
                  title: "Shadow Deployment",
                  desc: "Validate performance and security in a parallel environment without impacting production traffic."
                },
                {
                  title: "Autonomous Core Activation",
                  desc: "Transition to a fully managed, self-healing core that adapts to your global traffic patterns."
                }
              ].map((step, idx) => (
                <Box key={idx} sx={STEP_BOX_STYLES}>
                  <Box sx={STEP_NUMBER_STYLES}>0{idx + 1}</Box>
                  <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 1.5 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: '600px' }}>
                    {step.desc}
                  </Typography>
                  {idx === 2 && (
                    <Button
                      onClick={() => scroller.scrollTo('contact', { duration: 500, smooth: 'easeInOutQuart', offset: -70 })}
                      variant="contained"
                      sx={CTA_BUTTON_STYLES}
                      aria-label="Start Implementation"
                    >
                      Start Implementation
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(StartHere);

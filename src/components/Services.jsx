import { memo } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Element } from 'react-scroll';

const solutions = [
  {
    title: 'Aether Cloud',
    description: 'High-fidelity cloud orchestration designed for mission-critical applications requiring sub-millisecond latency.',
    tag: 'Infrastructure'
  },
  {
    title: 'Quantum Core',
    description: 'Hardware-level security protocols that remain resilient against next-generation cryptographic threats.',
    tag: 'Security'
  },
  {
    title: 'Neural Mesh',
    description: 'A distributed artificial intelligence fabric that synchronizes intelligence across billions of edge nodes.',
    tag: 'Intelligence'
  }
];

const SOLUTION_CARD_STYLES = {
  p: { xs: 6, md: 8 },
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0) 100%)',
  borderRadius: '24px',
  transition: 'all 0.4s ease',
  '&:hover': {
    borderColor: 'rgba(6, 182, 212, 0.3)',
    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.1) 100%)',
    transform: 'scale(1.02)'
  }
};

const Services = () => {
  return (
    <Box component="section" sx={{ py: { xs: 15, md: 20 }, bgcolor: '#05070A' }}>
      <Element name="solutions" id="solutions">
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', textAlign: 'left' }}>
            Solutions
          </Typography>
          <Typography variant="h2" sx={{ mb: 10, maxWidth: '600px', textAlign: 'left' }}>
            Enterprise-Grade Systems for Global Operations
          </Typography>
          <Grid container spacing={6}>
            {solutions.map((solution, index) => (
              <Grid item xs={12} lg={4} key={index}>
                <Box
                  sx={SOLUTION_CARD_STYLES}
                >
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, mb: 2, display: 'block' }}>
                    {solution.tag}
                  </Typography>
                  <Typography variant="h3" sx={{ mb: 3 }}>
                    {solution.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {solution.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Element>
    </Box>
  );
};

export default memo(Services);

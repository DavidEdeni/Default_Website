import { memo } from 'react';
import { Box, Container, Typography, Grid, Button, Divider } from '@mui/material';
import { Element } from 'react-scroll';

const services = [
  {
    title: 'Supervision',
    description: 'Ethical judgment under pressure: conceptualization, documentation strength, boundary clarity, and responsibility when costs rise.',
    status: 'Accepting now (telehealth).',
    isPrimary: true
  },
  {
    title: 'Therapy',
    description: 'Structured, values-informed psychotherapy for adults, couples, and adolescents navigating anxiety, burnout, conflict cycles, and high-stakes decisions—without outcome guarantees.',
    status: 'Begins October 2026 (telehealth).',
    isPrimary: false
  },
  {
    title: 'Consulting',
    description: 'Consulting for individuals or organizations navigating role clarity, decision pressure, and responsibility under strain—especially when decisions feel high-stakes or stuck.',
    status: 'Accepting now (remote).',
    isPrimary: false
  }
];

const SERVICE_PAPER_STYLES = () => ({
  p: { xs: 4, md: 6 },
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  border: 'none',
  bgcolor: 'transparent',
  transition: 'all 0.3s ease'
});

const Services = () => {
  return (
    <Box component="section" sx={{ py: { xs: 12, md: 18 }, bgcolor: 'background.default' }}>
      <Element name="services" id="services">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 10, position: 'relative' }}>
            Services
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} md={8} lg={6} key={index}>
                <Box
                  sx={SERVICE_PAPER_STYLES()}
                >
                  <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 500, mb: 3 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: '500px', mx: 'auto' }}>
                    {service.description}
                  </Typography>
                  
                </Box>
                {index < services.length - 1 && (
                  <Divider sx={{ my: 6, opacity: 0.1, maxWidth: '200px', mx: 'auto' }} />
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Element>
    </Box>
  );
};

export default memo(Services);

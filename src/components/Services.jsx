import React, { memo } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Element } from 'react-scroll';

const services = [
  {
    title: 'Supervision',
    description: 'Ethical judgment under pressure: conceptualization, documentation strength, boundary clarity, and responsibility when costs rise.',
    status: 'Accepting now (telehealth).',
    exploreLink: '/supervision',
    isPrimary: true
  },
  {
    title: 'Therapy',
    description: 'Structured, values-informed psychotherapy for adults, couples, and adolescents navigating anxiety, burnout, conflict cycles, and high-stakes decisions—without outcome guarantees.',
    status: 'Begins October 2026 (telehealth).',
    exploreLink: '/therapy',
    isPrimary: false
  },
  {
    title: 'Consulting',
    description: 'Consulting for individuals or organizations navigating role clarity, decision pressure, and responsibility under strain—especially when decisions feel high-stakes or stuck.',
    status: 'Accepting now (remote).',
    exploreLink: '/consulting',
    isPrimary: false
  }
];

const SERVICE_PAPER_STYLES = (isPrimary) => ({
  p: 4,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #E0D8D0',
  borderTop: isPrimary ? '4px solid #2C2520' : '1px solid #E0D8D0',
  bgcolor: isPrimary ? '#F9F7F5' : 'background.paper',
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-4px)' }
});

const Services = () => {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Element name="services" id="services">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '2.5rem', mb: 8 }}>
            Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={SERVICE_PAPER_STYLES(service.isPrimary)}
                >
                  <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, color: 'text.secondary', lineHeight: 1.7 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 4, fontWeight: 600, color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {service.status}
                  </Typography>

                  <Stack spacing={2}>
                    {service.isPrimary ? (
                      <>
                        <Button
                          component={RouterLink}
                          to="/supervision-fit"
                          variant="contained"
                          fullWidth
                          sx={{ textTransform: 'none', py: 1.5 }}
                        >
                          Request a Supervision Fit Consult &rarr;
                        </Button>
                        <Link
                          component={RouterLink}
                          to={service.exploreLink}
                          sx={{
                            textAlign: 'center',
                            fontSize: '0.9rem',
                            color: 'text.secondary',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                          }}
                        >
                          Explore Supervision &rarr;
                        </Link>
                      </>
                    ) : (
                      <Link
                        component={RouterLink}
                        to={service.exploreLink}
                        sx={{
                          textAlign: 'left',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: 'primary.main',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        Explore {service.title} &rarr;
                      </Link>
                    )}
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Element>
    </Box>
  );
};

export default memo(Services);

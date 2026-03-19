import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ServicePageTemplate = ({ title, subtitle, description, status, linkToFit }) => (
  <Box sx={{ py: 12, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <Typography variant="h1" gutterBottom sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
        <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', mb: 3 }}>
          {subtitle}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600, mb: 4 }}>
          {status}
        </Typography>
        {linkToFit && (
          <Button
            component={RouterLink}
            to="/supervision-fit"
            variant="contained"
            size="large"
          >
            Request a Supervision Fit Consult +
          </Button>
        )}
      </Paper>
    </Container>
  </Box>
);

export const SupervisionPage = () => (
  <ServicePageTemplate
    title="Supervision"
    subtitle="Ethical judgment under pressure"
    description="In-depth clinical supervision focusing on conceptualization, documentation strength, boundary clarity, and responsibility when costs rise. Grounded in ethical judgment and responsible action."
    status="Accepting now (telehealth)."
    linkToFit={true}
  />
);

export const TherapyPage = () => (
  <ServicePageTemplate
    title="Therapy"
    subtitle="Structured, values-informed psychotherapy"
    description="For adults, couples, and adolescents navigating anxiety, burnout, conflict cycles, and high-stakes decisions—without outcome guarantees."
    status="Begins October 2026 (telehealth)."
    linkToFit={false}
  />
);

export const ConsultingPage = () => (
  <ServicePageTemplate
    title="Consulting"
    subtitle="Role clarity & decision pressure"
    description="Consulting for individuals or organizations navigating role clarity, decision pressure, and responsibility under strain—especially when decisions feel high-stakes or stuck."
    status="Accepting now (remote)."
    linkToFit={false}
  />
);

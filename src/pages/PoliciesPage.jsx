import React from 'react';
import { Box, Container, Typography, Stack, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';

const PoliciesPage = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={{ mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          Policies (Supervision)
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          
          <Section title="Communication">
            <Typography variant="body1" color="text.secondary">
              Email is the primary method of communication. The usual response time is 1–2 business days. Email is not checked for emergencies.
            </Typography>
          </Section>

          <Section title="Scheduling">
            <Typography variant="body1" color="text.secondary">
              Telehealth services are available by appointment only. If you're late, the session will end at the scheduled time.
            </Typography>
          </Section>

          <Section title="Cancellation / Reschedule">
            <Typography variant="body1" color="text.secondary" paragraph>
              Please give 24 hours’ notice to cancel or reschedule. Late cancellations or missed appointments may be subject to the full fee.
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', fontWeight: 600 }}>
              (This protects the work and the schedule for all supervisees.)
            </Typography>
          </Section>

          <Section title="Scope & Availability">
            <Typography variant="body1" color="text.secondary">
              This is not crisis coverage and is not available on demand. If you are in an emergency, contact local emergency services.
            </Typography>
          </Section>

        </Paper>
      </Container>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box component="section" sx={{ mb: 6 }}>
    <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 600 }}>{title}</Typography>
    {children}
  </Box>
);

export default PoliciesPage;

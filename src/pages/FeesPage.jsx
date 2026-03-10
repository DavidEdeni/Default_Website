import React from 'react';
import { Box, Container, Typography, Stack, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';

const FeesPage = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={{ mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          Fees
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 6 }}>
            All services are privately paid. Superbills are available upon request; reimbursement depends on your insurer and is not guaranteed.
          </Typography>

          <Divider sx={{ mb: 6 }} />

          <Section title="Supervision">
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Supervision Fit Consult (45–60 minutes)</Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 600 }}>Fee: $150 (launch rate)</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Ongoing Supervision (50 minutes)</Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 600 }}>Fee: $140 per session (launch rate; rate-locked for 12 months for active supervisees)</Typography>
              </Box>
            </Stack>
          </Section>

          <Divider sx={{ my: 6 }} />

          <Section title="Consulting">
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Consulting Session (75–90 minutes)</Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 600 }}>Fee: $225 (launch rate)</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Short Series (3–6 sessions)</Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 600 }}>Fee: $225 per session (75–90 minutes; scheduled by agreement)</Typography>
              </Box>
            </Stack>
          </Section>

        </Paper>
      </Container>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box component="section" sx={{ mb: 0 }}>
    <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem', fontWeight: 600, mb: 4 }}>{title}</Typography>
    {children}
  </Box>
);

export default FeesPage;

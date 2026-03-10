import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Divider, Button, Stack, Paper } from '@mui/material';

const SupervisionFitPage = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="secondary.light" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', mb: 1, fontWeight: 600 }}>
          Integrated Relational Dynamics, PLLC &middot; Kotia K. Whitaker, LMFT-S
        </Typography>
        <Typography variant="h1" gutterBottom sx={{ mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          Supervision Fit Consult
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              What this is
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '70ch' }}>
              A Supervision Fit Consult is a structured fit-and-frame-setting conversation to confirm alignment and establish the supervision frame. This is a dedicated orientation process; it is not supervision and does not include case consultation.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              What we’ll cover
            </Typography>
            <List>
              {[
                "Goals & setting: your clinical context, population, and supervision requirements",
                "Conceptualization habits: identifying stuck points (this is not a performance evaluation)",
                "Documentation strength: what notes must accomplish and how to tighten them",
                "Boundaries & ethics under pressure: role strain, competing obligations, and risk",
                "Cadence & expectations: establishing a clear frame for ongoing work"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main', fontWeight: 700 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              What to bring
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>A simple checklist for our conversation:</Typography>
            <List>
              {[
                "Setting & population (context, role, constraints)",
                "License status / supervision requirements (if applicable)",
                "1–2 brief examples of cases or situations you want help conceptualizing (no identifying details)",
                "Documentation questions you’re currently stuck on",
                "Boundary or ethics scenarios you want to think through"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main', fontWeight: 700 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Logistics
            </Typography>
            <List>
              {[
                "Duration: 45–60 minutes via secure telehealth",
                "Private pay: Fee provided upon email inquiry",
                "Email inquiries only (no phone screen at this stage)",
                "Cancellation/reschedule: 24-hour notice requested to avoid late-cancel fees"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main', fontWeight: 700 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 8, p: 4, bgcolor: '#FFF9F9', border: '1px solid #FFE0E0' }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', color: '#B71C1C', fontWeight: 600 }}>
              Stopping points / Not a fit
            </Typography>
            <List>
              {[
                "No crisis coverage provided",
                "No outcome guarantees for clinical cases",
                "Supervision is not used as leverage in relational or organizational conflict"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                  <ListItemText primary={<Typography variant="body2" sx={{ color: '#D32F2F' }}><Box component="span" sx={{ mr: 2 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}>
              “If not a fit, I’ll help you find a better match.”
            </Typography>
          </Box>

          <Divider sx={{ my: 8 }} />

          <Box component="section" id="request-consult">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '2.25rem', mb: 3 }}>
              Request a Consult
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 6, color: 'text.secondary' }}>
              To explore a Supervision Fit Consult, please send an email including the details below. This structure helps protect your time and ensures we start with clarity.
            </Typography>
            
            <Stack direction="row" justifyContent="center">
              <Button
                href="mailto:integrated.relational.dynamics@gmail.com?subject=Supervision Fit Consult Inquiry&body=Name:%0D%0AState:%0D%0ACurrent Role (Associate/Intern/Fully Licensed):%0D%0AClinical Setting / Population:%0D%0AWhat you want from supervision (short):%0D%0AAny documentation/boundary focus (short):%0D%0AAvailability for 10-15 min screening:"
                variant="contained"
                size="large"
                sx={{ py: 2.5, px: 8, fontSize: '1.1rem' }}
              >
                Inquire via Email &rarr;
              </Button>
            </Stack>
            <Typography variant="body2" align="center" sx={{ mt: 3, color: 'text.secondary', fontStyle: 'italic' }}>
              No PHI (Protected Health Information) via email, please.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SupervisionFitPage;

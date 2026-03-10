import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Divider, Button, Paper, Stack } from '@mui/material';

const TherapyPage = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="secondary.light" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', mb: 1, fontWeight: 600 }}>
          Integrated Relational Dynamics, PLLC
        </Typography>
        <Typography variant="h1" gutterBottom sx={{ mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          Therapy
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          
          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2, fontSize: '1.1rem', mb: 4 }}>
              At Integrated Relational Dynamics, therapy is clarity without coercion—structured, steady work that supports responsible action without pressure toward predetermined outcomes. Insight is treated as meaningful yet insufficient on its own. The aim is not quick relief or forced resolution, but durable clarity that can be carried into real-life follow-through.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Who this is for
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              This practice serves adults, couples, and adolescents navigating relational strain, high-stakes decisions, and the pressure of responsibility. Telehealth-only.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Common fit areas
            </Typography>
            <List>
              {[
                "Repeated conflict cycles, shutdown, or repair that doesn’t hold",
                "Decision points where every option carries real cost",
                "Boundary confusion, role strain, or responsibility overload",
                "Anxiety, depression, burnout, or numbness linked to unresolved conflict",
                "Dating/premarital discernment: expectations, authority, and commitment clarity",
                "Family-of-origin patterns that meaningfully shape present-day dynamics (context, not excuse)"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main', fontWeight: 700 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              How therapy works here
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Therapy is paced for clarity and ethical containment. Sessions emphasize:
            </Typography>
            <List>
              {[
                "Naming what is true (without performance or persuasion)",
                "Clarifying what is yours to carry—and what is not",
                "Identifying the next responsible step when cost rises",
                "Building follow-through that is voluntary and sustainable",
                "Holding boundaries that protect dignity, safety, and agency"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main', fontWeight: 700 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}>
              This work does not rush reconciliation or certainty, and it does not use therapy as leverage in relational conflict.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Rates, payment, and superbills
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Sessions are provided via secure telehealth and are offered on a private-pay basis. Superbills are available upon request; reimbursement is determined by your insurer and is not guaranteed.
            </Typography>
          </Box>

          <Divider sx={{ my: 8 }} />

          <Box component="section">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '2rem', mb: 3 }}>
              Request a brief screening
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 4, color: 'text.secondary' }}>
              If you’d like to explore fit, send an email including:
            </Typography>
            
            <List sx={{ mb: 4, maxWidth: '500px', mx: 'auto' }}>
              {[
                "Your state (Texas or Colorado, if applicable)",
                "Whether you’re seeking individual, couple, or adolescent services",
                "A brief description of what you want help clarifying (no PHI details)",
                "Your general availability"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                   <ListItemText primary={<Typography variant="body2" color="text.secondary" align="center">• {item}</Typography>} />
                </ListItem>
              ))}
            </List>

            <Stack direction="row" justifyContent="center">
              <Button
                href="mailto:integrated.relational.dynamics@gmail.com?subject=Therapy Screening Inquiry&body=Name:%0D%0AState:%0D%0AService Requested (Individual/Couple/Adolescent):%0D%0AClinical Context / Concern:%0D%0AGeneral Availability:"
                variant="contained"
                size="large"
                sx={{ py: 2, px: 6 }}
              >
                Inquire via Email &rarr;
              </Button>
            </Stack>
            <Typography variant="body2" align="center" sx={{ mt: 3, color: 'text.secondary' }}>
               Email: integrated.relational.dynamics@gmail.com
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default TherapyPage;

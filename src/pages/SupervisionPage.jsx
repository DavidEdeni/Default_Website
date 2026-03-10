import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Divider, Button, Paper, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const SupervisionPage = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="secondary.light" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', mb: 1, fontWeight: 600 }}>
          Integrated Relational Dynamics, PLLC
        </Typography>
        <Typography variant="h1" gutterBottom sx={{ mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          Clinical Supervision 
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          
          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Supervision Focus
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
              This is clinical supervision for clinicians who want clarity without coercion. We focus on building documentation strength, boundary clarity, and the ethical judgment required when clinical stakes and relational costs rise. This work is grounded in naming what is true and clarifying responsibility.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Core Emphasis
            </Typography>
            <List>
              {[
                { primary: "Conceptualization under pressure", secondary: "Identifying the root of the clinical stuck point, not just managing the symptoms." },
                { primary: "Documentation strength", secondary: "Building notes that are clear, defensible, and reflective of sound risk-thinking." },
                { primary: "Boundary clarity", secondary: "Managing the strain of dual roles, competing obligations, and organizational pressure." },
                { primary: "Ethics in action", secondary: "Moving beyond rule-following into responsible action when there is no perfect outcome." }
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1.5 }}>
                  <ListItemText 
                    primary={<Typography variant="h5" sx={{ mb: 0.5, fontSize: '1.1rem', fontWeight: 600 }}>{item.primary}</Typography>}
                    secondary={<Typography variant="body2" color="text.secondary">{item.secondary}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Documentation & Defensibility
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
               Documentation is for the protection of the clinician and the dignity of the client. We do not use "templates-as-cover." Instead, we build notes that demonstrate clinical reasoning and clearly identify the frame of treatment. This is about clarity, not performance.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
               How Supervision Works
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Supervision is paced for clarity and ethical containment. Sessions are structured around your clinical setting, license requirements, and current case needs.
            </Typography>
             <List>
              {[
                "Cadence: Weekly or bi-weekly (telehealth)",
                "Focus: Case conceptualization, documentation review, and boundary work",
                "Expectations: Preparation for sessions and a commitment to responsible action"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                  <ListItemText primary={<Typography variant="body2" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main', fontWeight: 700 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
               Fit / Not Fit
            </Typography>
             <Grid container spacing={4}>
               <Grid item xs={12} md={6}>
                 <Typography variant="h5" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600, color: 'primary.main' }}>Fit if</Typography>
                 <Typography variant="body2" color="text.secondary">You want supervision that holds clinical reasoning under pressure and prioritizes ethical clarity over quick relief.</Typography>
               </Grid>
               <Grid item xs={12} md={6}>
                 <Typography variant="h5" sx={{ mb: 2, fontSize: '1rem', fontWeight: 600, color: '#B71C1C' }}>Not a fit if</Typography>
                 <Typography variant="body2" color="text.secondary">You need on-demand crisis support, co-signing without reason, or shortcuts in clinical documentation.</Typography>
               </Grid>
             </Grid>
          </Box>

          <Divider sx={{ my: 8 }} />

          <Stack direction="row" justifyContent="center">
            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="contained"
              size="large"
              sx={{ py: 2.5, px: 8 }}
            >
              Request a Supervision Fit Consult &rarr;
            </Button>
          </Stack>

        </Paper>
      </Container>
    </Box>
  );
};

const Grid = ({ children, container, item, xs, md, spacing }) => (
  <Box sx={{ display: container ? 'flex' : 'block', flexWrap: 'wrap', gap: spacing ? spacing * 8 : 0, '& > *': item ? { flexBasis: xs ? `${(xs / 12) * 100}%` : 'auto' } : {} }}>
    {children}
  </Box>
);

export default SupervisionPage;

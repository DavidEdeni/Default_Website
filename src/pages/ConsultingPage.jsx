import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Divider, Button, Paper, Stack } from '@mui/material';

const ConsultingPage = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="secondary.light" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', mb: 1, fontWeight: 600 }}>
          Integrated Relational Dynamics, PLLC
        </Typography>
        <Typography variant="h1" gutterBottom sx={{ mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          Consulting
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          
          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              What consulting is
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2, fontSize: '1.1rem', mb: 4 }}>
              Consulting at Integrated Relational Dynamics is clarity before action for individuals, leaders, and organizations navigating authority, role strain, and responsibility under cost. The focus is helping you name what is true, clarify what is yours to carry, and identify the next responsible step—without coercion, performance pressure, or outcome guarantees.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Common scenarios
            </Typography>
            <List>
              {[
                "Role confusion or blurred authority (who decides, who owns what, who is accountable)",
                "Decision bottlenecks when every option carries loss or tradeoffs",
                "Conflict escalation, misalignment, or chronic tension inside a team/system",
                "Accountability breakdowns (repeated promises, stalled follow-through, symbolic responsibility)",
                "Boundary problems that create instability (overreach, avoidance, or unmanaged exposure)",
                "Transitions that strain responsibility (growth, restructure, leadership change, crisis aftermath)"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main', fontWeight: 700 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Engagement options
            </Typography>
            <List>
              {[
                { primary: "Single Consulting Consult (60–90 minutes)", secondary: "Clarify the situation, map constraints, and identify the next responsible step." },
                { primary: "Short Series (3–6 sessions)", secondary: "Sustained clarity work for complex dynamics, role strain, or decision pressure." },
                { primary: "Documentation / deliverables (optional)", secondary: "Brief written summary of decisions, boundaries, roles, and next steps." }
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

          <Box component="section" sx={{ mb: 8, p: 4, bgcolor: 'background.default', borderLeft: '4px solid #2C2520' }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Boundaries
            </Typography>
            <List dense>
              {[
                "Consulting is not psychotherapy and is not crisis response.",
                "Consulting is not legal advice, clinical supervision, or HR adjudication.",
                "Work is structured for clarity—no outcome guarantees and no use of consulting as leverage over others."
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                  <ListItemText primary={<Typography variant="body2" color="text.secondary">• {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 8 }} />

          <Box component="section">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '2rem', mb: 3 }}>
              Inquire About Consulting
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 4, color: 'text.secondary' }}>
              If you’d like to explore fit, send an email including:
            </Typography>
            
            <List sx={{ mb: 4, maxWidth: '500px', mx: 'auto' }}>
              {[
                "Your state and your role (individual / leader / organization)",
                "The situation in 4–6 sentences (no sensitive details)",
                "What decision or responsibility question you need clarity on",
                "Timeline and general availability"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                   <ListItemText primary={<Typography variant="body2" color="text.secondary" align="center">• {item}</Typography>} />
                </ListItem>
              ))}
            </List>

            <Stack direction="row" justifyContent="center">
              <Button
                href="mailto:integrated.relational.dynamics@gmail.com?subject=Consulting Inquiry&body=Name/Organization:%0D%0AState:%0D%0ARole:%0D%0ASituation Summary:%0D%0AFocus Question:%0D%0ATimeline/Availability:"
                variant="contained"
                size="large"
                sx={{ py: 2, px: 6 }}
              >
                Send Inquiry &rarr;
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

export default ConsultingPage;

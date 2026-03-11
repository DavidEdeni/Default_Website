import { memo } from 'react';
import { Box, Container, Typography, Grid, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import spheresImg from '../assets/8a46ffa53352710009d9cc110eff458f-4.jpg';

const START_IMAGE_STYLES = {
  width: '100%',
  height: 'auto',
  boxShadow: '-20px 20px 0px #E0D8D0',
  border: '1px solid #E0D8D0'
};

const SECTION_BOX_STYLES = { mb: 6 };
const SECTION_WRAPPER_STYLES = { py: 12, bgcolor: '#F9F7F5' };
const HEADER_TITLE_STYLES = { fontSize: '2.5rem', mb: 4 };
const SUBHEADER_TITLE_STYLES = { fontSize: '1.25rem', fontWeight: 600, mb: 1 };
const ITALIC_SUBTEXT_STYLES = { fontStyle: 'italic' };
const HIGHLIGHT_TEXT_STYLES = { fontWeight: 600, color: 'primary.main', mb: 4 };
const LIST_LABEL_STYLES = { fontSize: '1.1rem', fontWeight: 600, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' };
const STAKE_TAGLINE_STYLES = { color: 'text.secondary', borderLeft: '3px solid #E0D8D0', pl: 2, mb: 6 };
const CTA_BUTTON_STYLES = { px: 4, py: 2 };

const StartHere = () => {
  return (
    <Box sx={SECTION_WRAPPER_STYLES}>
      <Container maxWidth="lg">
        <Grid container spacing={8} direction="row-reverse" alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={spheresImg}
              alt="Ordered wooden spheres"
              loading="lazy"
              sx={START_IMAGE_STYLES}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={HEADER_TITLE_STYLES}>
              Start Here: Supervision Fit
            </Typography>

            <Box sx={SECTION_BOX_STYLES}>
              <Typography variant="h3" sx={SUBHEADER_TITLE_STYLES}>
                Step 1 — Brief screening meeting (10–15 minutes)
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                A short fit and logistics check. Not supervision or case consultation.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={ITALIC_SUBTEXT_STYLES}>
                Held via secure video (Zoom) or by phone if requested.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" sx={SUBHEADER_TITLE_STYLES}>
                Step 2 — Supervision Fit Consult (45–60 minutes)
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A structured conversation to confirm fit and establish a clear supervision frame.
              </Typography>
            </Box>

            <Typography variant="body1" sx={HIGHLIGHT_TEXT_STYLES}>
              If fit is confirmed, ongoing supervision can begin right away.
            </Typography>

            <Typography variant="h4" sx={LIST_LABEL_STYLES}>
              You can expect
            </Typography>
            <List sx={{ mb: 4 }}>
              {[
                "Goals + context clarified (setting, population, requirements, constraints)",
                "Conceptualization habits + stuck points (not a performance evaluation)",
                "Documentation focus: what notes must do and how to tighten them",
                "Boundaries + ethics under pressure (role strain, competing obligations, risk)",
                "Proposed cadence + expectations (if fit is confirmed)"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                  <ListItemText primary={<Typography variant="body2" color="text.secondary">&bull; {item}</Typography>} />
                </ListItem>
              ))}
            </List>

            <Typography variant="body2" sx={FIT_SUMMARY_STYLES}>
              Fit Summary (1 page), emailed within 48–72 hours (if requested).
            </Typography>

            <Typography variant="body2" sx={STAKE_TAGLINE_STYLES}>
              Stopping point: This work is not used to create leverage. It is used to create clarity.
            </Typography>

            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="contained"
              size="large"
              sx={CTA_BUTTON_STYLES}
              aria-label="Request a Supervision Fit Consultation"
            >
              Request a Supervision Fit Consult &rarr;
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(StartHere);

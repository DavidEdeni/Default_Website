import { memo } from 'react';
import { Box, Container, Typography, Grid, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const START_HERE_SECTION_STYLES = {
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  py: { xs: 12, md: 18 }
};


const TITLE_STYLES = {
  fontSize: { xs: '2.5rem', md: '3.5rem' },
  mb: 4,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: 0,
    width: 60,
    height: 1,
    bgcolor: 'secondary.light',
    opacity: 0.5
  }
};

const BODY_TEXT_STYLES = {
  fontSize: '1.2rem',
  mb: 4,
  opacity: 0.9,
  lineHeight: 1.8,
  fontWeight: 300
};

const BULLET_POINT_STYLES = {
  mb: 2,
  '& .MuiTypography-root': {
    fontSize: '1.1rem',
    fontWeight: 300,
    opacity: 0.8
  }
};

const CTA_BUTTON_STYLES = {
  mt: 8,
  bgcolor: 'background.default',
  color: 'primary.main',
  '&:hover': {
    bgcolor: '#FFF',
    transform: 'translateY(-2px)'
  },
  fontSize: '0.9rem',
  letterSpacing: '0.15em',
  px: 6,
  py: 2
};

const StartHere = () => {
  return (
    <Box component="section" sx={START_HERE_SECTION_STYLES}>
      <Container maxWidth="lg">
        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Typography variant="h2" sx={TITLE_STYLES}>
              Start Here: Supervision Fit Consult
            </Typography>
            
            <Typography variant="body1" sx={BODY_TEXT_STYLES}>
              Supervision is not a commodity—it is a frame. It works best when the frame is stable and the focus is clear.
            </Typography>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'secondary.light', fontSize: '0.85rem' }}>
              Your current context:
            </Typography>

            <List sx={{ mb: 4 }}>
              {[
                "You’re a clinician in private practice, an agency, or a group setting.",
                "You need a supervisor who values conceptualization support and documentation strength.",
                "You want someone who won’t co-sign decisions without shared reasoning.",
                "You value a steady pace of responsibility over a cycle of urgency."
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={BULLET_POINT_STYLES}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="contained"
              sx={CTA_BUTTON_STYLES}
              aria-label="Request a Supervision Fit Consultation"
            >
              Request a Consultation +
            </Button>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(StartHere);

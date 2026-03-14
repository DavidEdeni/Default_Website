import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PAGE_WRAPPER_STYLES = { py: { xs: 12, md: 18 }, bgcolor: 'background.default' };
const PAGE_TITLE_STYLES = { 
  textAlign: 'center',
  mb: 2, 
  fontSize: { xs: '2.5rem', md: '4rem' },
  position: 'relative'
};
const FIT_COLUMN_TITLE_STYLES = {
  fontSize: '1.25rem',
  fontWeight: 600,
  mb: 3,
  letterSpacing: '0.02em'
};

const FIT_LIST_STYLES = {
  listStyle: 'none',
  p: 0,
  m: 0,
  '& li': {
    position: 'relative',
    pl: 3,
    mb: 1.5,
    lineHeight: 1.6,
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      opacity: 0.5
    }
  }
};

const CONTENT_CONTAINER_STYLES = { maxWidth: '800px', mx: 'auto' };

const SupervisionFitPage = () => {
  return (
    <Box sx={PAGE_WRAPPER_STYLES}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Button 
            component={RouterLink} 
            to="/" 
            sx={{ 
              color: 'text.secondary', 
              fontSize: '0.75rem', 
              letterSpacing: '0.1em',
              '&:hover': { color: 'primary.main', bgcolor: 'transparent', textDecoration: 'underline' }
            }}
          >
            &larr; Back to Home
          </Button>
        </Box>

        <Typography variant="h1" sx={{ ...PAGE_TITLE_STYLES, mb: 12 }}>
          Supervision Fit
        </Typography>

        <Grid container spacing={{ xs: 8, md: 12 }} sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={FIT_COLUMN_TITLE_STYLES}>
              Strong Fit (If you want:)
            </Typography>
            <Box component="ul" sx={FIT_LIST_STYLES}>
              <li>Clinical supervision that is specific, organized, and focused</li>
              <li>Translation of theory to support front-line clinical work</li>
              <li>Focused precision through checking each other's blind spots/clinically</li>
              <li>A direct and reciprocal relationship between theory and practice</li>
              <li>A critically-informed clinical habit and frame-set</li>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={FIT_COLUMN_TITLE_STYLES}>
              Weak Fit (If you want:)
            </Typography>
            <Box component="ul" sx={FIT_LIST_STYLES}>
              <li>Clinical supervision as a way to check-in/vent/socialize</li>
              <li>A supportive "Me Too" or "I agree" environment without questioning</li>
              <li>Situations in which consultation is more of a peer/social connection</li>
              <li>Vague ideas about the practice instance itself</li>
              <li>A policy audit or a supervisor acting from a distance</li>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 15, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 4, fontStyle: 'italic', opacity: 0.8 }}>
            Link to the right opportunity, if you're ready to learn more.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              px: 8, 
              py: 2,
              bgcolor: '#1976d2', // Replicating the blue button from image
              '&:hover': { bgcolor: '#1565c0' }
            }}
            component={RouterLink}
            to="/contact" // Assuming contact for now, or the next logical step
          >
            Next
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box component="section" sx={{ mb: 8 }}>
    <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</Typography>
    {children}
  </Box>
);

export default SupervisionFitPage;

import { memo } from 'react';
import { Box, Container, Typography, Grid, Button, List, ListItem, ListItemText } from '@mui/material';
import { scroller } from 'react-scroll';

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
              
            </Typography>
            
            <Typography variant="body1" sx={BODY_TEXT_STYLES}>
              
            </Typography>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'secondary.light', fontSize: '0.85rem' }}>
              
            </Typography>

            <List sx={{ mb: 4 }}>
              {[
                "",
                "",
                "",
                ""
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={BULLET_POINT_STYLES}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <Button
              onClick={() => {
                scroller.scrollTo('contact', {
                  duration: 500,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                  offset: -70
                });
              }}
              variant="contained"
              sx={CTA_BUTTON_STYLES}
              aria-label=""
            >
              
            </Button>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(StartHere);

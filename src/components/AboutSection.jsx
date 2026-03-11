import { memo } from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Element } from 'react-scroll';
import hourglassImg from '../assets/8a46ffa53352710009d9cc110eff458f-3.jpg';

const ABOUT_IMAGE_STYLES = {
  width: '100%',
  height: 'auto',
  boxShadow: '20px 20px 0px #E0D8D0',
  border: '1px solid #E0D8D0'
};

const SECTION_BOX_STYLES = { py: 12, bgcolor: 'background.paper' };
const HEADER_TITLE_STYLES = { fontSize: '2.5rem', mb: 8 };
const SUBHEADER_TITLE_STYLES = { fontSize: '1.5rem', fontWeight: 600, mb: 3 };
const ITEM_TEXT_STYLES = { py: 0.5 };
const ITALIC_TEXT_STYLES = { mt: 4, fontStyle: 'italic', color: 'text.secondary' };
const LINK_WRAPPER_STYLES = { mt: 4 };
const CTA_LINK_STYLES = {
  fontSize: '1rem',
  fontWeight: 600,
  color: 'primary.main',
  textDecoration: 'underline',
  '&:hover': { textDecoration: 'none' }
};

const AboutSection = () => {
  return (
    <Box component="section" sx={SECTION_BOX_STYLES}>
      <Element name="about" id="about">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={HEADER_TITLE_STYLES}>
            About / Supervision Fit
          </Typography>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={hourglassImg}
                alt="Symmetry symbolized by hourglass"
                loading="lazy"
                sx={ABOUT_IMAGE_STYLES}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={SUBHEADER_TITLE_STYLES}>
                Strong fit if you want
              </Typography>
              <List sx={{ mb: 4 }}>
                {[
                  "Clear supervision frame: goals, expectations, boundaries",
                  "Conceptualization support that holds under pressure",
                  "Documentation strength (clarity, risk thinking, defensibility)",
                  "Ethical judgment when roles and stakes collide",
                  "A steady pace: responsibility over urgency"
                ].map((item, idx) => (
                  <ListItem key={idx} disableGutters sx={ITEM_TEXT_STYLES}>
                    <ListItemText primary={<Typography variant="body1" color="text.secondary">&bull; {item}</Typography>} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h3" gutterBottom sx={SUBHEADER_TITLE_STYLES}>
                May not be a fit if you need
              </Typography>
              <List sx={{ mb: 4 }}>
                {[
                  "Crisis supervision or on-demand availability",
                  "A supervisor who co-signs decisions without reasoning",
                  "Shortcut notes, templates-as-cover, or outcome guarantees",
                  "Supervision used to pressure someone else",
                  "A plan built on urgency rather than ownership"
                ].map((item, idx) => (
                  <ListItem key={idx} disableGutters sx={ITEM_TEXT_STYLES}>
                    <ListItemText primary={<Typography variant="body1" color="text.secondary">&bull; {item}</Typography>} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="body1" sx={ITALIC_TEXT_STYLES}>
                If this isn’t the right fit, I’ll help you identify a better match.
              </Typography>

              <Box sx={LINK_WRAPPER_STYLES}>
                <Link
                  component={RouterLink}
                  to="/supervision-fit"
                  sx={CTA_LINK_STYLES}
                  aria-label="Request a Supervision Fit Consultation"
                >
                  Request a Supervision Fit Consult &rarr;
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Element>
    </Box>
  );
};

export default memo(AboutSection);

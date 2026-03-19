import { memo } from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Element } from 'react-scroll';


const SECTION_BOX_STYLES = { py: { xs: 12, md: 18 }, bgcolor: 'background.default' };
const HEADER_TITLE_STYLES = { mb: 8, position: 'relative' };
const SUBHEADER_TITLE_STYLES = { fontSize: '1.25rem', fontWeight: 600, mb: 3, letterSpacing: '0.05em', textTransform: 'uppercase' };
const ITEM_TEXT_STYLES = { py: 0.75 };
const ITALIC_TEXT_STYLES = { mt: 4, fontStyle: 'italic', color: 'text.secondary', fontWeight: 300 };
const LINK_WRAPPER_STYLES = { mt: 6 };
const CTA_LINK_STYLES = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'primary.main',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  borderBottom: '1px solid',
  borderColor: 'rgba(45, 41, 38, 0.3)',
  pb: 0.5,
  transition: 'all 0.3s ease',
  '&:hover': { borderColor: 'primary.main' }
};

const AboutSection = () => {
  return (
    <Box component="section" sx={SECTION_BOX_STYLES}>
      <Element name="about" id="about">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={HEADER_TITLE_STYLES}>
            About / Supervision Fit
          </Typography>
          <Grid container spacing={8} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
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
                If this isn’t the right fit, we’ll help you identify a better match.
              </Typography>

              <Box sx={LINK_WRAPPER_STYLES}>
                <Link
                  component={RouterLink}
                  to="/supervision-fit"
                  sx={CTA_LINK_STYLES}
                  aria-label="Request a Supervision Fit Consultation"
                >
                  Request a Supervision Fit Consult +
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

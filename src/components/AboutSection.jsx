import { memo } from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Link } from '@mui/material';
import { scroller, Element } from 'react-scroll';


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
            
          </Typography>
          <Grid container spacing={8} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Typography variant="h3" gutterBottom sx={SUBHEADER_TITLE_STYLES}>
                
              </Typography>
              <List sx={{ mb: 4 }}>
                {[
                  "",
                  "",
                  "",
                  "",
                  ""
                ].map((item, idx) => (
                  <ListItem key={idx} disableGutters sx={ITEM_TEXT_STYLES}>
                    <ListItemText primary={<Typography variant="body1" color="text.secondary">{item}</Typography>} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h3" gutterBottom sx={SUBHEADER_TITLE_STYLES}>
                
              </Typography>
              <List sx={{ mb: 4 }}>
                {[
                  "",
                  "",
                  "",
                  "",
                  ""
                ].map((item, idx) => (
                  <ListItem key={idx} disableGutters sx={ITEM_TEXT_STYLES}>
                    <ListItemText primary={<Typography variant="body1" color="text.secondary">{item}</Typography>} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="body1" sx={ITALIC_TEXT_STYLES}>
                
              </Typography>

              <Box sx={LINK_WRAPPER_STYLES}>
                <Link
                  component="button"
                  onClick={() => {
                    scroller.scrollTo('contact', {
                      duration: 500,
                      delay: 0,
                      smooth: 'easeInOutQuart',
                      offset: -70
                    });
                  }}
                  sx={{
                    ...CTA_LINK_STYLES,
                    cursor: 'pointer',
                    bgcolor: 'transparent',
                    p: 0,
                    border: 'none',
                    borderBottom: CTA_LINK_STYLES.borderBottom,
                    display: 'inline-block'
                  }}
                  aria-label=""
                >
                  
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

import { memo } from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';


const HELP_LIST_ITEM_STYLES = { alignItems: 'flex-start', py: 1.5 };

const SECTION_WRAPPER_STYLES = { py: { xs: 12, md: 18 }, bgcolor: 'background.default' };
const DESCRIPTION_TEXT_STYLES = { fontSize: '1.25rem', lineHeight: 1.8, mb: 10, color: 'text.secondary', fontWeight: 300, fontStyle: 'italic' };
const SECTION_TITLE_STYLES = { fontSize: '1.25rem', fontWeight: 600, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em' };
const NOT_FIT_TAGLINE_STYLES = { 
  fontStyle: 'italic', 
  color: 'text.secondary', 
  borderLeft: '1px solid', 
  borderColor: 'primary.main', 
  pl: 3,
  mt: 2
};

const HelpAreas = () => {
  return (
    <Box sx={SECTION_WRAPPER_STYLES}>
      <Container maxWidth="lg">
        <Grid container spacing={8} justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Typography variant="body1" sx={DESCRIPTION_TEXT_STYLES}>
              
            </Typography>

            <Typography variant="h3" gutterBottom sx={SECTION_TITLE_STYLES}>
              
            </Typography>
            <List sx={{ mb: 6 }}>
              {[
                { primary: "", secondary: "" },
                { primary: "", secondary: "" },
                { primary: "", secondary: "" },
                { primary: "", secondary: "" },
                { primary: "", secondary: "" }
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={HELP_LIST_ITEM_STYLES}>
                  <ListItemText
                    primary={<Typography variant="body1" sx={{ fontWeight: 600 }}>{item.primary}</Typography>}
                    secondary={<Typography variant="body2" color="text.secondary">{item.secondary}</Typography>}
                  />
                </ListItem>
              ))}
            </List>

            <Typography variant="h3" gutterBottom sx={SECTION_TITLE_STYLES}>
              
            </Typography>
            <Typography variant="body1" sx={NOT_FIT_TAGLINE_STYLES}>
              
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(HelpAreas);

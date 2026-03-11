import React, { memo } from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import treeImg from '../assets/tree.jpg';

const HELP_IMAGE_STYLES = {
  width: '100%',
  height: 'auto',
  boxShadow: '20px 20px 0px #E0D8D0',
  border: '1px solid #E0D8D0'
};

const HELP_LIST_ITEM_STYLES = { alignItems: 'flex-start', py: 1 };

const HelpAreas = () => {
  return (
    <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={treeImg}
              alt="Grounded tree roots"
              loading="lazy"
              sx={HELP_IMAGE_STYLES}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, mb: 6, color: 'text.secondary' }}>
              This work helps clinicians and clients name what is true, clarify what they are responsible for carrying, and identify sustainable next steps—without coercion, control, or performance pressure.
            </Typography>

            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 3 }}>
              Common fit areas
            </Typography>
            <List sx={{ mb: 6 }}>
              {[
                { primary: "Supervision", secondary: "conceptualization under pressure, documentation strength, boundary clarity, ethical judgment when stakes rise" },
                { primary: "Accountability dilemmas", secondary: "insight present, but follow-through remains costly, disputed, or avoided" },
                { primary: "Rupture patterns", secondary: "apology without follow-through, repeated cycles, chronic strain" },
                { primary: "High-stakes strain", secondary: "burnout, shutdown, anxiety/depression linked to unresolved conflict or responsibility overload" },
                { primary: "Consulting", secondary: "role clarity, decision pressure, and responsibility when a system is strained" }
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={HELP_LIST_ITEM_STYLES}>
                  <ListItemText
                    primary={<Typography variant="body1" sx={{ fontWeight: 600 }}>{item.primary}:</Typography>}
                    secondary={<Typography variant="body2" color="text.secondary">{item.secondary}</Typography>}
                  />
                </ListItem>
              ))}
            </List>

            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
              Not a fit
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary', borderLeft: '3px solid', borderColor: 'error.main', pl: 2 }}>
              Quick leverage, forced compliance, or outcome guarantees.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(HelpAreas);

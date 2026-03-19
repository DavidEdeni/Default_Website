import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PAGE_WRAPPER_STYLES = { py: { xs: 12, md: 18 }, bgcolor: 'background.default' };
const PAGE_TITLE_STYLES = {
  textAlign: 'center',
  mb: 2,
  fontSize: { xs: '2.5rem', md: '4rem' },
  position: 'relative'
};

const TherapyPage = () => {
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

        <Typography variant="h1" sx={PAGE_TITLE_STYLES}>
          Therapy
        </Typography>

        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            Currently under construction. Content coming soon.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TherapyPage;

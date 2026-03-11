import React, { memo } from 'react';
import { Box, Container, Typography, Button, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import heroBg from '../assets/header_wood.jpg';

const HERO_SECTION_STYLES = {
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  pt: { xs: 10, md: 15 },
  pb: { xs: 8, md: 12 },
  backgroundImage: `linear-gradient(rgba(44, 37, 32, 0.85), rgba(44, 37, 32, 0.9)), url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const CONSULT_BUTTON_STYLES = {
  bgcolor: '#FFF',
  color: 'primary.main',
  '&:hover': { bgcolor: '#F0F0F0' },
  fontSize: '1.1rem',
  py: 2.5,
  px: 5,
  fontWeight: 600
};

const INFO_BOX_STYLES = { 
  mb: 4, 
  p: 2, 
  bgcolor: 'rgba(255,255,255,0.05)', 
  display: 'inline-block' 
};

const Hero = () => {
  return (
    <Box sx={HERO_SECTION_STYLES}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 4 }}>
          <Typography variant="h5" color="secondary.light" sx={{ letterSpacing: '0.1em', fontWeight: 600 }}>
            Supervision · Consulting · Therapy
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: '#FFF', mb: 0 }}>
            Integrated Relational Dynamics, PLLC
          </Typography>
          <Typography variant="h4" sx={{ color: 'secondary.light', fontWeight: 400, fontSize: '1.25rem' }}>
            Kotia K. Whitaker, LMFT-S
          </Typography>
          <Typography variant="h4" sx={{ fontStyle: 'italic', color: '#FFF', fontWeight: 500, borderLeft: '3px solid #6D5D50', pl: 2 }}>
            Clarity without coercion.
          </Typography>
        </Stack>

        <Stack spacing={2} sx={{ mb: 4, maxWidth: '800px' }}>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            Supervision grounded in ethical judgment and responsible action—without pressure toward predetermined outcomes.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            Best fit when the next step is clear but seems challenging—because the cost is real, the stakes are high, or the system is strained.
          </Typography>
        </Stack>

        <Box sx={INFO_BOX_STYLES}>
          <Typography variant="body2" sx={{ color: 'secondary.light', fontWeight: 500 }}>
            Telehealth (Texas) &middot; Private pay &middot; Superbills available (reimbursement not guaranteed)
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Button
            component={RouterLink}
            to="/supervision-fit"
            variant="contained"
            size="large"
            sx={CONSULT_BUTTON_STYLES}
          >
            Request a Supervision Fit Consult &rarr;
          </Button>
        </Box>

        <Stack spacing={1}>
          <Typography variant="body2" sx={{ color: '#FFF', opacity: 0.9 }}>
            Now accepting Supervision and Consulting (telehealth).
          </Typography>
          <Typography variant="body2" sx={{ color: 'secondary.light' }}>
            Therapy begins October 2026 (telehealth).
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Email inquiries: <Link href="mailto:integrated.relational.dynamics@gmail.com" sx={{ color: '#FFF', textDecoration: 'underline' }}>integrated.relational.dynamics@gmail.com</Link>
          </Typography>
        </Stack>

        <Box sx={{ mt: 6, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <LinkRouter to="/therapy" label="Explore Therapy &rarr;" />
          <LinkRouter to="/consulting" label="Explore Consulting &rarr;" />
        </Box>
      </Container>
    </Box>
  );
};

const LinkRouter = memo(({ to, label }) => (
  <Typography
    component={RouterLink}
    to={to}
    sx={{
      color: 'secondary.light',
      textDecoration: 'none',
      fontSize: '0.85rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      '&:hover': { color: '#FFF', textDecoration: 'underline' }
    }}
  >
    {label}
  </Typography>
));

LinkRouter.displayName = 'LinkRouter';

export default memo(Hero);

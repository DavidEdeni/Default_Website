import { Box, Container, Typography, Grid, Link, Divider, Stack } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target) => {
    if (location.pathname !== '/') {
      navigate('/?scroll=' + target);
    } else {
      scroller.scrollTo(target, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70
      });
    }
  };

  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        bgcolor: '#05070A',
        pt: 10,
        pb: 8,
        borderTop: '1px solid rgba(59, 130, 246, 0.1)',
        color: '#F8FAFC'
      }}
    >

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600, color: '#F8FAFC' }}>
              Contact
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'rgba(248, 250, 252, 0.7)', maxWidth: '90%' }}>

              This work is grounded in clear limits that protect supervision and sound clinical judgment. Communication boundaries are defined. Crisis coverage is not provided. Therapy or supervision is not used as leverage in relational conflict.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, mt: 2, color: '#F8FAFC' }}>
              Telehealth (Texas)
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(248, 250, 252, 0.7)' }}>
              Private pay &middot; Superbills available (reimbursement not guaranteed)
            </Typography>

          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)', p: 4, border: '1px solid rgba(215, 204, 200, 0.15)', backdropFilter: 'blur(4px)' }}>

              <Stack spacing={2}>
                <Typography variant="body1">
                  <strong>Supervision and Consulting:</strong> accepting now.
                </Typography>
                <Typography variant="body1">
                  <strong>Therapy:</strong> begins October 2026.
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  Email inquiries only (for now)
                </Typography>
                <Typography variant="body2" color="error.main" sx={{ fontWeight: 600 }}>
                  Not for emergencies (no crisis services)
                </Typography>
                <Link
                  href="mailto:integrated.relational.dynamics@gmail.com"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#F8FAFC',
                    textDecoration: 'underline',
                    '&:hover': { color: 'primary.light' }
                  }}
                >

                  integrated.relational.dynamics@gmail.com
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Stack direction="row" spacing={3}>

            <Link
              component="button"
              onClick={() => handleNavClick('contact')}
              sx={{
                fontSize: '0.85rem',
                color: 'text.secondary',
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' }
              }}
            >
              Contact
            </Link>
          </Stack>

          <Typography variant="body2" sx={{ fontSize: '0.8rem', color: 'rgba(242, 239, 233, 0.5)' }}>
            &copy; {new Date().getFullYear()} Integrated Relational Dynamics, PLLC. All rights reserved.
          </Typography>

        </Box>
      </Container>
    </Box>
  );
};



export default Footer;

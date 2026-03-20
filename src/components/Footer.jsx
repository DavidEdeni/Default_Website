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
              
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'rgba(248, 250, 252, 0.7)', maxWidth: '90%' }}>
              
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, mt: 2, color: '#F8FAFC' }}>
              
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(248, 250, 252, 0.7)' }}>
              
            </Typography>

          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)', p: 4, border: '1px solid rgba(215, 204, 200, 0.15)', backdropFilter: 'blur(4px)' }}>

              <Stack spacing={2}>
                <Typography variant="body1">
                  <strong></strong>
                </Typography>
                <Typography variant="body1">
                  <strong></strong>
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  
                </Typography>
                <Typography variant="body2" color="error.main" sx={{ fontWeight: 600 }}>
                  
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

            </Link>
          </Stack>

          <Typography variant="body2" sx={{ fontSize: '0.8rem', color: 'rgba(242, 239, 233, 0.5)' }}>
            {new Date().getFullYear()}
          </Typography>

        </Box>
      </Container>
    </Box>
  );
};



export default Footer;

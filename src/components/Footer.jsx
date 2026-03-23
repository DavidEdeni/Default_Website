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
        bgcolor: 'transparent',
        pt: 12,
        pb: 8,
        borderTop: '1px solid rgba(15, 23, 42, 0.05)',
        color: 'text.primary',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.25rem',
                mb: 3,
                background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AetherFlow
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, maxWidth: '280px', lineHeight: 1.8 }}>
              Modernizing the backbone of the digital world with fluid, autonomous, and secure infrastructure solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* Status Indicator */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(34, 197, 94, 0.1)', px: 2, py: 0.5, borderRadius: '20px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22C55E' }} />
                <Typography variant="caption" sx={{ color: '#22C55E', fontWeight: 600 }}>System Operational</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 3 }}>
              Platform
            </Typography>
            <Stack spacing={2}>
              {['Features', 'Solutions', 'Infrastructure', 'Security'].map((item) => (
                <Link
                  key={item}
                  component="button"
                  onClick={() => handleNavClick(item.toLowerCase())}
                  sx={{ color: 'text.secondary', textAlign: 'left', fontSize: '0.875rem', textDecoration: 'none', '&:hover': { color: '#06B6D4' } }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 3 }}>
              Governance
            </Typography>
            <Stack spacing={2}>
              {['Privacy Policy', 'Terms of Service', 'GDPR', 'Compliance'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{ color: 'text.secondary', fontSize: '0.875rem', textDecoration: 'none', '&:hover': { color: '#06B6D4' } }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 3 }}>
              Connect
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Ready to deploy the future? Contact our systems architects today.
            </Typography>
            <Link
              href="mailto:contact@aetherflow.tech"
              sx={{
                display: 'inline-block',
                bgcolor: 'rgba(6, 182, 212, 0.1)',
                color: '#06B6D4',
                px: 3,
                py: 1.5,
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#06B6D4',
                  color: '#FFF'
                }
              }}
            >
              contact@aetherflow.tech
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(15, 23, 42, 0.08)', mb: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.5, fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} AetherFlow Technologies. All protocols reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {['Status', 'Documentation', 'Support'].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{ color: 'text.secondary', fontSize: '0.75rem', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};



export default Footer;

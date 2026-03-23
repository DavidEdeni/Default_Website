import { memo } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Element } from 'react-scroll';


const SECTION_BOX_STYLES = { py: { xs: 15, md: 20 }, bgcolor: 'transparent' };
const METRIC_CARD_STYLES = {
  p: 4,
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '20px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
};
const NUMBER_STYLES = {
  fontSize: '3.5rem',
  fontWeight: 800,
  background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 1
};

const AboutSection = () => {
  return (
    <Box component="section" sx={SECTION_BOX_STYLES}>
      <Element name="infrastructure" id="infrastructure">
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" sx={{ mb: 2, color: 'primary.main' }}>
            Infrastructure
          </Typography>
          <Typography variant="h2" align="center" sx={{ mb: 10 }}>
            Massive Scale. Atomic Precision.
          </Typography>
          <Grid container spacing={4}>
            {[
              { label: "Availability", value: "99.999%", desc: "Global uptime across 64 edge regions." },
              { label: "Latency", value: "< 1ms", desc: "For distributed Aether Cloud operations." },
              { label: "Throughput", value: "10M+", desc: "Operations per second across the mesh." },
              { label: "Egress Cost", value: "$0.00", desc: "For all internal Aether-to-Aether traffic." }
            ].map((metric, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Box sx={METRIC_CARD_STYLES}>
                  <Typography variant="h3" sx={NUMBER_STYLES}>
                    {metric.value}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1, color: 'text.primary', fontSize: '0.9rem' }}>
                    {metric.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.7 }}>
                    {metric.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Element>
    </Box>
  );
};

export default memo(AboutSection);

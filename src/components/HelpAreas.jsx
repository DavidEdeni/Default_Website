import { memo } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const SECTION_WRAPPER_STYLES = { 
  py: { xs: 15, md: 20 }, 
  bgcolor: '#05070A',
  position: 'relative'
};

const FEATURE_CARD_STYLES = {
  p: 4,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  transition: 'all 0.3s ease',
  background: 'rgba(15, 23, 42, 0.4)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.03)',
  '&:hover': {
    background: 'rgba(15, 23, 42, 0.6)',
    borderColor: 'rgba(6, 182, 212, 0.2)',
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
  }
};

const ICON_STYLES = {
  width: 48,
  height: 48,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(6, 182, 212, 0.1)',
  color: '#06B6D4',
  mb: 2
};

const HelpAreas = () => {
  return (
    <Box component="section" id="features" sx={SECTION_WRAPPER_STYLES}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>
          Capabilities
        </Typography>
        <Typography variant="h2" align="center" sx={{ mb: 10 }}>
          Engineered for the<br />Edge Case
        </Typography>

        <Grid container spacing={4}>
          {[
            { 
              title: "Distributed Ledger", 
              desc: "Atomic-level integrity for every transaction and operation.",
              icon: "01"
            },
            { 
              title: "Autonomous Scaling", 
              desc: "Zero-touch resource orchestration that adapts to load in real-time.",
              icon: "02"
            },
            { 
              title: "End-to-End Encryption", 
              desc: "Post-quantum security protocols built into the core protocol.",
              icon: "03"
            },
            { 
              title: "Edge Intelligence", 
              desc: "Localized AI processing for sub-millisecond decision making.",
              icon: "04"
            },
            { 
              title: "Fluid Interoperability", 
              desc: "Connect any stack, any cloud, any protocol with zero friction.",
              icon: "05"
            },
            { 
              title: "Predictive Analytics", 
              desc: "Anticipate system needs before they manifest.",
              icon: "06"
            }
          ].map((feature, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box sx={FEATURE_CARD_STYLES}>
                <Box sx={ICON_STYLES}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: '#06B6D4' }}>
                    {feature.icon}
                  </Typography>
                </Box>
                <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(HelpAreas);

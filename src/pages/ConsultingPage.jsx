import { Box, Container, Typography, Divider, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import woodLogoImg from '../assets/8a46ffa53352710009d9cc110eff458f-0.jpg';

const PAGE_WRAPPER_STYLES = { py: { xs: 12, md: 18 }, bgcolor: 'background.default' };
const PAGE_TITLE_STYLES = { 
  textAlign: 'center',
  mb: 2, 
  fontSize: { xs: '2.5rem', md: '4rem' },
  position: 'relative'
};
const STATUS_SUBTITLE_STYLES = { 
  textAlign: 'center',
  mb: 10, 
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: '0.85rem',
  color: 'secondary.main',
  mt: 4
};
const CONTENT_CONTAINER_STYLES = { maxWidth: '800px', mx: 'auto' };

const ConsultingPage = () => {
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
          Consulting
        </Typography>
        <Typography variant="h5" sx={STATUS_SUBTITLE_STYLES}>
          Now accepting inquiries
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
          <Box
            component="img"
            src={woodLogoImg}
            alt="Integrated Relational Dynamics Logo"
            sx={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '2px', opacity: 0.9 }}
          />
        </Box>

        <Box sx={{ mt: 10 }}>
          <Box sx={CONTENT_CONTAINER_STYLES}>
            <Section title="Who this is for">
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.9, fontWeight: 300, mb: 4 }}>
                Consulting is for people who need clarity before taking action—especially when decisions are high-stakes, costly, or contested. This work helps leaders, clinicians, and organizations identify what is true.
              </Typography>
            </Section>

            <Section title="Common situations">
              <BulletList items={[
                "Role confusion or unclear authority (who decides, who owns what)",
                "Decision bottlenecks where every option involves loss or tradeoffs",
                "Chronic conflict patterns within a team or system",
                "Accountability breakdowns",
                "Transitions under strain"
              ]} />
            </Section>

            <Divider sx={{ my: 10, opacity: 0.1 }} />

            <Box sx={{ textAlign: 'center' }}>
              <Button
                component={RouterLink}
                to="/supervision-fit"
                variant="contained"
                size="large"
                sx={{ px: 6, py: 2 }}
                aria-label="Inquire about consulting services via email"
              >
                Inquire via Email +
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box component="section" sx={{ mb: 8 }}>
    <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</Typography>
    {children}
  </Box>
);

const BulletList = ({ items }) => (
  <List sx={{ mb: 0 }}>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1.5 }}>
        <ListItemText primary={<Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item}</Typography>} />
      </ListItem>
    ))}
  </List>
);

export default ConsultingPage;

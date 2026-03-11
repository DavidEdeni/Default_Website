import { Box, Container, Typography, Stack, Paper, Divider, Button, List, ListItem, ListItemText, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const PAGE_WRAPPER_STYLES = { py: { xs: 12, md: 18 }, bgcolor: 'background.default' };
const PAGE_TITLE_STYLES = { 
  textAlign: 'center',
  mb: 2, 
  fontSize: { xs: '2.5rem', md: '4rem' },
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 80,
    height: 1,
    bgcolor: 'primary.main',
    opacity: 0.2
  }
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

const SupervisionPage = () => {
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
          Supervision
        </Typography>
        <Typography variant="h5" sx={STATUS_SUBTITLE_STYLES}>
          Now accepting clients
        </Typography>

        <Box sx={{ mt: 10 }}>
          <Box sx={CONTENT_CONTAINER_STYLES}>
            <Section title="Focus">
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.9, fontWeight: 300, mb: 4 }}>
                Supervision is designed to foster ethical judgment under pressure. The work emphasizes conceptualization, thorough documentation, clear boundaries, and responsible decision-making when costs rise—without coercion, shortcuts, or outcome guarantees.
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', borderLeft: '1px solid', borderColor: 'primary.main', pl: 3, color: 'text.secondary' }}>
                Framework: Bowenian, Structural, Contextual, and Attachment frameworks, with integrative CBT as needed.
              </Typography>
            </Section>

            <Section title="Common reasons clinicians seek supervision">
              <BulletList items={[
                "Clearer case framing and systemic hypotheses—not just technique lists",
                "Notes that make reasoning visible and defensible",
                "Boundaries and ethics when role strain and competing obligations collide",
                "A steady supervision frame with clear expectations and follow-through",
                "No coercion, shortcuts, or co-signing without reasoning"
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
                aria-label="Request a Supervision Fit Consultation"
              >
                Request a Consultation &rarr;
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

const Section = ({ title, children }) => (
  <Box component="section" sx={{ mb: 8 }}>
    <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>{title}</Typography>
    {children}
  </Box>
);

const BulletList = ({ items }) => (
  <List sx={{ mb: 0 }}>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
        <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, fontWeight: 700 }} aria-hidden="true">&mdash;</Box> {item}</Typography>} />
      </ListItem>
    ))}
  </List>
);

const PageLink = ({ href, children, sx }) => (
  <Box component="a" href={href} sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600, ...sx }}>
    {children}
  </Box>
);

export default SupervisionPage;

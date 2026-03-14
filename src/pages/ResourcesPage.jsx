import { Box, Container, Typography, Stack, Divider, Link, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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

const ResourcesPage = () => {
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
          Resources
        </Typography>
        <Typography variant="h5" sx={STATUS_SUBTITLE_STYLES}>
          Clarity without coercion
        </Typography>

        <Box sx={{ mt: 10 }}>
          <Box sx={CONTENT_CONTAINER_STYLES}>
            <Section title="Foundations">
              <ResourceLink label="Relational Accountability — Public Definition" />
              <ResourceLink label="Accountability Conditions & Collapse Mapping" shade />
            </Section>

            <Section title="Conceptual Distinctions">
              <ResourceLink label="Accountability Isn’t the Same As… (Three Tables)" />
            </Section>

            <Section title="Clarity Guides">
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, fontStyle: 'italic' }}>
                Brief reflection guides for first-person clarity.
              </Typography>
              <Stack spacing={2}>
                {[
                  "Accountability Map",
                  "Cost Clarity Inventory",
                  "Exposure Location Check",
                  "Repair-Labor Audit",
                  "Refusal Viability Check"
                ].map((item, idx) => (
                  <ResourceLink key={idx} label={item} shade={idx % 2 !== 0} />
                ))}
              </Stack>
            </Section>

            <Divider sx={{ my: 10, opacity: 0.1 }} />

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Additional resources available upon request for professional dialogue.
              </Typography>
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

const ResourceLink = ({ label, shade = false }) => (
  <Box sx={{ 
    py: 2.5, 
    px: shade ? 3 : 0, 
    bgcolor: shade ? 'rgba(45, 41, 38, 0.03)' : 'transparent', 
    borderBottom: '1px solid rgba(45, 41, 38, 0.1)', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  }}>
    <Typography variant="body1" sx={{ fontWeight: 400 }}>{label}</Typography>
    <Link 
      href="#" 
      sx={{ 
        fontSize: '0.75rem', 
        fontWeight: 600, 
        textTransform: 'uppercase', 
        letterSpacing: '0.1em',
        textDecoration: 'none',
        color: 'primary.main',
        '&:hover': { textDecoration: 'underline' }
      }}
    >
      View PDF +
    </Link>
  </Box>
);

export default ResourcesPage;

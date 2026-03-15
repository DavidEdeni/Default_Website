import { Box, Container, Typography, Divider, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import spheresImg from '../assets/8a46ffa53352710009d9cc110eff458f-4.jpg';


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
const INTRO_TEXT_STYLES = { fontSize: '1.25rem', lineHeight: 1.9, color: 'text.primary', mb: 6, fontWeight: 300 };

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
        <Typography variant="h5" sx={STATUS_SUBTITLE_STYLES}>
          Now accepting inquiries
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
          <Box
            component="img"
            src={spheresImg}
            alt="Ordered wooden spheres"
            sx={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '2px', opacity: 0.9 }}
          />
        </Box>

        <Box sx={CONTENT_CONTAINER_CONTAINER_STYLES}>
          <Box sx={CONTENT_CONTAINER_STYLES}>
            <Typography variant="body1" sx={INTRO_TEXT_STYLES}>
              Therapy offers stable, organized support for people who feel stuck—emotionally, relationally, or at a decision point. Many reach out when anxiety, burnout, low mood, conflict cycles, or shutdown keep repeating and nothing they’ve tried works.
            </Typography>

            <Section title="Common reasons people reach out">
              <BulletList items={[
                "Repeated cycles of conflict, shutdowns, or repairs that don’t last.",
                "Decision points where each option has a real cost",
                "Boundary confusion, role strain, or overload of responsibilities",
                "Anxiety, depression, burnout, or overwhelm caused by unresolved conflict.",
                "Family-of-origin patterns that influence current dynamics"
              ]} />
            </Section>

            <Section title="Framework">
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Grounded in Bowenian, Structural, Contextual, and Attachment frameworks, with integrative CBT as needed. Paced for clarity and ethical safety.
              </Typography>
            </Section>

            <Divider sx={{ my: 10, opacity: 0.1 }} />

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ mb: 4, fontSize: '1.5rem' }}>Interest Inquiry</Typography>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 4 }}>
                If you would like to be contacted when openings begin, please inquire via email.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="mailto:integrated.relational.dynamics@gmail.com?subject=Therapy Interest Inquiry (Oct 2026)"
                sx={{ px: 6, py: 2 }}
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
    {title && <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</Typography>}
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

const CONTENT_CONTAINER_CONTAINER_STYLES = { mt: 10 };

export default TherapyPage;

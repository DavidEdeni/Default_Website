import { Box, Container, Typography, Stack, Paper, Divider, Button, List, ListItem, ListItemText, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const PAGE_WRAPPER_STYLES = { py: 8, bgcolor: 'background.default' };
const PAGE_TITLE_STYLES = { mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } };
const STATUS_SUBTITLE_STYLES = { mb: 6, fontWeight: 600 };
const CONTENT_PAPER_STYLES = { p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' };
const INTRO_TEXT_STYLES = { fontSize: '1.15rem', lineHeight: 1.8 };
const FRAMEWORK_BOX_STYLES = { fontStyle: 'italic', p: 2, bgcolor: '#F9F7F5', borderLeft: '3px solid #6D5D50' };
const BOLD_TEXT_STYLES = { fontWeight: 600 };
const ERROR_TEXT_STYLES = { mt: 3, fontStyle: 'italic' };
const CTA_BUTTON_STYLES = { py: 2.5, px: 8 };
const FOOTER_EMAIL_STYLES = { mt: 3 };

const SupervisionPage = () => {
  return (
    <Box sx={PAGE_WRAPPER_STYLES}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={PAGE_TITLE_STYLES}>
          Supervision
        </Typography>
        <Typography variant="h5" color="primary.main" gutterBottom sx={STATUS_SUBTITLE_STYLES}>
          Now accepting supervision clients (telehealth).
        </Typography>

        <Paper elevation={0} sx={CONTENT_PAPER_STYLES}>
          
          <Section title="Focus">
            <Typography variant="body1" paragraph color="text.secondary" sx={INTRO_TEXT_STYLES}>
              Supervision at Integrated Relational Dynamics is designed to foster ethical judgment under pressure. The work emphasizes conceptualization, thorough documentation, clear boundaries, and responsible decision-making when costs rise—without coercion, shortcuts, or outcome guarantees.
            </Typography>
            <Typography variant="body2" sx={FRAMEWORK_BOX_STYLES}>
              Framework: Bowenian, Structural, Contextual, and Attachment frameworks, with integrative CBT as needed.
            </Typography>
          </Section>

          <Section title="Who this is for">
            <Typography variant="body1" paragraph color="text.secondary">
              This supervision is a strong fit for clinicians who want their judgment to hold under pressure. Many supervisees reach out when they’re competent in the room but feel less confident about conceptualization, documentation, and ethical decisions when cases get complex or stakes rise.
            </Typography>
            <Typography variant="body1" gutterBottom sx={BOLD_TEXT_STYLES}>
              Common reasons clinicians seek supervision here:
            </Typography>
            <BulletList items={[
              "Clearer case framing and systemic hypotheses—not just technique lists",
              "Notes that make reasoning visible and defensible",
              "Boundaries and ethics when role strain and competing obligations collide",
              "A steady supervision frame with clear expectations and follow-through",
              "No coercion, shortcuts, or co-signing without reasoning"
            ]} />
             <Typography variant="body2" color="error.main" sx={ERROR_TEXT_STYLES}>
              Not a fit if you need crisis/on-demand coverage, outcome guarantees, or supervision used to pressure someone else.
            </Typography>
          </Section>

          <Section title="Core emphasis">
             <BulletList items={[
              "Conceptualization that holds under strain",
              "Documentation that makes reasoning visible and defensible",
              "Boundaries & ethics: role clarity, scope, competing obligations",
              "Responsibility under cost: steady judgment without leverage or urgency-driven fixes"
            ]} />
          </Section>

          <Section title="How supervision works">
            <Typography variant="body1" paragraph color="text.secondary">
              Weekly or biweekly (depending on requirements/workload). Meetings are anchored in real-world case material and include:
            </Typography>
            <BulletList items={[
              "Case framing + conceptualization",
              "Intervention planning + boundary clarity",
              "Documentation pass (what the note must do)",
              "Clear next-step plan"
            ]} />
          </Section>

          <Section title="What supervisees leave with">
            <BulletList items={[
              "Clearer case frames and systemic hypotheses",
              "Stronger notes with visible rationale",
              "Steadier boundaries when pressure rises"
            ]} />
          </Section>

          <Section title="Documentation & defensibility">
            <Typography variant="body1" color="text.secondary">
              Notes should make your reasoning visible—not just record events. Templates can support structure, but they can’t replace judgment.
            </Typography>
          </Section>

          <Section title="Fit">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                 <Typography variant="h6" color="primary.main" gutterBottom>Strong fit if</Typography>
                 <Typography variant="body2" color="text.secondary">You want a clear frame, steady expectations, and support for conceptualization + documentation under pressure.</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Typography variant="h6" color="error.main" gutterBottom>May not be a fit if</Typography>
                 <Typography variant="body2" color="text.secondary">You need crisis/on-demand supervision, co-signing without reasoning, shortcut notes, or outcome guarantees.</Typography>
              </Grid>
            </Grid>
          </Section>

          <Divider sx={{ my: 8 }} />

          <Stack direction="row" justifyContent="center">
            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="contained"
              size="large"
              sx={CTA_BUTTON_STYLES}
              aria-label="Request a Supervision Fit Consultation"
            >
              Request a Supervision Fit Consult &rarr;
            </Button>
          </Stack>
           <Typography variant="body2" align="center" sx={FOOTER_EMAIL_STYLES}>
              Email: <PageLink href="mailto:integrated.relational.dynamics@gmail.com" sx={{ textDecoration: 'underline' }} aria-label="Send email to integrated.relational.dynamics@gmail.com">integrated.relational.dynamics@gmail.com</PageLink>
            </Typography>

        </Paper>
      </Container>
    </Box>
  );
};

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

import { Box, Container, Typography, Stack, Divider, List, ListItem, ListItemText, TextField, Button, Grid, Paper } from '@mui/material';


const PAGE_WRAPPER_STYLES = { py: 8, bgcolor: 'background.default' };
const HEADER_SUBTITLE_STYLES = { textTransform: 'uppercase', letterSpacing: '0.12em', mb: 1, fontWeight: 600 };
const PAGE_TITLE_STYLES = { mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' } };
const CONTENT_PAPER_STYLES = { p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' };
const SECTION_HEADER_STYLES = { fontSize: '1.75rem', fontWeight: 600 };
const INTRO_TEXT_STYLES = { fontSize: '1.15rem' };
const NOT_FIT_BOX_STYLES = { mb: 8, p: 4, bgcolor: '#FFF9F9', border: '1px solid #FFE0E0' };
const NOT_FIT_TITLE_STYLES = { mb: 3, color: '#B71C1C', fontWeight: 600 };
const FORM_TITLE_STYLES = { fontSize: '2.25rem', mb: 3 };
const FORM_SUBTITLE_STYLES = { mb: 6, color: 'text.secondary' };
const CTA_BUTTON_STYLES = { py: 2, px: 8 };
const FOOTER_ITALIC_STYLES = { mt: 4, color: 'text.secondary', fontStyle: 'italic' };
const FOOTER_EMAIL_LINK_STYLES = { mt: 2 };

const SupervisionFitPage = () => {
  return (
    <Box sx={PAGE_WRAPPER_STYLES}>
      <Container maxWidth="md">
        <Typography variant="body2" color="secondary.light" sx={HEADER_SUBTITLE_STYLES}>
          Integrated Relational Dynamics, PLLC &middot; Kotia K. Whitaker, LMFT-S
        </Typography>
        <Typography variant="h1" gutterBottom sx={PAGE_TITLE_STYLES}>
          Supervision Fit Consult
        </Typography>

        <Paper elevation={0} sx={CONTENT_PAPER_STYLES}>
          
          <Section title="What this is" id="what-this-is">
             <Typography variant="body1" color="text.secondary" sx={INTRO_TEXT_STYLES}>
              A Supervision Fit Consult is a structured fit-and-frame-setting conversation to confirm alignment and establish the supervision frame. It is not supervision and does not include case consultation.
            </Typography>
          </Section>

          <Section title="What we’ll cover" id="what-we-will-cover">
            <BulletList items={[
              "Goals, setting, population, and requirements",
              "Conceptualization habits and current stuck points (not a performance evaluation)",
              "Documentation strength: what notes must do and where they can be tightened",
              "Boundaries and ethics under pressure (role strain, competing obligations, risk)",
              "Proposed cadence and expectations if fit is confirmed"
            ]} />
          </Section>

          <Section title="What to bring" id="what-to-bring">
             <BulletList items={[
              "Setting and population (context, role, constraints)",
              "License status and any supervision requirements (if applicable)",
              "1–2 brief examples of cases/situations to strengthen conceptualization for (no identifying details)",
              "Documentation questions (brief)",
              "Boundary/ethics scenarios (brief)"
            ]} />
          </Section>

          <Section title="Logistics" id="logistics">
             <BulletList items={[
              "Duration: 45–60 minutes (telehealth)",
              "Private pay: Fee provided by email",
              "Email inquiries only",
              "Cancellation/reschedule: 24 hours’ notice requested to avoid a late-cancel fee"
            ]} />
          </Section>

          <Box sx={NOT_FIT_BOX_STYLES}>
            <Typography variant="h5" sx={NOT_FIT_TITLE_STYLES}>Stopping points / not a fit</Typography>
            <BulletList color="#B71C1C" items={[
              "No crisis coverage or on-demand availability",
              "No outcome guarantees",
              "Supervision is not used as leverage",
              "If this isn’t the right fit, I’ll help you identify a better match"
            ]} />
          </Box>

          <Divider sx={{ my: 8 }} />

          <Box id="inquiry-form">
            <Typography variant="h2" align="center" gutterBottom sx={FORM_TITLE_STYLES}>
              Request a Consult
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={FORM_SUBTITLE_STYLES}>
              To explore a Supervision Fit Consult, please provide the following details. This structure helps minimize back-and-forth and respects your clinical time.
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Current Role (Associate / Intern / Licensed)" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="What you're seeking from supervision (short)" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={2} label="Documentation or boundary focus (optional, short)" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Availability (days/times)" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                 <Stack direction="row" justifyContent="center">
                   <Button 
                    variant="contained" 
                    size="large" 
                    sx={CTA_BUTTON_STYLES}
                    href="mailto:integrated.relational.dynamics@gmail.com?subject=Supervision Fit Consult Inquiry"
                    aria-label="Submit your supervision fit consult inquiry via email"
                   >
                     Submit Inquiry via Email &rarr;
                   </Button>
                 </Stack>
              </Grid>
            </Grid>

            <Typography variant="body2" align="center" sx={FOOTER_ITALIC_STYLES}>
              Communication boundary: Please do not include PHI or identifying client details in email or the form. Email is not monitored for emergencies.
            </Typography>
            <Typography variant="body2" align="center" sx={FOOTER_EMAIL_LINK_STYLES}>
              Email: <PageLink href="mailto:integrated.relational.dynamics@gmail.com" sx={{ textDecoration: 'underline' }} aria-label="Send email to integrated.relational.dynamics@gmail.com">integrated.relational.dynamics@gmail.com</PageLink>
            </Typography>
          </Box>

        </Paper>
      </Container>
    </Box>
  );
};

const Section = ({ title, children, id }) => (
  <Box id={id} component="section" sx={{ mb: 8 }}>
    <Typography variant="h2" gutterBottom sx={SECTION_HEADER_STYLES}>{title}</Typography>
    {children}
  </Box>
);

const BulletList = ({ items, color = 'text.secondary' }) => (
  <List sx={{ mb: 0 }}>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
        <ListItemText primary={<Typography variant="body1" sx={{ color }}><Box component="span" sx={{ mr: 2, fontWeight: 700 }} aria-hidden="true">&mdash;</Box> {item}</Typography>} />
      </ListItem>
    ))}
  </List>
);

const PageLink = ({ href, children, sx }) => (
  <Box component="a" href={href} sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600, ...sx }}>
    {children}
  </Box>
);

export default SupervisionFitPage;

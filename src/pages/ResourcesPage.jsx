import { Box, Container, Typography, Stack, Paper, Divider, List, ListItem, ListItemText, Link } from '@mui/material';


const PAGE_WRAPPER_STYLES = { py: 8, bgcolor: 'background.default' };
const PAGE_TITLE_STYLES = { mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } };
const STATUS_SUBTITLE_STYLES = { mb: 6, fontWeight: 600 };
const CONTENT_PAPER_STYLES = { p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' };
const SECTION_HEADER_STYLES = { fontSize: '1.75rem', fontWeight: 600 };
const BOUNDARY_BOX_STYLES = { p: 2, bgcolor: '#F9F7F5', borderLeft: '3px solid #6D5D50', mb: 4 };
const ITALIC_SUBTEXT_STYLES = { mt: 1, fontStyle: 'italic' };
const FOOTER_ITALIC_STYLES = { fontStyle: 'italic' };
const RESOURCE_SUBHEADER_STYLES = { fontSize: '1.25rem', fontWeight: 600, mb: 3, borderBottom: '1px solid #E0D8D0', pb: 1 };
const RESOURCE_LINK_ITEM_STYLES = (shade) => ({ 
  py: 2, 
  px: shade ? 2 : 0, 
  bgcolor: shade ? '#F9F7F5' : 'transparent', 
  borderBottom: '1px solid #F0F0F0', 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center' 
});
const REQUEST_BOX_STYLES = { p: 3, border: '1px solid #F0F0F0', bgcolor: '#FCFAFA' };
const CLARITY_GUIDES_SUBTEXT_STYLES = { mb: 2 };
const CLARITY_GUIDE_LIST_ITEM_STYLES = { py: 0.5 };
const CLARITY_GUIDE_ITEM_TEXT_STYLES = { fontWeight: 600 };
const CLARITY_GUIDE_LINK_STYLES = { fontWeight: 400, fontSize: '0.85rem' };
const INSTITUTIONAL_ACCOUNTABILITY_SUBTEXT_STYLES = { mb: 3 };
const WORKING_MANUSCRIPTS_LIST_STYLES = { fontStyle: 'italic' };
const WORKING_MANUSCRIPT_ITEM_TEXT_STYLES = { color: 'text.secondary' };
const WORKING_MANUSCRIPTS_FOOTER_STYLES = { mt: 2, color: 'text.secondary' };
const DIVIDER_STYLES = { my: 8 };

const ResourcesPage = () => {
  return (
    <Box sx={PAGE_WRAPPER_STYLES}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={PAGE_TITLE_STYLES}>
          Resources
        </Typography>
        <Typography variant="h5" color="secondary.light" gutterBottom sx={STATUS_SUBTITLE_STYLES}>
          Clarity without coercion.
        </Typography>

        <Paper elevation={0} sx={CONTENT_PAPER_STYLES}>
          
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={SECTION_HEADER_STYLES}>
              IRD Framework Library
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Selected Integrated Relational Dynamics (IRD) resources for reflection and professional dialogue. IRD offers a conceptual lens for clarifying responsibility, cost, and relational context. It is not a treatment model, diagnostic framework, or scoring system.
            </Typography>
             <Box sx={BOUNDARY_BOX_STYLES}>
              <Typography variant="body2" color="text.primary">
                <strong>Use boundary:</strong> First-person use. Not evaluative. Not for diagnosing or targeting others.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={ITALIC_SUBTEXT_STYLES}>
                Pre-defense note: Some documents are shared as working drafts for professional dialogue and are subject to revision.
              </Typography>
            </Box>
          </Box>

          <ResourceSection title="Foundations (Open Access)">
            <ResourceLink label="Relational Accountability — Public Definition (v1.0)" />
            <ResourceLink label="Accountability Conditions & Collapse Mapping (Agency–Cost–Exposure)" shade />
          </ResourceSection>

          <ResourceSection title="Conceptual Distinctions (Open Access)">
            <ResourceLink label="Accountability Isn’t the Same As… (Three Tables) (v1.6)" />
          </ResourceSection>

          <ResourceSection title="IRD Clarity Guides (Open Access)">
            <Typography variant="body2" color="text.secondary" sx={CLARITY_GUIDES_SUBTEXT_STYLES}>
              Brief reflection guides for first-person clarity and supervision dialogue when responsibility feels costly or constrained. Not diagnostic. Not evaluative. Not scorecards.
            </Typography>
            <List dense>
              {[
                "Accountability Map",
                "Cost Clarity Inventory",
                "Exposure Location Check",
                "Repair-Labor Audit",
                "Refusal Viability Check"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={CLARITY_GUIDE_LIST_ITEM_STYLES}>
                   <ListItemText primary={<Typography variant="body1" sx={CLARITY_GUIDE_ITEM_TEXT_STYLES}>&bull; {item} &mdash; <Link href="#" sx={CLARITY_GUIDE_LINK_STYLES} aria-label={`View PDF for ${item}`}>View PDF</Link></Typography>} />
                </ListItem>
              ))}
            </List>
          </ResourceSection>

          <ResourceSection title="Institutional Accountability (Working Drafts — Request-only)">
            <Typography variant="body2" color="text.secondary" sx={INSTITUTIONAL_ACCOUNTABILITY_SUBTEXT_STYLES}>
              Shared for professional dialogue. Not for reposting or distribution.
            </Typography>
            <Stack spacing={3}>
              <RequestItem 
                title="IRD Institutional Accountability Model (Working Draft)" 
                code="IRD-IAM-0.9" 
              />
              <RequestItem 
                title="Institutional Cost Redistribution Typology (Working Draft)" 
                code="IRD-ICRT-0.9" 
              />
              <RequestItem 
                title="Relational Exposure Displacement Typology (Working Draft)" 
                code="IRD-REDT-0.9" 
              />
            </Stack>
          </ResourceSection>

          <ResourceSection title="Working Manuscripts (in preparation) — titles only">
            <List dense sx={WORKING_MANUSCRIPTS_LIST_STYLES}>
              {[
                "Relational accountability without control: An integrative ethical framework for preserving agency under cost (2026, in preparation)",
                "Accountability without control: Why modern systems simulate responsibility and fracture trust (2026, in preparation)",
                "Accountability without control: The cross, belief, and cost-bearing obedience in Christian ethics (2026, in preparation)"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters>
                  <ListItemText primary={<Typography variant="body2" sx={WORKING_MANUSCRIPT_ITEM_TEXT_STYLES}>&bull; {item}</Typography>} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" sx={WORKING_MANUSCRIPTS_FOOTER_STYLES}>
              Available upon request for professional dialogue. Working documents subject to revision.
            </Typography>
          </ResourceSection>

          <Divider sx={DIVIDER_STYLES} />

          <Typography variant="body2" align="center" color="text.secondary" sx={FOOTER_ITALIC_STYLES}>
            Communication boundary: Please do not include PHI or identifying client details by email. Email is not monitored for emergencies.
          </Typography>

        </Paper>
      </Container>
    </Box>
  );
};

const ResourceSection = ({ title, children }) => (
  <Box sx={{ mb: 8 }}>
    <Typography variant="h4" gutterBottom sx={RESOURCE_SUBHEADER_STYLES}>
      {title}
    </Typography>
    {children}
  </Box>
);

const ResourceLink = ({ label, shade = false }) => (
  <Box sx={RESOURCE_LINK_ITEM_STYLES(shade)}>
     <Typography variant="body1" sx={{ fontWeight: 600 }}>{label}</Typography>
     <Link href="#" sx={{ fontSize: '0.85rem', fontWeight: 600 }} aria-label={`View PDF for ${label}`}>View PDF &rarr;</Link>
  </Box>
);

const RequestItem = ({ title, code }) => (
  <Box sx={REQUEST_BOX_STYLES}>
    <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>{title}</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>({code})</Typography>
      <Link 
        href={`mailto:integrated.relational.dynamics@gmail.com?subject=Request for Draft: ${code}`}
        sx={{ fontSize: '0.85rem', fontWeight: 600 }}
        aria-label={`Request draft ${code} by email`}
      >
        Request by email &rarr;
      </Link>
    </Box>
  </Box>
);

export default ResourcesPage;

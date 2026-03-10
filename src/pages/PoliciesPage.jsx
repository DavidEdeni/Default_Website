import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';

const PoliciesPage = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>Policies</Typography>
        <Paper elevation={0} sx={{ p: 6, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Communication Boundaries</Typography>
            <Typography variant="body1" color="text.secondary">
              Email is the primary method for non-clinical inquiries. I aim to respond within 48–72 business hours. No clinical consultation or crisis support is provided via email.
            </Typography>
          </Box>
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#B71C1C' }}>Crisis & Emergency Disclaimer</Typography>
            <Typography variant="body1" color="text.secondary">
              Integrated Relational Dynamics, PLLC does not provide crisis or emergency services. If you are experiencing a mental health emergency, please contact 988, call 911, or go to the nearest emergency room.
            </Typography>
          </Box>
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Telehealth Boundaries</Typography>
            <Typography variant="body1" color="text.secondary">
              All services are provided via secure, HIPAA-compliant video platforms. Clinicians and clients must be physically located in a state where I am licensed (Texas/Colorado as applicable) at the time of service.
            </Typography>
          </Box>
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Cancellation & Rescheduling</Typography>
            <Typography variant="body1" color="text.secondary">
              A 24-hour notice is requested for all cancellations or rescheduling to avoid a late-cancel fee. This boundary protects the clinical frame and ensures sustainability.
            </Typography>
          </Box>
          <Box component="section">
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Confidentiality Basics</Typography>
            <Typography variant="body1" color="text.secondary">
              Your privacy is protected by law and ethical standards. Limits to confidentiality (such as risk of harm to self/others or abuse reporting) will be discussed thoroughly during the orientation or fit consult.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PoliciesPage;

import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';

const FeesPage = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>Fees & Payment</Typography>
        <Paper elevation={0} sx={{ p: 6, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Supervision Fees</Typography>
            <List>
              {[
                { primary: "Supervision Fit Consult (45–60 min)", secondary: "Fee provided upon email inquiry." },
                { primary: "Ongoing Supervision (Weekly/Bi-weekly)", secondary: "Fee provided upon email inquiry." }
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemText 
                    primary={<Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.primary}</Typography>}
                    secondary={<Typography variant="body1" color="text.secondary">{item.secondary}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Therapy Fees</Typography>
            <Typography variant="body1" color="text.secondary">
              Therapy services are provided on a private-pay basis. Current rates are available upon inquiry.
            </Typography>
          </Box>
          <Box component="section" sx={{ mb: 6, p: 4, bgcolor: 'background.default', borderLeft: '4px solid #2C2520' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Insurance & Superbills</Typography>
            <Typography variant="body1" color="text.secondary">
              I do not accept insurance directly. For therapy services, superbills are provided upon request. Reimbursement is determined by your insurer and is not guaranteed. Supervision is not an insurance-reimbursable service.
            </Typography>
          </Box>
          <Box component="section">
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Methods for Payment</Typography>
            <Typography variant="body1" color="text.secondary">
              Secure electronic payment is required at the time of service. Detailed payment instructions are provided during the orientation or fit consult.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FeesPage;

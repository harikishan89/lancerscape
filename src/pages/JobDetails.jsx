import React from 'react';
import { Container, Typography, Box, Chip, Stack, Button, Paper } from '@mui/material';

export default function JobDetails() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: 4, boxShadow: 3 }}>
        <Stack direction="row" spacing={2} mb={2}>
          <Chip label="React" color="secondary" />
          <Chip label="UI/UX" color="secondary" />
        </Stack>
        <Typography variant="h4" fontWeight={900} mb={2}>
          Build a React Landing Page
        </Typography>
        <Typography color="text.secondary" mb={3}>
          Need a modern, responsive landing page for a SaaS product. Must be pixel-perfect and mobile-friendly.
        </Typography>
        <Typography variant="h6" fontWeight={700} color="primary" mb={2}>
          $200
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2 }}>
          Apply Now
        </Button>
      </Paper>
    </Container>
  );
}

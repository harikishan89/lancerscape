import React from 'react';
import { Container, Typography, Box, Avatar, Stack, Button, Paper } from '@mui/material';

export default function ClientProfile() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: 4, boxShadow: 3 }}>
        <Stack direction="row" spacing={3} alignItems="center" mb={3}>
          <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" sx={{ width: 80, height: 80 }} />
          <Box>
            <Typography variant="h5" fontWeight={900}>Priya S.</Typography>
            <Typography color="text.secondary">Client</Typography>
          </Box>
        </Stack>
        <Typography mb={2}>
          Looking for talented freelancers to help with web and mobile projects. Always open to new proposals!
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: 2 }}>
          Message
        </Button>
      </Paper>
    </Container>
  );
}

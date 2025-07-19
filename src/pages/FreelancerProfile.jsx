import React from 'react';
import { Container, Typography, Box, Avatar, Chip, Stack, Button, Paper } from '@mui/material';

export default function FreelancerProfile() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: 4, boxShadow: 3 }}>
        <Stack direction="row" spacing={3} alignItems="center" mb={3}>
          <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 80, height: 80 }} />
          <Box>
            <Typography variant="h5" fontWeight={900}>Alex R.</Typography>
            <Typography color="text.secondary">Web Developer</Typography>
            <Stack direction="row" spacing={1} mt={1}>
              <Chip label="React" color="secondary" />
              <Chip label="Node.js" color="secondary" />
              <Chip label="UI/UX" color="secondary" />
            </Stack>
          </Box>
        </Stack>
        <Typography mb={2}>
          Experienced web developer with a passion for building beautiful and functional user interfaces. Open to new projects!
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: 2 }}>
          Contact
        </Button>
      </Paper>
    </Container>
  );
}

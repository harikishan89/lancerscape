import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Stack } from '@mui/material';

export default function PostJob() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: 4, boxShadow: 3 }}>
        <Typography variant="h4" fontWeight={900} mb={3}>
          Post a New Job
        </Typography>
        <Stack spacing={3}>
          <TextField label="Job Title" fullWidth required />
          <TextField label="Description" fullWidth required multiline rows={4} />
          <TextField label="Skills (comma separated)" fullWidth required />
          <TextField label="Budget ($)" fullWidth required type="number" />
          <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2 }}>
            Post Job
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#f8f7fc', py: 4, mt: 8, borderTop: 1, borderColor: 'grey.200', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Lancerscape. All rights reserved.
      </Typography>
    </Box>
  );
}

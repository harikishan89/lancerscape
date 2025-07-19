import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ 
      bgcolor: '#f8f7fc', 
      py: { xs: 3, md: 4 }, 
      mt: { xs: 6, md: 8 }, 
      borderTop: 1, 
      borderColor: 'grey.200', 
      textAlign: 'center',
      px: { xs: 2, md: 0 }
    }}>
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{ fontSize: { xs: 12, md: 14 } }}
      >
        © {new Date().getFullYear()} Lancerscape. All rights reserved.
      </Typography>
    </Box>
  );
}

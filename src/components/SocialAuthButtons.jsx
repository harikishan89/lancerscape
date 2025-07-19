import * as React from 'react';
import { Stack, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

export default function SocialAuthButtons({ action = 'Sign in' }) {
  return (
    <Stack spacing={2} direction="column" sx={{ width: '100%' }}>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<GoogleIcon />}
        fullWidth
        sx={{ fontWeight: 700, textTransform: 'none', py: 1 }}
      >
        {action} with Google
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<MicrosoftIcon />}
        fullWidth
        sx={{ fontWeight: 700, textTransform: 'none', py: 1 }}
      >
        {action} with Microsoft
      </Button>
    </Stack>
  );
}

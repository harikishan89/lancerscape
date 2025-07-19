import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'grey.200', bgcolor: '#fff' }}>
      <Toolbar sx={{ minHeight: 72 }}>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 900, color: '#7C3AED', letterSpacing: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>Lancerscape</Typography>
        <Stack direction="row" spacing={2}>
          <Button color="primary" variant="text" onClick={() => navigate('/jobs')}>Find Work</Button>
          <Button color="primary" variant="text">Explore</Button>
          <Button color="primary" variant="text">Manage Finances</Button>
          <Button color="primary" variant="outlined" onClick={() => navigate('/login')}>Sign In</Button>
          <Button color="primary" variant="contained" onClick={() => navigate('/signup')}>Join</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

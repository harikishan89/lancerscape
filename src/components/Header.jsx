import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'grey.200', bgcolor: '#fff' }}>
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64, md: 72 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography 
          variant="h5" 
          sx={{ 
            flexGrow: 1, 
            fontWeight: 900, 
            color: '#7C3AED', 
            letterSpacing: 1, 
            cursor: 'pointer',
            fontSize: { xs: 18, sm: 20, md: 24 }
          }} 
          onClick={() => navigate('/')}
        >
          Lancerscape
        </Typography>
        
        {/* Desktop Navigation */}
        <Stack direction="row" spacing={{ xs: 1, sm: 2 }} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button 
            color="primary" 
            variant="text" 
            onClick={() => navigate('/jobs')}
            sx={{ fontSize: { md: 14, lg: 16 } }}
          >
            Find Work
          </Button>
          <Button 
            color="primary" 
            variant="text"
            sx={{ fontSize: { md: 14, lg: 16 } }}
          >
            Explore
          </Button>
          <Button 
            color="primary" 
            variant="text"
            sx={{ fontSize: { md: 14, lg: 16 } }}
          >
            Manage Finances
          </Button>
          <Button 
            color="primary" 
            variant="outlined" 
            onClick={() => navigate('/login')}
            sx={{ fontSize: { md: 14, lg: 16 } }}
          >
            Sign In
          </Button>
          <Button 
            color="primary" 
            variant="contained" 
            onClick={() => navigate('/signup')}
            sx={{ fontSize: { md: 14, lg: 16 } }}
          >
            Join
          </Button>
        </Stack>

        {/* Mobile Navigation */}
        <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Button 
            color="primary" 
            variant="outlined" 
            onClick={() => navigate('/login')}
            size="small"
            sx={{ fontSize: 12, px: 2 }}
          >
            Sign In
          </Button>
          <Button 
            color="primary" 
            variant="contained" 
            onClick={() => navigate('/signup')}
            size="small"
            sx={{ fontSize: 12, px: 2 }}
          >
            Join
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

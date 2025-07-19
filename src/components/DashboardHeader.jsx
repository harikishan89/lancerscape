import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Badge, 
  Avatar, 
  Box, 
  Stack,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function DashboardHeader() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="sticky" 
      color="inherit" 
      elevation={0} 
      sx={{ 
        borderBottom: 1, 
        borderColor: 'grey.200', 
        bgcolor: '#fff',
        zIndex: 1300
      }}
    >
      <Toolbar sx={{ minHeight: 64, px: { xs: 2, md: 3 }, justifyContent: 'space-between' }}>
        {/* Left side - Logo */}
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 900, 
            color: '#7C3AED', 
            letterSpacing: 1, 
            cursor: 'pointer',
            flexShrink: 0
          }} 
          onClick={() => navigate('/')}
        >
          Lancerscape
        </Typography>

        {/* Center - Search Bar */}
        <Box sx={{ flexGrow: 1, maxWidth: 500, mx: 4, display: { xs: 'none', md: 'block' } }}>
          <TextField
            fullWidth
            placeholder="Search for jobs, freelancers..."
            size="small"
            sx={{ 
              bgcolor: '#f8f9fa', 
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                height: 40,
                '& fieldset': {
                  border: 'none'
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" sx={{ fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Right side - Icons and Profile */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ flexShrink: 0 }}>
          {/* Messages */}
          <IconButton 
            color="inherit" 
            sx={{ 
              color: '#666',
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            <Badge badgeContent={3} color="error">
              <MailIcon sx={{ fontSize: 22 }} />
            </Badge>
          </IconButton>

          {/* Notifications */}
          <IconButton 
            color="inherit" 
            sx={{ 
              color: '#666',
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            <Badge badgeContent={5} color="error">
              <NotificationsIcon sx={{ fontSize: 22 }} />
            </Badge>
          </IconButton>

          {/* Profile Avatar */}
          <IconButton 
            onClick={handleProfileMenuOpen}
            sx={{ 
              p: 0.5,
              '&:hover': { bgcolor: 'transparent' }
            }}
          >
            <Avatar 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              sx={{ width: 36, height: 36 }}
            />
          </IconButton>

          {/* Profile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 200,
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ px: 2, py: 1.5 }}>
              <Typography variant="subtitle2" fontWeight={600}>Alex R.</Typography>
              <Typography variant="body2" color="text.secondary">Software Developer</Typography>
            </Box>
            <Divider />
            <MenuItem onClick={() => { handleProfileMenuClose(); navigate('/freelancer/profile'); }}>
              <AccountCircleIcon sx={{ mr: 1.5, fontSize: 20 }} />
              View Profile
            </MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>
              <SettingsIcon sx={{ mr: 1.5, fontSize: 20 }} />
              Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => { handleProfileMenuClose(); navigate('/'); }}>
              <LogoutIcon sx={{ mr: 1.5, fontSize: 20 }} />
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

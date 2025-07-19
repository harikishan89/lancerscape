
import * as React from 'react';
import { Box, Button, Container, TextField, Typography, Paper, Stack, Link, InputAdornment, IconButton, MenuItem, Grid } from '@mui/material';
import { Visibility, VisibilityOff, PersonAddAlt1 } from '@mui/icons-material';
import SocialAuthButtons from '../components/SocialAuthButtons';

const roles = [
  { value: 'freelancer', label: 'Freelancer' },
  { value: 'sponsor', label: 'Sponsor' },
  { value: 'client', label: 'Client' },
];

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [role, setRole] = React.useState('freelancer');
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #ede9fe 0%, #f8f7fc 100%)',
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated Accent Circle */}
      <Box sx={{
        position: 'absolute',
        top: -120,
        left: -120,
        width: 320,
        height: 320,
        background: 'radial-gradient(circle at 60% 40%, #a78bfa 0%, #7c3aed 80%, transparent 100%)',
        opacity: 0.18,
        zIndex: 0,
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite',
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30px)' },
        },
      }} />
      <Paper elevation={24} sx={{
        borderRadius: 7,
        px: { xs: 2, sm: 7 },
        py: { xs: 4, sm: 7 },
        maxWidth: 440,
        width: '100%',
        backdropFilter: 'blur(16px)',
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '0 12px 48px 0 rgba(124,58,237,0.10)',
        border: '1.5px solid #e0f2f1',
        zIndex: 1,
      }}>
        <Box textAlign="center" mb={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            <img src="https://img.icons8.com/color/48/000000/leaf.png" alt="Lancerscape" style={{ marginRight: 8, width: 40, height: 40 }} />
            <Typography variant="h4" fontWeight={900} color="#7C3AED" sx={{ letterSpacing: -1 }}>
              Lancerscape
            </Typography>
          </Box>
          <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#222', mb: 0.5 }}>
            Sign Up
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Join Lancerscape and start your journey
          </Typography>
        </Box>
        <Stack spacing={2} mb={2}>
          <SocialAuthButtons action="Sign up" />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <Box flex={1} height={1} bgcolor="divider" />
          <Typography variant="body2" color="text.secondary">or</Typography>
          <Box flex={1} height={1} bgcolor="divider" />
        </Stack>
        <Stack spacing={3}>
          <TextField label="Full Name" type="text" fullWidth required variant="outlined" />
          <TextField label="Email Address" type="email" fullWidth required variant="outlined" />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            required
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            select
            label="Role"
            value={role}
            onChange={e => setRole(e.target.value)}
            fullWidth
            required
            variant="outlined"
          >
            {roles.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" size="large" fullWidth sx={{ fontWeight: 700, py: 1.5, background: 'linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)', color: '#fff', boxShadow: '0 4px 16px 0 rgba(124,58,237,0.10)' }}>
            Create Account
          </Button>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Already have an account?
            </Typography>
            <Link href="/login" underline="hover" color="primary" sx={{ ml: 1 }}>
              Login
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

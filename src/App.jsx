

import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Stack, Grid } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';



import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login';
import Signup from './pages/Signup';
import BrowseJobs from './pages/BrowseJobs';
import JobDetails from './pages/JobDetails';
import PostJob from './pages/PostJob';
import FreelancerProfile from './pages/FreelancerProfile';
import ClientProfile from './pages/ClientProfile';
import FreelancerDashboard from './pages/FreelancerDashboard';







function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      
      {/* Hero Section with Modern Design */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 500, sm: 550, md: 600, lg: 650 },
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 50%, #6366F1 100%)',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '100vw',
          boxSizing: 'border-box',
        }}
      >
        {/* Simplified background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: 100,
              height: 100,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '60%',
              right: '15%',
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          />
        </Box>

        <Box sx={{ position: 'relative', zIndex: 3, px: { xs: 2, sm: 3, md: 4 }, width: '100%', maxWidth: '100%' }}>
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: { xs: 400, sm: 450, md: 500, lg: 550 }, 
              py: { xs: 6, sm: 8, md: 10, lg: 12 },
              width: '100%',
              maxWidth: '100%',
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
            }}
          >
            <Box sx={{ width: '100%', color: '#fff', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
              <Box sx={{ color: '#fff', textAlign: 'center' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: 32, sm: 40, md: 56, lg: 72 },
                    fontWeight: 800,
                    mb: { xs: 2, md: 3 },
                    letterSpacing: { xs: -0.5, md: -1.5 },
                    lineHeight: { xs: 1.1, md: 1.05 },
                    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                    background: 'linear-gradient(45deg, #fff 30%, #E0E7FF 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Find & hire expert freelancers
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: 18, sm: 20, md: 22, lg: 26 },
                    mb: { xs: 3, md: 4 },
                    opacity: 0.95,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                    maxWidth: '100%',
                    mx: 'auto',
                  }}
                >
                  Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
                </Typography>

                {/* Modern Search Bar */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    bgcolor: '#fff',
                    borderRadius: { xs: 2, md: 3 },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    p: { xs: 1.5, md: 1 },
                    alignItems: 'center',
                    maxWidth: { xs: '100%', md: 600 },
                    mb: { xs: 3, md: 4 },
                    gap: { xs: 2, sm: 0 },
                    mx: 'auto',
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search for any service..."
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      fontSize: 16,
                      padding: '16px 20px',
                      borderRadius: 12,
                      background: 'transparent',
                      color: '#374151',
                      width: '100%',
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ 
                      px: { xs: 3, md: 4 }, 
                      py: { xs: 2, md: 2.5 }, 
                      fontWeight: 700, 
                      borderRadius: 2.5,
                      bgcolor: '#7C3AED',
                      '&:hover': { bgcolor: '#6D28D9' },
                      textTransform: 'none',
                      fontSize: { xs: 14, md: 16 },
                      minWidth: { xs: '100%', sm: 120 },
                    }}
                  >
                    Search
                  </Button>
                </Box>

                {/* Popular Services Tags */}
                <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
                  <Typography variant="body2" sx={{ opacity: 0.8, mb: 2, fontSize: { xs: 14, md: 16 } }}>
                    Popular services:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, md: 1.5 }, justifyContent: 'center' }}>
                    {['Website Design', 'Logo Design', 'SEO', 'Social Media', 'Content Writing', 'Mobile App'].map((service) => (
                      <Button
                        key={service}
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: 'rgba(255,255,255,0.3)',
                          color: '#fff',
                          fontWeight: 600,
                          textTransform: 'none',
                          borderRadius: 20,
                          px: { xs: 2, md: 2.5 },
                          py: 0.5,
                          fontSize: { xs: 12, md: 14 },
                          '&:hover': {
                            borderColor: '#fff',
                            bgcolor: 'rgba(255,255,255,0.1)',
                          },
                        }}
                      >
                        {service}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ bgcolor: '#F8F7FC', py: { xs: 6, sm: 8, md: 10 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            <Typography 
              variant="h4" 
              fontWeight={600} 
              sx={{ 
                color: '#1F2937', 
                mb: 2,
                fontSize: { xs: 18, sm: 20, md: 24 },
                fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
              }}
            >
              Trusted by millions worldwide
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 4, md: 6 }} textAlign="center" justifyContent="center" sx={{ width: '100%', margin: 0 }}>
            {[
              { number: '4M+', label: 'Active freelancers' },
              { number: '1M+', label: 'Clients worldwide' },
              { number: '$2B+', label: 'Total earnings' },
              { number: '99%', label: 'Customer satisfaction' },
            ].map((stat) => (
              <Grid item xs={6} sm={3} md={3} key={stat.label} sx={{ paddingLeft: '0 !important' }}>
                <Typography 
                  variant="h2" 
                  fontWeight={800} 
                  sx={{ 
                    color: '#7C3AED', 
                    fontSize: { xs: 24, sm: 32, md: 40, lg: 48 }, 
                    mb: { xs: 1, md: 1.5 },
                    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                    letterSpacing: -1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#6B7280', 
                    fontWeight: 500, 
                    fontSize: { xs: 14, sm: 16, md: 18 },
                    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                  }}
                >
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Trusted by section */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 3, md: 4 }, borderBottom: 1, borderColor: '#E5E1F6' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 3, sm: 4, md: 6 }} 
            alignItems="center" 
            justifyContent="center" 
            flexWrap="wrap"
            useFlexGap
          >
            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, letterSpacing: 1, fontSize: { xs: 12, md: 14 } }}>
              Trusted by:
            </Typography>
            
            {/* Microsoft Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', transform: { xs: 'scale(0.8)', sm: 'scale(0.9)', md: 'scale(1)' } }}>
              <svg width="100" height="24" viewBox="0 0 100 24" fill="none">
                <rect x="0" y="0" width="11" height="11" fill="#F25022"/>
                <rect x="12" y="0" width="11" height="11" fill="#7FBA00"/>
                <rect x="0" y="12" width="11" height="11" fill="#00A4EF"/>
                <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
                <text x="28" y="16" fill="#5F5F5F" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">Microsoft</text>
              </svg>
            </Box>

            {/* Nike Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', transform: { xs: 'scale(0.8)', sm: 'scale(0.9)', md: 'scale(1)' } }}>
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M24.09 8.64c-.34-.68-1.02-1.02-2.04-1.02-1.36 0-2.72.68-4.08 2.04L8.97 18.3c-.34.34-.68.34-1.02 0-.34-.34-.34-.68 0-1.02L16.95 8.64c1.36-1.36 2.72-2.04 4.08-2.04 1.02 0 1.7.34 2.04 1.02.34.68.34 1.36 0 2.04L14.07 18.3c-.34.34-.68.34-1.02 0-.34-.34-.34-.68 0-1.02l9-8.64c.34-.68.34-1.36 0-2.04z" fill="#000"/>
                <text x="28" y="16" fill="#5F5F5F" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">NIKE</text>
              </svg>
            </Box>

            {/* Google Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', transform: { xs: 'scale(0.8)', sm: 'scale(0.9)', md: 'scale(1)' } }}>
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                <text x="0" y="16" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="500">
                  <tspan fill="#4285F4">G</tspan>
                  <tspan fill="#EA4335">o</tspan>
                  <tspan fill="#FBBC05">o</tspan>
                  <tspan fill="#4285F4">g</tspan>
                  <tspan fill="#34A853">l</tspan>
                  <tspan fill="#EA4335">e</tspan>
                </text>
              </svg>
            </Box>

            {/* Adobe Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', transform: { xs: 'scale(0.8)', sm: 'scale(0.9)', md: 'scale(1)' } }}>
              <svg width="70" height="24" viewBox="0 0 70 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#FF0000"/>
                <text x="8" y="16" fill="white" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold">A</text>
                <text x="28" y="16" fill="#5F5F5F" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">Adobe</text>
              </svg>
            </Box>

            {/* Slack Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', transform: { xs: 'scale(0.8)', sm: 'scale(0.9)', md: 'scale(1)' } }}>
              <svg width="70" height="24" viewBox="0 0 70 24" fill="none">
                <rect x="0" y="8" width="8" height="8" rx="2" fill="#E01E5A"/>
                <rect x="8" y="0" width="8" height="8" rx="2" fill="#36C5F0"/>
                <rect x="8" y="16" width="8" height="8" rx="2" fill="#2EB67D"/>
                <rect x="16" y="8" width="8" height="8" rx="2" fill="#ECB22E"/>
                <text x="28" y="16" fill="#5F5F5F" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">Slack</text>
              </svg>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Browse Talent by Category - Modern Design */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 10, lg: 12 }, px: { xs: 3, sm: 4, md: 6 } }}>
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography 
            variant="h3" 
            fontWeight={600} 
            sx={{ 
              color: '#1F2937', 
              mb: 2,
              fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
              letterSpacing: { xs: -0.5, md: -0.5 },
              fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
            }}
          >
            Browse talent by category
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#6B7280', 
              mb: 4, 
              fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
              fontWeight: 400,
              maxWidth: { xs: '100%', md: 600 },
              mx: 'auto',
              px: { xs: 2, md: 0 },
              fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
            }}
          >
            Get some inspiration from work across hundreds of different categories
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
          {[
            { 
              label: 'Development & IT', 
              desc: '1,853 skills', 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 3L16 5.5L13.5 8M10.5 8L8 5.5L10.5 3M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), 
              projects: '4.2M+' 
            },
            { 
              label: 'Design & Creative', 
              desc: '968 skills', 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 21L9.5 15.5L15 17L8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), 
              projects: '2.1M+' 
            },
            { 
              label: 'Digital Marketing', 
              desc: '392 skills', 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21L9 15L15 21L21 15V3H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), 
              projects: '1.8M+' 
            },
            { 
              label: 'Writing & Translation', 
              desc: '505 skills', 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), 
              projects: '950K+' 
            },
            { 
              label: 'Video & Animation', 
              desc: '278 skills', 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              ), 
              projects: '720K+' 
            },
            { 
              label: 'Music & Audio', 
              desc: '132 skills', 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              ), 
              projects: '380K+' 
            },
            { 
              label: 'Admin & Customer Support', 
              desc: '195 skills', 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), 
              projects: '650K+' 
            },
            { 
              label: 'Finance & Accounting', 
              desc: '214 skills', 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), 
              projects: '420K+' 
            },
          ].map((cat) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={cat.label}>
              <Box 
                sx={{
                  bgcolor: '#fff',
                  p: { xs: 3, sm: 3.5, md: 4 },
                  borderRadius: '20px',
                  border: '1px solid #F1F5F9',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  height: { xs: 180, sm: 200, md: 220 },
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 60px rgba(124,58,237,0.12)',
                    borderColor: '#E2E8F0',
                    '& .category-icon': {
                      transform: 'scale(1.05)',
                      bgcolor: '#7C3AED',
                    }
                  }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box 
                    className="category-icon"
                    sx={{
                      width: { xs: 56, sm: 64, md: 72 },
                      height: { xs: 56, sm: 64, md: 72 },
                      borderRadius: '16px',
                      bgcolor: '#F8F6FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: { xs: 2, md: 3 },
                      color: '#7C3AED',
                      transition: 'all 0.3s ease',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    {cat.icon}
                  </Box>
                  
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      variant="h6" 
                      fontWeight={600} 
                      sx={{ 
                        color: '#1E293B', 
                        mb: 1,
                        fontSize: { xs: 15, sm: 16, md: 18 },
                        lineHeight: 1.3,
                        fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                      }}
                    >
                      {cat.label}
                    </Typography>
                    
                    <Typography 
                      sx={{ 
                        color: '#64748B', 
                        fontSize: { xs: 12, sm: 13, md: 14 },
                        mb: 2,
                        fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {cat.desc}
                    </Typography>
                    
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: '#7C3AED', 
                        fontWeight: 500,
                        fontSize: { xs: 11, sm: 12, md: 13 },
                        mt: 'auto',
                        fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                      }}
                    >
                      {cat.projects} completed
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Freelancers Section */}
      <Box sx={{ bgcolor: '#FAFAFA', py: { xs: 6, sm: 8, md: 10, lg: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography 
              variant="h3" 
              fontWeight={600} 
              sx={{ 
                color: '#1F2937', 
                mb: 2,
                fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
                letterSpacing: { xs: -0.5, md: -0.5 },
                fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
              }}
            >
              Meet our top freelancers
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#6B7280', 
                fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                fontWeight: 400,
                maxWidth: { xs: '100%', md: 600 },
                mx: 'auto',
                px: { xs: 2, md: 0 },
                fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
              }}
            >
              Work with talented professionals who deliver exceptional results
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {[
              {
                name: 'Alex Morgan',
                role: 'Full Stack Developer',
                image: 'https://randomuser.me/api/portraits/men/1.jpg',
                rating: 4.9,
                reviews: 127,
                hourlyRate: '$85',
                skills: ['React', 'Node.js', 'Python'],
                badge: 'Top Rated'
              },
              {
                name: 'Sarah Kim',
                role: 'UI/UX Designer', 
                image: 'https://randomuser.me/api/portraits/women/2.jpg',
                rating: 5.0,
                reviews: 89,
                hourlyRate: '$65',
                skills: ['Figma', 'Adobe XD', 'Sketch'],
                badge: 'Rising Talent'
              },
              {
                name: 'David Chen',
                role: 'Digital Marketer',
                image: 'https://randomuser.me/api/portraits/men/3.jpg', 
                rating: 4.8,
                reviews: 156,
                hourlyRate: '$75',
                skills: ['SEO', 'Google Ads', 'Analytics'],
                badge: 'Top Rated Plus'
              },
              {
                name: 'Emma Wilson',
                role: 'Content Writer',
                image: 'https://randomuser.me/api/portraits/women/4.jpg',
                rating: 4.9,
                reviews: 203,
                hourlyRate: '$45',
                skills: ['Blog Writing', 'SEO', 'Research'],
                badge: 'Top Rated'
              },
            ].map((freelancer) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={freelancer.name}>
                <Box 
                  sx={{
                    bgcolor: '#fff',
                    p: { xs: 2.5, md: 3 },
                    borderRadius: { xs: '16px', md: '20px' },
                    border: '1px solid #F3F4F6',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    height: { xs: 280, sm: 300, md: 320 },
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.08)',
                      borderColor: '#7C3AED',
                    }
                  }}
                >
                  {/* Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 8, md: 12 },
                      right: { xs: 8, md: 12 },
                      bgcolor: '#7C3AED',
                      color: '#fff',
                      px: { xs: 1, md: 1.5 },
                      py: 0.5,
                      borderRadius: { xs: '8px', md: '12px' },
                      fontSize: { xs: 8, md: 10 },
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                    }}
                  >
                    {freelancer.badge}
                  </Box>

                  <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 3 }, flex: 1 }}>
                    <Box
                      component="img"
                      src={freelancer.image}
                      alt={freelancer.name}
                      sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        borderRadius: '50%',
                        mb: { xs: 1.5, md: 2 },
                        border: '4px solid #F3F4F6',
                      }}
                    />
                    <Typography variant="h6" fontWeight={700} sx={{ color: '#1F2937', mb: 0.5, fontSize: { xs: 14, md: 16 } }}>
                      {freelancer.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6B7280', fontSize: { xs: 12, md: 14 } }}>
                      {freelancer.role}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: 1.5, md: 2 } }}>
                    <Box sx={{ color: '#FFC107', fontSize: { xs: 12, md: 16 }, mr: 1 }}>
                      {'★'.repeat(Math.floor(freelancer.rating))}
                    </Box>
                    <Typography variant="body2" sx={{ color: '#1F2937', fontWeight: 600, fontSize: { xs: 11, md: 14 } }}>
                      {freelancer.rating} ({freelancer.reviews})
                    </Typography>
                  </Box>

                  <Typography 
                    variant="h6" 
                    fontWeight={700} 
                    sx={{ 
                      color: '#7C3AED', 
                      textAlign: 'center',
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: 16, md: 18 },
                    }}
                  >
                    {freelancer.hourlyRate}/hr
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, md: 1 }, justifyContent: 'center' }}>
                    {freelancer.skills.slice(0, 3).map((skill) => (
                      <Box
                        key={skill}
                        sx={{
                          bgcolor: '#F8F7FC',
                          color: '#7C3AED',
                          px: { xs: 1, md: 1.5 },
                          py: 0.5,
                          borderRadius: { xs: '8px', md: '12px' },
                          fontSize: { xs: 10, md: 12 },
                          fontWeight: 600,
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 6 } }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#7C3AED',
                color: '#7C3AED',
                fontWeight: 700,
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                borderRadius: { xs: '10px', md: '12px' },
                textTransform: 'none',
                fontSize: { xs: 14, md: 16 },
                minWidth: { xs: 180, md: 200 },
                '&:hover': {
                  bgcolor: '#7C3AED',
                  color: '#fff',
                }
              }}
              onClick={() => navigate('/jobs')}
            >
              Browse all freelancers
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Lancerscape */}
      <Box sx={{ bgcolor: '#FAFBFC', py: { xs: 6, sm: 8, md: 10 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography 
              variant="h3" 
              fontWeight={600} 
              sx={{ 
                color: '#1E293B', 
                mb: 2,
                fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
                letterSpacing: { xs: -0.5, md: -0.5 },
                fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
              }}
            >
              Why choose Lancerscape?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#64748B', 
                fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                fontWeight: 400,
                maxWidth: { xs: '100%', md: 700 },
                mx: 'auto',
                px: { xs: 2, md: 0 },
                fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
              }}
            >
              The platform that connects you with the world's best talent
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Secure & Protected',
                desc: 'Enterprise-grade security protects your payments. Only release funds when completely satisfied.',
                highlight: 'Bank-level security'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Lightning Fast',
                desc: 'Get qualified proposals within 24 hours. Most projects start within 48 hours.',
                highlight: '24hr response'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Quality Guaranteed',
                desc: 'All freelancers are vetted with verified portfolios, reviews, and work samples.',
                highlight: 'Vetted talent'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Best Value',
                desc: 'Compare proposals to find the perfect balance of quality and price. No hidden fees.',
                highlight: 'No hidden fees'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2C14.5 7.9 14.5 16.1 12 22C9.5 16.1 9.5 7.9 12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Global Talent',
                desc: 'Access freelancers worldwide, working across all timezones to meet your deadlines.',
                highlight: 'Worldwide talent'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H18.92C18.4717 19.9998 18.0491 19.821 17.74 19.51L17 18.77C16.89 18.66 16.73 18.66 16.62 18.77L15.38 20.01C15.2775 20.1027 15.1414 20.1495 15.005 20.1408C14.8686 20.1321 14.7395 20.0685 14.65 19.965L13.93 19.175C13.8373 19.0625 13.7905 18.9164 13.7992 18.77C13.8079 18.6236 13.8715 18.4945 13.975 18.405L14.98 17.405C15.0725 17.3025 15.1193 17.1664 15.1106 17.03C15.1019 16.8936 15.0383 16.7645 14.935 16.675L14.145 15.955C14.0425 15.8525 13.9064 15.8057 13.77 15.8144C13.6336 15.8231 13.5045 15.8867 13.415 15.99L12.18 17.225C12.0773 17.3175 11.9412 17.3643 11.8048 17.3556C11.6684 17.3469 11.5393 17.2833 11.45 17.18L10.73 16.46C10.63 16.36 10.63 16.2 10.73 16.1L12.77 14.06C12.8625 13.9575 12.9093 13.8214 12.9006 13.685C12.8919 13.5486 12.8283 13.4195 12.725 13.33L11.935 12.61C11.8325 12.5175 11.6964 12.4707 11.56 12.4794C11.4236 12.4881 11.2945 12.5517 11.205 12.655L9.225 14.635C9.13549 14.7245 9.01638 14.7744 8.8925 14.7744C8.76862 14.7744 8.64951 14.7245 8.56 14.635L7.36 13.435C7.27049 13.3455 7.22059 13.2264 7.22059 13.1025C7.22059 12.9786 7.27049 12.8595 7.36 12.77L9.77 10.36C9.86 10.27 9.86 10.11 9.77 10.02L8.98 9.23C8.88 9.13 8.72 9.13 8.63 9.23L6.22 11.64C6.13049 11.7295 6.01138 11.7794 5.8875 11.7794C5.76362 11.7794 5.64451 11.7295 5.555 11.64L4.355 10.44C4.26549 10.3505 4.21559 10.2314 4.21559 10.1075C4.21559 9.98362 4.26549 9.86451 4.355 9.775L6.765 7.365C6.855 7.275 6.855 7.115 6.765 7.025L5.975 6.235C5.885 6.145 5.725 6.145 5.635 6.235L3.225 8.645C3.13549 8.73451 3.01638 8.78441 2.8925 8.78441C2.76862 8.78441 2.64951 8.73451 2.56 8.645L1.36 7.445C1.27049 7.35549 1.22059 7.23638 1.22059 7.1125C1.22059 6.98862 1.27049 6.86951 1.36 6.78L7.02 1.12C7.10951 1.03049 7.22862 0.980591 7.3525 0.980591C7.47638 0.980591 7.59549 1.03049 7.685 1.12L8.885 2.32C8.97451 2.40951 9.02441 2.52862 9.02441 2.6525C9.02441 2.77638 8.97451 2.89549 8.885 2.985L6.475 5.395C6.385 5.485 6.385 5.645 6.475 5.735L7.265 6.525C7.355 6.615 7.515 6.615 7.605 6.525L10.015 4.115C10.1045 4.02549 10.2236 3.97559 10.3475 3.97559C10.4714 3.97559 10.5905 4.02549 10.68 4.115L11.88 5.315C11.9695 5.40451 12.0194 5.52362 12.0194 5.6475C12.0194 5.77138 11.9695 5.89049 11.88 5.98L9.47 8.39C9.38 8.48 9.38 8.64 9.47 8.73L10.26 9.52C10.35 9.61 10.51 9.61 10.6 9.52L13.01 7.11C13.0995 7.02049 13.2186 6.97059 13.3425 6.97059C13.4664 6.97059 13.5855 7.02049 13.675 7.11L14.875 8.31C14.9645 8.39951 15.0144 8.51862 15.0144 8.6425C15.0144 8.76638 14.9645 8.88549 14.875 8.975L12.465 11.385C12.375 11.475 12.375 11.635 12.465 11.725L13.255 12.515C13.345 12.605 13.505 12.605 13.595 12.515L16.005 10.105C16.0945 10.0155 16.2136 9.96559 16.3375 9.96559C16.4614 9.96559 16.5805 10.0155 16.67 10.105L17.87 11.305C17.9595 11.3945 18.0094 11.5136 18.0094 11.6375C18.0094 11.7614 17.9595 11.8805 17.87 11.97L15.46 14.38C15.37 14.47 15.37 14.63 15.46 14.72L16.25 15.51C16.34 15.6 16.5 15.6 16.59 15.51L19 13.1C19.0895 13.0105 19.2086 12.9606 19.3325 12.9606C19.4564 12.9606 19.5755 13.0105 19.665 13.1L20.865 14.3C20.9545 14.3895 21.0044 14.5086 21.0044 14.6325C21.0044 14.7564 20.9545 14.8755 20.865 14.965L18.455 17.375C18.365 17.465 18.365 17.625 18.455 17.715L19.245 18.505C19.335 18.595 19.495 18.595 19.585 18.505L22 16.09C22.0895 16.0005 22.2086 15.9506 22.3325 15.9506C22.4564 15.9506 22.5755 16.0005 22.665 16.09L22 16.92Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: '24/7 Support',
                desc: 'Our customer success team is here to help you every step of the way, whenever you need us.',
                highlight: 'Always available'
              },
            ].map((feature) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title}>
                <Box 
                  sx={{
                    bgcolor: '#fff',
                    p: { xs: 3, sm: 3.5, md: 4 },
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    height: { xs: 200, sm: 220, md: 240 },
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 60px rgba(124,58,237,0.12)',
                      borderColor: '#7C3AED',
                      '& .feature-icon': {
                        transform: 'scale(1.05)',
                        bgcolor: '#7C3AED',
                        color: '#fff',
                      },
                      '& .feature-highlight': {
                        transform: 'translateX(0)',
                        opacity: 1,
                      }
                    }
                  }}
                >
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box 
                      className="feature-icon"
                      sx={{
                        width: { xs: 48, sm: 56, md: 64 },
                        height: { xs: 48, sm: 56, md: 64 },
                        borderRadius: '12px',
                        bgcolor: '#F8F6FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#7C3AED',
                        mb: { xs: 2, md: 3 },
                        transition: 'all 0.3s ease',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      fontWeight={600} 
                      sx={{ 
                        color: '#1E293B', 
                        mb: 1.5,
                        fontSize: { xs: 16, sm: 17, md: 18 },
                        fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                        lineHeight: 1.3,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    
                    <Typography 
                      sx={{ 
                        color: '#64748B', 
                        fontSize: { xs: 13, sm: 14, md: 15 },
                        lineHeight: 1.5,
                        fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                        mb: 2,
                        flex: 1,
                      }}
                    >
                      {feature.desc}
                    </Typography>
                    
                    <Box
                      className="feature-highlight"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        bgcolor: '#F0F9FF',
                        color: '#7C3AED',
                        px: 2,
                        py: 0.5,
                        borderRadius: '8px',
                        fontSize: { xs: 11, md: 12 },
                        fontWeight: 500,
                        alignSelf: 'flex-start',
                        transform: 'translateX(-10px)',
                        opacity: 0,
                        transition: 'all 0.3s ease',
                        border: '1px solid #E0E7FF',
                      }}
                    >
                      ✨ {feature.highlight}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How it works */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 10 }, borderTop: 1, borderColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            fontWeight={600} 
            align="center" 
            gutterBottom
            sx={{
              fontSize: { xs: 20, sm: 24, md: 28 },
              fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
              letterSpacing: -0.5,
            }}
          >
            How it works
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center" p={2}>
                <Box fontSize={48} mb={1}>📝</Box>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>Post a job (it’s free)</Typography>
                <Typography color="text.secondary">Tell us what you need. It’s quick and easy.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center" p={2}>
                <Box fontSize={48} mb={1}>👀</Box>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>Talent comes to you</Typography>
                <Typography color="text.secondary">Get qualified proposals within 24 hours.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center" p={2}>
                <Box fontSize={48} mb={1}>💬</Box>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>Collaborate easily</Typography>
                <Typography color="text.secondary">Chat, share files, and track project milestones.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography 
          variant="h4" 
          fontWeight={600} 
          align="center" 
          gutterBottom
          sx={{
            fontSize: { xs: 20, sm: 24, md: 28 },
            fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
            letterSpacing: -0.5,
          }}
        >
          Trusted by clients and freelancers
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          <Grid item xs={12} md={4}>
            <Box p={3} bgcolor="#fff" borderRadius={4} boxShadow={1} display="flex" flexDirection="column" alignItems="center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya S." style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: 12 }} />
              <Typography variant="body1" fontStyle="italic" align="center">“Lancerscape made it easy to find quality work and get paid quickly. The platform is intuitive and secure.”</Typography>
              <Typography variant="subtitle2" fontWeight={700} mt={2}>Priya S., Web Developer</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box p={3} bgcolor="#fff" borderRadius={4} boxShadow={1} display="flex" flexDirection="column" alignItems="center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex R." style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: 12 }} />
              <Typography variant="body1" fontStyle="italic" align="center">“I hired a fantastic designer in minutes. The process was seamless and the results were great!”</Typography>
              <Typography variant="subtitle2" fontWeight={700} mt={2}>Alex R., Client</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box p={3} bgcolor="#fff" borderRadius={4} boxShadow={1} display="flex" flexDirection="column" alignItems="center">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Maria G." style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: 12 }} />
              <Typography variant="body1" fontStyle="italic" align="center">“The support team is responsive and the tools are top-notch. Highly recommend Lancerscape!”</Typography>
              <Typography variant="subtitle2" fontWeight={700} mt={2}>Maria G., Freelancer</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Modern Call to Action */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 50%, #6366F1 100%)',
          py: { xs: 8, sm: 10, md: 12, lg: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Simplified background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              width: 80,
              height: 80,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          />
        </Box>

        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2, px: { xs: 3, sm: 4, md: 6 } }}>
          <Typography 
            variant="h2" 
            fontWeight={700} 
            sx={{ 
              color: '#fff',
              mb: { xs: 2, md: 3 },
              fontSize: { xs: 28, sm: 32, md: 40, lg: 48 },
              letterSpacing: { xs: -0.5, md: -1 },
              lineHeight: 1.1,
              fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
            }}
          >
            Ready to get started?
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#fff',
              mb: { xs: 4, md: 6 },
              opacity: 0.95,
              fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: { xs: '100%', md: 500 },
              mx: 'auto',
              px: { xs: 2, md: 0 },
              fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
            }}
          >
            Join millions of businesses and freelancers who trust Lancerscape to get work done.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 2, md: 3 }} 
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#fff',
                color: '#7C3AED',
                fontWeight: 700,
                px: { xs: 4, md: 6 },
                py: { xs: 2, md: 2.5 },
                borderRadius: { xs: '12px', md: '16px' },
                textTransform: 'none',
                fontSize: { xs: 16, md: 18 },
                minWidth: { xs: 280, sm: 200, md: 220 },
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                '&:hover': {
                  bgcolor: '#F8F7FC',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.2)',
                }
              }}
              onClick={() => navigate('/signup')}
            >
              Join as a freelancer
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: '#fff',
                fontWeight: 700,
                px: { xs: 4, md: 6 },
                py: { xs: 2, md: 2.5 },
                borderRadius: { xs: '12px', md: '16px' },
                textTransform: 'none',
                fontSize: { xs: 16, md: 18 },
                minWidth: { xs: 280, sm: 200, md: 220 },
                '&:hover': {
                  borderColor: '#fff',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-4px)',
                }
              }}
              onClick={() => navigate('/post-job')}
            >
              Hire freelancers
            </Button>
          </Stack>

          <Typography 
            variant="body2" 
            sx={{ 
              color: '#fff',
              mt: { xs: 3, md: 4 },
              opacity: 0.8,
              fontSize: { xs: 12, md: 14 },
            }}
          >
            It's free to get started • No credit card required
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}


// Layout is already declared below, so remove this duplicate.

import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<FreelancerDashboard />} />
      <Route element={<Layout />}>
        <Route path="/jobs" element={<BrowseJobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/freelancer/:id" element={<FreelancerProfile />} />
        <Route path="/client/:id" element={<ClientProfile />} />
      </Route>
    </Routes>
  );
}

export default App;

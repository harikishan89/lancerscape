

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
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 400, md: 520 },
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#7C3AED',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* Background image overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
            zIndex: 1,
          }}
        />
        {/* Gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #7C3AED 60%, rgba(124,58,237,0.7) 100%)',
            zIndex: 2,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Box sx={{ maxWidth: 700, pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 16 } }}>
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                fontSize: { xs: 28, md: 44 },
                mb: 3,
                letterSpacing: { xs: -0.5, md: -1.5 },
                fontFamily: 'Montserrat, Poppins, Inter, Segoe UI, Arial, sans-serif',
                textTransform: 'capitalize',
                color: '#fff',
                lineHeight: 1.12,
                fontStyle: 'normal',
              }}
            >
              Find the perfect freelance services for your business
            </Typography>
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#fff',
                borderRadius: 2,
                boxShadow: 2,
                p: 1,
                alignItems: 'center',
                maxWidth: 540,
                mb: 2,
              }}
            >
              <input
                type="text"
                placeholder="Try 'Logo Design'"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: 20,
                  padding: '16px 18px',
                  borderRadius: 8,
                  background: 'transparent',
                }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ px: 4, py: 1.5, fontWeight: 700, borderRadius: 2, ml: 1 }}
              >
                Search
              </Button>
            </Box>
            <Stack direction="row" spacing={2} alignItems="center" mt={1}>
              <Typography variant="body2" color="#fff" sx={{ opacity: 0.8 }}>
                Popular:
              </Typography>
              {['Website Design', 'WordPress', 'Logo Design', 'AI Services', 'Voice Over'].map((cat) => (
                <Button
                  key={cat}
                  color="secondary"
                  variant="text"
                  size="small"
                  sx={{ fontWeight: 700, textTransform: 'none', px: 1, color: '#fff', opacity: 0.9 }}
                >
                  {cat}
                </Button>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Trusted by section */}
      <Box sx={{ bgcolor: '#F8F7FC', py: 3, borderBottom: 1, borderColor: '#E5E1F6' }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={6} alignItems="center" justifyContent="center" flexWrap="wrap">
            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, letterSpacing: 1 }}>
              Trusted by:
            </Typography>
            
            {/* Microsoft Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <svg width="100" height="24" viewBox="0 0 100 24" fill="none">
                <rect x="0" y="0" width="11" height="11" fill="#F25022"/>
                <rect x="12" y="0" width="11" height="11" fill="#7FBA00"/>
                <rect x="0" y="12" width="11" height="11" fill="#00A4EF"/>
                <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
                <text x="28" y="16" fill="#5F5F5F" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">Microsoft</text>
              </svg>
            </Box>

            {/* Nike Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M24.09 8.64c-.34-.68-1.02-1.02-2.04-1.02-1.36 0-2.72.68-4.08 2.04L8.97 18.3c-.34.34-.68.34-1.02 0-.34-.34-.34-.68 0-1.02L16.95 8.64c1.36-1.36 2.72-2.04 4.08-2.04 1.02 0 1.7.34 2.04 1.02.34.68.34 1.36 0 2.04L14.07 18.3c-.34.34-.68.34-1.02 0-.34-.34-.34-.68 0-1.02l9-8.64c.34-.68.34-1.36 0-2.04z" fill="#000"/>
                <text x="28" y="16" fill="#5F5F5F" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">NIKE</text>
              </svg>
            </Box>

            {/* Google Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <svg width="70" height="24" viewBox="0 0 70 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#FF0000"/>
                <text x="8" y="16" fill="white" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold">A</text>
                <text x="28" y="16" fill="#5F5F5F" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">Adobe</text>
              </svg>
            </Box>

            {/* Slack Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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

      {/* Categories/Services grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom sx={{ color: '#2D1A47', mb: 2 }}>
          Browse talent by category
        </Typography>
        <Typography align="center" sx={{ color: '#6B7280', mb: 6, fontSize: '18px' }}>
          Get some inspiration from over 100+ professional skills
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { label: 'Development & IT', desc: 'Web, Mobile, Software Development', icon: 'Code', color: '#7C3AED' },
            { label: 'Design & Creative', desc: 'Graphics, Video, Animation', icon: 'Palette', color: '#A78BFA' },
            { label: 'Digital Marketing', desc: 'SEO, Social Media, Advertising', icon: 'TrendingUp', color: '#6366F1' },
            { label: 'Writing & Translation', desc: 'Content, Copy, Localization', icon: 'Edit', color: '#8B5CF6' },
            { label: 'Admin & Customer Support', desc: 'Virtual Assistants, Support', icon: 'Support', color: '#7C3AED' },
            { label: 'Finance & Accounting', desc: 'Bookkeeping, Financial Analysis', icon: 'AccountBalance', color: '#A78BFA' },
            { label: 'Engineering & Architecture', desc: 'CAD, 3D Modeling, Civil', icon: 'Engineering', color: '#6366F1' },
            { label: 'Sales & Marketing', desc: 'Lead Generation, Strategy', icon: 'Campaign', color: '#8B5CF6' },
          ].map((cat) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={cat.label}>
              <Box 
                sx={{
                  bgcolor: '#fff',
                  p: 4,
                  borderRadius: '20px',
                  border: '1px solid #E5E1F6',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(124,58,237,0.15)',
                    borderColor: '#7C3AED'
                  }
                }}
              >
                <Box 
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '16px',
                    bgcolor: `${cat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <Box 
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '8px',
                      bgcolor: cat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ color: '#fff', fontSize: '16px', fontWeight: 'bold' }}>
                      {cat.icon === 'Code' && '< />'}
                      {cat.icon === 'Palette' && '🎨'}
                      {cat.icon === 'TrendingUp' && '📈'}
                      {cat.icon === 'Edit' && '✏️'}
                      {cat.icon === 'Support' && '💬'}
                      {cat.icon === 'AccountBalance' && '💼'}
                      {cat.icon === 'Engineering' && '⚙️'}
                      {cat.icon === 'Campaign' && '🚀'}
                    </Box>
                  </Box>
                </Box>
                <Typography variant="h6" fontWeight={600} sx={{ color: '#2D1A47', mb: 1.5 }}>
                  {cat.label}
                </Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.5 }}>
                  {cat.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How it works */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 10 }, borderTop: 1, borderColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={900} align="center" gutterBottom>
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
        <Typography variant="h4" fontWeight={900} align="center" gutterBottom>
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

      {/* Call to Action */}
      <Box sx={{ bgcolor: '#f7faf7', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={900} gutterBottom>
            Find the talent you need. Get started now.
          </Typography>
          <Button variant="contained" size="large" color="primary" onClick={() => navigate('/signup')} sx={{ fontWeight: 700, px: 6, py: 2, fontSize: 20, mt: 2 }}>
            Join Lancerscape
          </Button>
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

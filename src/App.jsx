

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
      <Box sx={{ bgcolor: '#f7faf7', py: 2, borderBottom: 1, borderColor: 'grey.200' }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: 1 }}>
              Trusted by:
            </Typography>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" height={28} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" height={28} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Google_2015_logo.svg" alt="Google" height={28} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Unilever.svg" alt="Unilever" height={28} />
          </Stack>
        </Container>
      </Box>

      {/* Categories/Services grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="h4" fontWeight={900} align="center" gutterBottom>
          Browse talent by category
        </Typography>
        <Typography align="center" color="text.secondary" mb={4}>
          Get some inspiration from 100+ skills
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { label: 'Development & IT', desc: 'Web, Mobile, Software Dev', icon: '💻' },
            { label: 'Design & Creative', desc: 'Graphics, Video, Animation', icon: '🎨' },
            { label: 'Digital Marketing', desc: 'SEO, Social Media, Ads', icon: '📈' },
            { label: 'Writing & Translation', desc: 'Content, Copy, Localization', icon: '✍️' },
            { label: 'Admin & Customer Support', desc: 'Virtual Assistants, Support', icon: '📞' },
            { label: 'Finance & Accounting', desc: 'Bookkeeping, Analysis', icon: '💰' },
            { label: 'Engineering & Architecture', desc: 'CAD, 3D, Civil', icon: '🏗️' },
            { label: 'Sales & Marketing', desc: 'Leads, Strategy, Research', icon: '🛒' },
          ].map((cat) => (
            <Grid item xs={12} sm={6} md={3} key={cat.label}>
              <Box bgcolor="#fff" p={3} borderRadius={3} boxShadow={1} textAlign="center" sx={{ transition: '0.2s', '&:hover': { boxShadow: 4, bgcolor: 'grey.100' } }}>
                <Box fontSize={48} mb={1}>{cat.icon}</Box>
                <Typography variant="h6" fontWeight={700}>{cat.label}</Typography>
                <Typography color="text.secondary" fontSize={15}>{cat.desc}</Typography>
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
      <Route element={<Layout />}>
        <Route path="/jobs" element={<BrowseJobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/freelancer/:id" element={<FreelancerProfile />} />
        <Route path="/client/:id" element={<ClientProfile />} />
        <Route path="/dashboard" element={<FreelancerDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

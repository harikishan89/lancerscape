import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Avatar, 
  Stack, 
  Chip, 
  Button, 
  Typography, 
  Divider, 
  IconButton, 
  Badge, 
  TextField, 
  InputAdornment, 
  Tabs, 
  Tab, 
  Paper 
} from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WorkIcon from '@mui/icons-material/WorkOutline';
import StarIcon from '@mui/icons-material/StarBorder';
import AssignmentIcon from '@mui/icons-material/AssignmentTurnedIn';
import SearchIcon from '@mui/icons-material/Search';

const projects = [
  { title: 'React Landing Page', amount: 200, status: 'Completed', rating: 5, desc: 'Built a modern SaaS landing page with animations and responsive design.' },
  { title: 'WordPress Customization', amount: 150, status: 'Completed', rating: 4.5, desc: 'Customized theme, added features, and improved performance.' },
  { title: 'Logo Animation', amount: 80, status: 'In Progress', rating: null, desc: 'Creating a trendy animated logo intro for YouTube.' },
];

export default function FreelancerDashboard() {
  const totalEarned = projects.filter(p => p.status === 'Completed').reduce((sum, p) => sum + p.amount, 0);
  const completed = projects.filter(p => p.status === 'Completed').length;
  const inProgress = projects.filter(p => p.status === 'In Progress').length;
  const [tab, setTab] = React.useState(0);

  return (
    <Box sx={{ 
      minHeight: '100vh',
      width: '100vw',
      bgcolor: '#f7f8fc'
    }}>
      {/* Header */}
      <Box sx={{ 
        height: '72px',
        bgcolor: '#fff',
        borderBottom: '1px solid #E5E1F6',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, md: 4 },
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 1px 3px rgba(124,58,237,0.1)'
      }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#7C3AED', letterSpacing: -0.5 }}>
          Lancerscape
        </Typography>
        
        <Box sx={{ flex: 1, maxWidth: 480, mx: 4, display: { xs: 'none', md: 'block' } }}>
          <TextField
            fullWidth
            placeholder="Search for jobs or talent..."
            size="medium"
            sx={{ 
              bgcolor: '#F8F7FC',
              borderRadius: '50px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                height: 48,
                fontSize: '15px',
                '& fieldset': {
                  border: '1px solid #E5E1F6'
                },
                '&:hover fieldset': {
                  border: '1px solid #7C3AED'
                },
                '&.Mui-focused fieldset': {
                  border: '2px solid #7C3AED'
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#6B7280', fontSize: 20, ml: 1 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton 
            sx={{ 
              color: '#6B7280',
              '&:hover': { bgcolor: '#F3F0FA', color: '#7C3AED' },
              borderRadius: '12px',
              p: 1.5
            }}
          >
            <Badge badgeContent={3} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '11px' } }}>
              <MailIcon sx={{ fontSize: 22 }} />
            </Badge>
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#6B7280',
              '&:hover': { bgcolor: '#F3F0FA', color: '#7C3AED' },
              borderRadius: '12px',
              p: 1.5
            }}
          >
            <Badge badgeContent={5} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '11px' } }}>
              <NotificationsIcon sx={{ fontSize: 22 }} />
            </Badge>
          </IconButton>
          <Avatar 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            sx={{ 
              width: 40, 
              height: 40,
              border: '2px solid #7C3AED',
              cursor: 'pointer',
              '&:hover': { transform: 'scale(1.05)' },
              transition: 'transform 0.2s'
            }} 
          />
        </Stack>
      </Box>

      {/* Main Content */}
      <Box sx={{ 
        display: 'flex',
        minHeight: 'calc(100vh - 72px)',
        gap: 0
      }}>
        {/* Left Content */}
        <Box sx={{ 
          flex: 1,
          px: { xs: 3, md: 6 },
          py: { xs: 3, md: 5 },
          borderRight: '1px solid #E5E1F6',
          bgcolor: '#fff',
          minHeight: 'calc(100vh - 72px)'
        }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight={600} mb={1} sx={{ color: '#2D1A47', letterSpacing: -0.5 }}>
              Jobs you might like
            </Typography>
            <Typography variant="body1" sx={{ color: '#6B7280', fontSize: '16px' }}>
              Browse jobs that match your experience
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Tabs 
              value={tab} 
              onChange={(_, v) => setTab(v)} 
              sx={{ 
                mb: 3,
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '15px',
                  color: '#6B7280',
                  minHeight: 40,
                  '&.Mui-selected': {
                    color: '#7C3AED',
                    fontWeight: 600
                  }
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#7C3AED',
                  height: 3,
                  borderRadius: '2px'
                }
              }}
            >
              <Tab label="Best Matches" />
              <Tab label="Most Recent" />
              <Tab label="Saved Jobs" />
            </Tabs>
          </Box>
          
          <Stack spacing={3}>
            {projects.map((p, i) => (
              <Card 
                key={i} 
                sx={{ 
                  borderRadius: '16px', 
                  p: 4, 
                  bgcolor: '#fff',
                  border: '1px solid #E5E1F6',
                  boxShadow: '0 2px 8px rgba(124,58,237,0.08)',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(124,58,237,0.15)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Stack direction="row" spacing={1} mb={2}>
                  <Chip 
                    label={p.status} 
                    color={p.status === 'Completed' ? 'success' : 'warning'} 
                    size="small"
                    sx={{
                      fontWeight: 500,
                      fontSize: '12px',
                      borderRadius: '8px'
                    }}
                  />
                </Stack>
                <Typography variant="h5" fontWeight={600} mb={2} sx={{ color: '#2D1A47', letterSpacing: -0.3 }}>
                  {p.title}
                </Typography>
                <Typography sx={{ color: '#6B7280', mb: 3, fontSize: '15px', lineHeight: 1.6 }}>
                  {p.desc}
                </Typography>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <MonetizationOnIcon sx={{ color: '#7C3AED', fontSize: 20 }} />
                    <Typography fontWeight={600} sx={{ color: '#2D1A47', fontSize: '16px' }}>
                      ${p.amount}
                    </Typography>
                  </Stack>
                  {p.rating && (
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <StarIcon sx={{ color: '#F59E42', fontSize: 18 }} />
                      <Typography fontWeight={500} sx={{ color: '#6B7280', fontSize: '14px' }}>
                        {p.rating}
                      </Typography>
                    </Stack>
                  )}
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ 
          width: 360,
          bgcolor: '#F8F7FC',
          p: 4,
          height: 'calc(100vh - 72px)',
          position: 'sticky',
          top: '72px',
          overflow: 'auto'
        }}>
          {/* Profile Card */}
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              borderRadius: '20px', 
              mb: 4,
              bgcolor: '#fff',
              border: '1px solid #E5E1F6',
              boxShadow: '0 2px 12px rgba(124,58,237,0.08)'
            }}
          >
            <Stack direction="row" spacing={3} alignItems="center" mb={3}>
              <Avatar 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                sx={{ 
                  width: 72, 
                  height: 72,
                  border: '3px solid #7C3AED'
                }} 
              />
              <Box>
                <Typography variant="h5" fontWeight={600} sx={{ color: '#2D1A47', mb: 0.5 }}>
                  Alex R.
                </Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '15px', mb: 1 }}>
                  Senior Software Developer
                </Typography>
                <Chip 
                  label="Top Rated Plus" 
                  sx={{
                    bgcolor: '#7C3AED',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '11px',
                    borderRadius: '8px'
                  }}
                  size="small" 
                />
              </Box>
            </Stack>
            
            <Divider sx={{ my: 3, bgcolor: '#F3F0FA' }} />
            
            <Stack spacing={3}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Box sx={{ 
                  bgcolor: '#F3F0FA', 
                  borderRadius: '12px', 
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MonetizationOnIcon sx={{ color: '#7C3AED', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#6B7280', mb: 0.5 }}>
                    Total Earned
                  </Typography>
                  <Typography variant="h5" fontWeight={600} sx={{ color: '#2D1A47' }}>
                    ${totalEarned}
                  </Typography>
                </Box>
              </Stack>
              
              <Stack direction="row" spacing={3} alignItems="center">
                <Box sx={{ 
                  bgcolor: '#E8F5FF', 
                  borderRadius: '12px', 
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <AssignmentIcon sx={{ color: '#6366F1', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#6B7280', mb: 0.5 }}>
                    Jobs Completed
                  </Typography>
                  <Typography variant="h5" fontWeight={600} sx={{ color: '#2D1A47' }}>
                    {completed}
                  </Typography>
                </Box>
              </Stack>
              
              <Stack direction="row" spacing={3} alignItems="center">
                <Box sx={{ 
                  bgcolor: '#FEF3E2', 
                  borderRadius: '12px', 
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <WorkIcon sx={{ color: '#F59E42', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#6B7280', mb: 0.5 }}>
                    In Progress
                  </Typography>
                  <Typography variant="h5" fontWeight={600} sx={{ color: '#2D1A47' }}>
                    {inProgress}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>
          
          {/* Quick Actions */}
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              borderRadius: '20px', 
              mb: 4,
              bgcolor: '#fff',
              border: '1px solid #E5E1F6',
              boxShadow: '0 2px 12px rgba(124,58,237,0.08)'
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={3} sx={{ color: '#2D1A47' }}>
              Quick Actions
            </Typography>
            <Stack spacing={2}>
              <Button 
                variant="outlined" 
                fullWidth 
                sx={{
                  borderRadius: '12px',
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '15px',
                  borderColor: '#E5E1F6',
                  color: '#2D1A47',
                  '&:hover': {
                    borderColor: '#7C3AED',
                    bgcolor: '#F8F7FC'
                  }
                }}
              >
                Edit Profile
              </Button>
              <Button 
                variant="outlined" 
                fullWidth 
                sx={{
                  borderRadius: '12px',
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '15px',
                  borderColor: '#E5E1F6',
                  color: '#2D1A47',
                  '&:hover': {
                    borderColor: '#7C3AED',
                    bgcolor: '#F8F7FC'
                  }
                }}
              >
                View Proposals
              </Button>
              <Button 
                variant="contained" 
                fullWidth 
                sx={{
                  borderRadius: '12px',
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '15px',
                  bgcolor: '#7C3AED',
                  boxShadow: '0 2px 8px rgba(124,58,237,0.3)',
                  '&:hover': {
                    bgcolor: '#5B21B6',
                    boxShadow: '0 4px 16px rgba(124,58,237,0.4)'
                  }
                }}
              >
                Browse Jobs
              </Button>
            </Stack>
          </Paper>

          {/* Recent Activity */}
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              borderRadius: '20px',
              bgcolor: '#fff',
              border: '1px solid #E5E1F6',
              boxShadow: '0 2px 12px rgba(124,58,237,0.08)'
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={3} sx={{ color: '#2D1A47' }}>
              Recent Activity
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ p: 2, bgcolor: '#F8F7FC', borderRadius: '12px' }}>
                <Typography variant="body2" fontWeight={500} sx={{ color: '#2D1A47', mb: 0.5 }}>
                  New proposal submitted
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '13px' }}>
                  2 hours ago
                </Typography>
              </Box>
              <Box sx={{ p: 2, bgcolor: '#F8F7FC', borderRadius: '12px' }}>
                <Typography variant="body2" fontWeight={500} sx={{ color: '#2D1A47', mb: 0.5 }}>
                  Profile viewed 12 times
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '13px' }}>
                  Today
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

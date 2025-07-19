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
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      bgcolor: '#f8f7fc'
    }}>
      {/* Header */}
      <Box sx={{ 
        height: '64px',
        bgcolor: '#fff',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        px: 3,
        justifyContent: 'space-between'
      }}>
        <Typography variant="h5" sx={{ fontWeight: 900, color: '#7C3AED' }}>
          Lancerscape
        </Typography>
        
        <Box sx={{ flex: 1, maxWidth: 400, mx: 4 }}>
          <TextField
            fullWidth
            placeholder="Search for jobs..."
            size="small"
            sx={{ bgcolor: '#f8f9fa' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
            }}
          />
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <Badge badgeContent={3} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 36, height: 36 }} />
        </Stack>
      </Box>

      {/* Main Content */}
      <Box sx={{ 
        flex: 1,
        display: 'flex',
        overflow: 'hidden'
      }}>
        {/* Left Content */}
        <Box sx={{ 
          flex: 1,
          p: 4,
          overflow: 'auto',
          borderRight: '1px solid #e0e0e0'
        }}>
          <Typography variant="h4" fontWeight={900} mb={2}>
            Jobs you might like
          </Typography>
          
          <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
            <Tab label="Best Matches" />
            <Tab label="Most Recent" />
            <Tab label="Saved Jobs" />
          </Tabs>
          
          <Stack spacing={3}>
            {projects.map((p, i) => (
              <Card key={i} sx={{ borderRadius: 3, p: 3, bgcolor: '#fff' }}>
                <Stack direction="row" spacing={1} mb={1}>
                  <Chip label={p.status} color={p.status === 'Completed' ? 'success' : 'warning'} size="small" />
                </Stack>
                <Typography variant="h6" fontWeight={700} mb={1}>{p.title}</Typography>
                <Typography color="text.secondary" mb={2}>{p.desc}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <MonetizationOnIcon color="secondary" fontSize="small" />
                  <Typography fontWeight={700}>${p.amount}</Typography>
                  {p.rating && <><StarIcon color="warning" fontSize="small" /><Typography fontWeight={700}>{p.rating}</Typography></>}
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ 
          width: 320,
          bgcolor: '#faf9fe',
          p: 3,
          overflow: 'auto'
        }}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mb: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="h6" fontWeight={900}>Alex R.</Typography>
                <Typography color="text.secondary" fontSize={14}>Software Developer</Typography>
                <Chip label="Top Rated" color="secondary" size="small" sx={{ mt: 1 }} />
              </Box>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <MonetizationOnIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">Total Earned</Typography>
                  <Typography fontWeight={900}>${totalEarned}</Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <AssignmentIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">Completed</Typography>
                  <Typography fontWeight={900}>{completed}</Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <WorkIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">In Progress</Typography>
                  <Typography fontWeight={900}>{inProgress}</Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>
          
          <Paper elevation={1} sx={{ p: 3, borderRadius: 3, mb: 3 }}>
            <Typography fontWeight={700} mb={2}>Quick Actions</Typography>
            <Stack spacing={1}>
              <Button variant="outlined" fullWidth>Edit Profile</Button>
              <Button variant="outlined" fullWidth>View Proposals</Button>
              <Button variant="outlined" fullWidth>Wallet</Button>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

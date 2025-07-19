
import React from 'react';
import { Box, Grid, Card, CardContent, Avatar, Stack, Chip, Button, Typography, Divider, IconButton, Badge, TextField, InputAdornment, Tabs, Tab, Paper } from '@mui/material';
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
    <Box sx={{ bgcolor: '#f8f7fc', minHeight: '100vh', width: '100vw', px: { xs: 0, md: 0 }, py: { xs: 0, md: 0 } }}>
      <Grid container spacing={0} sx={{ minHeight: '100vh' }}>
        {/* Left: Main Content */}
        <Grid item xs={12} md={8} lg={9} sx={{ borderRight: { md: '1px solid #ececec' }, px: { xs: 2, md: 6 }, py: { xs: 4, md: 8 } }}>
          <Box sx={{ maxWidth: 700, mx: 'auto' }}>
            <Typography variant="h4" fontWeight={900} mb={2}>
              Jobs you might like
            </Typography>
            <TextField
              fullWidth
              placeholder="Search for jobs"
              size="small"
              sx={{ mb: 3, bgcolor: '#fff', borderRadius: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
              <Tab label="Best Matches" />
              <Tab label="Most Recent" />
              <Tab label="Saved Jobs" />
            </Tabs>
            <Typography color="text.secondary" fontSize={15} mb={2}>
              Browse jobs that match your experience to a client’s hiring preferences. Ordered by most relevant.
            </Typography>
            <Stack spacing={3}>
              {projects.map((p, i) => (
                <Card key={i} sx={{ borderRadius: 4, boxShadow: 1, p: 3, bgcolor: '#fff', display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Stack direction="row" spacing={1} mb={1}>
                    <Chip label={p.status} color={p.status === 'Completed' ? 'success' : 'warning'} size="small" />
                  </Stack>
                  <Typography variant="h6" fontWeight={800} mb={0.5}>{p.title}</Typography>
                  <Typography color="text.secondary" fontSize={15} mb={1}>{p.desc}</Typography>
                  <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                    <MonetizationOnIcon color="secondary" fontSize="small" />
                    <Typography fontWeight={700}>${p.amount}</Typography>
                    {p.rating && <><StarIcon color="warning" fontSize="small" /><Typography fontWeight={700}>{p.rating}</Typography></>}
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Right: Sidebar */}
        <Grid item xs={12} md={4} lg={3} sx={{ bgcolor: '#faf9fe', px: { xs: 2, md: 3 }, py: { xs: 4, md: 8 }, minHeight: '100vh' }}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4, mb: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="h6" fontWeight={900}>Alex R.</Typography>
                <Typography color="text.secondary" fontSize={14}>Software Developer</Typography>
                <Stack direction="row" spacing={1} mt={1}>
                  <Chip label="Top Rated" color="secondary" size="small" />
                </Stack>
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
            <Divider sx={{ my: 2 }} />
            <Stack direction="row" spacing={2}>
              <IconButton color="primary">
                <Badge badgeContent={2} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="primary">
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Stack>
          </Paper>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 4, mb: 3 }}>
            <Typography fontWeight={700} mb={1}>Quick Actions</Typography>
            <Stack spacing={1}>
              <Button variant="outlined" color="primary" size="small" fullWidth sx={{ borderRadius: 2 }}>Edit Profile</Button>
              <Button variant="outlined" color="primary" size="small" fullWidth sx={{ borderRadius: 2 }}>View Proposals</Button>
              <Button variant="outlined" color="primary" size="small" fullWidth sx={{ borderRadius: 2 }}>Wallet</Button>
            </Stack>
          </Paper>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 4, mb: 3 }}>
            <Typography fontWeight={700} mb={1}>Preferences</Typography>
            <Stack spacing={1}>
              <Button variant="text" color="primary" size="small" fullWidth sx={{ borderRadius: 2, justifyContent: 'flex-start' }}>Notifications</Button>
              <Button variant="text" color="primary" size="small" fullWidth sx={{ borderRadius: 2, justifyContent: 'flex-start' }}>Settings</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

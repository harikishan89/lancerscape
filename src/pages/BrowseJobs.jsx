


import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Chip, Stack, Tabs, Tab, Divider, TextField, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const jobs = [
  { title: 'Build a React Landing Page', price: '$200', tags: ['React', 'UI/UX'], desc: 'Need a modern, responsive landing page for a SaaS product.' },
  { title: 'WordPress Site Customization', price: '$150', tags: ['WordPress', 'PHP'], desc: 'Customize an existing theme and add new features.' },
  { title: 'Logo Animation', price: '$80', tags: ['Animation', 'After Effects'], desc: 'Create a trendy animated logo intro for YouTube.' },
];

export default function BrowseJobs() {
  const [tab, setTab] = React.useState(0);
  return (
    <Box sx={{ bgcolor: '#f8f7fc', minHeight: '100vh', width: '100vw', py: { xs: 4, md: 6 } }}>
      <Box sx={{ width: '100%', maxWidth: 'none', px: { xs: 2, sm: 4, md: 8 }, mx: 'auto' }}>
        <Typography variant="h4" fontWeight={900} align="left" mb={1} sx={{ letterSpacing: -1, color: '#222' }}>
          Jobs you might like
        </Typography>
        <TextField
          fullWidth
          placeholder="Search for jobs"
          size="small"
          sx={{ mb: 2, bgcolor: '#fff', borderRadius: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 1 }}>
          <Tab label="Best Matches" />
          <Tab label="Most Recent" />
          <Tab label="Saved Jobs" />
        </Tabs>
        <Typography color="text.secondary" fontSize={15} mb={2} align="left">
          Browse jobs that match your experience to a client’s hiring preferences. Ordered by most relevant.
        </Typography>
        <Paper elevation={0} sx={{ p: 0, bgcolor: 'transparent' }}>
          {jobs.map((job, i) => (
            <React.Fragment key={i}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', py: 3, px: { xs: 1, sm: 2 }, bgcolor: '#fff', borderRadius: 3, mb: 0, boxShadow: 0 }}>
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" spacing={1} mb={1}>
                    {job.tags.map(tag => <Chip key={tag} label={tag} color="secondary" size="small" />)}
                  </Stack>
                  <Typography variant="h6" fontWeight={700} mb={0.5} sx={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', color: '#222' }}>
                    {job.title}
                  </Typography>
                  <Typography color="text.secondary" fontSize={15} mb={1} sx={{ maxWidth: 700 }}>
                    {job.desc}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                    <Typography variant="subtitle2" fontWeight={700} color="primary" sx={{ fontSize: 18 }}>{job.price}</Typography>
                  </Stack>
                </Box>
                <Box sx={{ ml: 2, mt: 1 }}>
                  <Button variant="outlined" color="primary" sx={{ borderRadius: 2, fontWeight: 700, px: 2, fontSize: 15 }}>
                    View Details
                  </Button>
                </Box>
              </Box>
              {i !== jobs.length - 1 && <Divider sx={{ my: 0 }} />}
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}

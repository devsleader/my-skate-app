// components/Header/TopBar.tsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const TopBar = () => {
  return (
    <div>
      <Container className="flex justify-between items-center py-2">
        <div className="flex items-center text-white">
          <AccessTime className="mr-2" />
          <Typography>08 AM - 10 PM</Typography>
        </div>
        <Button
          variant="text"
          sx={{ color: 'white', '&:hover': { color: '#9FE870' } }}
        >
          Get Our Apps
        </Button>
      </Container>
    </div>
  );
};
export default TopBar;
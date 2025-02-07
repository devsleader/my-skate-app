'use client'
import React from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Container, 
  IconButton 
} from '@mui/material';
import { 
  Skateboarding as SkateboardIcon, 
  TwoWheeler as MotorcycleIcon, 
  Build as BuildIcon, 
  CameraAlt as CameraIcon, 
  Weekend as CampingIcon, 
  Store as StoreIcon 
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import 'swiper/css';

const services = [
  {
    icon: <SkateboardIcon />,
    title: 'Skateboard Course',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <MotorcycleIcon />,
    title: 'Skateboard Supply',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <BuildIcon />,
    title: 'Skateboard Repair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <CameraIcon />,
    title: 'Skate Park Rental',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <CampingIcon />,
    title: 'Skateboard Camp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <StoreIcon />,
    title: 'Skateboard Shop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];


const SkateboardServices = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 3
                  }
                }}
              >
                <IconButton 
                  sx={{ 
                    color: 'primary.main', 
                    fontSize: 64, 
                    mb: 2 
                  }}
                >
                  {service.icon}
                </IconButton>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkateboardServices;
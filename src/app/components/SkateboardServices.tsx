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
import { motion } from 'framer-motion';
import 'swiper/css';
import Image from 'next/image';

const services = [
  {
    icon: '/skateboarding-icon-1.png',
    title: 'Skateboard Course',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: '/skateboarding-icon-2.png',
    title: 'Skateboard Supply',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: '/skateboarding-icon-3.png',
    title: 'Skateboard Repair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: '/skateboarding-icon-4.png',
    title: 'Skate Park Rental',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: '/skateboarding-icon-5.png',
    title: 'Skateboard Camp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: '/skateboarding-icon-6.png',
    title: 'Skateboard Shop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];


const SkateboardServices = () => {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#0B0F19' }}>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',  
                  p: 4,
                  bgcolor: '#0B0F19',
                  border: '1px solid #2A3BAB',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 20px rgba(42, 59, 171, 0.3)'
                  }
                }}
              >
                <IconButton 
                  sx={{ 
                    width: '100px',
                    height: '100px',
                    mb: 2,
                  }}
                >
                  <Image src={service.icon} alt="logo" className='rounded-full' width={100} height={100} />
                </IconButton>
                <CardContent>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      color: '#B4F72E',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      mb: 2
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#8A8F98',
                      mb: 3
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                <Button 
                  variant="contained" 
                  sx={{ 
                    mt: 'auto',
                    bgcolor: '#B4F72E',
                    color: '#000',
                    '&:hover': {
                      bgcolor: '#9FE619'
                    },
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    px: 4,
                    width: 'fit-content',
                    borderRadius: '9999px',
                  }}
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
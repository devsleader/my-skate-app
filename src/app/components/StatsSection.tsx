'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const CounterBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
}));



// Counter component with animation
const Counter = ({ value, duration = 2000, suffix = '+', title }: { value: number, duration?: number, suffix?: string, title: string }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(value * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <CounterBox>
      <Typography variant="h3" sx={{ color: '#9ACD32', fontWeight: 'bold', mb: 1 }}>
        {count}{suffix}
      </Typography>
      <Typography variant="body1" sx={{ color: 'white' }}>
        {title}
      </Typography>
    </CounterBox>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { value: 27, title: 'Years Experience', animation: 'fadeInLeft' },
    { value: 399, title: 'Active Student', animation: 'fadeInUp' },
    { value: 799, title: 'Happy Customer', animation: 'fadeInDown' },
    { value: 4.9, title: 'Client Rating', animation: 'fadeInRight' }
  ];

  return (
    <Box sx={{ bgcolor: '#0A0A0A', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Counter 
                  value={stat.value} 
                  title={stat.title}
                  suffix={stat.value === 4.9 ? '+' : '+'}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default StatsSection;
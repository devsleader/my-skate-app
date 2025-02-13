'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Box sx={{  color: 'white', py: 8 }}>
      <Container maxWidth="lg">
          {/* Header Section */}
          <motion.div {...fadeInUp}>
            <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography 
              align="center" 
              sx={{ color: '#9ACD32' }}
            >
              {subtitle}
            </Typography>
          </motion.div>

      </Container>
    </Box>
  );
};
export default PageHeader;
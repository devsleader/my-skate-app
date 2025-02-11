'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Button,
  styled,
} from '@mui/material';
import Image from 'next/image';

const StyledButton = styled(Button)({
  backgroundColor: '#C5E853',
  color: '#000000',
  borderRadius: '50px',
  padding: '8px 24px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#b5d748',
  },
});

const Class = () => {
  // Animation variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
      }}
    >
      

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Title */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                lineHeight: 1.2,
                mb: 4,
                textTransform: 'uppercase',
              }}
            >
              Let's fun with<br />our class!!
            </Typography>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            style={{ marginBottom: '2rem' }}
          >
            <StyledButton
              size="large"
            >
              Join us
            </StyledButton>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            style={{
              width: '100%',
              position: 'relative',
              backgroundImage: 'url("/Ornament.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '300px', sm: '400px', md: '500px' },
              }}
            >
              <Image
                src="/Skater-Teenagers.png"
                alt="Skater Teenagers"
                fill
                style={{
                  objectFit: 'contain',
                }}
                priority
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Class;
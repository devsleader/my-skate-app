'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#000',
    color: 'white',
    borderRadius: '50px',
    padding: '10px 32px',
    '&:hover': {
      backgroundColor: '#222',
    },
  }));
  
const CTASection = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingTop:'4rem'
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                bgcolor: '#9ACD32',
                p: 6,
                borderRadius: '100px 100px 0 0',
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#000',
                    lineHeight: 1
                  }}
                >
                  Let's fun with<br />our class!!
                </Typography>
                <Typography 
                  sx={{ 
                    mb: 2,
                    color: '#000'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <StyledButton variant="contained">
                  Join Us
                </StyledButton>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CTASection;
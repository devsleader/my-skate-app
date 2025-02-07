'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Skateboarding } from '@mui/icons-material';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A1A1A',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  color: 'white',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Box sx={{ bgcolor: '#0A0A0A', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <motion.div {...fadeInUp}>
            <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
              ABOUT US
            </Typography>
            <Typography 
              align="center" 
              sx={{ color: '#9ACD32', mb: 8 }}
            >
              We provide innovative solution for your hobby needs.
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              <motion.div {...fadeInLeft}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 'bold', 
                  mb: 4,
                  textTransform: 'uppercase',
                  lineHeight: 1.2
                }}>
                  professional<br />
                  skateboard<br />
                  coaching
                </Typography>
                <Typography sx={{ color: 'grey.500', mb: 4 }}>
                  Lorem ipsum dolor sit amet consectetur. Commodo egestas condimentum morbi. Non et enim egestas in justo.
                </Typography>
              </motion.div>

              {/* Vision Section */}
              <motion.div {...fadeInUp}>
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  <IconWrapper sx={{ border: '1px solid white' }}>
                    <Skateboarding />
                  </IconWrapper>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Our Vision
                    </Typography>
                    <Typography sx={{ color: 'grey.500' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* Mission Section */}
              <motion.div {...fadeInUp}>
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  <IconWrapper sx={{ bgcolor: '#9ACD32' }}>
                    <Skateboarding />
                  </IconWrapper>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Our Mission
                    </Typography>
                    <Typography sx={{ color: 'grey.500' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              <motion.div {...fadeInUp}>
                <Button 
                  variant="contained"
                  sx={{
                    bgcolor: '#9ACD32',
                    color: 'black',
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      bgcolor: '#8bbc2b'
                    }
                  }}
                >
                  See our service
                </Button>
              </motion.div>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <motion.div {...fadeInUp}>
                  <Box 
                    component="img"
                    src="/Smiling-boy-with-red-headphones.png"
                    alt="Skateboarder"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 4
                    }}
                  />
                </motion.div>

                {/* Experience Counter */}
                <motion.div {...fadeInRight}>
                  <StyledPaper 
                    sx={{ 
                      position: 'absolute',
                      top: 32,
                      right: -16
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#9ACD32', fontWeight: 'bold' }}>
                      27+
                    </Typography>
                    <Typography variant="body2">
                      Year Experience
                    </Typography>
                  </StyledPaper>
                </motion.div>

                {/* Student Counter */}
                <motion.div {...fadeInLeft}>
                  <StyledPaper 
                    sx={{ 
                      position: 'absolute',
                      bottom: '33%',
                      left: -16
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#9ACD32', fontWeight: 'bold' }}>
                      100+
                    </Typography>
                    <Typography variant="body2">
                      Active Student
                    </Typography>
                  </StyledPaper>
                </motion.div>

                {/* Bottom Text */}
                <motion.div 
                  {...fadeInUp}
                  style={{
                    padding: '32px'
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                    LEARN FROM<br />THE EXPERT
                  </Typography>
                  <Typography sx={{ color: 'grey.500' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                  </Typography>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
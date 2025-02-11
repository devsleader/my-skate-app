'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Skateboarding } from '@mui/icons-material';
import StatCard from './StatCard';



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
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
            {/* Left Column */}
            <Box sx={{ flex: 1 }}>
              <motion.div {...fadeInLeft}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 'bold', 
                  mb: 4,
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  color: '#9ACD32'
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
                  <IconWrapper sx={{ border: '1px solid white', width: '54px' }}>
                    <Skateboarding />
                  </IconWrapper>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color:'#9ACD32' }}>
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
                  <IconWrapper sx={{ bgcolor: '#9ACD32',  width: '54px' }}>
                    <Skateboarding />
                  </IconWrapper>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color:'#9ACD32' }}>
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
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1 }} >
              <Box sx={{ 
                position: 'relative',
                backgroundImage: 'url("/Frame-About-top.png")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'contain',
                px: 4  // Adding padding to ensure content doesn't touch the edges
              }}>
                <motion.div {...fadeInUp}>
                  <Box 
                    component="img"
                    src="/Smiling-boy-with-red-headphones.png"
                    alt="Skateboarder"
                    sx={{
                      width: '70%',
                      margin: 'auto',
                      height: 'auto',
                      borderRadius: 4
                    }}
                  />
                </motion.div>

                {/* Experience Counter */}
                <motion.div {...fadeInRight}>
                      <StatCard 
                        count="199+" 
                        label="Happy Customer"
                        className="absolute bottom-[25%] right-[-30px]"
                      />
                </motion.div>

                {/* Student Counter */}
                <motion.div {...fadeInLeft}>
                 <StatCard 
                  count="100+" 
                  label="Active Student"
                  className="absolute bottom-[55%] left-[-50px]"
                />
                </motion.div>

                {/* Bottom Text */}
                <motion.div 
                  {...fadeInUp}
                >
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color:'#9ACD32' }}>
                    LEARN FROM<br />THE EXPERT
                  </Typography>
                  <Typography sx={{ color: 'grey.500', paddingBottom:'10px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
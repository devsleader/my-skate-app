'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Skateboarding } from '@mui/icons-material';



const IconWrapper = styled(Box)(() => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const TeamSection = () => {
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

 

  return (
    <Box sx={{  color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2
         }}>
            {/* Left Column */}
            <Box sx={{ flex: 0.45 }} >
              <Box sx={{ 
                backgroundImage: 'url("/Frame-Pricing-2.png")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'contain',
              }}>
                <motion.div {...fadeInUp}>
                  <Box 
                    component="img"
                    src="/Cheerful-young-man-with-skateboard.png"
                    alt="Skateboarder"
                    sx={{
                      width: '80%',
                      margin: 'auto',
                      height: 'auto',
                      borderRadius: 4
                    }}
                  />
                </motion.div>
              </Box>
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 0.55 }}>
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
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TeamSection;
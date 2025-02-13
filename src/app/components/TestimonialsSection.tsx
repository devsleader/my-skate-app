"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
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

const TestimonialsSection: React.FC = () => {
  return (
    <Container className="!p-0">
      <Box 
        component="section" 
        className="bg-[#F8F8F1] px-8 py-12 md:px-16 md:py-24 rounded-[25%] min-h-screen"
        sx={{ margin: 0 }}
      >
        <Box className="px-12">
          <Box className="flex justify-between items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '3rem', md: '4rem' }, 
                  marginBottom: '2rem',
                  fontWeight: 'bold',
                  color: 'black'
                }}
              >
                OUR CUSTOMER
                <br />
                FEEDBACKS
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <StyledButton>
                  SEE ALL
                </StyledButton>
              </motion.div>
            </motion.div>
          </Box>
          
          <Box className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl"
            >
              <Card
                sx={{
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#1A1B1E',
                  boxShadow: 'none',
                  borderRadius: '99999px',
                }}
              >
                <Box
                  className="w-full h-full rounded-xl mb-6"
                  component="div"
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Image src="/A-teenage-boy-carrying-skateboard.png" alt="JENNY WILSON" 
                  width={200} height={200} />
                </Box>
                <Typography
                  variant="h3"
                  className={`text-2xl font-black mb-4 text-white`}
                >
                  BEST SKATEBOARD COURSE!
                </Typography>
                <Typography
                  variant="body1"
                  className={`mb-6 text-white/90`}
                >
                  I stumbled upon this skate website while searching for new skateboard gear, and I couldn&apos;t be happier with the experience.
                </Typography>
                <Typography
                  variant="h6"
                  className={`font-bold mb-1 text-white`}
                >
                  JENNY WILSON
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={`text-white/75`}
                >
                  Freelancer
                </Typography>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl"
            >
              <Card
                sx={{
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#C5E853',
                  boxShadow: 'none',
                  borderRadius: '99999px',
                }}
              >
                <Box
                  className="w-full h-full rounded-xl mb-6"
                  component="div"
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Image src="/Young-female-skateboarder.png" alt="INDRA MULIANA"
                  width={200} height={200} />
                </Box>
                <Typography
                  variant="h3"
                  className={`text-2xl font-black mb-4 text-black`}
                >
                  SKATE COACH ARE FRIENDLY &nbsp;🙂
                </Typography>
                <Typography
                  variant="body1"
                  className={`mb-6 text-black/90`}
                >
                  This skateboard course agency are fun, and friendly, I&apos;m very glad to have opportunity to join this skateboard course, Thank you!
                </Typography>
                <Typography
                  variant="h6"
                  className={`font-bold mb-1 text-black`}
                >
                  INDRA MULIANA
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={`text-black/75`}
                >
                  Student
                </Typography>
              </Card>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
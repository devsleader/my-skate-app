"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';



// Custom styled components
const StyledCard = styled(Card)<{ variant: 'dark' | 'light' }>(({ variant }) => ({
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: variant === 'dark' ? '#1A1B1E' : '#C5E853',
  boxShadow: 'none',
  borderRadius: '99999px',
}));

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

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  imageSrc: string;
  variant: 'dark' | 'light';
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  comment,
  imageSrc,
  variant
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl"
    >
      <StyledCard variant={variant}>
        
        <Box
          className="w-full h-full rounded-xl mb-6"
          component="div"
        >
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        </Box>
        <Typography
          variant="h3"
          className={`text-2xl font-black mb-4 ${
            variant === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          {variant === 'dark' ? 'BEST SKATEBOARD COURSE!' : 'SKATE COACH ARE FRIENDLY 🙂'}
        </Typography>
        <Typography
          variant="body1"
          className={`mb-6 ${variant === 'dark' ? 'text-white/90' : 'text-black/90'}`}
        >
          {comment}
        </Typography>
        <Typography
          variant="h6"
          className={`font-bold mb-1 ${
            variant === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          className={`${variant === 'dark' ? 'text-white/75' : 'text-black/75'}`}
        >
          {role}
        </Typography>
        
      </StyledCard>
    </motion.div>
  );
};

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
            <>
              <Testimonial
                name="JENNY WILSON"
                role="Freelancer"
                comment="I stumbled upon this skate website while searching for new skateboard gear, and I couldn't be happier with the experience."
                imageSrc="/A-teenage-boy-carrying-skateboard.png"
                variant="dark"
              />
              <Testimonial
                name="INDRA MULIANA"
                role="Student"
                comment="This skateboard course agency are fun, and friendly, I'm very glad to have opportunity to join this skateboard course, Thank you!"
                imageSrc="/Young-female-skateboarder.png"
                variant="light"
              />
            </>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Button } from '@mui/material';



// Define the props type for InstructorCard
interface InstructorCardProps {
  name: string;
  description: string;
  imageSrc: string;
  className?: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ name, description, imageSrc, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <Box className="relative">
      <img src={imageSrc} alt={name} className={`m-auto ${className || 'w-full'}`} />
    </Box>
    <Typography variant="h3" className="text-2xl font-black mt-4 text-[#C5E853]">
      {name}
    </Typography>
    <Typography className="text-white/75 mt-2 max-w-xs mx-auto">
      {description}
    </Typography>
  </motion.div>
);




const SkateCourseSection1 = () => {
  return (
    <>
      <Box className="bg-[#F5FAE7]">
        <Container>
          <Box className="text-center mb-8">
            <Typography 
              variant="h2" 
              sx={{
                fontSize: { xs: '2.25rem', md: '3rem' },
                color: '#040D17',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}
            >
              OUR EXPERT
              <br />
              INSTRUCTORS
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#C5E853',
                color: 'black',
                borderRadius: '9999px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#b5d748'
                }
              }}
            >
              ALL INSTRUCTORS
            </Button>
          </Box>
        </Container>
          <div className="bg-[#B8E144] py-8" />
              
      </Box>
      
      <Box className='relative'>
      <div className="absolute top-[-1px] left-0 right-0 h-[16rem] bg-[#B8E144]" style={{clipPath: 'polygon(0% 0%, 0% 0%, 110% 0%, 0% 75%)'}} />
      <Container>
          <Box className="grid md:grid-cols-3 gap-8 items-end">
            <InstructorCard
              name="DIANA STEMPFERT"
              description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu"
              imageSrc="/Cheerful-young-man-with-skateboard.png"
              className="w-[80%]"
            />
            <InstructorCard
              name="ROBERT GIBSON"
              description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu"
              imageSrc="/Enjoy-all-the-benefits-of-an-Envato-Elements-subscription.png"
            />
            <InstructorCard
              name="INDRA SCOOPE"
              description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu"
              imageSrc="/Young-skateboarder-at-skate-park-indoor.png"
            />
          </Box>
      </Container>
      </Box>
    </>
  );
};

export default SkateCourseSection1;
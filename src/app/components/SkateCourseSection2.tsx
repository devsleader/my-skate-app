'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

// Define the props type for FeatureCard
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'dark' | 'light';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, variant = 'dark' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`p-6 rounded-full flex items-center gap-4 ${
      variant === 'light' ? 'bg-[#C5E853]' : 'bg-[#1A1B1E]'
    }`}
  >
    <Box>
      <Image className="rounded-full" src={icon} alt={title} width={150} height={150} />
    </Box>
    <Box>
      <Typography variant="h4" className={`mb-4 ${
      variant === 'light' ? 'text-black' : 'text-white'
    }`} >
        {title}
      </Typography>
      <Typography variant="body2"  className={`opacity-75 ${
      variant === 'light' ? 'text-black' : 'text-white'
    }`}>
        {description}
      </Typography>
    </Box>
  </motion.div>
);

const SkateCourseSection2 = () => {
  return (
    <>
      <Box className="py-32">
        <Container>
          <Box className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <Typography variant="h2" className="text-4xl md:text-5xl font-black mb-2">
                WHY OUR
                <br />
                SKATE
                <br />
                <span className="text-[#C5E853]">COURSE?</span>
              </Typography>
            </motion.div>
            <FeatureCard
                icon= '/IconC3.png'
                title="EXPERT INSTRUCTORS"
                description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac"
                variant="light"
              />
              <FeatureCard
                icon= '/IconC2.png'
                title="SAFE LEARNING GUARANTEE"
                description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac"
              />
              <FeatureCard
                icon= '/IconC1.png'
                title="FUN AND ENJOYABLE"
                description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac"
              />
            <Box className="space-y-6">
              
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SkateCourseSection2;
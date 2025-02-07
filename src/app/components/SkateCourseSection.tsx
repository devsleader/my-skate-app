'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Card, Button } from '@mui/material';
import { Crown } from 'lucide-react';

// Define the props type for InstructorCard
interface InstructorCardProps {
  name: string;
  description: string;
  imageSrc: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ name, description, imageSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <Box className="relative">
      <img src={imageSrc} alt={name} className="w-64 h-64 object-cover" />
    </Box>
    <Typography variant="h3" className="text-2xl font-black mt-4 text-[#C5E853]">
      {name}
    </Typography>
    <Typography className="text-white/75 mt-2 max-w-xs mx-auto">
      {description}
    </Typography>
  </motion.div>
);

// Define the props type for FeatureCard
interface FeatureCardProps {
  icon: React.ReactNode; // Define the type for the icon prop
  title: string;
  description: string;
  variant?: 'dark' | 'light'; // Optional prop with default value
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, variant = 'dark' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`p-6 rounded-3xl flex items-start gap-4 ${
      variant === 'light' ? 'bg-[#C5E853]' : 'bg-[#1A1B1E]'
    }`}
  >
    <Box className="bg-[#F8F8F1] p-4 rounded-full">
      {icon}
    </Box>
    <Box>
      <Typography variant="h6" className="font-black mb-2">
        {title}
      </Typography>
      <Typography variant="body2" className="opacity-75">
        {description}
      </Typography>
    </Box>
  </motion.div>
);

const SkateCourseSection = () => {
  return (
    <>
      <Box className="bg-[#F8F8F1] py-16">
        <Box className="max-w-6xl mx-auto px-4">
          <Box className="text-center mb-8">
            <Typography variant="h2" className="text-4xl md:text-5xl font-black mb-4">
              OUR EXPERT
              <br />
              INSTRUCTORS
            </Typography>
            <Button
              variant="contained"
              className="bg-[#C5E853] text-black rounded-full hover:bg-[#b5d748] normal-case"
            >
              ALL INSTRUCTORS
            </Button>
          </Box>

          <Box className="grid md:grid-cols-3 gap-8 mt-16">
            <InstructorCard
              name="DIANA STEMPFERT"
              description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu"
              imageSrc="/api/placeholder/400/400"
            />
            <InstructorCard
              name="ROBERT GIBSON"
              description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu"
              imageSrc="/api/placeholder/400/400"
            />
            <InstructorCard
              name="INDRA SCOOPE"
              description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu"
              imageSrc="/api/placeholder/400/400"
            />
          </Box>
        </Box>
      </Box>

      <Box className="bg-[#1A1B1E] py-16">
        <Box className="max-w-6xl mx-auto px-4">
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

            <Box className="space-y-6">
              <FeatureCard
                icon={<Crown className="w-8 h-8" />}
                title="EXPERT INSTRUCTORS"
                description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac"
                variant="light"
              />
              <FeatureCard
                icon={<Crown className="w-8 h-8" />}
                title="SAFE LEARNING GUARANTEE"
                description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac"
              />
              <FeatureCard
                icon={<Crown className="w-8 h-8" />}
                title="FUN AND ENJOYABLE"
                description="Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SkateCourseSection;
'use client'
// components/Hero/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography } from '@mui/material';
import StatCard from './StatCard';

const Hero = () => {
  return (
    <section className="w-full bg-[#0A0F16] pt-20 pb-4"
    style={{ backgroundImage: 'url(/group-16.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <Container className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <Typography 
            variant="h1" 
            sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' }, fontWeight: 'bold', color: 'white', lineHeight: 1.2 }}
          >
            WE ARE BEST SKATEBOARD COURSE
          </Typography>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#9FE870] text-black px-8 py-3 rounded-full hover:bg-[#8FD860] transition-colors font-medium"
          >
            LEARN MORE
          </motion.button>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Typography className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur. Commodo egestas condimentum morbi maecenas. Non et enim egestas in justo.
          </Typography>
          <hr className='w-[10%] mt-4 border-t-4 border-[#9FE870]' />
          
          <div 
            className="relative mt-12" 
            style={{ backgroundImage: 'url(/group-14.png)',backgroundSize: '100% auto', backgroundPosition: '47px 77px', backgroundRepeat: 'no-repeat' }}
          >
            <motion.img
              src="/skater.png"
              alt="Skateboarder"
              className="w-full"
              initial={{ y: 20 }}
              animate={{ y: -20 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
              }}
            />

            {/* Stats */}
            <StatCard 
              count="100+" 
              label="Active Student"
              className="absolute bottom-[45%] left-[-50px]"
            />
            
            <StatCard 
              count="199+" 
              label="Happy Customer"
              className="absolute bottom-[32%] right-[80px]"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;





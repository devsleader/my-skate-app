'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';

const ServiceCard: React.FC<{ Icon: string; title: string; isGreen?: boolean }> = ({ Icon, title }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className={`p-6 rounded-3xl ${isHovered ? 'bg-[#9FE12C]' : 'bg-[#1A1F25]'} transition-all hover:translate-y-[-8px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full aspect-square flex items-center justify-center mb-6">
        <Image src={Icon} alt={title} width={300} height={300} />
      </div>
      <h3 className={`text-xl font-bold mb-3 ${isHovered ? 'text-black' : 'text-white'}`}>
        {title}
      </h3>
      <p className={`text-sm ${isHovered ? 'text-black/80' : 'text-white/60'}`}>
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </motion.div>
  );
};

const ServiceSection = () => (
  <Container className="pt-20 pb-32 relative">
   
      <div className="flex justify-between items-center mb-16">
        <div> 
         <Typography variant="h2" className="text-4xl font-bold text-white">
            MAIN
          </Typography>
          
          <Typography variant="h2" className="text-4xl font-bold text-[#9FE12C]">
            SERVICE
          </Typography>
         </div>
         <hr className='w-[60%] border-[#9FE12C]' />
        <Button
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '0.875rem',
            fontWeight: 500,
            borderRadius: '9999px',
            border: 1,
            borderColor: '#9FE12C',
            color: '#9FE12C',
            '&:hover': {
              backgroundColor: '#9FE12C',
              color: 'black',
              borderColor: '#9FE12C',
            },
            transition: 'all 0.3s',
          }}
        >
          SEE ALL
        </Button>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <ServiceCard
            Icon="/Icon1.png"
            title="SKATE LEASSON"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ServiceCard
            Icon="/Icon2.png"
            title="SKATE PARK RENTAL"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ServiceCard
            Icon="/Icon3.png"
            title="BIG SKATE SHOP"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ServiceCard
            Icon="/Icon4.png"
            title="SKATE COACHING"
          />
        </Grid>
      </Grid>
    
    {/* Bottom diagonal cut */}
    
  </Container >
);
export default ServiceSection; 
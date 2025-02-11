'use client'
import React from 'react';
import { Box, Container }  from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const LogoCarousel = () => {
    const logos = ['/Logo-Brand1.png', '/Logo-Brand2.png', '/Logo-Brand3.png', '/Logo-Brand4.png'];
  
    return (
      <Container>
      <Box sx={{ 
        py: 4,
        my:4,
        borderTop: '2px solid #9ACD32',
        borderBottom: '2px solid #9ACD32',
      }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center' 
                }}
              >
                <img 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  style={{ 
                    maxHeight: '50px', 
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease'
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      </Container>
    );
  };

  export default LogoCarousel;
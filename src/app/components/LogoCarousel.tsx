'use client'
import React from 'react';
import { Box }  from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const LogoCarousel = () => {
    const logos = ['/logo1.png', '/logo2.png', '/logo3.png', '/logo4.png'];
  
    return (
      <Box sx={{ 
        backgroundColor: 'background.default', 
        py: 4 
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
    );
  };

  export default LogoCarousel;
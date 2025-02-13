'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@mui/material';

const PricingSection = () => (
    <div className='bg-[#f5fae7] relative'>
        <div className="absolute top-[-1px] left-0 right-0 h-[16rem] bg-[#040d17]" style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)'}} />
    <Container className="pt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Youth Coaching Card */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="p-8 relative z-10" style={{
              backgroundImage: 'url(/Frame-Pricing-2.png)', 
              backgroundSize: '80% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center'
            }}
          > 
          <div className='w-[80%] mx-auto'>
            <div className='my-12'>
            </div>
            <div className="flex">
              <div style={{ 
                backgroundImage: 'url(/Ellipse.png)', 
                backgroundSize: 'contain', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'
              }}>
                <img 
                  src="/boy.png" 
                  alt="Boy with skateboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div style={{ 
                backgroundImage: 'url(/Ellipse-1.png)', 
                backgroundSize: 'contain', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'
              }}>
                <img 
                  src="/girl.png" 
                  alt="Girl with skateboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
  
            <div className="mt-12">
              <h3 className="text-5xl font-bold text-black mb-4 mt-8">Youth<br/>Coaching</h3>
              <p className="text-black/80 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
              
              <div className="flex justify-between items-end">
                <div className="text-4xl font-bold text-black">
                  $200<br/>/Week
                </div>
                <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-all text-sm font-semibold">
                  Book Course
                </button>
              </div>
            </div>
            </div>
          </motion.div>
  
          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-between"
          >
            <div className='ms-8 pt-32'>
              <h2 className="text-6xl font-bold text-[#040D17] mb-4">Our<br/>Pricing</h2>
            <p className="text-[#040D17] mb-6">Lorem ipsum dolor sit amet, consectetuer.</p>
              <button className="px-8 py-3 bg-[#9FE12C] text-black rounded-full hover:bg-[#9FE12C]/90 transition-all text-sm font-semibold">
                Book Now
              </button>
            </div>
  
          </motion.div>
        </div>
        <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
        className=" mt-[-25%] py-32 relative z-1" style={{ 
                backgroundImage: 'url(/Frame-Pricing-1.png)', 
                backgroundSize: '80% 100%',
                backgroundPosition: 'center right', 
                backgroundRepeat: 'no-repeat'
              }}>
              <img 
                src="/Young-skateboarder-at-skate-park-indoor-1.png" 
                alt="Skater doing trick"
                className="absolute right-0 top-[-13rem] w-40 h-auto"
              />
              
              <div className="relative w-[30%] ms-[50%]">
                <h3 className="text-3xl font-bold text-white mb-4">Adult Coaching</h3>
                <p className="text-white/60 mb-8 ">
                  Lorem ipsum dolor sit amet consectetur. Viverra sodales facilisi lectus iaculis.
                </p>
  
                <div className="flex flex-wrap justify-between items-end">
                  <div className="text-4xl font-bold text-white">
                    $200<br/>/Week
                  </div>
                  <button className="px-8 py-3 bg-[#9FE12C] text-black rounded-full hover:bg-[#9FE12C]/90 transition-all text-sm font-semibold">
                    Book Course
                  </button>
                </div>
              </div>
        </motion.div>
    </Container>
    </div>
  );
  export default PricingSection;
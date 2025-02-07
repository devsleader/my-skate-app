'use client'
// components/Header/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { Container, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Service', 'Pricing', 'Pages', 'Contact'];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <Container className="flex justify-between items-center bg-[#0f2000] py-4 rounded-xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/Logo.png" 
            alt="Skate Course Logo" 
            className="h-12"
          />
        </motion.div>

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="text-white"
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop Navigation */}
        <div className={`hidden md:inline items-center space-x-8 ${mobileOpen ? 'hidden' : ''}`}>
          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-white hover:text-[#9FE870] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#9FE870] text-black px-6 py-2 rounded-full hover:bg-[#8FD860] transition-colors"
        >
          Contact Us
        </motion.button>

        {/* Mobile Navigation Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            style: { backgroundColor: 'navy' },
          }}
        >
          <List className="pt-16">
            {navItems.map((item) => (
              <ListItem key={item}>
                <motion.a
                  href="#"
                  className="text-white hover:text-[#9FE870] transition-colors w-full py-2"
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              </ListItem>
            ))}
            <ListItem>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#9FE870] text-black px-6 py-2 rounded-full hover:bg-[#8FD860] transition-colors"
              >
                Contact Us
              </motion.button>
            </ListItem>
          </List>
        </Drawer>
      </Container>
    </nav>
  );
};
export default Navigation;
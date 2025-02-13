'use client'
// components/Header/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { Container, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu as MenuIcon, KeyboardArrowDown, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Service', link: '/service' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Pages', link: '#', subItems: [
    { name: 'Team', link: '/team' },
    { name: 'FAQ', link: '/faq' },
    { name: '404', link: '/404' },
    { name: 'News', link: '/news' },
    { name: 'Coming Soon', link: '/comingsoon' }
  ]},
  { name: 'Contact', link: '/contact' }
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const pathname = usePathname();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setPagesOpen(false);
  }, []);

  return (
    <nav>
      <Container className="flex justify-between items-center bg-[#0f2000] py-4 rounded-xl">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Image 
            src="/Logo.png" 
            alt="Skate Course Logo" 
            className="h-12"
            width={120}
            height={50}
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
            <div key={item.name} className="relative inline-block">
              <motion.a
                href={item.link}
                className={`text-white hover:text-[#9FE870] transition-colors cursor-pointer inline-flex items-center ${
                  pathname === item.link || 
                  (item.subItems && item.subItems.some(subItem => pathname === subItem.link))
                    ? 'text-[#9FE870]'
                    : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  if (item.subItems) {
                    e.preventDefault();
                    setPagesOpen(!pagesOpen);
                  }
                }}
              >
                {item.name}
                {item.subItems && (
                  <KeyboardArrowDown 
                    className={`ml-1 transition-transform ${pagesOpen ? 'rotate-180' : ''}`}
                  />
                )}
              </motion.a>
              
              {/* Dropdown Menu */}
              {item.subItems && pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute left-0 mt-2 w-48 bg-[#0f2000] rounded-lg shadow-lg py-2 z-50"
                >
                  {item.subItems.map((subItem) => (
                    <motion.a
                      key={subItem.name}
                      href={subItem.link}
                      className={`block px-4 py-2 hover:text-[#9FE870] hover:bg-[#1a3600] transition-colors ${
                        pathname === subItem.link ? 'text-[#9FE870]' : 'text-white'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {subItem.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
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
            style: { backgroundColor: '#0f2000' },
          }}
        >
          {/* Close Button */}
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerToggle}
            className="absolute top-4 right-4"
          >
            <Close />
          </IconButton>
          <List className="pt-16">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <ListItem>
                  <motion.a
                    href={item.link}
                    className={`text-white hover:text-[#9FE870] transition-colors w-full py-2 inline-flex items-center ${
                      pathname === item.link || 
                      (item.subItems && item.subItems.some(subItem => pathname === subItem.link))
                        ? 'text-[#9FE870]'
                        : ''
                    }`}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        setPagesOpen(!pagesOpen);
                      }
                    }}
                  >
                    {item.name}
                    {item.subItems && (
                      <KeyboardArrowDown 
                        className={`ml-1 transition-transform ${pagesOpen ? 'rotate-180' : ''}`}
                      />
                    )}
                  </motion.a>
                </ListItem>
                {/* Mobile Dropdown */}
                {item.subItems && pagesOpen && (
                  <List className="pl-4">
                    {item.subItems.map((subItem) => (
                      <ListItem key={subItem.name}>
                        <motion.a
                          href={subItem.link}
                          className={`hover:text-[#9FE870] transition-colors w-full py-1 ${
                            pathname === subItem.link ? 'text-[#9FE870]' : 'text-white'
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          {subItem.name}
                        </motion.a>
                      </ListItem>
                    ))}
                  </List>
                )}
              </React.Fragment>
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
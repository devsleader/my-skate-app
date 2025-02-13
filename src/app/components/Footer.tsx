'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Stack,
  styled,
  useTheme,
  useMediaQuery
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

// Custom styled components
const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: '#C3F53C',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#FFFFFF',
  },
  width: 40,
  height: 40,
}));

const StyledLink = styled(Link)({
  color: '#9CA3AF',
  textDecoration: 'none',
  '&:hover': {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
});

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const fadeInUp = {
    initial: { y: 90, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.9 } }
  };

  const quickLinks = ['About', 'Service', 'Pricing', 'Blog', 'Contact'];
  const supportLinks = ['Privacy Policy', 'Term & Condition', 'Disclaimer', 'Support', 'FAQ'];

  return (
    <Box component="footer" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description Section */}
          <Grid item xs={12} md={4} lg={3}>
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Box sx={{ mb: 3 }}>
                <Image
                  src="/Logo-Footer.png"
                  alt="Skate Course"
                  width={200}
                  height={64}
                />
              </Box>
              <Typography variant="body2" sx={{ color: '#9CA3AF', mb: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Stack direction="row" spacing={1}>
                <StyledIconButton>
                  <FacebookIcon />
                </StyledIconButton>
                <StyledIconButton>
                  <TwitterIcon />
                </StyledIconButton>
                <StyledIconButton>
                  <YouTubeIcon />
                </StyledIconButton>
                <StyledIconButton>
                  <InstagramIcon />
                </StyledIconButton>
              </Stack>
            </motion.div>
          </Grid>

          {/* Spacing Grid */}
          {!isMobile && <Grid item lg={2} />}

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} lg={2}>
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Typography variant="h6" sx={{ color: '#C3F53C', mb: 3 }}>
                Quick Link
              </Typography>
              <Stack spacing={2}>
                {quickLinks.map((link, index) => (
                  <StyledLink key={index} href="#">
                    {link}
                  </StyledLink>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} sm={6} lg={2}>
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Typography variant="h6" sx={{ color: '#C3F53C', mb: 3 }}>
                Support
              </Typography>
              <Stack spacing={2}>
                {supportLinks.map((link, index) => (
                  <StyledLink key={index} href="#">
                    {link}
                  </StyledLink>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} lg={3}>
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Typography variant="h6" sx={{ color: '#C3F53C', mb: 3 }}>
                Contact
              </Typography>
              <Stack spacing={2} sx={{ color: '#9CA3AF' }}>
                <Typography variant="body2">info@support.com</Typography>
                <Typography variant="body2">+(0361) 234 567</Typography>
                <Typography variant="body2">
                  Jalan Raya Sunset Road Denpasar, Bali
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
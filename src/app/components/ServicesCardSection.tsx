"use client";

import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Grid, 
  Container
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import ArticleIcon from '@mui/icons-material/Article';

const servicesData = [
  {
    icon: <MailOutlineIcon />,
    title: 'Ticket Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    icon: <PhoneIcon />,
    title: 'Free Call Centre',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    icon: <ArticleIcon />,
    title: 'News Update',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  }
];

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.common.white,
  borderRadius: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  border: '1px solid #2E2E2E',
  boxShadow: '0 0 20px rgba(157, 255, 32, 0.1)',
  '&:hover': {
    transform: 'scale(1.05)',
    border: '1px solid #9DFF20',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#6C19FF',
  borderRadius: '50%',
  width: 70,
  height: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  '& svg': {
    color: '#9DFF20',
    fontSize: 32,
  }
}));

const ServicesCardSection: React.FC = () => {
  return (
    <Container>
    <Box 
      sx={{ 
        py: 8, 
        px: 4 
      }}
    >
      <Grid 
        container 
        spacing={4} 
        justifyContent="center"
      >
        {servicesData.map((service, index) => (
          <Grid 
            item 
            xs={12} 
            md={4} 
            key={service.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
            >
              <StyledCard variant="outlined">
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <IconWrapper>
                    {service.icon}
                  </IconWrapper>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      textTransform: 'uppercase',
                      color: '#9DFF20',
                      fontWeight: 'bold',
                      mb: 2,
                      letterSpacing: '0.5px'
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3, 
                      flexGrow: 1,
                      color: '#999999',
                      lineHeight: 1.6
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      sx={{ 
                        py: 1.5,
                        px: 4,
                        backgroundColor: '#9DFF20',
                        color: '#000000',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#8BE81C',
                        }
                      }}
                    >
                      LEARN MORE
                    </Button>
                  </motion.div>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default ServicesCardSection;
"use client";

import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Grid 
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
  backgroundColor: '#1a1a1a',
  color: theme.palette.common.white,
  borderRadius: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  border: `1px solid ${theme.palette.primary.main}`,
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  width: 80,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    color: 'white',
    fontSize: 40,
  }
}));

const ServicesCardSection: React.FC = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'black', 
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
                    color="lime.main" 
                    gutterBottom
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="grey.500" 
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {service.description}
                  </Typography>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ 
                        py: 1,
                        px: 3,
                        backgroundColor: 'lime.main',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: 'lime.dark',
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesCardSection;
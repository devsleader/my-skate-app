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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const pricingData = [
  {
    tier: 'BASIC',
    price: 200,
    description: 'Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac.',
    features: [
      'Lorem ipsum dolor sit amet',
      'Nulla quis nisi fermentum',
      'feugiat mi sit amet'
    ]
  },
  {
    tier: 'REGULAR',
    price: 350,
    description: 'Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac.',
    features: [
      'Lorem ipsum dolor sit amet',
      'Nulla quis nisi fermentum',
      'feugiat mi sit amet'
    ]
  },
  {
    tier: 'PRO',
    price: 500,
    description: 'Lorem ipsum dolor sit amet consectetur. Volutpat odio tellus neque arcu ac.',
    features: [
      'Lorem ipsum dolor sit amet',
      'Nulla quis nisi fermentum',
      'feugiat mi sit amet'
    ]
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
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const PricingCardSection: React.FC = () => {
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
        {pricingData.map((plan, index) => (
          <Grid 
            item 
            xs={12} 
            md={4} 
            key={plan.tier}
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
              <StyledCard 
                variant="outlined"
                sx={{
                  ...(plan.tier === 'REGULAR' && {
                    border: '2px solid',
                    borderColor: 'lime.main',
                  }),
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="h6" 
                    color="lime.main" 
                    gutterBottom
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {plan.tier}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="grey.500" 
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {plan.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                    <Typography variant="h4" color="white">
                      ${plan.price}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="grey.500" 
                      sx={{ ml: 1 }}
                    >
                      /WEEK
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    {plan.features.map((feature) => (
                      <Box 
                        key={feature} 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 1 
                        }}
                      >
                        <CheckCircleIcon 
                          color="success" 
                          sx={{ mr: 1 }} 
                        />
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      fullWidth
                      sx={{ 
                        py: 1.5,
                        backgroundColor: 'lime.main',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: 'lime.dark',
                        }
                      }}
                    >
                      Click Here
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

export default PricingCardSection;
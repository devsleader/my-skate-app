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
  backgroundColor: '#1E2721',
  color: theme.palette.common.white,
  borderRadius: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  padding: theme.spacing(4),
  border: 'none',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const PricingCardSection: React.FC = () => {
  return (
    <Container>
    <Box sx={{  py: 8, px: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {pricingData.map((plan, index) => (
          <Grid item xs={12} md={4} key={plan.tier}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <StyledCard
                sx={{
                  ...(plan.tier === 'REGULAR' && {
                    backgroundColor: '#C1F42C',
                    color: '#000000',
                  }),
                }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      fontSize: '2.5rem',
                      color: plan.tier === 'REGULAR' ? '#000000' : '#C1F42C',
                      mb: 3,
                    }}
                  >
                    {plan.tier}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: plan.tier === 'REGULAR' ? '#000000' : '#FFFFFF',
                      opacity: 0.8,
                      borderBottom: '1px solid',
                      borderColor: plan.tier === 'REGULAR' ? '#000000' : '#FFFFFF',
                      pb: 3,
                    }}
                  >
                    {plan.description}
                  </Typography>
                  
                  <Typography
                    sx={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      mb: 4,
                      color: plan.tier === 'REGULAR' ? '#000000' : '#FFFFFF',
                    }}
                  >
                    ${plan.price}
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '1.5rem',
                        color: plan.tier === 'REGULAR' ? '#000000' : '#FFFFFF',
                        opacity: 0.8,
                      }}
                    >
                      /WEEK
                    </Typography>
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    {plan.features.map((feature) => (
                      <Box
                        key={feature}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            mr: 1,
                            color: plan.tier === 'REGULAR' ? '#000000' : '#C1F42C',
                          }}
                        />
                        <Typography
                          sx={{
                            color: plan.tier === 'REGULAR' ? '#000000' : '#FFFFFF',
                            opacity: 0.8,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 2,
                      backgroundColor: plan.tier === 'REGULAR' ? '#000000' : '#C1F42C',
                      color: plan.tier === 'REGULAR' ? '#C1F42C' : '#000000',
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: plan.tier === 'REGULAR' ? '#1a1a1a' : '#A8DB26',
                      },
                    }}
                  >
                    CLICK HERE
                  </Button>
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

export default PricingCardSection;
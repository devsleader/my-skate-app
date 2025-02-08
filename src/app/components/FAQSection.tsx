'use client'
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

// Styled components
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#9CD323',
  borderRadius: '30px !important',
  marginBottom: '16px',
  border: 'none',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '0 0 16px 0',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: 30,
  padding: '8px 24px',
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#000000',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: '0 24px 24px 24px',
  color: '#000000',
}));

const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const faqData = [
    {
      id: 'panel1',
      question: 'How to Change my Photo from Admin Dashboard?',
      answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast',
    },
    {
      id: 'panel2',
      question: 'How to Change my Password easily?',
      answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast',
    },
    {
      id: 'panel3',
      question: 'How to Change my Subscription Plan using PayPal',
      answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#0A0A0A', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Column - Title */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  textTransform: 'uppercase',
                  mb: 4,
                }}
              >
                Frequently
                <br />
                Ask
                <br />
                Question
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Column - Accordions */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {faqData.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StyledAccordion
                    expanded={expanded === faq.id}
                    onChange={handleChange(faq.id)}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${faq.id}-content`}
                      id={`${faq.id}-header`}
                    >
                      <Typography
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 500,
                          color: '#000000',
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      <Typography>{faq.answer}</Typography>
                    </StyledAccordionDetails>
                  </StyledAccordion>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;
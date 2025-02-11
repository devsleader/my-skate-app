'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button, Box, Container } from '@mui/material';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container>
    <Box 
      component="section" 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 16,
        px: 4
      }}
    >
      <Box sx={{
        container: 'true',
        mx: 'auto',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: { lg: 'repeat(2, 1fr)' }
      }}>
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundImage: 'url(/Frame-Pricing-2.png)',
            backgroundSize:'80% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 10, width:'80%', paddingX: '20px', margin:'auto', paddingBottom:'10px',
             backgroundImage: 'url(/Ellipse-1.png)',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center',
             backgroundSize: 'contain'
           }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/girl.png"
              alt="Skater Girl"
              className="mx-auto w-72 hover:scale-105 transition-transform duration-300"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl font-black mt-8 mb-4"
            >
              GET IN TOUCH
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
            </motion.p>
          </Box>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: '#0A0A0A',
            padding: '2rem',
            borderRadius: '24px'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: '1rem' }}
          >
            <Box component="h3" sx={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: 'white',
              mb: 2
            }}>
              HOW CAN WE HELP?
            </Box>
            <Box component="p" sx={{ color: 'grey.400' }}>
              Feel free to ask a question or simply leave a comment
            </Box>
          </motion.div>

          <Box component="form" onSubmit={handleSubmit} sx={{ '& > *': { mb: 2 } }}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { md: 'repeat(2, 1fr)' },
              gap: 2
            }}>
              <TextField
                name="firstName"
                placeholder="First Name"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: '30px'
                  }
                }}
              />
              <TextField
                name="lastName"
                placeholder="Last Name"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: '30px'
                  }
                }}
              />
            </Box>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { md: 'repeat(2, 1fr)' },
              gap: 2
            }}>
              <TextField
                name="email"
                type="email"
                placeholder="E-mail"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: '30px'
                  }
                }}
              />
              <TextField
                name="subject"
                placeholder="Subject"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: '30px'
                  }
                }}
              />
            </Box>

            <TextField
              name="message"
              placeholder="Comments / Questions"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                  borderRadius: '20px'
                }
              }}
            />

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#9CD323',
                  color: 'black',
                  fontWeight: 'bold',
                  padding: '12px 32px',
                  marginTop:'1rem',
                  borderRadius: '9999px',
                  '&:hover': {
                    backgroundColor: '#8BB81F'
                  }
                }}
              >
                CLICK HERE
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
    </Container>
  );
};

export default ContactSection;
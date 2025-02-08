'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button } from '@mui/material';

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
    <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center py-16 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#9CD323] rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/skater-girl.png"
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
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0A0A] p-8 rounded-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-4xl font-bold text-white mb-2">HOW CAN WE HELP?</h3>
            <p className="text-gray-400">Feel free to ask a question or simply leave a comment</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
            </div>

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
                className="bg-[#9CD323] hover:bg-[#8BB81F] text-black font-bold py-3 px-8 rounded-full"
              >
                CLICK HERE
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
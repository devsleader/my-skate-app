'use client'
// components/Hero/StatCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

interface StatCardProps {
  count: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ count, label, className }) => {
  return (
    <motion.div
      className={`bg-[#1F2937] p-4 rounded-lg ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <Typography variant="h4" className="text-[#9FE870]">
        {count}
      </Typography>
      <Typography className="text-white">
        {label}
      </Typography>
    </motion.div>
  );
};
export default StatCard;
'use client'
import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Easy Skateboarding Tricks & Skateboard Buying Guide",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "/skateboard-1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "The World of Skateboard Competitions",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "/skateboard-2.jpg",
    link: "#"
  },
  // Add other posts similarly
];

const BlogGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="h-full"
          >
            <Card className="h-full bg-[#c5ff4c] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <Typography
                  variant="h5"
                  component="h2"
                  className="text-gray-900 font-bold mb-3 text-xl"
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="mb-4 text-gray-700"
                >
                  {post.excerpt}
                </Typography>
                <Button
                  variant="contained"
                  href={post.link}
                  className="bg-black hover:bg-gray-900 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
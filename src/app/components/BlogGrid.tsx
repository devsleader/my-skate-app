'use client'
import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Container } from '@mui/material';
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
    image: "/News1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "The World of Skateboard Competitions",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "/News2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "How Far Will Skateboards Go to Get a World Record",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "/News3.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Getting a Skate Park Built in Your Community",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "/News4.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "The Potential for High School Skateboarding Teams",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "/News5.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "How to Go Pro – Your Guide to Becoming a Sponsored",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "/News6.jpg",
    link: "#"
  },
];

const BlogGrid = () => {
  return (
    <Container className='px-4 py-12'>
    
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
            <Card className="h-full" style={{ backgroundColor: '#B8E144' }}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
                className=" w-full object-cover p-4"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ color: 'black', fontWeight: 'bold' }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: '#333' }}
                >
                  {post.excerpt}
                </Typography>
                <Button
                  variant="contained"
                  href={post.link}
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '25px',
                    marginTop: '10px',
                  }}
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </Container>
  );
};

export default BlogGrid;
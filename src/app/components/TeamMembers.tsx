'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const MemberCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#0A0A0A',
  color: 'white',
  borderRadius: 8,
  padding: theme.spacing(2),
  textAlign: 'center',
  margin: theme.spacing(2),
}));

const MemberImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '8px',
});

const TeamMembers = () => {
  const members = [
    { name: 'Michale David', description: 'Lorem ipsum dolor sit amet consectetur.', image: '/team1.png' },
    { name: 'Robert Gibson', description: 'Lorem ipsum dolor sit amet consectetur.', image: '/team2.png' },
    { name: 'Indra SCOPE', description: 'Lorem ipsum dolor sit amet consectetur.', image: '/team3.png' },
    { name: 'Andrew Muliana', description: 'Lorem ipsum dolor sit amet consectetur.', image: '/team4.png' },
    { name: 'Alexandru Gibson', description: 'Lorem ipsum dolor sit amet consectetur.', image: '/team5.png' },
    { name: 'Ketut SCOPE', description: 'Lorem ipsum dolor sit amet consectetur.', image: '/team6.png' },
  ];

  return (
    <Box sx={{ bgcolor: '#0A0A0A', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {members.map((member, index) => (
            <MemberCard key={index} sx={{ flex: '1 0 30%', margin: 1 }}>
              <MemberImage src={member.image} alt={member.name} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#9ACD32' }}>
                {member.name}
              </Typography>
              <Typography sx={{ color: 'grey.500' }}>
                {member.description}
              </Typography>
            </MemberCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamMembers;

import React, { useState } from 'react';
import { Button, Input, Box, Text } from '@chakra-ui/react';

function Index() {
  const [uniqueNumber, setUniqueNumber] = useState('');

  const generateUniqueNumber = () => {
    const number = Math.floor(Math.random() * 1000000).toString();
    setUniqueNumber(number);
  };

  const printLabel = () => {
    const labelContent = `Cyklop CSC Att.: SampleLab M.Slot ${uniqueNumber}\nWilhelm Röntgenstraat 10\n8013NC\nZwolle\nNederland`;
    window.print(labelContent);
  };

  return (
    <Box>
      <Text>Enter your details:</Text>
      <Input placeholder='Your Name' />
      <Button onClick={generateUniqueNumber}>Generate Unique Number</Button>
      <Text>Unique Number: {uniqueNumber}</Text>
      <Button onClick={printLabel}>Print Label</Button>
    </Box>
  );
}

export default Index;
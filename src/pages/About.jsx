import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>About Us</Heading>
      <Text>Welcome to Financial Times. We provide the latest news and insights on various topics including world events, business, markets, opinions, and technology.</Text>
    </Box>
  );
};

export default About;
import { Box, Heading, Text } from "@chakra-ui/react";

const World = () => {
  return (
    <Box p={4} bg="#fff1e5" color="#333333">
      <Heading as="h1" mb={4}>World News</Heading>
      <Text>Content for World News goes here...</Text>
    </Box>
  );
};

export default World;
import { Box, Heading, Text } from "@chakra-ui/react";

const Privacy = () => {
  return (
    <Box p={4} bg="#fff1e5" color="#333333">
      <Heading as="h1" mb={4}>Privacy Policy</Heading>
      <Text>Your privacy is important to us. This policy explains how we handle and protect your personal information.</Text>
    </Box>
  );
};

export default Privacy;
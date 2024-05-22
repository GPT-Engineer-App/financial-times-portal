import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4} bg="#fff1e5" color="#333333">
      <Heading as="h1" mb={4}>Contact Us</Heading>
      <Text>If you have any questions or feedback, feel free to reach out to us at contact@financialtimes.com.</Text>
    </Box>
  );
};

export default Contact;
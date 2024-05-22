import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2} mt={10}>
      <Flex justify="center" wrap="wrap">
        <Link href="/about" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          About Us
        </Link>
        <Link href="/contact" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Contact
        </Link>
        <Link href="/privacy" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Privacy Policy
        </Link>
        <Link href="/terms" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Terms of Service
        </Link>
      </Flex>
      <Text textAlign="center" mt={2}>
        &copy; {new Date().getFullYear()} Financial Times. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
import { Box, Flex, Link, Spacer, Text, Image } from "@chakra-ui/react";
import logo from "../../public/images/financial-times-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="#fff1e5" color="#333333" px={4} py={2}>
      <Flex align="center">
        <Image src={logo} alt="Financial Times Logo" boxSize="50px" />
        <Text fontSize="2xl" fontWeight="bold" ml={2}>
          Financial Times
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} py={1} _hover={{ textDecoration: "none", bg: "#e6d7c3" }}>
            Home
          </Link>
          <Link as={NavLink} to="/world" px={2} py={1} _hover={{ textDecoration: "none", bg: "#e6d7c3" }}>
            World
          </Link>
          <Link as={NavLink} to="/business" px={2} py={1} _hover={{ textDecoration: "none", bg: "#e6d7c3" }}>
            Business
          </Link>
          <Link as={NavLink} to="/markets" px={2} py={1} _hover={{ textDecoration: "none", bg: "#e6d7c3" }}>
            Markets
          </Link>
          <Link as={NavLink} to="/opinion" px={2} py={1} _hover={{ textDecoration: "none", bg: "#e6d7c3" }}>
            Opinion
          </Link>
          <Link as={NavLink} to="/tech" px={2} py={1} _hover={{ textDecoration: "none", bg: "#e6d7c3" }}>
            Tech
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#fff1e5" color="#333333">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Box mb={8}>
            <Heading as="h2" size="xl" mb={4}>
              Featured Article
            </Heading>
            <Text fontSize="lg" color="#333333">
              This is the featured article. It has a captivating headline and an engaging summary to draw readers in.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Recent Articles
            </Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h4" size="md">Article 1</Heading>
                <Text mt={2} color="#333333">Summary of article 1...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h4" size="md">Article 2</Heading>
                <Text mt={2} color="#333333">Summary of article 2...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h4" size="md">Article 3</Heading>
                <Text mt={2} color="#333333">Summary of article 3...</Text>
              </Box>
            </VStack>
          </Box>
        </Box>
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Box mb={8}>
            <Heading as="h3" size="lg" mb={4}>
              Trending Topics
            </Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Text color="#333333">Trending topic 1</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Text color="#333333">Trending topic 2</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Text color="#333333">Trending topic 3</Text>
              </Box>
            </VStack>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Latest News
            </Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Text color="#333333">Latest news item 1</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Text color="#333333">Latest news item 2</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Text color="#333333">Latest news item 3</Text>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
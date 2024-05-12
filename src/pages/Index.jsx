import { Container, VStack, Text, Image, Button } from "@chakra-ui/react";
import { FaWind, FaWater, FaBookOpen } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Image src="https://images.unsplash.com/photo-1483083850282-fc55aec90f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraXRlJTIwc3VyZmluZ3xlbnwwfHx8fDE3MTU1Mjg2NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Kite Surfing" />
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Welcome to the Kite Surfing School
        </Text>
        <Text fontSize="xl" textAlign="center">
          Whether you're a beginner or an experienced kite surfer, our school offers the perfect courses and conditions to enhance your skills!
        </Text>
        <VStack spacing={4}>
          <Button leftIcon={<FaBookOpen />} colorScheme="teal" size="lg">
            Book a Course
          </Button>
          <Button leftIcon={<FaWind />} colorScheme="blue" size="lg">
            Learn About Wind Conditions
          </Button>
          <Button leftIcon={<FaWater />} colorScheme="cyan" size="lg">
            Safety Tips
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;

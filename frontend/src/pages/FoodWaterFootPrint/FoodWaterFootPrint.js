import React from "react";
import MainScreen from "../../components/MainScreen";
import Footer from "../../components/Footer";
import { Box, Container, keyframes, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FoodWaterFootPrint = () => {
  const popUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

  return (
    <>
      <div className="App">
        <MainScreen />
        <Box flex={1}>
          <Box m={3} pb={10}>
            <Text
              fontFamily={"fantasy"}
              fontSize={{ base: "1.5rem", md: "2rem" }}
              py={10}
              align={"center"}
              px={3}
              animation={`${popUp} 0.5s ease-out forwards`}
              animationdelay="0.6s"
              opacity="0"
            >
              What is a Food Water Footprint
            </Text>
            <Text
              fontFamily={"cursive"}
              fontSize={{ base: "1.1rem", md: "1.3rem" }}
              px={3}
              animation={`${popUp} 0.5s ease-out forwards`}
              animationdelay="0.6s"
              opacity="0"
            >
              The food water footprint refers to the total volume of freshwater
              used directly and indirectly to produce the food we consume. It
              includes all the water required for growing crops, raising
              livestock, processing food products, and even the water used
              during transportation and storage. Essentially, it's a measure of
              the water embedded in the food supply chain.
            </Text>
          </Box>

          <Container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            maxW={"container.lg"}
          >
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing={20}
              px={3}
              py={10}
            >
              <Box
                h={{ base: "150px", md: "200px" }}
                w={{ base: "150px", md: "200px" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"#1982d2db"}
                fontWeight={"bold"}
                border={"2px"}
                borderRadius={100}
                _hover={{ bg: "#0368b5", color: "white" }}
                as={Link}
                to={"/food1"}
              >
                <Text> Display all Items</Text>
              </Box>

              <Box
                h={{ base: "150px", md: "200px" }}
                w={{ base: "150px", md: "200px" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"#1982d2db"}
                fontWeight={"bold"}
                border={"2px"}
                borderRadius={100}
                _hover={{ bg: "#0368b5", color: "white" }}
                as={Link}
                to={"/food2"}
              >
                <Text> Raw Category</Text>
              </Box>

              <Box
                h={{ base: "150px", md: "200px" }}
                w={{ base: "150px", md: "200px" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"#1982d2db"}
                fontWeight={"bold"}
                border={"2px"}
                borderRadius={100}
                _hover={{ bg: "#0368b5", color: "white" }}
                as={Link}
                to={"/food3"}
              >
                <Text> Cooked Category</Text>
              </Box>

              <Box
                h={{ base: "150px", md: "200px" }}
                w={{ base: "150px", md: "200px" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"#1982d2db"}
                fontWeight={"bold"}
                border={"2px"}
                borderRadius={100}
                _hover={{ bg: "#0368b5", color: "white" }}
                as={Link}
                to={"/food4"}
              >
                <Text> Packaged Category</Text>
              </Box>

              <Box
                h={{ base: "150px", md: "200px" }}
                w={{ base: "150px", md: "200px" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"#1982d2db"}
                fontWeight={"bold"}
                border={"2px"}
                borderRadius={100}
                _hover={{ bg: "#0368b5", color: "white" }}
                as={Link}
                to={"/food5"}
              >
                <Text> Beverage Category</Text>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default FoodWaterFootPrint;

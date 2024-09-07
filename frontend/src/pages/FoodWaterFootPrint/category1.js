import {
  Box,
  Container,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import Footer from "../../components/Footer";

const Category1 = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items/type/raw")
      .then((response) => {
        setItems(response.data);
        setFilteredItems(response.data);
        console.log("Fetched Items: ", response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery, items]);

  return (
    <div>
      <MainScreen />
      <Container
        flex={1}
        maxW="container.lg"
        py={10}
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Search Bar */}
        <Input
          placeholder="Search items..."
          mb={5}
          pos={"sticky"}
          top={20}
          opacity={5}
          border={"1px"}
          borderColor={"black"}
          width="100%"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={{ base: 8, sm: 12, md: 19, lg: 30 }}
        >
          {filteredItems.map((item) => (
            <Box
              key={item._id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              border={"2px"}
              bg={"#f9f9f9"}
              _hover={{ bg: "#e9e9e9" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              w={{ base: "70%", sm: "80%", md: "90%", lg: "100%" }}
            >
              {item.link ? (
                <Image
                  mt={2}
                  src={item.link.replace(/^"(.*)"$/, "$1")}
                  alt={item.name}
                  boxSize="200px"
                  objectFit="cover"
                  borderRadius={"12px"}
                />
              ) : (
                <Box
                  boxSize="200px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bg="gray.200"
                >
                  <Text>No Image Available</Text>
                </Box>
              )}
              <Box p={5}>
                <Text fontWeight="bold" fontSize="lg">
                  {item.name}
                </Text>
                <Text>Type: {item.type}</Text>
                <Text>
                  Water Footprint: {item.wfp} {item.unit}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
};

export default Category1;

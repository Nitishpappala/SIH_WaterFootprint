import React from "react";
import "../../App.css";
import MainScreen from "../../components/MainScreen";
import { Box, Button, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const YourWaterFootPrint = () => {
  return (
    <div className="App">
      <MainScreen />
      <Box
        mt={4}
        flex={1}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        gap={6}
      >
        <Text
          color={"white"}
          fontWeight={"bold"}
          align={"center"}
          my={2}
          mt={1}
        >
          A water footprint measures the total fresh water used to produce the
          goods and services you consume, including direct use like drinking and
          indirect use like agriculture. It comprises blue water (surface and
          groundwater), green water (rainwater), and grey water (needed to
          dilute pollutants).
        </Text>
        <Text
          color={"white"}
          fontWeight={"bold"}
          align={"center"}
          my={2}
          mt={1}
        >
          Understanding your water footprint helps you identify ways to reduce
          water use, which is vital for sustainability, especially in areas with
          water scarcity.
        </Text>
        <Button
          as={Link}
          to={"/page1"}
          bg={"#1982d2db"}
          fontWeight={"bold"}
          h={"50px"}
          w={"280px"}
          _hover={{ bg: "#0368b5", color: "white" }}
        >
          Calculate your Water Footprint
        </Button>
      </Box>
      <Footer />
    </div>
  );
};

export default YourWaterFootPrint;

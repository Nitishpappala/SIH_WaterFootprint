import React from "react";
import "../../App.css";
import { Box, Button, Text, Input, Select, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Footer from "../../components/Footer";

const YourWaterFootPrint3 = ({ answers, setAnswers }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleNext = () => {
    if (
      !answers.transportation ||
      !answers.kilometersDriven ||
      !answers.publicTransportFrequency ||
      !answers.electricVehicle
    ) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all the fields before proceeding.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-center",
      });
      return;
    }

    navigate("/page4");
  };

  return (
    <div className="App">
      <MainScreen />
      <Box flex={1} p={4}>
        <Box color={"black"} bg={"white"} m={20} borderRadius={10}>
          <Text fontSize={20} align={"center"} fontWeight={"bold"} mb={4}>
            Please answer the following questions:
          </Text>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            1. What is your primary mode of transportation?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.transportation}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                transportation: e.target.value,
              }))
            }
            mb={4}
          >
            <option value="Car">Car</option>
            <option value="Public transport">Public transport</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Walking">Walking</option>
            <option value="Other">Other</option>
          </Select>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            2. How many kilometers do you drive per week?
          </Text>
          <Input
            mx={2}
            w={"fit-content"}
            type="number"
            placeholder="Distance in kilometers"
            value={answers.kilometersDriven}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                kilometersDriven: e.target.value,
              }))
            }
            mb={4}
          />

          <Text mx={2} fontWeight={"bold"} mb={2}>
            3. How often do you use public transportation?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.publicTransportFrequency}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                publicTransportFrequency: e.target.value,
              }))
            }
            mb={4}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </Select>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            4. Do you own or use an electric vehicle?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.electricVehicle}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                electricVehicle: e.target.value,
              }))
            }
            mb={4}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>

          <Box display={"flex"} justifyContent={"end"}>
            <Button
              mb={2}
              right={2}
              onClick={handleNext}
              bg={"#1982d2db"}
              _hover={{ bg: "#0368b5", color: "white" }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default YourWaterFootPrint3;

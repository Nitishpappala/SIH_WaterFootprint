import React from "react";
import "../../App.css";
import { Box, Button, Text, Input, Select, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Footer from "../../components/Footer";

const YourWaterFootPrint4 = ({ answers, setAnswers }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleNext = () => {
    if (
      !answers.energySource ||
      !answers.energyBill ||
      !answers.acHeatingFrequency ||
      !answers.showersPerWeek ||
      !answers.laundryFrequency ||
      !answers.dishwashing
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

    navigate("/final");
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
            1. What is your primary source of energy at home?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.energySource}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, energySource: e.target.value }))
            }
            mb={4}
          >
            <option value="Electricity">Electricity</option>
            <option value="Natural gas">Natural gas</option>
            <option value="Oil">Oil</option>
            <option value="Renewable energy">Renewable energy</option>
            <option value="Other">Other</option>
          </Select>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            2. What is your average monthly energy bill?
          </Text>
          <Input
            mx={2}
            w={"fit-content"}
            type="number"
            placeholder="Monthly Energy Bill"
            value={answers.energyBill}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, energyBill: e.target.value }))
            }
            mb={4}
          />

          <Text mx={2} fontWeight={"bold"} mb={2}>
            3. How often do you use air conditioning or heating?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.acHeatingFrequency}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                acHeatingFrequency: e.target.value,
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
            4. How many times do you shower per week?
          </Text>
          <Input
            mx={2}
            w={"fit-content"}
            type="number"
            placeholder="Number of showers per week"
            value={answers.showersPerWeek}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                showersPerWeek: e.target.value,
              }))
            }
            mb={4}
          />

          <Text mx={2} fontWeight={"bold"} mb={2}>
            5. How often do you do laundry?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.laundryFrequency}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                laundryFrequency: e.target.value,
              }))
            }
            mb={4}
          >
            <option value="Once a week">Once a week</option>
            <option value="Twice a week">Twice a week</option>
            <option value="Three times a week">Three times a week</option>
            <option value="Other">Other</option>
          </Select>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            6. Do you use a dishwasher or wash dishes by hand?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.dishwashing}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, dishwashing: e.target.value }))
            }
            mb={4}
          >
            <option value="Dishwasher">Dishwasher</option>
            <option value="Hand wash">Hand wash</option>
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

export default YourWaterFootPrint4;

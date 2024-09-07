import React from "react";
import "../../App.css";
import { Box, Button, Text, Input, Select, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Footer from "../../components/Footer";

const YourWaterFootPrint2 = ({ answers, setAnswers }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleNext = () => {
    if (
      !answers.diet ||
      !answers.mealsPerWeek ||
      !answers.meatFrequency ||
      !answers.waterIntensiveFoods
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

    navigate("/page3");
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
            1. What is your primary diet type?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.diet}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, diet: e.target.value }))
            }
            mb={4}
          >
            <option value="Omnivore">Omnivore</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Other">Other</option>
          </Select>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            2. How many meals do you consume per week?
          </Text>
          <Input
            mx={2}
            w={"fit-content"}
            type="number"
            placeholder="Number of meals per week"
            value={answers.mealsPerWeek}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, mealsPerWeek: e.target.value }))
            }
            mb={4}
          />

          <Text mx={2} fontWeight={"bold"} mb={2}>
            3. How often do you consume meat?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.meatFrequency}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, meatFrequency: e.target.value }))
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
            4. Do you frequently consume water-intensive foods such as meat or
            almonds?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.waterIntensiveFoods}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                waterIntensiveFoods: e.target.value,
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

export default YourWaterFootPrint2;

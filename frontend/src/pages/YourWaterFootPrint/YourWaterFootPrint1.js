import React from "react";
import "../../App.css";
import { Box, Button, Text, Input, Select, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Footer from "../../components/Footer";

const YourWaterFootPrint1 = ({ answers, setAnswers }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleNext = () => {
    if (
      !answers.country ||
      !answers.householdSize ||
      !answers.residenceType ||
      !answers.waterBill ||
      !answers.waterSavingDevices ||
      !answers.waterSource
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

    navigate("/page2");
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
            1. In which country do you currently reside?
          </Text>
          <Input
            mx={2}
            w={"fit-content"}
            placeholder="Country"
            value={answers.country}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, country: e.target.value }))
            }
            mb={4}
          />

          <Text mx={2} fontWeight={"bold"} mb={2}>
            2. How many people live in your household?
          </Text>
          <Input
            mx={2}
            w={"fit-content"}
            type="number"
            placeholder="Household Size"
            value={answers.householdSize}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, householdSize: e.target.value }))
            }
            mb={4}
          />

          <Text mx={2} fontWeight={"bold"} mb={2}>
            3. What type of residence do you live in?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.residenceType}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, residenceType: e.target.value }))
            }
            mb={4}
          >
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condominium">Condominium</option>
            <option value="Other">Other</option>
          </Select>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            4. What is your average monthly water bill?
          </Text>
          <Input
            mx={2}
            w={"fit-content"}
            type="number"
            placeholder="Monthly Water Bill"
            value={answers.waterBill}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, waterBill: e.target.value }))
            }
            mb={4}
          />

          <Text mx={2} fontWeight={"bold"} mb={2}>
            5. Do you use any water-saving devices in your home?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.waterSavingDevices}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                waterSavingDevices: e.target.value,
              }))
            }
            mb={4}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            6. What is your primary source of water?
          </Text>
          <Select
            mx={2}
            w={"fit-content"}
            placeholder="Select option"
            value={answers.waterSource}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, waterSource: e.target.value }))
            }
            mb={4}
          >
            <option value="Municipal supply">Municipal supply</option>
            <option value="Well">Well</option>
            <option value="Rainwater harvesting">Rainwater harvesting</option>
            <option value="Other">Other</option>
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

export default YourWaterFootPrint1;

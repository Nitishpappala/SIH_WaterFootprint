import React from "react";
import "../../App.css";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Footer from "../../components/Footer";

const Final = ({ answers }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/page1");
  };

  // Sample calculation logic (replace with actual calculation)
  const calculateWaterFootprint = () => {
    let total = 0;

    // Example calculations based on answers (replace with real data and formulas)
    if (answers.diet === "meat") {
      total += 15000 * (answers.meatFrequency || 0); // kg of meat per week
    }
    if (answers.waterBill) {
      total += parseFloat(answers.waterBill) * 12; // annualize the water bill
    }
    if (answers.kilometersDriven) {
      total += parseFloat(answers.kilometersDriven) * 0.5; // example factor for car travel
    }
    if (answers.energyBill) {
      total += parseFloat(answers.energyBill) * 0.1; // example factor for energy use
    }

    return total;
  };

  const waterFootprint = calculateWaterFootprint();

  // Suggestions for reducing water footprint
  const suggestions = [
    "Reduce meat consumption to lower the water used in food production.",
    "Install water-saving devices like low-flow showerheads and faucets.",
    "Use public transportation or carpool to reduce water used in fuel production.",
    "Switch to energy-efficient appliances and reduce energy consumption.",
    "Be mindful of water usage when taking showers, doing laundry, and washing dishes.",
  ];

  return (
    <div className="App">
      <MainScreen />
      <Box flex={1} p={4}>
        <Box color={"black"} bg={"white"} m={20} p={3} borderRadius={10}>
          <Text fontSize={20} align={"center"} fontWeight={"bold"} mb={4}>
            Your Water Footprint Summary:
          </Text>

          <Text mx={2} fontWeight={"bold"} mb={2}>
            1. Country of Residence: {answers.country}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            2. Household Size: {answers.householdSize}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            3. Residence Type: {answers.residenceType}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            4. Average Monthly Water Bill: {answers.waterBill}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            5. Water-Saving Devices: {answers.waterSavingDevices}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            6. Water Source: {answers.waterSource}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            7. Diet Type: {answers.diet}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            8. Meals Per Week: {answers.mealsPerWeek}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            9. Meat Frequency: {answers.meatFrequency}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            10. Water-Intensive Foods: {answers.waterIntensiveFoods}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            11. Primary Transportation Mode: {answers.transportation}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            12. Kilometers Driven Per Week: {answers.kilometersDriven}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            13. Public Transport Frequency: {answers.publicTransportFrequency}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            14. Electric Vehicle: {answers.electricVehicle}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            15. Energy Source: {answers.energySource}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            16. Monthly Energy Bill: {answers.energyBill}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            17. AC/Heating Frequency: {answers.acHeatingFrequency}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            18. Showers Per Week: {answers.showersPerWeek}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            19. Laundry Frequency: {answers.laundryFrequency}
          </Text>
          <Text mx={2} fontWeight={"bold"} mb={2}>
            20. Dishwashing Method: {answers.dishwashing}
          </Text>

          <Text mx={2} fontWeight={"bold"} mb={4}>
            Your estimated water footprint is: {waterFootprint} liters.
          </Text>

          <Text mt={10} mx={2} mb={4}>
            Suggestions for reducing your water footprint:
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </Text>

          <Box display={"flex"} justifyContent={"end"}>
            <Button
              mb={2}
              right={2}
              onClick={handleRestart}
              bg={"#1982d2db"}
              _hover={{ bg: "#0368b5", color: "white" }}
            >
              Restart
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Final;

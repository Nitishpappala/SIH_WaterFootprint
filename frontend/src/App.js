import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FoodWaterFootPrint from "./pages/FoodWaterFootPrint/FoodWaterFootPrint";
import Homepage from "./pages/Homepage";
import { ChakraProvider } from "@chakra-ui/react";
import YourWaterFootPrint from "./pages/YourWaterFootPrint/YourWaterFootPrint";
import YourWaterFootPrint1 from "./pages/YourWaterFootPrint/YourWaterFootPrint1";
import YourWaterFootPrint2 from "./pages/YourWaterFootPrint/YourWaterFootPrint2";
import YourWaterFootPrint3 from "./pages/YourWaterFootPrint/YourWaterFootPrint3";
import YourWaterFootPrint4 from "./pages/YourWaterFootPrint/YourWaterFootPrint4";
import Final from "./pages/YourWaterFootPrint/Final";
import { useState } from "react";
import AppData from "./components/AddData";
import DisplayAllItems from "./pages/FoodWaterFootPrint/DisplayAllItems";
import Category1 from "./pages/FoodWaterFootPrint/category1";
import Category2 from "./pages/FoodWaterFootPrint/category2";
import Category3 from "./pages/FoodWaterFootPrint/category3";
import Category4 from "./pages/FoodWaterFootPrint/category4";

function App() {
  const [answers, setAnswers] = useState({
    country: "",
    householdSize: "",
    diet: "",
    transportation: "",
    energy: "",
  });

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AppData />} />
          <Route path="/food-water-print" element={<FoodWaterFootPrint />} />
          <Route path="/food1" element={<DisplayAllItems />} />
          <Route path="/food2" element={<Category1 />} />
          <Route path="/food3" element={<Category2 />} />
          <Route path="/food4" element={<Category3 />} />
          <Route path="/food5" element={<Category4 />} />

          <Route path="/your-water-print" element={<YourWaterFootPrint />} />
          <Route
            path="/page1"
            element={
              <YourWaterFootPrint1 answers={answers} setAnswers={setAnswers} />
            }
          />
          <Route
            path="/page2"
            element={
              <YourWaterFootPrint2 answers={answers} setAnswers={setAnswers} />
            }
          />
          <Route
            path="/page3"
            element={
              <YourWaterFootPrint3 answers={answers} setAnswers={setAnswers} />
            }
          />
          <Route
            path="/page4"
            element={
              <YourWaterFootPrint4 answers={answers} setAnswers={setAnswers} />
            }
          />
          <Route path="/final" element={<Final answers={answers} />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

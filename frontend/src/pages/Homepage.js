import React, { useState } from "react";
import MainScreen from "../components/MainScreen";
import { Box, Image, keyframes, Link, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Water from "../assets/Water-Footrpint.jpg";
import Water1 from "../assets/Water-Footrpint-1.png";
import Water2 from "../assets/Water-Footrpint-2.png";
import Water3 from "../assets/Water-Footrpint-3.jpg";
import { motion, useInView } from "framer-motion";
import FullTextModal from "../components/TextModal";

const MotionImage = motion(Image);
const MotionText = motion(Text);

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const imageRef = React.useRef(null);
  const textRef = React.useRef(null);

  const isImageInView = useInView(imageRef, {
    triggerOnce: true,
    threshold: 0.1,
  });
  const isTextInView = useInView(textRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const openModal = (text) => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const shortText =
    "A water footprint refers to the total volume of freshwater used to produce goods and services consumed by an individual, community, or business.";
  const shortText1 =
    "The water footprint affects the environment in several impactful ways. Excessive water use can deplete freshwater resources, reducing availability for drinking, agriculture, and other needs.";
  const shortText2 =
    "Minimizing a water footprint involves several key strategies. Start by conserving water in daily activities, such as fixing leaks, using low-flow fixtures, and reducing water";
  const shortText3 =
    "The impact of a water footprint is profound and multifaceted. A large water footprint can deplete freshwater resources, making less water available for drinking";

  const LongText =
    "A water footprint refers to the total volume of freshwater used to produce goods and services consumed by an individual, community, or business. It encompasses all the water used throughout the production process, from the extraction of raw materials to the final delivery of the product or service. This includes direct water use, such as drinking and washing, as well as indirect water use, such as the water needed to grow crops, manufacture goods, or produce energy. By understanding and measuring water footprints, we can better assess the environmental impact of our consumption patterns and work towards more sustainable water management practices.";
  const LongText1 =
    "The water footprint affects the environment in several impactful ways. Excessive water use can deplete freshwater resources, reducing availability for drinking, agriculture, and other needs. This overuse can damage ecosystems by lowering water levels in rivers, lakes, and aquifers, which disrupts aquatic habitats and threatens biodiversity. Additionally, the pollution of water sources from agricultural runoff, industrial discharge, and wastewater degrades water quality and harms aquatic life. Altered water cycles and reduced groundwater recharge can also affect local and regional climates, while high water footprints contribute to climate change through energy use and greenhouse gas emissions. Managing water footprints is essential to mitigate these environmental impacts and ensure sustainable water use.";
  const LongText2 =
    "Minimizing a water footprint involves several key strategies. Start by conserving water in daily activities, such as fixing leaks, using low-flow fixtures, and reducing water use in tasks like showering and washing dishes. Employ water-efficient appliances, like high-efficiency dishwashers and washing machines, to further cut consumption. In agriculture, adopt water-saving techniques like drip irrigation and utilize rainwater harvesting. Choose products and services with lower water footprints, and reduce waste by using only what is necessary and recycling water where possible. Supporting water conservation policies and raising awareness about responsible water use can also drive broader change. Together, these efforts help reduce overall water usage and promote sustainable management of water resources.";
  const LongText3 =
    "The impact of a water footprint is profound and multifaceted. A large water footprint can deplete freshwater resources, making less water available for drinking, agriculture, and other essential uses. This overuse can damage ecosystems by lowering water levels in rivers, lakes, and aquifers, disrupting aquatic habitats and threatening biodiversity. Pollution from agricultural runoff, industrial discharge, and wastewater further degrades water quality and harms aquatic life. Altered water cycles can lead to changes in local and regional climates, while the energy used in high-water footprint processes contributes to climate change through greenhouse gas emissions. Managing and reducing water footprints is crucial to mitigating these environmental impacts and ensuring sustainable water use";

  return (
    <div className="App">
      <MainScreen />
      <Box bg={"#e9e8e8"} p={{ base: 2, md: 4 }}>
        <Box
          borderRadius={"8px"}
          flex={1}
          p={4}
          mb={"170px"}
          textAlign="center"
        >
          <Text
            mt={20}
            mb={10}
            fontWeight={"bold"}
            color={"black"}
            fontFamily={"fantasy"}
            fontSize={{ base: "1.3rem", md: "2rem" }}
            align={"center"}
            animation={`${popUp} 0.5s ease-out forwards`}
            animationdelay="0.6s"
            opacity="0"
          >
            What is water Footprint
          </Text>
          <Text
            mx={10}
            fontWeight="semibold"
            fontSize={{ base: "1rem", md: "1.2rem" }}
            mt={4}
            fontFamily="cursive"
            align={"center"}
            animation={`${popUp} 0.5s ease-out forwards`}
            animationdelay="0.6s"
            opacity="0"
          >
            The water footprint tracks the total amount of water used to make
            products and provide services. It shows how much water is needed for
            everything we use in our daily lives.
          </Text>
        </Box>

        {/* texts */}
        <Box
          display={"flex"}
          flexDir={"column"}
          mx={{ base: "20px" }}
          gap={{ base: "100px", md: "170px" }}
        >
          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            mx={{ base: "20px", md: "70px" }}
            gap={2}
          >
            <MotionText
              ref={textRef}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              ml={3}
              initial={{ opacity: 0, x: -40 }}
              animate={
                isTextInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -40 }
              }
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <Text
                fontFamily={"monospace"}
                fontWeight={"bold"}
                align={"center"}
                mb={"35px"}
              >
                What is water footprint
              </Text>
              {shortText}
              <Link
                mt={4}
                ml={2}
                color={"#1982d2db"}
                onClick={() => openModal(LongText)}
              >
                Read More
              </Link>
            </MotionText>
            <FullTextModal
              isOpen={isOpen}
              onClose={closeModal}
              fullText={LongText}
            />
            <MotionImage
              ref={imageRef}
              src={Water}
              alt="Water Footprint Image 1"
              borderRadius="20px"
              h={{ base: 200, md: 300, lg: 400 }}
              w={{ base: "100%", md: 400, lg: 500 }}
              initial={{ opacity: 0, x: 40 }}
              animate={
                isImageInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 40 }
              }
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            />
          </Box>

          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            mx={{ base: "20px", md: "70px" }}
            gap={2}
          >
            <MotionImage
              ref={imageRef}
              src={Water1}
              alt="Water Footprint Image 2"
              borderRadius="20px"
              h={{ base: 200, md: 300, lg: 400 }}
              w={{ base: "100%", md: 400, lg: 500 }}
              initial={{ opacity: 0, x: -40 }}
              animate={
                isImageInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -40 }
              }
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            />
            <MotionText
              ref={textRef}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              ml={3}
              initial={{ opacity: 0, x: 40 }}
              animate={
                isTextInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 40 }
              }
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <Text
                fontFamily={"monospace"}
                fontWeight={"bold"}
                align={"center"}
                mb={"35px"}
              >
                How water footprint affects the environment
              </Text>
              {shortText1}
              <Link
                mt={4}
                ml={2}
                color={"#1982d2db"}
                onClick={() => openModal(LongText1)}
              >
                Read More
              </Link>
            </MotionText>
            <FullTextModal
              isOpen={isOpen}
              onClose={closeModal}
              fullText={LongText1}
            />
          </Box>

          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            mx={{ base: "20px", md: "70px" }}
            gap={2}
          >
            <MotionText
              ref={textRef}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              ml={3}
              initial={{ opacity: 0, x: -40 }}
              animate={
                isTextInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -40 }
              }
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <Text
                fontFamily={"monospace"}
                fontWeight={"bold"}
                align={"center"}
                mb={"35px"}
              >
                How to minimize water footprint
              </Text>
              {shortText2}
              <Link
                mt={4}
                ml={2}
                color={"#1982d2db"}
                onClick={() => openModal(LongText2)}
              >
                Read More
              </Link>
            </MotionText>
            <FullTextModal
              isOpen={isOpen}
              onClose={closeModal}
              fullText={LongText2}
            />
            <MotionImage
              ref={imageRef}
              src={Water2}
              alt="Water Footprint Image 3"
              borderRadius="20px"
              h={{ base: 200, md: 300, lg: 400 }}
              w={{ base: "100%", md: 400, lg: 500 }}
              initial={{ opacity: 0, x: 40 }}
              animate={
                isImageInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 40 }
              }
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            />
          </Box>

          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            mx={{ base: "20px", md: "70px" }}
            gap={2}
          >
            <MotionImage
              ref={imageRef}
              src={Water3}
              alt="Water Footprint Image 4"
              borderRadius="20px"
              h={{ base: 200, md: 300, lg: 400 }}
              w={{ base: "100%", md: 400, lg: 500 }}
              initial={{ opacity: 0, x: -40 }}
              animate={
                isImageInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -40 }
              }
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            />
            <MotionText
              ref={textRef}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              ml={3}
              initial={{ opacity: 0, x: 40 }}
              animate={
                isTextInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 40 }
              }
              transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <Text
                fontFamily={"monospace"}
                fontWeight={"bold"}
                align={"center"}
                mb={"35px"}
              >
                Impact of water footprint
              </Text>
              {shortText3}
              <Link
                mt={4}
                ml={2}
                color={"#1982d2db"}
                onClick={() => openModal(LongText3)}
              >
                Read More
              </Link>
            </MotionText>
            <FullTextModal
              isOpen={isOpen}
              onClose={closeModal}
              fullText={LongText3}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Homepage;

import React from "react";
import {
  Box,
  Stack,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const MainScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const baseColor = "#1982d2db";
  const hoverColor = "#0368b5";

  const changeLanguage = (languageCode) => {
    const translateCombo = document.querySelector(".goog-te-combo");
    if (translateCombo) {
      translateCombo.value = languageCode;
      translateCombo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <Box display={"none"} opacity={0}>
        <GoogleTranslate />
      </Box>
      <Box zIndex={2} pos={"sticky"} top={0}>
        <Flex
          display={{ base: "none", md: "flex" }}
          flexDir={"row"}
          justify={"space-between"}
          bg={"#ffffffb3"}
          p={2}
          border={"2px"}
          borderColor={"#000000b8"}
          borderRadius={"12px"}
          px={2}
          m={1}
          zIndex={1}
          align={"center"}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              fontWeight="bold"
              fontSize={"1.2rem"}
              color="black"
              _hover={{ textDecoration: "underline" }}
            >
              Water Footprint
            </Box>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  bg={baseColor}
                  _hover={{ bg: hoverColor, color: "white" }}
                  color="black"
                  _active={{ bg: hoverColor }}
                  rightIcon={<ChevronDownIcon />}
                >
                  Language
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => changeLanguage("en")}>
                    English
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("hi")}>
                    Hindi
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("te")}>
                    Telugu
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  as={Button}
                  bg={baseColor}
                  _hover={{ bg: hoverColor, color: "white" }}
                  color="black"
                  _active={{ bg: hoverColor }}
                  rightIcon={<ChevronDownIcon />}
                >
                  Water Footprint
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} to={"/your-water-print"}>
                    Your water footprint
                  </MenuItem>
                  <MenuItem as={Link} to={"/food-water-print"}>
                    Food water print
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  as={Button}
                  bg={baseColor}
                  _hover={{ bg: hoverColor, color: "white" }}
                  color="black"
                  _active={{ bg: hoverColor }}
                  rightIcon={<ChevronDownIcon />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="#about1">
                    What should you do
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>

        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            aria-label="Open menu"
            bg={baseColor}
            color="white"
            _hover={{ bg: hoverColor }}
          />
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Text fontSize="lg" fontWeight="bold">
                  Water Footprint
                </Text>
              </DrawerHeader>
              <DrawerBody>
                <Stack spacing={4}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      bg={baseColor}
                      _hover={{ bg: hoverColor, color: "white" }}
                      color="black"
                      _active={{ bg: hoverColor }}
                      rightIcon={<ChevronDownIcon />}
                      width="full"
                      textAlign="left"
                    >
                      Language
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => changeLanguage("en")}>
                        English
                      </MenuItem>
                      <MenuItem onClick={() => changeLanguage("hi")}>
                        Hindi
                      </MenuItem>
                      <MenuItem onClick={() => changeLanguage("te")}>
                        Telugu
                      </MenuItem>
                    </MenuList>
                  </Menu>

                  <Menu>
                    <MenuButton
                      as={Button}
                      bg={baseColor}
                      _hover={{ bg: hoverColor, color: "white" }}
                      color="black"
                      _active={{ bg: hoverColor }}
                      rightIcon={<ChevronDownIcon />}
                      width="full"
                      textAlign="left"
                    >
                      Water Footprint
                    </MenuButton>
                    <MenuList>
                      <MenuItem as={Link} to={"/your-water-print"}>
                        Your water footprint
                      </MenuItem>
                      <MenuItem as={Link} to={"/food-water-print"}>
                        Food water print
                      </MenuItem>
                    </MenuList>
                  </Menu>

                  <Menu>
                    <MenuButton
                      as={Button}
                      bg={baseColor}
                      _hover={{ bg: hoverColor, color: "white" }}
                      color="black"
                      _active={{ bg: hoverColor }}
                      rightIcon={<ChevronDownIcon />}
                      width="full"
                      textAlign="left"
                    >
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem as={Link} href="#about1">
                        What should you do
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Stack>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
};

export default MainScreen;

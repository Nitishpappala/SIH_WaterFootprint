import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Text
        ml={2}
        mr={2}
        mb={1}
        p={8}
        fontSize="sm"
        fontWeight={"bold"}
        border={"2px"}
        bg={"#ffffffb3"}
        color={"000000b8"}
        borderRadius={"12px"}
        align={"center"}
      >
        &copy; {new Date().getFullYear()} Water Footprint. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;

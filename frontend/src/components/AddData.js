import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const AddData = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [name, setName] = useState();
  const [type, setEmail] = useState();
  const [unit, setConfirmpassword] = useState();
  const [wfp, setPassword] = useState();
  const [link, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const submitHandler = async () => {
    setPicLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/items",
        {
          name,
          type,
          wfp,
          unit,
          link,
        },
        config
      );
      console.log(data);

      setPicLoading(false);
    } catch (error) {
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      console.error("No image selected");
      setPicLoading(false);
      return;
    }
    console.log("Image file:", pics);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "smartIndia");
      data.append("cloud_name", "nitish");

      fetch("https://api.cloudinary.com/v1_1/dofioxfjl/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.error("Error from Cloudinary:", data.error.message);
            setPicLoading(false);
            return;
          }
          setPic(data.url.toString());
          console.log("Image URL:", data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.error("Error during image upload:", err);
          setPicLoading(false);
        });
    } else {
      console.error("Invalid image type");
      setPicLoading(false);
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="name" isRequired>
        <FormLabel>item name</FormLabel>
        <Input
          placeholder="Enter item Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="type" isRequired>
        <FormLabel>type</FormLabel>
        <Input
          placeholder="Enter Your category"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="wfp" isRequired>
        <FormLabel>wfp</FormLabel>
        <InputGroup size="md">
          <Input
            type="number"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <FormControl id="unit" isRequired>
        <FormLabel>unit</FormLabel>
        <InputGroup size="md">
          <Input
            placeholder="Enter Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <FormControl id="link">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default AddData;

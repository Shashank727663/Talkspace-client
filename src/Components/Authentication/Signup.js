import React, { useState } from "react";
import { VStack, FormControl } from "@chakra-ui/react";
import { FormLabel, InputGroup } from "@chakra-ui/react";
import { Input  } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confpassword, setConfpassword] = useState();
  const [picture, setPicture] = useState();

  const handleClick = () => {
    setShow(!show);
    
  }
  const postDeatils=(pics) =>{

  }
  const submithandler= () => {

  }
  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name:</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email:</FormLabel>
        <Input
          placeholder="Enter Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
      <FormLabel>Password:</FormLabel>
      <InputGroup>
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter your password."
         
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width={"4.5 rem"}>
        <Button  size="sm" onClick={handleClick}>{show ? "Hide" : "show"}</Button>
         
        </InputRightElement>
      </InputGroup>
    </FormControl>

    <FormControl id="confpassword" isRequired>
      <FormLabel>Confirm Password:</FormLabel>
      <InputGroup>
        <Input
          type={show ? "text" : "password"}
          placeholder="Confirm your password."
         
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width={"4.5 rem"}>
        <Button  size="sm" onClick={handleClick}>{show ? "Hide" : "show"}</Button>
         
        </InputRightElement>
      </InputGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Upload your picture!</FormLabel>
      <Input 
      type="file"
      p={1.5}
      accept="image/*"
      onChange={(e) => postDeatils(e.target.files[0])}></Input>
    </FormControl>
    <Button color="blue" 
    width="100%">Submit</Button>
    </VStack>
  );
};

export default Signup;

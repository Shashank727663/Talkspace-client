import { FormControl, IconButton, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Input   , FormLabel } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword ] = useState();
  const [show,setShow] = useState(false);
  const handleClick= () => {
    setShow(!show)
  }

  const submithandler= () => {

  }
  return (
    <div>
      <VStack spacing="7px">
      <FormControl  id="email" isRequired>
      <FormLabel>Email:</FormLabel>
        <Input
          placeholder="Enter Your email"
          onChange={(e) => setEmail(e.target.value)}
        /> 
      </FormControl>

      <FormControl  id="password" isRequired>
      <FormLabel>Password:</FormLabel>
        <InputGroup>
        <Input
        type={show ? "text" : "password"}
          placeholder="Enter Your Password."
          onChange={(e) => setPassword(e.target.value)}
        /> 
        <InputRightElement>
          <Button onClick={handleClick}>{show ? "Hide" : "show"}</Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>
    <Button
    color={"blue"}
    width={"100%"} onClick={submithandler}>
      Submit
    </Button>
      </VStack>
    </div>
  )
}

export default Login
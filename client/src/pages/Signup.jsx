import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [show, setShow] = useState(false);

  const postDetails = (picture) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing="8px">
      <FormControl id="name">
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <FormControl id="password">
        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement w="4rem">
            <Button size="sm" onClick={() => setShow(!show)}>
              {show ? <Icon as="ViewOffIcon" /> : <Icon as="ViewIcon" />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirm-password">
        <FormLabel>Confirm Password:</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <InputRightElement w="4rem">
            <Button size="sm" onClick={() => setShow(!show)}>
              {show ? <Icon as="ViewOffIcon" /> : <Icon as="ViewIcon" />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>

        <Input
          pt={1}
          type="file"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button colorScheme="blue" width="100%" mt={4} onClick={submitHandler}>
        Submit
      </Button>
    </VStack>
  );
}

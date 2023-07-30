import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const postDetails = (picture) => {
    setLoading(true);
    if (picture === undefined) {
      toast({
        title: "Please Select an Image",
        status: "warning",
        duratiion: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (
      picture.type === "image/jpeg" ||
      picture.type === "image/jpg" ||
      picture.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", picture);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dlrio1x1n");
      fetch("https://api.cloudinary.com/v1_1/dlrio1x1n/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image",
        status: "warning",
        duratiion: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };

  const submitHandler = async () => {};

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
      <FormControl id="signup-email">
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <FormControl id="signup-password">
        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputGroup>
      </FormControl>

      <FormControl id="confirm-password">
        <FormLabel>Confirm Password:</FormLabel>
        <InputGroup>
          <Input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
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

      <Button
        colorScheme="blue"
        width="100%"
        mt={4}
        onClick={submitHandler}
        isLoading={loading}
      >
        Submit
      </Button>
    </VStack>
  );
}

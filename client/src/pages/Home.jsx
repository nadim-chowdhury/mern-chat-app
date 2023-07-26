import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";

export default function Home() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={8}
        w="100%"
        m="36px 0 8px 0"
        bg="white"
        borderRadius="lg"
        borderWidth="2px"
      >
        <Text
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          color="blue.600"
        >
          onChat
        </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="2px">
        <Tabs variant="enclosed" colorScheme="blue">
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Signup</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

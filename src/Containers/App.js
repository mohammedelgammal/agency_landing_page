import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Layout/Layout";

const App = () => {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
};

export default App;

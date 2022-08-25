import { ChakraProvider, Grid, Box } from "@chakra-ui/react";
import Layout from "./Layout";

const App = () => {
  return (
    <ChakraProvider>
      <Grid gridTemplateColumns={"1fr 1024px 1fr"}>
        <Box />
        <Layout />
        <Box />
      </Grid>
    </ChakraProvider>
  );
};

export default App;

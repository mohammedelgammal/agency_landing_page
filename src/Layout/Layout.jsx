import { Grid, Box } from "@chakra-ui/react";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Grid gridTemplateColumns={"1fr 1280px 1fr"}>
        <Box />
        <Header />
        <Box />
      </Grid>
    </>
  );
};

export default Layout;

import { Grid } from "@chakra-ui/react";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Grid gridRowGap={4}>
        <Header />
      </Grid>
    </>
  );
};

export default Layout;

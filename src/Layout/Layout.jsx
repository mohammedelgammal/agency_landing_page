import { Grid } from "@chakra-ui/react";
import Header from "./Header";
import Landing from "./Landing";

const Layout = () => {
  return (
    <>
      <Grid gridRowGap={4}>
        <Header />
        <Landing />
      </Grid>
    </>
  );
};

export default Layout;

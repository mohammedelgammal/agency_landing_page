import { Grid } from "@chakra-ui/react";
import Header from "./Header";
import Landing from "./Landing";
import Showcase from "./Showcase";

const Layout = () => {
  return (
    <>
      <Grid gridTemplateRows={"repeat(2, auto)"} gridRowGap={12}>
        <Header />
        <Landing />
        <Showcase />
      </Grid>
    </>
  );
};

export default Layout;

import { Grid } from "@chakra-ui/react";
import Header from "./Header";
import Landing from "./Landing";
import Showcase from "./Showcase";
import Problem from "./Problem";
import Approach from "./Approach";

const Layout = () => {
  return (
    <>
      <Grid gridTemplateRows={"repeat(2, auto)"} gridRowGap={12}>
        <Header />
        <Landing />
        <Showcase />
        <Problem />
        <Approach />
      </Grid>
    </>
  );
};

export default Layout;

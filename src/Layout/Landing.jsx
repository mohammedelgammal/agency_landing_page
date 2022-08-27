import { Center, Grid } from "@chakra-ui/react";
import UpperLanding from "../Containers/UpperLanding";
import LowerLanding from "../Containers/LowerLanding";

const Landing = () => {
  return (
    <Center flexDirection={"column"}>
      <Grid rowGap={9}>
        <UpperLanding />
        <LowerLanding />
      </Grid>
    </Center>
  );
};

export default Landing;

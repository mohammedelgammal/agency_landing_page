import { Grid } from "@chakra-ui/react";
import LandingText from "./LandingText";
import LandingVideo from "./LandingVideo";

const UpperLanding = () => {
  return (
    <Grid w={"1280px"} gridTemplateColumns={"repeat(2, 1fr)"}>
      <LandingText />
      <LandingVideo />
    </Grid>
  );
};

export default UpperLanding;

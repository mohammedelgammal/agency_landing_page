import { Center, Text, Grid } from "@chakra-ui/react";
import Enterprises from "../Components/Enterprises";

const LowerLanding = () => {
  return (
    <Center flexDirection={"column"} w={"1280px"}>
      <Grid rowGap={9}>
        <Center>
          <Text fontSize={"l"} fontWeight="bold" color="blackAlpha.500">
            Trusted by +500 Starups & Enterprises
          </Text>
        </Center>
        <Enterprises />
      </Grid>
    </Center>
  );
};

export default LowerLanding;

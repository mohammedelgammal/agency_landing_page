import { Center } from "@chakra-ui/react";
import UpperLanding from "../Containers/UpperLanding";
import LowerLanding from "../Containers/LowerLanding";

const Landing = () => {
  return (
    <Center flexDirection={"column"} mt={"80px"}>
      <UpperLanding />
      <LowerLanding />
    </Center>
  );
};

export default Landing;

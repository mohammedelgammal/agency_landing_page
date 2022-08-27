import { Center, Text } from "@chakra-ui/react";
import Enterprises from "../Components/Enterprises";

const LowerLanding = () => {
  return (
    <Center flexDirection={"column"} w={"1280px"} mt={"50px"}>
      <Text fontSize={"l"} fontWeight="bold" color="blackAlpha.500">
        Trusted by +500 Starups & Enterprises
      </Text>
      <Enterprises />
    </Center>
  );
};

export default LowerLanding;

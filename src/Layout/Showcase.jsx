import { Center, Box } from "@chakra-ui/react";
import ShowCaseText from "../Components/ShowcaseText";
import ShowcaseGrid from "../Containers/ShowcaseGrid";

const Showcase = () => {
  return (
    <Center flexDirection={"column"}>
      <Box h={"100px"} />
      <ShowCaseText />
      <Box h={"100px"} />
      <ShowcaseGrid />
      <Box h={"100px"} />
    </Center>
  );
};

export default Showcase;

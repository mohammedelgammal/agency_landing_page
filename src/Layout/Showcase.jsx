import { Center } from "@chakra-ui/react";
import ShowCaseText from "../Components/ShowcaseText";
import ShowcaseGrid from "../Containers/ShowcaseGrid";

const Showcase = () => {
  return (
    <Center flexDirection={"column"}>
      <ShowCaseText />
      <ShowcaseGrid />
    </Center>
  );
};

export default Showcase;

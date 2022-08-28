import { Center } from "@chakra-ui/react";
import content from "./Utils/DataLists/problemsContent";
import Text from "../Components/Text";

const ProblemText = () => {
  const { small, heading, paragraph } = content;
  return (
    <Center flexDirection={"column"} w={"1280px"}>
      <Text
        justify={"start"}
        small={small}
        heading={heading}
        paragraph={paragraph}
      />
    </Center>
  );
};

export default ProblemText;

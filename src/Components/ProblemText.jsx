import { Center } from "@chakra-ui/react";
import Text from "../Components/Text";

const ProblemText = () => {
  const content = {
    small: "THE PROBLEM",
    heading:
      "Software is eating the world... but software development is broken",
    paragraph:
      "Software powers today's economy but the way it is created is still stuck in the dark ages. Writing millions of lines of code to build products results in a process that is slow, expensive, unreliable, and inaccessible to most. Those familiar with software development know to expect:",
  };
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

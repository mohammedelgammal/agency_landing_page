import { Center } from "@chakra-ui/react";
import content from "./Utils/DataLists/showcaseContent";
import Text from "./Text";

const ShowcaseText = () => {
  const { small, heading, paragraph } = content;

  return (
    <Center>
      <Text
        justify={"center"}
        small={small}
        heading={heading}
        paragraph={paragraph}
      />
    </Center>
  );
};

export default ShowcaseText;

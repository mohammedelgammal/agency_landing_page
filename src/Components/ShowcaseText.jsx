import { Center } from "@chakra-ui/react";
import Text from "./Text";

const ShowcaseText = () => {
  const content = {
    small: "NO-CODE IS THE FUTURE!",
    heading: "Why we build on Bubble",
    paragraph:
      "Airdev's mission is to enable non-coders to bring their ideas to life. Since most of our clients are, we picked a platform that would be easy for them to live on once we hand things over. Bubble is the clear choice because it allow you to build customizable web apps with pixel-perfect designs.",
  };
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

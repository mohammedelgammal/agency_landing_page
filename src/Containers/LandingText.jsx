import {
  Stack,
  Heading,
  Text,
  Button,
  Center,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import clutchImage from "../dist/imgs/clutch-logo.webp";
import fiveStarImage from "../dist/imgs/5-star.png";

const LandingText = () => {
  return (
    <Stack w="70%" direction={"column"} spacing={8}>
      <Heading fontSize={"5xl"} as="h1">
        A smarter way
        <span style={{ fontWeight: "normal" }}> to build web software</span>
      </Heading>
      <Text fontSize={"xl"} color="blackAlpha.700">
        Bubble is the platform of choice for startups and businesses lacking
        in-house development teams. We've helped hundreds of clients build
        solutions on Bubble that are easy to maintain and scale.
      </Text>
      <Center justifyContent={"start"}>
        <Button p={7} colorScheme={"whatsapp"}>
          Get a quote
        </Button>
      </Center>
      <Stack direction={"row"} spacing={5}>
        <Center flexDirection={"column"}>
          <LinkBox>
            <LinkOverlay href="/">
              <Image w="100px" src={fiveStarImage} alt="five-star review" />
              <Image
                mt={"10px"}
                w="100px"
                src={clutchImage}
                alt="clutch review"
              />
            </LinkOverlay>
          </LinkBox>
        </Center>
        <Center h="100%" alignItems={"start"}>
          <LinkBox>
            <LinkOverlay>
              <Text fontWeight={"bold"} color={"blackAlpha.600"}>
                Read our reviews <br /> on Clutch
              </Text>
            </LinkOverlay>
          </LinkBox>
        </Center>
      </Stack>
    </Stack>
  );
};

export default LandingText;

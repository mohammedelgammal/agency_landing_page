import {
  Stack,
  Heading,
  Text,
  Button,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import ClutchReview from "../Components/ClutchReview";

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
        <ClutchReview />
        <Center h="100%" alignItems={"start"}>
          <LinkBox>
            <LinkOverlay>
              <Text fontWeight={"bold"} color={"blackAlpha.600"}>
                Read our reviews <br /> on Clutch.com
              </Text>
            </LinkOverlay>
          </LinkBox>
        </Center>
      </Stack>
    </Stack>
  );
};

export default LandingText;

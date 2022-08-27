import { Center, Heading, Text, Grid, Box } from "@chakra-ui/react";

const ShowcaseText = () => {
  return (
    <Center width="1280px">
      <Grid rowGap={8}>
        <Box h={"50px"}></Box>
        <Center>
          <Text fontWeight={"bold"} fontSize={"sm"} color="whatsapp.500">
            NO-CODE IS THE FUTURE!
          </Text>
        </Center>
        <Center>
          <Heading as="h2" fontSize={"5xl"}>
            Why we build on Bubble
          </Heading>
        </Center>
        <Center>
          <Center w={"70%"}>
            <Text fontSize={"xl"} color="blackAlpha.700" textAlign={"center"}>
              Airdev's mission is to enable non-coders to bring their ideas to
              life. Since most of our clients are, we picked a platform that
              would be easy for them to live on once we hand things over. Bubble
              is the clear choice because it allow you to build customizable web
              apps with pixel-perfect designs.
            </Text>
          </Center>
        </Center>
        <Box h={"50px"}></Box>
      </Grid>
    </Center>
  );
};

export default ShowcaseText;

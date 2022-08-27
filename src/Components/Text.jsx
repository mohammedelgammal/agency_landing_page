import { Center, Heading, Text, Grid } from "@chakra-ui/react";

const ShowcaseText = ({ justify, small, heading, paragraph }) => {
  return (
    <Center width="1280px">
      <Grid rowGap={8}>
        <Center justifyContent={justify}>
          <Text fontWeight={"bold"} fontSize={"sm"} color="whatsapp.500">
            {small}
          </Text>
        </Center>
        <Center justifyContent={justify}>
          <Heading as="h2" fontSize={"5xl"}>
            {heading}
          </Heading>
        </Center>
        <Center justifyContent={justify}>
          <Center w={"70%"}>
            <Text fontSize={"xl"} color="blackAlpha.700" textAlign={justify}>
              {paragraph}
            </Text>
          </Center>
        </Center>
      </Grid>
    </Center>
  );
};

export default ShowcaseText;

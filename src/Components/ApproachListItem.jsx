import { Heading, Image, Text, Center, Grid, Stack } from "@chakra-ui/react";

const Aproach = ({ heading, paragraph, image }) => {
  return (
    <Center>
      <Grid templateColumns={"repeat(2, auto)"} gridColumnGap={20}>
        <Stack w={"70%"} flexDirection={"column"} spacing={6}>
          <Heading as={"h4"}>{heading}</Heading>
          <Text>{paragraph}</Text>
        </Stack>
        <Center justifyContent={"end"}>
          <Image h={"250px"} src={image.src} alt={image.alt} />
        </Center>
      </Grid>
    </Center>
  );
};

export default Aproach;

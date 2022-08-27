import { Avatar, Grid, Text, Heading, Stack, Center } from "@chakra-ui/react";

const ProblemListItem = ({ icon, heading, paragraph }) => {
  return (
    <Center w={"1280px"} justifyContent="start">
      <Grid gridTemplateColumns={"120px 1fr"} gridGap={10}>
        <Avatar
          border={"2px solid #22c35e"}
          bg={"transparent"}
          h={"120px"}
          w={"120px"}
          icon={icon}
        />
        <Stack direction={"column"}>
          <Heading>{heading}</Heading>
          <Text w={"70%"}>{paragraph}</Text>
        </Stack>
      </Grid>
    </Center>
  );
};

export default ProblemListItem;

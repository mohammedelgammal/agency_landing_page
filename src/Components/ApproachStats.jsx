import { Flex, Stack, Center, Heading, Text } from "@chakra-ui/react";

const ApproachStats = ({ stats }) => {
  return (
    <Center w={"100%"}>
      {stats.map((el, index) => (
        <Flex w={"100%"} key={index} justifyContent={"space-around"}>
          <Stack direction={"column"}>
            <Center>
              <Heading>{el.heading}</Heading>
            </Center>
            <Center>
              <Text>{el.description}</Text>
            </Center>
          </Stack>
        </Flex>
      ))}
    </Center>
  );
};

export default ApproachStats;

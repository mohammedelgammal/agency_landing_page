import { Center, Grid } from "@chakra-ui/react";
import ProblemText from "../Components/ProblemText";
import ProblemList from "../Containers/ProblemList";

const Problem = () => {
  return (
    <Center>
      <Grid gridRowGap={9}>
        <ProblemText />
        <ProblemList />
      </Grid>
    </Center>
  );
};

export default Problem;

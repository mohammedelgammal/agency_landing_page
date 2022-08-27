import { Stack, Grid } from "@chakra-ui/react";
import ProblemListItem from "../Components/ProblemListItem";
import listItems from "../Containers/Utils/DataLists/problemList";

const ProblemList = () => {
  return (
    <Grid>
      <Stack direction={"column"} spacing={10}>
        {listItems.map((item, index) => (
          <ProblemListItem
            key={index}
            heading={item.heading}
            paragraph={item.paragraph}
            icon={item.icon}
          />
        ))}
      </Stack>
    </Grid>
  );
};

export default ProblemList;

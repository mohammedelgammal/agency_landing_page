import { Grid, Center } from "@chakra-ui/react";
import list from "./Utils/DataLists/approachList";
import Approach from "../Components/ApproachListItem";
import ApproachStats from "../Components/ApproachStats";

const ApproachList = () => {
  return (
    <Center w={"1280px"}>
      <Grid gridRowGap={10}>
        {list.map((el, index) => (
          <Grid gridRowGap={5}>
            <Approach
              key={index}
              heading={el.heading}
              paragraph={el.paragraph}
              image={el.image}
            />
            <ApproachStats stats={el.stats} />
          </Grid>
        ))}
      </Grid>
    </Center>
  );
};

export default ApproachList;

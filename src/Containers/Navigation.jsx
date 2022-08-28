import { Grid } from "@chakra-ui/react";
import NavList from "./../Components/NavList";
import NavBtns from "./../Components/NavBtns";

const QuoteBtn = () => {
  return (
    <Grid templateColumns="repeat(5, auto)" gap={7}>
      <NavList />
      <NavBtns />
    </Grid>
  );
};

export default QuoteBtn;

import { Grid, GridItem, Button } from "@chakra-ui/react";
import navBtns from "./Utils/DataLists/navBtns";

const Navigation = () => (
  <Grid templateColumns="repeat(2, auto)" gap={2}>
    {navBtns.map((btn, index) => (
      <GridItem key={index}>
        <Button colorScheme="whatsapp" variant={btn?.variant}>
          {btn.text}
        </Button>
      </GridItem>
    ))}
  </Grid>
);

export default Navigation;

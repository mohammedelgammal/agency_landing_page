import { Grid, GridItem, Button } from "@chakra-ui/react";

const navBtns = [
  { text: "Get a quote", variant: "solid" },
  { text: "Log In", variant: "outline" },
];

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

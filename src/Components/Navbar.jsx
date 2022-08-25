import {
  Grid,
  GridItem,
  Spacer,
  Image,
  Text,
  Center,
  LinkBox,
  LinkOverlay,
  Button,
} from "@chakra-ui/react";
import logo from "../dist/imgs/logo.png";

const Navbar = () => {
  const navBtns = [
    { text: "Get a quote", variant: "solid" },
    { text: "Log In", variant: "outline" },
  ];
  const navList = [
    { text: "About", link: "about" },
    { text: "Use cases", link: "use-cases" },
    { text: "Product types", link: "products" },
    { text: "For builders", link: "builders" },
  ];

  return (
    <Center maxW={"1024px"} bg="white" height={"60px"}>
      <LinkBox>
        <LinkOverlay href="/">
          <Center w={"100%"}>
            <Image h={"30px"} src={logo} alt="Logo" />
            <Text
              fontSize={"20px"}
              color={"#22c35e"}
              fontFamily={"sans-serif"}
              ml={"5px"}
            >
              Quarter2Six
            </Text>
          </Center>
        </LinkOverlay>
      </LinkBox>
      <Spacer />
      <Grid templateColumns="repeat(5, auto)" gap={7}>
        {navList.map((el, index) => (
          <Center key={index}>
            <LinkBox
              color={"blackAlpha.600"}
              sx={{ transition: "0.1s ease", _hover: { color: "black" } }}
            >
              <LinkOverlay href={`/${el.link}`}>
                <GridItem border={"1px solid green.100"}>
                  <Text>{el.text}</Text>
                </GridItem>
              </LinkOverlay>
            </LinkBox>
          </Center>
        ))}
        <Grid templateColumns="repeat(2, auto)" gap={2}>
          {navBtns.map((btn, index) => (
            <GridItem key={index}>
              <Button colorScheme="whatsapp" variant={btn?.variant}>
                {btn.text}
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Grid>
    </Center>
  );
};

export default Navbar;

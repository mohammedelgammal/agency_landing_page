import { LinkBox, LinkOverlay, Center, Image, Text } from "@chakra-ui/react";
import logo from "../dist/imgs/logo.png";

const Logo = () => (
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
);

export default Logo;

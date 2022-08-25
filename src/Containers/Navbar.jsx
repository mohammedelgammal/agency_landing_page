import { Spacer, Center } from "@chakra-ui/react";
import Logo from "./../Components/Logo";
import NavBtns from "./Navigation";

const Navbar = () => {
  return (
    <Center maxW={"1024px"} bg="white" height={"60px"}>
      <Logo />
      <Spacer />
      <NavBtns />
    </Center>
  );
};

export default Navbar;

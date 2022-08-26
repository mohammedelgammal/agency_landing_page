import { Spacer, Center } from "@chakra-ui/react";
import Logo from "./../Components/Logo";
import NavBtns from "./Navigation";

const Navbar = () => {
  return (
    <Center w={"1280px"} bg="white" h={"80px"}>
      <Logo />
      <Spacer />
      <NavBtns />
    </Center>
  );
};

export default Navbar;

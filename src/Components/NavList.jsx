import { Center, LinkBox, LinkOverlay, GridItem, Text } from "@chakra-ui/react";
import navList from "./Utils/DataLists/navbar";

const NavList = () => (
  <>
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
  </>
);

export default NavList;

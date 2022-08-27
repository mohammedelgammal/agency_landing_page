import { Center, LinkBox, LinkOverlay, Image } from "@chakra-ui/react";
import clutchImage from "../dist/imgs/clutch-logo.webp";
import fiveStarImage from "../dist/imgs/5-star.png";

const ClutchReview = () => {
  return (
    <Center flexDirection={"column"}>
      <LinkBox>
        <LinkOverlay href="/">
          <Image w="100px" src={fiveStarImage} alt="five-star review" />
          <Image mt={"10px"} w="100px" src={clutchImage} alt="clutch review" />
        </LinkOverlay>
      </LinkBox>
    </Center>
  );
};

export default ClutchReview;

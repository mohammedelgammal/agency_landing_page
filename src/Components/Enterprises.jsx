import { Center, Text, Image } from "@chakra-ui/react";
import enterpriseImgs from "../dist/imgs/enterprises/index";

const Enterprises = () => {
  return (
    <Center overflow={"hidden"} h={"70px"} w={"1280px"} mt={"50px"}>
      {enterpriseImgs.map((enterprise, index) => (
        <Image
          h={"70px"}
          mx={"30px"}
          key={index}
          src={enterprise.src}
          alt={enterprise.alt}
        />
      ))}
    </Center>
  );
};

export default Enterprises;

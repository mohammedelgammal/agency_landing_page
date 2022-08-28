import { Center, Grid, Image } from "@chakra-ui/react";
import images from "../dist/imgs/showcase/index";

const ShowcaseGrid = () => (
  <Center w={"99vw"} p={0} overflow={"hidden"}>
    <Grid
      gridTemplateColumns={"repeat(4, 1fr)"}
      gridTemplateRows={"repeat(2, 1fr)"}
      gap={5}
    >
      {images.map((image, index) => (
        <Center key={index} w={"700px"}>
          <Image boxShadow={"2xl"} src={image.src} alt={image.alt} />
        </Center>
      ))}
    </Grid>
  </Center>
);

export default ShowcaseGrid;

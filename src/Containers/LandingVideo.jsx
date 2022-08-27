import { Center, Image, Button, Box } from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";
import videoOverlay from "../dist/imgs/video-overlay.svg";

const LandingVideo = () => {
  const styles = {
    buttonStyle: {
      position: "absolute",
      borderRadius: "100px",
      zIndex: 3,
      border: "1px solid white",
      color: "#2f2e41",
    },
    coverStyle: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backdropFilter: "blur(3px)",
      zIndex: 2,
    },
  };

  return (
    <Center position={"relative"}>
      <AiFillPlayCircle style={styles.buttonStyle} fontSize="5rem" />
      <Box style={styles.coverStyle}></Box>
      <Image h={"100%"} src={videoOverlay} alt="web discover" />
    </Center>
  );
};

export default LandingVideo;

import {
  Center,
  Image,
  ModalOverlay,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";
import { useState } from "react";
import VideoModal from "../Components/VideoModal";
import styles from "./Utils/styles/landingVideo";
import videoOverlay from "../dist/imgs/video-overlay.svg";

const LandingVideo = () => {
  const [overlay, setOverlay] = useState(<videoModal />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center
      onClick={() => {
        setOverlay(
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
        );
        onOpen();
      }}
      position={"relative"}
    >
      <AiFillPlayCircle style={styles.buttonStyle} fontSize="5rem" />
      <Box style={styles.coverStyle}></Box>
      <Image h={"100%"} src={videoOverlay} alt="web discover" />
      <VideoModal overlay={overlay} isOpen={isOpen} onClose={onClose} />
    </Center>
  );
};

export default LandingVideo;

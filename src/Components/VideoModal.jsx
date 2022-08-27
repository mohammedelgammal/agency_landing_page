import {
  Center,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const VideoModal = ({ isOpen, onClose, overlay }) => {
  return (
    <Modal size={"6xl"} isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalCloseButton color={"white"} />
        <ModalBody>
          <Center>
            <iframe
              width="1280"
              height="680"
              src="https://www.youtube.com/embed/pWOv9xcoMeY"
              title="Company Introduction Animation"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;

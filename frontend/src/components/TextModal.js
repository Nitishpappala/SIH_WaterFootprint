import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";

const FullTextModal = ({ isOpen, onClose, fullText }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader
        color={"#1982d2db"}
        fontFamily={"fantasy"}
        fontSize={"1.5rem"}
      >
        More Information
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text fontFamily={"initial"} fontWeight={"bold"}>
          {fullText}
        </Text>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default FullTextModal;

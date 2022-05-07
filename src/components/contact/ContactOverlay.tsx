// Chakra
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  IconButton,
  Flex,
  Skeleton,
  useMediaQuery,
} from "@chakra-ui/react";

// Components and icons
import InfoPopover from "./InfoPopover";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { GitHub } from "../../assets/icons/GitHub";
import { Linkedin } from "../../assets/icons/Linkedin";

type Props = {
  isOpen: boolean;
  onClose: any;
  overlay: JSX.Element;
};

const ContactOverlay = ({ isOpen, onClose, overlay }: Props): JSX.Element => {
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:600px)");
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent w={isNotSmallScreen ? "" : "70%"} bg="#262626" color="white">
        <ModalHeader color="white">Contact Me!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap={4} justify="center" align="center">
            {isNotSmallScreen && (
              <Skeleton
                w={20}
                startColor="teal.500"
                endColor="green.500"
                height="10px"
              />
            )}
            <InfoPopover header="Email" body="britoskies@gmail.com">
              <IconButton
                colorScheme="orange"
                aria-label="Call Segun"
                size="md"
                icon={<EmailIcon />}
              />
            </InfoPopover>
            <InfoPopover header="GitHub" body="github.com/britoskies">
              <IconButton
                colorScheme="blackAlpha"
                aria-label="Call Segun"
                size="md"
                icon={<GitHub />}
              />
            </InfoPopover>
            <InfoPopover header="Linkedin" body="linkedin.com/in/britoskies">
              <IconButton
                colorScheme="linkedin"
                aria-label="Call Segun"
                size="md"
                icon={<Linkedin />}
              />
            </InfoPopover>
            <InfoPopover header="Phone Number" body="829-988-9093">
              <IconButton
                colorScheme="whatsapp"
                aria-label="Call Segun"
                size="md"
                icon={<PhoneIcon />}
              />
            </InfoPopover>
            {isNotSmallScreen && (
              <Skeleton
                w={20}
                startColor="teal.500"
                endColor="green.500"
                height="10px"
              />
            )}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button color="black" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactOverlay;

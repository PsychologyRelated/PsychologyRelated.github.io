import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
} from '@chakra-ui/react'
import { colors } from '../styles/colors'

export default function InfoPopup({ isOpen, onClose }) {



    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent overflow="scroll"
                minW="70%"
                maxH={["600px", "660px", "800px", "800px"]}
                maxW="80%"
            >
                <ModalHeader>Privacy Policy</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <br />
                    <Text>
                        We at Psychology Related are committed to protecting the privacy of our customers. This Privacy Policy outlines the types of personal information we collect and how we use it.
                    </Text><br />
                    <Text>
                        Information Collection:
                        We collect information from you when you voluntarily provide it to us, such as when you sign up for our services or contact us with a question or concern. This information may include your name, email address, and other personal information.
                    </Text><br />
                    <Text>
                        Information Use:
                        The information we collect from you is used solely for the purpose for which it was provided. We do not sell or share your information with third parties except as required by law.
                    </Text><br />
                    <Text>
                        Data Security:
                        We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. These measures include internal reviews of our data collection, storage, and processing practices, as well as physical security measures to guard against unauthorized access to systems where we store personal information.
                    </Text><br />
                    <Text>
                        Changes to Privacy Policy:
                        We may update this Privacy Policy from time to time, so please check back frequently for updates. If we make material changes to this policy, we will notify you by posting the changes on our website.
                    </Text><br />
                    <Text>
                        Contact Us:
                        If you have any questions or concerns about this Privacy Policy, please contact us at <b>info@psychologyrelated.com</b>."</Text>
                </ModalBody>

                <ModalFooter>
                    <Button fontSize={["16px", "15px", "14px", "16px"]} _hover={{ border: `1px solid ${colors.sandrift}`, color: colors.azureWhite, bgColor: colors.sandrift, transform: "scale(1.1)", transitionDelay: "25ms" }} w={["15rem", "10rem", "10rem", "10rem"]} padding={["1rem", "1rem", "1rem", "1rem"]} color={colors.bunkerBlack} border={`2px solid ${colors.sandrift}`} borderRadius="25px" bgColor={colors.Isabelline} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
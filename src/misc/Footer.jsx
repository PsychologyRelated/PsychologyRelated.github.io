import { Button, Flex, Image, Link, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import logo from "../assets/TPR.png"
import { colors } from "../styles/colors";
import { FaInstagram } from "react-icons/fa";
import InfoPopup from "../components/InfoPopup";

export default function Footer() {
    const [isSmallScreen] = useMediaQuery("(max-width: 1300px)");
    const { isOpen, onOpen, onClose } = useDisclosure()

    let date = new Date().getFullYear();
    const instagramURL = "https://instagram.com/psychology.related?igshid=YmMyMTA2M2Y"


    return (
        <Flex h="5rem" bgColor="#ded1c7c4" w="100%">
            <Flex paddingLeft={["5%", "5%", "10%", "10%"]} justifyContent="center" align="center" w="50%">
                <Image w="4rem" alt="logo" src={logo} />
                <Flex w="100%" fontSize="0.75rem"> Psychology Related © {date}</Flex>
            </Flex>
            <Flex paddingRight={["5%", "5%", "10%", "10%"]} justifyContent="flex-end" align="center" w="50%">


                <Flex flexDir={["column", "column", "initial", "initial"]} paddingRight={["1rem", "1rem", "3rem", "3rem"]} justifyContent="center" align="center">
                    {/* <Button h="25px" fontSize={["10px", "10px", "12px", "17px"]} color={colors.bunkerBlack} paddingBottom={["0", "5px", "0", "5px"]} _hover={{ textDecor: "underline", transform: "scale(1.1)", transitionDelay: "250ms" }} variant="ghost">Link 1</Button> */}
                    <Button onClick={onOpen} h="25px" fontSize={["10px", "10px", "12px", "17px"]} color={colors.bunkerBlack} paddingBottom={["0", "5px", "0", "5px"]} _hover={{ textDecor: "underline", transform: "scale(1.1)", transitionDelay: "250ms" }} variant="ghost">Privacy Guidelines</Button>

                </Flex>
                <a href={instagramURL} target="_blank" rel="instagram">


                    <Flex _hover={{ cursor: 'pointer', transform: "scale(1.05)", transitionDelay: "250ms" }} gap={2} align="center" justifyContent="center">
                        {!isSmallScreen && <Text>Follow us on Instagram</Text>}
                        <Flex>
                            <FaInstagram className="instagram-icon" />
                        </Flex>
                    </Flex>
                </a>
            </Flex>
            <InfoPopup isOpen={isOpen} onClose={onClose} />
        </Flex>
    )
}
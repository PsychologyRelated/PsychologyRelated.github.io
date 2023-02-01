import { Button, Flex, Image } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import logo from "../assets/TPR.png"
import { useNavigate } from "react-router-dom";

export default function Navbar({ btnText }) {

    const navigate = useNavigate()

    const nav = () => {
        if (btnText === "Signup") {
            navigate("/")
        }
        else if (btnText === "Learn more") {
            navigate("/about")
        }

    }

    return (
        <Flex paddingX="4%" w="100%" align="center" justifyContent="space-between">


            <Image h={["15rem", "3rem", "10rem", "15rem"]} w={["15rem", "3rem", "10rem", "15rem"]} src={logo} />
            <Flex align="center" w="50%" justifyContent="flex-end">
                {/* <Button fontSize={["16px", "16px", "14px", "16px"]} paddingBottom="5px" _hover={{ textDecor: "underline", transform: "scale(1.1)", transitionDelay: "250ms" }} variant="ghost">Button 1</Button>
                <Button fontSize={["16px", "16px", "14px", "16px"]} paddingBottom="5px" _hover={{ textDecor: "underline", transform: "scale(1.1)", transitionDelay: "250ms" }} variant="ghost">Button 2</Button>
                <Button fontSize={["16px", "16px", "14px", "16px"]} paddingBottom="5px" _hover={{ textDecor: "underline", transform: "scale(1.1)", transitionDelay: "250ms" }} variant="ghost">Button 3</Button> */}
                <Button onClick={nav} fontSize={["16px", "16px", "14px", "16px"]} _hover={{ border: `1px solid ${colors.sandrift}`, color: colors.sandrift, bgColor: colors.Isabelline, transform: "scale(1.1)", transitionDelay: "25ms" }} w={["15rem", "15rem", "10rem", "15rem"]} padding="1.5rem" color={colors.azureWhite} borderRadius="25px" bgColor={colors.sandrift}>{btnText}</Button>
            </Flex>
        </Flex>
    )


}
import { Button, Flex, Heading } from "@chakra-ui/react";
import { colors } from "../../styles/colors";

export default function ThankYou({ setIsSubmitted }) {



    return (
        <Flex textAlign="center" gap="2.5rem" flexDir="column" align="center" paddingTop={["15%", "20%", "10%", "15%"]} justifyContent="center" w={["100%", "90%", "40%", "40%"]}>
            <Heading fontSize={["25", "25", "25", "30"]} fontFamily={`Playfair Display', serif`} as="h1">Thank you for subscribing to our newsletter</Heading>
            <Heading fontStyle="oblique" fontWeight={500} fontSize={["20px", "15px", "12px", "17px"]} as="h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Heading>
            <Flex>
                <Button onClick={() => setIsSubmitted(false)} fontSize={["16px", "15px", "14px", "16px"]} _hover={{ border: `1px solid ${colors.sandrift}`, color: colors.azureWhite, bgColor: colors.sandrift, transform: "scale(1.1)", transitionDelay: "25ms" }} w="max-content" padding="1.5rem" color={colors.bunkerBlack} border={`2px solid ${colors.sandrift}`} borderRadius="25px" bgColor={colors.Isabelline}>Enter an aditional email address</Button>

            </Flex>
        </Flex>
    )
}
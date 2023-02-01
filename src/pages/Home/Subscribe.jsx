import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import logo from "../../assets/TPR.png"
import "@fontsource/playfair-display/400.css";
import { colors } from "../../styles/colors";

import SignupForm from "./SignupForm";
import UseFormik from "../../hooks/useFormik";
import ThankYou from "./ThankYou";

export default function Subscribe() {

    const { isSubmitted, setIsSubmitted, loading, setIsLoading, Submit } = UseFormik()

    return (
        <Flex bgColor={colors.azureWhite} h={["600px", "700px", "600px", "800px"]} w="100%" flexDir="column">
            {isSubmitted ? (
                <Flex w="100%" justifyContent="center">
                    <ThankYou setIsSubmitted={setIsSubmitted} />
                </Flex>
            ) : (
                <>

                    <Flex marginX={["1.5rem", "1.5rem", "0", "0"]} textAlign="center" justify="center" marginTop={["20%", "20%", "5%", "7%"]}>
                        <Heading fontSize={["20px", "25px", "25px", "30px"]} fontFamily={`Playfair Display', serif`} as="h1">Unlock the door to your happiness with one simple step</Heading>
                    </Flex>
                    <Flex w="100%">

                        <SignupForm Submit={Submit} loading={loading} setIsLoading={setIsLoading} setIsSubmitted={setIsSubmitted} />
                    </Flex>
                </>
            )}

        </Flex >
    )
}
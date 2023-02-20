import { Button, Flex, Heading, useMediaQuery } from "@chakra-ui/react";

import "@fontsource/playfair-display/400.css";
import { colors } from "../../styles/colors";
import ImageSlider from "../../components/ImageSlider";
import Navbar from "../../misc/Navbar";
import { useNavigate } from "react-router-dom";
import NavbarPhone from "../../misc/Navbar-Phone";

export default function Welcome() {

    const navigate = useNavigate()
    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");

    const btnText = "Learn more"

    return (
        <Flex paddingBottom="5%" bgColor={colors.Isabelline} h="100%" w="100 % " flexDir="column" paddingTop={["20px", "20px", "0", "0"]} >
            {isSmallScreen ? <NavbarPhone btnText={btnText} /> : <Navbar btnText={btnText} />}

            <Flex justifyContent={["center", "center", "center", "initial"]} flexDir={["column", "column", "initial", "initial"]} w="100%">
                <Flex gap={[10, 10, 7, 10]} textAlign={["center", "center", "initial", "initial"]} align={["center", "center", "initial", "initial"]} justifyContent={["center", "center", "initial", "initial"]} flexDir="column" marginTop={["1rem", "1rem", "3rem", "6rem"]} marginX={["0", "0", "3%", "10%"]} w={["100%", "100%", "500px", "500px"]}>

                    <Heading fontSize={["20px", "25px", "30px", "40px"]} fontFamily={`Playfair Display', serif`} as="h1">Stay informed <br></br>& improve your well-being</Heading>
                    <Heading w={["90%", "60%", "80%", "100%"]} fontStyle="oblique" fontWeight={500} fontSize={["10px", "10px", "12px", "17px"]} as="h3">Welcome to Psychology Related, where we are dedicated to promoting mental health and well-being. Our goal is to provide valuable information, tips, and tricks to help you live a happier and healthier life. Every two weeks, we send out a newsletter packed with expert advice and practical strategies for improving your mental health and overall well-being. Whether you're looking for ways to manage stress, build healthier habits, or boost your mood, our newsletter covers you. So sign up today and join the thousands of others already on the path to a better, happier life.</Heading>
                    <Button onClick={() => navigate("/about")} fontSize={["16px", "15px", "14px", "16px"]} _hover={{ border: `1px solid ${colors.sandrift}`, color: colors.azureWhite, bgColor: colors.sandrift, transform: "scale(1.1)", transitionDelay: "25ms" }} w={["15rem", "10rem", "10rem", "15rem"]} padding={["1rem", "1rem", "1.5rem", "1.5rem"]} color={colors.bunkerBlack} border={`2px solid ${colors.sandrift}`} borderRadius="25px" bgColor={colors.Isabelline}>Learn more</Button>
                </Flex>
                <Flex justifyContent="center" w={["100%", "100%", "50%", "50%"]}>
                    <ImageSlider />
                </Flex>
            </Flex>

        </Flex >
    )
}
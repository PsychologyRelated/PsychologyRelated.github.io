import { Flex } from "@chakra-ui/react";
import Footer from "../../misc/Footer";
import Top from "../../misc/Top";
import AboutContainer from "./AboutContainer";

export default function About() {

    return (
        <Flex w="100%" flexDir="column">
            <Top />
            <AboutContainer />
            <Footer />
        </Flex >
    )
}
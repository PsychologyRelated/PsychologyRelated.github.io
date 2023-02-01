import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import logo from "../../assets/TPR.png"
import "@fontsource/playfair-display/400.css";
import { colors } from "../../styles/colors";
import Welcome from "./Welcome";
import Subscribe from "./Subscribe";
import Top from "../../misc/Top";
import Footer from "../../misc/Footer";


export default function LandingPage() {


    return (
        <Flex w="100%" flexDir="column">
            <Top />
            <Welcome />
            <Subscribe />
            <Footer />
        </Flex >
    )
}
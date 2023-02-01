import { Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import logo from "../assets/TPR.png"
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useReducer, useState } from "react";
import OpenMenu from "./OpenMenu";

export default function NavbarPhone({ btnText }) {

    const [navOpen, setNavOpen] = useReducer(open => !open, false)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate()



    return (
        <Flex paddingX="4%" paddingY="2%" w="100%" align="center" justifyContent="space-between">


            <Image h={["3rem", "3rem", "10rem", "15rem"]} w={["3rem", "3rem", "10rem", "15rem"]} src={logo} />
            <Flex align="center" w="50%" justifyContent="end">
                {!navOpen &&
                    <HamburgerIcon onClick={() => {
                        setNavOpen()
                        onOpen()
                    }} />
                }
                <OpenMenu logo={logo} setNavOpen={setNavOpen}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    btnText={btnText}
                />

            </Flex>
        </Flex>
    )


}
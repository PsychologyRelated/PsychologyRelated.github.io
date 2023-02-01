import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  Flex,
  Button,
  Image,

} from "@chakra-ui/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from '@chakra-ui/icons'
import { colors } from "../styles/colors";
// import { navRoutesPhone } from "../../config/navRoutesPhone";

export default function OpenMenu({ setNavOpen, isOpen, logo, onClose, btnText }) {
  //   const { setIsOpen } = useResDesign();
  const navigate = useNavigate();



  const nav = () => {
    if (btnText === "Signup") {
      navigate("/")
    }
    else if (btnText === "Learn more") {
      navigate("/about")
    }

  }
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent h="100%">
          <DrawerHeader bgColor="#c1a18a9c" className="top">

            <Flex
              alignItems="center"
              bgColor="#c1a18a0d"
              justifyContent="space-between"
              align="center"
              width="100%"
            >
              <Image
                w="5rem"
                h="5rem"
                src={logo}
              />

              <CloseIcon w={5} h={5} color="black" onClick={() => {
                onClose()
                setNavOpen()
              }} />
            </Flex>

          </DrawerHeader>

          <DrawerBody borderTop={`1px solid ${colors.americano}`} bgColor={colors.Isabelline}>


            <Flex marginTop="2rem" gap={10} textAlign="left" justifyContent="flex-start" flexDir="column">
              {/* <Button w="max-content" fontSize={["16px", "16px", "14px", "16px"]} paddingBottom="5px" _hover={{ textDecor: "underline", transform: "scale(1.1)", transitionDelay: "250ms" }} variant="ghost">Button 1</Button>
              <Button w="max-content" fontSize={["16px", "16px", "14px", "16px"]} paddingBottom="5px" _hover={{ textDecor: "underline", transform: "scale(1.1)", transitionDelay: "250ms" }} variant="ghost">Button 2</Button>
              <Button w="max-content" fontSize={["16px", "16px", "14px", "16px"]} paddingBottom="5px" _hover={{ textDecor: "underline", transform: "scale(1.1)", transitionDelay: "250ms" }} variant="ghost">Button 3</Button> */}
              <Button onClick={nav} fontSize={["16px", "16px", "14px", "16px"]} variant="ghost" _hover={{ border: `1px solid ${colors.sandrift}`, color: colors.sandrift, bgColor: colors.Isabelline, transform: "scale(1.1)", transitionDelay: "25ms" }} w="max-content" color={colors.sandrift} borderRadius="25px" >{btnText}</Button>
            </Flex>
          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )

}




//  {/* {navRoutesPhone.map((data, index) => (
//                 <Flex
//                   marginTop="39px"
//                   key={index}
//                   align="center"
//                   fontSize="25px"
//                 >
//                   {/* <NavLink to={data.path}> */}
//                   <Button
//                     onClick={() => {
//                       navigator(data.path);
//                     }}
//                     color="black"
//                     fontSize="15px"
//                     fontWeight="800"
//                     backgroundColor="transparent"
//                     _focus={{
//                       color: "#31C3AC",
//                       backgroundColor: "transparent",
//                     }}
//                   >
//                     {data.lable}
//                   </Button>
//                   {/* </NavLink> */}
//                 </Flex>
//               ))}
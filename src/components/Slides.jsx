import { Flex, Heading, Image, Text, Icon } from "@chakra-ui/react";
import { transform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { colors } from "../styles/colors";
import useFade from "../hooks/useFade";


export default function Slides({ slideArray }) {
    const timeRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setVisible, fadeProps] = useFade();

    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            setVisible(!isVisible)
            nextSlide()
            setVisible(!isVisible)
        }, 10000)
        return () => clearTimeout(timeRef.current)
    }, [currentIndex])



    const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === slideArray.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }, [currentIndex, slideArray])

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slideArray.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }




    return (
        <Flex >
            <Flex marginY={["30%", "initial", "initial", "initial"]} position="relative" gap={["1.5rem", "3rem", "1.2rem", "1.5rem"]} justifyContent={["space-between", "center", "space-between", "space-between"]} flexDir="column" align="center" h={["600px", "700px", "350px", "546px"]} w={["100%", "100%", "500px", "500px"]}>
                <Flex {...fadeProps} w={["300px", "300px", "220px", "350px"]} minH={["300px", "300px", "220px", "350px"]} margin="0 auto">
                    <Image objectFit="cover" boxShadow={`0 1px 10px 2px ${colors.justRight}`} borderRadius="50%" src={slideArray[currentIndex].url} />
                </Flex>
                <Flex marginX={["2%", "2%", "0", "0"]} w={["100%", "90%", "80%", "100%"]} justifyContent="center">
                    <Flex right="90%" position="absolute" _hover={{ cursor: 'pointer' }}>
                        <ChevronLeftIcon onClick={prevSlide} _hover={{ transform: "scale(1.2)" }} w={8} h={8} />
                    </Flex>


                    <Flex {...fadeProps} textAlign="center" gap={["1.5rem", "1.5rem", "1.2rem", "1.5rem"]} w={["90%", "100%", "100%", "100%"]} flexDir="column">
                        <Heading fontSize={["21px", "18px", "18px", "21px"]} fontFamily={`Playfair Display', serif`} as="h1">{slideArray[currentIndex].title}</Heading>
                        <Flex w="100%" justifyContent="center">


                            <Flex w={["90%", "80%", "70%", "70%"]} h={["60px", "100%", "60px", "60px"]}>
                                <Text fontSize={["15px", "17px", "12px", "16px"]} color="#26282adb" fontStyle="oblique" fontWeight={500}>{slideArray[currentIndex].text}</Text>
                            </Flex>
                        </Flex>
                    </Flex>


                    <Flex left="90%" position="absolute" _hover={{ cursor: 'pointer' }}>
                        <ChevronRightIcon onClick={nextSlide} _active={{ transform: "scale(0.9)" }} _hover={{ transform: "scale(1.2)" }} w={8} h={8} />
                    </Flex>


                </Flex>
                <Flex gap={1.5} >
                    {slideArray.map((data, index) =>
                        <Icon key={index} onClick={() => goToSlide(index)} cursor="pointer" viewBox='0 0 200 200' color={colors.justRight}>
                            <path
                                fill='currentColor'
                                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                            />
                        </Icon>
                    )}
                </Flex>
            </Flex>

        </Flex >
    )
}
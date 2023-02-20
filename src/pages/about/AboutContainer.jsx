import { Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import about from "../../JSON-Data/slideArray.json"
import Navbar from "../../misc/Navbar";
import { colors } from "../../styles/colors";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavbarPhone from "../../misc/Navbar-Phone";

export default function AboutContainer() {

    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");

    const btnText = "Signup"

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <Flex flexDir="column" bgColor={colors.Isabelline} w="100%" >
            {isSmallScreen ? <NavbarPhone btnText={btnText} /> : <Navbar btnText={btnText} />}
            <Flex marginTop={["10%", "5%", "1%", "1%"]} flexDir="column" w="100%" align="center" justifyContent="space-between">

                {about.map((data, index) =>
                    index % 2 ? (
                        <Flex
                            paddingY="5%"
                            paddingX="4%"
                            bgColor={colors.Isabelline}
                            align="center"
                            paddingTop={["15%", "15%", "8%", "5%"]}
                            paddingBottom={["15%", "15%", "8%", "5%"]}
                            w="100%"
                            justifyContent="center"
                            key={data.title}
                        >
                            <Flex
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-duration="800"
                                alignItems="center"
                                w={["100%", "100%", "70%", "80%"]}
                                justifyContent="space-between"
                            >
                                <Flex>
                                    <Image
                                        objectFit="cover"
                                        boxShadow={`0 0 8px 8px ${colors.swissCoffee}`}
                                        // boxShadow={`0 0 8px 8px #d7d2ce7d`}




                                        borderRadius="50%"
                                        w={["120px", "130px", "250px", "500px"]}
                                        h={["120px", "130px", "250px", "500px"]}
                                        alt={data.title}
                                        src={data.url}
                                    />
                                </Flex>
                                <Flex
                                    gap={[1, 2, 3, 10]}
                                    w="60%"
                                    paddingX="0.5rem"
                                    // h="135px"
                                    textAlign="center"
                                    justifyContent="space-between"
                                    flexDir="column"
                                >

                                    <Heading
                                        color={colors.bunkerBlack} textShadow="1px 2px 9px #8080807a"
                                        fontSize={["16px", "18px", "25px", "35px"]}
                                        fontFamily={`Playfair Display', serif`} as="h1"
                                    >
                                        {data.title}
                                    </Heading>
                                    <Text fontSize={["12px", "15px", "12px", "24px"]} color="#26282adb" fontStyle="oblique" >
                                        {data.text}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    ) : (
                        <Flex

                            align="center"
                            paddingTop={["15%", "15%", "8%", "5%"]}
                            paddingBottom={["15%", "15%", "8%", "5%"]}
                            w="100%"
                            bgColor="#f8f8f8"
                            // w={[null, null, "1200px", "1920px"]}
                            justifyContent="center"
                            key={data.title}
                        >
                            <Flex
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-duration="800"
                                alignItems="center"
                                gap={[3, 0, 0, 0]}
                                w={["90%", "90%", "64.5%", "80%"]}
                                // w={[null, null, "800px", "1097px"]}
                                justifyContent="space-between"
                            >
                                <Flex
                                    w={["100%", "100%", "80%", "80%"]}
                                    justifyContent="space-between"
                                    flexDir="column"
                                >
                                    <Flex
                                        textAlign="center"
                                        paddingX="0.5rem"
                                        flexDir="column"
                                        alignItems={["center", "center", "end", "end"]}
                                        w={["null", "90%", "83.5%", "83.5%"]}
                                        gap={[1, 2, 3, 10]}
                                    >

                                        <Flex justifyContent="center">
                                            <Heading color={colors.bunkerBlack} textShadow="1px 2px 9px #8080807a" fontSize={["16px", "18px", "25px", "35px"]}
                                                fontFamily={`Playfair Display', serif`} as="h1"
                                            >
                                                {data.title}
                                            </Heading>
                                        </Flex>
                                        <Flex>
                                            <Text fontSize={["12px", "15px", "12px", "24px"]} color="#26282adb" fontStyle="oblique">
                                                {data.text}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Image
                                    objectFit="cover"
                                    boxShadow={`0 0 8px 8px #d5d5d585`}
                                    borderRadius="50%"
                                    w={["120px", "130px", "250px", "500px"]}
                                    h={["120px", "130px", "250px", "500px"]}

                                    alt={data.title}
                                    src={data.url}
                                />
                            </Flex>
                        </Flex>
                    )
                )}
            </Flex>
        </Flex>
    )
}
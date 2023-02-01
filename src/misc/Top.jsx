import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../styles/colors";

export default function Top() {


    return (
        <Flex align="center" justifyContent="center" h="2.5rem" className="top" w="100%">
            <Text fontStyle="oblique" fontWeight={500} color={colors.azureWhite} fontSize="12px">Don't miss out on our 7-step guide on turning your life around!</Text>
        </Flex>
    )
}

// bgColor="rgba(193, 161, 138, 0.61)"
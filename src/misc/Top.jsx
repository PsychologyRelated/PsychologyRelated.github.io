import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../styles/colors";

export default function Top() {


    return (
        <Flex align="center" justifyContent="center" h="2.5rem" className="top" w="100%">
            <Text fontStyle="oblique" fontWeight={500} color={colors.azureWhite} fontSize="12px">7-Step Guide on Turning Your Life Around!</Text>
        </Flex>
    )
}

// bgColor="rgba(193, 161, 138, 0.61)"
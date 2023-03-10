import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../styles/colors";

export default function Top() {


    return (
        <Flex textAlign="center" align="center" justifyContent="center" h="2.5rem" className="top" w="100%">
            <Text fontStyle="oblique" fontWeight={500} color={colors.azureWhite} fontSize="12px">Don't miss out on our 7 Step Guide to Turning Your Life Around!</Text>
        </Flex>
    )
}

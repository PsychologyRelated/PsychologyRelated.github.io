import { Box, Button, Flex, FormControl, FormLabel, Input, Tooltip } from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import { SignupSchema } from "../../schema/SignupSchema";
import { colors } from "../../styles/colors";
import useFormik from "../../hooks/useFormik"

export default function SignupForm({ setIsSubmitted, loading, setIsLoading }) {

    const { Submit } = useFormik()

    const data = {
        firstName: "",
        lastName: "",
        email: "",
    }



    return (
        <Flex paddingTop={["15%", "15%", "5%", "5%"]} justifyContent="center" w="100%">
            <Formik

                validationSchema={SignupSchema}
                initialValues={data}
                onSubmit={(values, { resetForm }) => {
                    setIsLoading(true);
                    const timer = setTimeout(() => {
                        console.log(values, "values")
                        Submit()
                        resetForm({ values: "" });
                        setIsSubmitted(true);
                        setIsLoading(false);
                    }, 900);
                    return () => clearTimeout(timer);
                }}
            >
                {(values) => {
                    return (
                        <Form className="form">
                            <FormControl
                                variant="floating"
                                h={["65px", "70px", "90px", "90px"]}
                                isInvalid={
                                    values.errors.firstName && values.touched.firstName
                                }
                            >
                                <Input

                                    _focus={{ boxShadow: "none", border: `1px solid ${colors.darkBrown}` }}
                                    boxShadow="none"
                                    color={colors.bunkerBlack}
                                    fontSize={["15px", "15px", "15px", "20px"]}
                                    autoComplete="off"
                                    name="firstName"
                                    w={["300px", "300px", "650px", "753px"]}
                                    h={["40px", "40px", "50px", "50px"]}
                                    borderRadius="10px"
                                    placeholder=" "
                                    onChange={values.handleChange}
                                    border={`1px solid ${colors.darkBrown}`}
                                />
                                <FormLabel fontSize={["15px", "15px", "16px", "20px"]} color="#26282ac9">
                                    First name
                                </FormLabel>
                                <Box color={colors.errorRed}>
                                    <ErrorMessage name="firstName" />
                                </Box>
                            </FormControl>

                            <FormControl
                                variant="floating"
                                h={["65px", "70px", "90px", "90px"]}
                                isInvalid={
                                    values.errors.lastName && values.touched.lastName
                                }
                            >
                                <Input
                                    _focus={{ boxShadow: "none", border: `1px solid ${colors.darkBrown}` }}
                                    boxShadow="none"
                                    color={colors.bunkerBlack}
                                    fontSize={["15px", "15px", "15px", "20px"]} autoComplete="off"
                                    name="lastName"
                                    w={["300px", "300px", "650px", "753px"]} h={["40px", "40px", "50px", "50px"]} borderRadius="10px"
                                    placeholder=" "
                                    onChange={values.handleChange}
                                    border={`1px solid ${colors.darkBrown}`}
                                />
                                <FormLabel fontSize={["15px", "15px", "16px", "20px"]} color="#26282ac9">
                                    Last name
                                </FormLabel>
                                <Box color={colors.errorRed}>
                                    <ErrorMessage name="lastName" />
                                </Box>
                            </FormControl>

                            <FormControl
                                variant="floating"
                                h={["65px", "70px", "90px", "90px"]}
                                isInvalid={
                                    values.errors.email && values.touched.email
                                }
                            >
                                <Input
                                    _focus={{ boxShadow: "none", border: `1px solid ${colors.darkBrown}` }}
                                    boxShadow="none"
                                    color={colors.bunkerBlack}
                                    fontSize={["15px", "15px", "15px", "20px"]} autoComplete="off"
                                    name="email"
                                    w={["300px", "300px", "650px", "753px"]}
                                    h={["40px", "40px", "50px", "50px"]} borderRadius="10px"
                                    placeholder=" "
                                    onChange={values.handleChange}
                                    border={`1px solid ${colors.darkBrown}`}
                                />
                                <FormLabel fontSize={["15px", "15px", "16px", "20px"]} color="#26282ac9">
                                    Email
                                </FormLabel>
                                <Box color={colors.errorRed}>
                                    <ErrorMessage name="email" />
                                </Box>
                            </FormControl>

                            <Flex flexDir={["column", "column", "initial", "initial"]} marginTop={["0", "2rem", "1.5rem", "0"]} paddingX="0.5rem">


                                <Flex w="100%" marginTop={["2.5rem", "2.5rem", "0", "0"]} justifyContent={["center", "center", "flex-end", "flex-end"]} display="flex">
                                    <Tooltip placement="bottom-end" bg={colors.azureWhite} border={`1px solid ${colors.sandrift}`} borderRadius="10px" color="#26282adb" label='Get the 7 step beginners guide to turning your life around'>

                                        <Button isLoading={loading} loadingText='Submitting' type="submit" _hover={{ border: `1px solid ${colors.sandrift}`, color: colors.sandrift, bgColor: colors.Isabelline, transform: " scale(1.1)", transitionDelay: "25ms" }} w="10rem" padding="1.5rem" color={colors.azureWhite} borderRadius="25px" bgColor={colors.sandrift}>Signup</Button>
                                    </Tooltip>
                                </Flex>
                            </Flex>

                        </Form>
                    )
                }}
            </Formik>
        </Flex >
    )
}
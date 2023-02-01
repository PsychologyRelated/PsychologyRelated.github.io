import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required()
    .label("First name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .max(100),
  lastName: Yup.string()
    .required()
    .label("Last name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .max(100),
  email: Yup.string().email().required().label("Email"),
  // biWeekly: Yup.string().required(),
});

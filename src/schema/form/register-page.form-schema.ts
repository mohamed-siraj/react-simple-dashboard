import * as yup from "yup";

const SCHEMA = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    confirmPassword: yup.string().min(5).required().oneOf([yup.ref('password'), 'Passwords do not match'])
  })
  .required();

export default SCHEMA;
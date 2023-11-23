import * as yup from "yup";

const SCHEMA = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
  })
  .required();

export default SCHEMA;
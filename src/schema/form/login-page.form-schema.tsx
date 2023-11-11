import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().max(10).min(10).required()
  })
  .required();

export default schema;
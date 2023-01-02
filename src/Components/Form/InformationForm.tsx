import React, { FunctionComponent } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomFormField from "./CustomFormField";

interface OwnProps {}

type Props = OwnProps;

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  age: Yup.number().required("Required"),
  gender: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  countryOfOrigin: Yup.string().required("Required"),
  hobbies: Yup.string().required("Required"),
  facts: Yup.string().required("Required"),
});
const InformationForm: FunctionComponent<Props> = () => {
  const textStyle = "text-5xl font-primary drop-shadow-pop4 pr-2 ";
  return (
    <div>
      <div className={"flex flex-row justify-center mb-10"}>
        <h1 className={textStyle + "text-white"}>Let</h1>
        <h1 className={textStyle + "text-accent"}>GPT-3</h1>
        <h1 className={textStyle + "text-white"}>help you</h1>
      </div>
      <Formik
        initialValues={{
          name: "",
          age: "",
          gender: "",
          location: "",
          countryOfOrigin: "",
          hobbies: "",
          fact: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={"flex flex-col justify-center w-full"}>
            <CustomFormField errors={errors} touched={touched} name={"name"} />

            <CustomFormField errors={errors} touched={touched} name={"age"} />

            <CustomFormField
              errors={errors}
              touched={touched}
              name={"gender"}
            />

            <CustomFormField
              errors={errors}
              touched={touched}
              name={"location"}
            />

            <CustomFormField
              errors={errors}
              touched={touched}
              name={"countryOfOrigin"}
            />

            <CustomFormField
              errors={errors}
              touched={touched}
              name={"hobbies"}
            />

            <CustomFormField errors={errors} touched={touched} name={"fact"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InformationForm;

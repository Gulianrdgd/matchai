import React, { FunctionComponent } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomFormField from "./CustomFormField";
import CustomOptionField from "./CustomOptionField";
import { httpsCallable } from "firebase/functions";
import { useFunctions } from "reactfire";

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
  const functions = useFunctions();

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
          gender: 3,
          location: "",
          countryOfOrigin: "",
          hobbies: "",
          fact: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          console.log(values);
          const response = await httpsCallable(functions, "getPrompt")(values);
          const bio = response.data;
          console.log(bio);
        }}
      >
        {({ errors, touched }) => (
          <Form className={"flex flex-col justify-center w-full"}>
            <CustomFormField errors={errors} touched={touched} name={"name"} />

            <CustomFormField errors={errors} touched={touched} name={"age"} />

            <CustomOptionField
              name={"gender"}
              errors={errors}
              options={["men", "woman", "non-binary", "rather not say"]}
              touched={touched}
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

            <button
              type="submit"
              className={
                "bg-accent w-16 self-center m-5 rounded-md drop-shadow-pop4 text-white font-secondary"
              }
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InformationForm;

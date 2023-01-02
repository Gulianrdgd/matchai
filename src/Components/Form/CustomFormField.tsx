import React, { FunctionComponent } from "react";
import { Field } from "formik";

interface OwnProps {
  name: string;
  errors: any;
  touched: any;
}

type Props = OwnProps;

const CustomFormField: FunctionComponent<Props> = (props) => {
  return (
    <div className={"flex flex-col w-96 my-2 self-center"}>
      <label className={"text-white font-secondary text-lg"}>
        {props.name}
      </label>
      <Field
        name={props.name}
        className={"my-2 rounded-md h-8 font-secondary"}
      />
      {props.errors[props.name] && props.touched[props.name] ? (
        <div className={"text-red-500 font-secondary"}>
          {props.errors[props.name]}
        </div>
      ) : null}
    </div>
  );
};

export default CustomFormField;

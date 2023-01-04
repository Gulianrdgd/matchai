import React, { FunctionComponent } from "react";
import { Field } from "formik";

interface OwnProps {
  name: string;
  errors: any;
  options: string[];
  touched: any;
}

type Props = OwnProps;

const OptionList = (options: string[]) => {
  const arr = [];
  for (let i = 0; i < options.length; i++) {
    arr.push(
      <option key={"optionGender" + i} value={i} className={"font-secondary"}>
        {options[i]}
      </option>
    );
  }
  return arr;
};

const CustomOptionField: FunctionComponent<Props> = (props) => {
  return (
    <div className={"flex flex-col w-96 my-2 self-center"}>
      <label className={"text-white font-secondary text-lg"}>
        {props.name}
      </label>
      <Field
        name={props.name}
        as={"select"}
        className={"my-2 rounded-md h-8 font-secondary px-2"}
      >
        {OptionList(props.options)}
      </Field>
      {props.errors[props.name] && props.touched[props.name] ? (
        <div className={"text-red-500 font-secondary"}>
          {props.errors[props.name]}
        </div>
      ) : null}
    </div>
  );
};

export default CustomOptionField;

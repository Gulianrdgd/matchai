import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface OwnProps {
  name: string;
  age: number;
  miles?: number;
  text: string;
  image: string;
}

type Props = OwnProps;

const TinderCard: FunctionComponent<Props> = (props) => {
  return (
    <div className={"w-56 h-96 rounded-lg bg-white mt-10"}>
      <div className={"h-44"}>
        <img
          className={
            "object-cover object-top w-56 h-44 absolute -p-2 rounded-t-lg"
          }
          src={props.image}
          alt={"Dating app profile card"}
        />
      </div>
      <div className={"flex flex-col p-4"}>
        <div className={"flex flex-row"}>
          <h3 className={"font-primary text-4xl self-center"}>{props.name},</h3>
          <h4
            className={"font-primary pl-1 text-4xl self-center text-gray-500"}
          >
            {props.age}
          </h4>
        </div>
        <div className={"flex flex-row"}>
          <FontAwesomeIcon icon={faLocationDot} className={"self-center"} />
          <p className={"font-secondary self-center pl-1 text-sm"}>
            {props.miles} miles away
          </p>
        </div>
        <p className={"self-center justify-center font-secondary text-xl my-5"}>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default TinderCard;

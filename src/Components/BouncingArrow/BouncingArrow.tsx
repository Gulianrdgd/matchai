import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface OwnProps {}

type Props = OwnProps;

const BouncingArrow: FunctionComponent<Props> = () => {
  return (
    <div className={"absolute bottom-10 left-0 w-full"}>
      <div className={"w-full flex justify-center h-full"}>
        <FontAwesomeIcon
          icon={faArrowDown}
          className={"animate-bounce w-16 h-16 self-center text-white"}
        />
      </div>
    </div>
  );
};

export default BouncingArrow;

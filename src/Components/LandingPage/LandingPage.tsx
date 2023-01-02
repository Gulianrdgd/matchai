import React, { FunctionComponent } from "react";
import TinderCard from "../TinderCard/TinderCard";

interface OwnProps {}

type Props = OwnProps;

const LandingPage: FunctionComponent<Props> = () => {
  const topTextClasses = "text-8xl font-primary drop-shadow-pop4 ";

  return (
    <div className={"flex flex-row container w-full justify-between h-screen"}>
      <div className={"flex flex-col justify-end self-center w-1/2"}>
        <div className={"flex flex-col w-fit self-center mx-2"}>
          <h1 className={topTextClasses + " text-secondary"}>
            Tired <br /> of your
          </h1>
          <h1 className={topTextClasses + " text-accent"}>boring </h1>
          <h1 className={topTextClasses + " text-secondary"}>bio? </h1>
        </div>
      </div>
      <div className={"h-144 w-1/2 justify-center self-center"}>
        <div className={"flex justify-center"}>
          <div className={"absolute h-128 w-96"}>
            <div className={"z-10 absolute -top-20"}>
              <TinderCard
                age={21}
                image={"profile_picture/cat.jpg"}
                name={"Chloe"}
                text={
                  "I'm feline fine, but my purr-sonality is just purr-fect!"
                }
                miles={5}
              />
            </div>
            <div className={"z-0 absolute left-44 top-56"}>
              <TinderCard
                age={23}
                image={"profile_picture/dog.jpg"}
                name={"Barkley"}
                text={
                  "I'm a real hound when it comes to chasing after tennis balls."
                }
                miles={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

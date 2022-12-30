import Rive from "@rive-app/react-canvas";
import React from "react";
function App() {
  const topTextClasses = "text-5xl font-primary drop-shadow-pop4";

  return (
    <div className={"bg-background w-full min-h-screen px-24"}>
      <div className={"flex flex-row container w-full justify-between"}>
        <div className={"flex flex-col justify-end self-center w-1/2"}>
          <div className={"flex flex-col w-fit self-center mx-2"}>
            <h1 className={topTextClasses + " text-secondary"}>
              Tired <br /> of your
            </h1>
            <h1 className={topTextClasses + " text-accent"}>boring </h1>
            <h1 className={topTextClasses + " text-secondary"}>bio? </h1>
          </div>
        </div>
        <div className={"h-144 w-1/2"}>
          <Rive src="matchai_profile.riv" stateMachines={"Hover"} />
        </div>
      </div>
    </div>
  );
}

export default App;

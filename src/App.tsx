import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import InformationForm from "./Components/Form/InformationForm";
import BouncingArrow from "./Components/BouncingArrow/BouncingArrow";
function App() {
  return (
    <div
      className={"bg-background w-full min-h-screen px-24 flex justify-center"}
    >
      <div className={"flex flex-col container h-full"}>
        <LandingPage />
        <BouncingArrow />
        <div className={"h-full"}>
          <InformationForm />
        </div>
      </div>
    </div>
  );
}

export default App;

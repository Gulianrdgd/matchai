import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import InformationForm from "./Components/Form/InformationForm";
import BouncingArrow from "./Components/BouncingArrow/BouncingArrow";
import { FunctionsProvider, useFirebaseApp } from "reactfire";
import { getFunctions } from "@firebase/functions";
function App() {
  const app = useFirebaseApp();

  return (
    <div
      className={"bg-background w-full min-h-screen px-24 flex justify-center"}
    >
      <div className={"flex flex-col container h-full"}>
        <LandingPage />
        <BouncingArrow />
        <div className={"h-full"}>
          <FunctionsProvider sdk={getFunctions(app)}>
            <InformationForm />
          </FunctionsProvider>
        </div>
      </div>
    </div>
  );
}

export default App;

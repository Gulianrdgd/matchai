import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyCj4Q3oE7VJrD2eGwBpXsbImgeRvD81UKM",
  authDomain: "tinderai-a7331.firebaseapp.com",
  projectId: "tinderai-a7331",
  storageBucket: "tinderai-a7331.appspot.com",
  messagingSenderId: "1053209306965",
  appId: "1:1053209306965:web:df8517da4eb1072dd771dc",
  measurementId: "G-9FGRE2XFYL",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

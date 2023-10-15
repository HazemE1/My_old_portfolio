import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PriceCalculations from "./pages/PriceCalculations-new";
import PreviousWork from "./pages/PreviousWork";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/calculate",
      element: <PriceCalculations />,
    },
    {
      path: "/work",
      element: <PreviousWork />,
    },
  ]);

  return <RouterProvider router={router} />;
}

function LoadingScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={"App-logo"}>
          <img src={logo} alt="logo" />
          <p>
            Welcome <code>to</code> Hazem Elkhalil's Portfolio.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

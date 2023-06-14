import React from "react";
import SingnIn from "./components/SingnIn";
import NavbarWithDropdown from "./components/NavbarWithDropdown";
import { Button } from "flowbite-react";

function App() {
  return (
    <>
      <NavbarWithDropdown />
      <SingnIn />
    </>
  );
}

export default App;

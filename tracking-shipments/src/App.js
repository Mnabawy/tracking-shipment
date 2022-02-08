import { useEffect } from "react";
import Header from "./components/Layout/Header";
import Table from "./components/Table";
import ShipmentProgres from "./components/Stepper/ShipmentProgres";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <ShipmentProgres />
      <Table />
    </div>
  );
}

export default App;

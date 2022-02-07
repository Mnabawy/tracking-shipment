import { useEffect } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import BasicTable from "./components/Table/BasicTable";
import Table from "./components/Table";
import ShipmentProgres from "./components/Wizzard/ShipmentProgres";
import {
  getShipments,
  getTransitEvents,
  getTableData,
} from "./Services/Shipments";

import apiUrl from "./Utils/confi.json";

function App() {

  return (
    <div className="App">
      <Header />
      <ShipmentProgres />
      {/* <BasicTable /> */}
      <Table />
    </div>
  );
}

export default App;

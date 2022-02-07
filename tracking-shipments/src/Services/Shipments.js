import axios from "axios";
import api from "../Utils/confi.json";

export const getShipments = () => {
  return axios.get(api.apiUrl);
};

export const getTransitEvents = () => {
  let response = getShipments();
  return response;
};

export const getTableData = async () => {
  let response = await getShipments();
  let data = response.data.TransitEvents;

  let tableData = [];
  data.map(item =>
    tableData.push({
      state: item.state,
      date: item.timestamp,
      time: item.timestamp,
      hub: item.hub ? item.hub : null,
    })
  );
  return tableData;
};

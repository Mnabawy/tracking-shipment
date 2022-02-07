import React, { useEffect, useState } from "react";
import { getTableData } from "../Services/Shipments";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetData() {
      const shipments = await getTableData();
      setData(shipments);
    }
    fetData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>branch</th>
            <th>date</th>
            <th>time</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <td>{item.hub}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

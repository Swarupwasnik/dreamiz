import { useSelector } from "react-redux";
import * as React from "react";
import Data from "./Data";
function Display() {
  const { tableData } = useSelector((res) => res);
  return (
    <div style={{ width: "45%" }}>
      <Data tableData={tableData} />
    </div>
  );
}
export default Display;

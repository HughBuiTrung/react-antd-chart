import React from "react";
import { Button } from "antd";
export default function Header() {
  return (
    <>
      <div className="header">
        <h3>REACT CHART CARBON DESIGN</h3>
        <Button type="text" className="rsc">
          Reset Chart
        </Button>
      </div>
    </>
  );
}

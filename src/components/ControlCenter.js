import { Button, InputNumber, Select } from "antd";
import React from "react";

export default function ControlCenter() {
  const onChange = (value) => {
    console.log("changed", value);
  };
  return (
    <div>
      <h3>CONTROL CENTRE</h3>
      <div className="controlCenter">
        <div>
          <h5>Type</h5>
          <Select
            defaultValue="Simple"
            style={{
              width: 120,
            }}
            dropdownMatchSelectWidth={false}
            options={[
              {
                value: "Simple",
                label: "Simple",
              },
            ]}
          />
        </div>
        <div>
          <h5>Date</h5>
          <InputNumber
            min={1}
            max={31}
            defaultValue={"mm"}
            onChange={onChange}
          />
        </div>
        <div>
          <h5>Time</h5>
          <InputNumber
            min={1}
            max={31}
            defaultValue={"dd"}
            onChange={onChange}
          />
          <InputNumber
            min={1}
            max={24}
            defaultValue={"hh"}
            onChange={onChange}
          />
          <InputNumber
            min={1}
            max={60}
            defaultValue={"mm"}
            onChange={onChange}
          />
        </div>
      </div>
      <Button className="btnAnt">Reset</Button>
      <Button className="btnAnt">Apply</Button>
      <hr />
      <div>
        <h4>Selected Variables / Sections</h4>
      </div>
    </div>
  );
}

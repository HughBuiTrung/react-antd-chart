import { Select } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import { Checkbox } from "antd";

export default function Variable() {
  const onChange = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  const onCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const plainOptions = [
    "bacon",
    "egg",
    "chicken",
    "salad",
    "shrimp",
    "pizza",
    "seafood",
    "rice",
    "milk",
    "bread",
  ];

  return (
    <div>
      <h2>Variable</h2>
      <div>
        <h4>Type</h4>
        <Select
          defaultValue="All"
          style={{
            width: 120,
          }}
          dropdownMatchSelectWidth={false}
          options={[
            {
              value: "All",
              label: "All",
            },
            {
              value: "Food",
              label: "Food",
            },
            {
              value: "Meat",
              label: "Meat",
            },
          ]}
        />
        <br />
        <Search
          placeholder="input search text"
          allowClear
          onChange={onChange}
          style={{
            width: 304,
          }}
        />
        <Checkbox.Group
          options={plainOptions}
          defaultValue={["Apple"]}
          onChange={onCheck}
        />
      </div>
    </div>
  );
}

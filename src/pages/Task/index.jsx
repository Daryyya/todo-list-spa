import React from "react";
import Column from "./Column";
import ColumnWrap from "./ColumnWrap";

const Task = () => {
  return (
    <>
      <ColumnWrap>
        <Column status="Very-very-important 🔴" />
        <Column status="Very-important 🟡" />
        <Column status="Important 🟢" />
      </ColumnWrap>
    </>
  );
};

export default Task;

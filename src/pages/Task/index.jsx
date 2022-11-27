import React from "react";
import Column from "./Column";
import ColumnWrap from "./ColumnWrap";
import useParsedQuery from "../../helper/useParsedQuery";
import Form from './Form';

const Task = ({onReceived, projectList}) => {
  const [taskId] = useParsedQuery(['id'])
  const projectT = projectList.find(el => el.id === taskId)

  if (!projectT) {
    return <p>loading...</p>;
  }

  return (
    <>
      <p>
        {projectT.project}
      </p>
      <Form currentProject={projectT} onReceived={onReceived}/>
      <ColumnWrap>
        <Column status="Very-very-important 🔴" projectT={projectT}/>
        <Column status="Very-important 🟡" projectT={projectT}/>
        <Column status="Important 🟢" projectT={projectT}/>
      </ColumnWrap>
    </>
  );
};

export default Task;

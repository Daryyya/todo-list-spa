import React, { useState } from "react";
import Column from "./Column";
import ColumnWrap from "./ColumnWrap";
import useParsedQuery from "../../helper/useParsedQuery";
import Form from "./Form";
import Container from "./Container";
import style from "./style.module.scss";
import Portal from "./Portal";

const Task = ({ onReceived, projectList }) => {
  console.log("rr");
  const [currentStatus, setCurrentStatus] = useState(null);

  const [currentItem, setCurrentItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId] = useParsedQuery(["id"]);
  const currentProject = projectList.find((el) => el.id === taskId);

  console.log(currentProject);

  if (!currentProject) {
    return <p>loading...</p>;
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className == "style_item__vfhZ2") {
      e.target.style.boxShadow = "0 2px 3px grey";
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dragStartHandler = (e, status, item) => {
    setCurrentStatus(status);
    setCurrentItem(item);
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dropHandler = (e, statusR, item) => {
    e.preventDefault();
    const currentIndex = currentStatus.task.indexOf(currentItem);
    currentStatus.task.slice(currentIndex, 1);
    const dropIndex = statusR.task.indexOf(item);
    statusR.task.splice(dropIndex + 1, 0, currentItem);

    setCurrentStatus(
      currentProject.tasks.map(({task}) => {
        if (task.number === currentStatus.number) {
          return currentStatus;
        }
        if (task.number === statusR.number) {
          return statusR;
        }

        return task;
      })
    );
  };

  const dropCardHandler = (e, statusR) => {
    statusR.task.push(currentItem)
    const currentIndex = currentStatus.task.indexOf(currentItem);
    currentStatus.task.slice(currentIndex, 1);

    setCurrentStatus(
      currentProject.tasks.map(({task}) => {
        if (task.number === currentStatus.number) {
          return currentStatus;
        }
        if (task.number === statusR.number) {
          return statusR;
        }

        return task;
      })
    );
  }

  return (
    <>
      <Container>
        <div className={style.info}>
          <p className={style.title}>{currentProject.project}</p>
          <button className={style.button} onClick={() => setIsOpen(true)}>
            ADD TASK
          </button>
        </div>
        <ColumnWrap>
          {currentProject.tasks.map((el) => (
            <div
              key={el.status}
              className={style.column}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, el)}
            >
              <p>{el.status}</p>
              {el.task.map((item) => (
                <p
                  key={item.name}
                  className={style.item}
                  draggable="true"
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) => dragStartHandler(e, el, item)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, el, item)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          ))}
        </ColumnWrap>

        {/* <ColumnWrap>
        <Column status="Queue" currentProject={currentProject}/>
        <Column status="Development" currentProject={currentProject}/>
        <Column status="Done" currentProject={currentProject}/>
      </ColumnWrap> */}
      </Container>

      {isOpen && (
        <Form
          currentProject={currentProject}
          onReceived={onReceived}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default Task;

import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Task from "./pages/Task";
import {fetchAll} from './todo-list-api'
function App() {
  const [projectList, setProjectList] = useState([])

  console.log(projectList)

  useEffect(() => {
    fetchAll((list) => setProjectList(list), 'project');
  }, []);
  


  return (
    <Routes>
      <Route path="/" element={<Home onReceived={(list) => setProjectList(list)}/>}/>
      <Route path="/tasks" element={<Task/>}/>
    </Routes>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import './App.css';

function App() {
  // init local storage -> JSON.parse(localStorage.getItem("taskList")) || []
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState([]);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList]); // store to local storage when [taskList] has changed 

  return (
    <div className="App">
      <Header />
      <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask} />
      <ShowTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask} />
    </div>
  );
}

export default App;

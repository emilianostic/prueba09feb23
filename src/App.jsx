import Tasklist from './Tasklist'
import TaskForm from './TaskForm'
import { tasks as data } from "./Tasks";
import { useState, useEffect } from "react";

function App(){

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return <>
  <TaskForm/>
  <Tasklist tasks={tasks}/>
 
</>
}
export default App
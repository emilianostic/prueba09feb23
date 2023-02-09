import { tasks as data } from "./Tasks";
import { useState, useEffect } from "react";

function Tasklist() {
  const [tasks, setTasks] = useState([]);

  useEffect(() =>{
    setTasks(data)
  }, [])

  if(tasks.length === 0){
    return <h1>no hay tareas</h1>
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      ))}
    </>
  );
}
export default Tasklist;

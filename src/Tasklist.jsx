
function Tasklist({tasks}) {
 

  if (tasks.length === 0) {
    return <h1>no hay tareas</h1>;
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

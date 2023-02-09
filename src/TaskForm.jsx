
import {useState} from 'react' 

function TaskForm() {

const [tittle, setTitle] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

}

  return (
 
      <form onSubmit={handleSubmit}>
      <input  placeholder="escriba una tarea" 
      onChange={(e) => setTitle(e.target.value)} />
      <button>
        Guardar
      </button>
      </form>
  );
}
export default TaskForm;

// import React, { useState } from "react";
// import "./Todo.css";

// const TodoComponent = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim() === "") return;

//     if (editIndex !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex] = task;
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       setTasks([...tasks, task]);
//     }

//     setTask("");
//   };

//   const handleEdit = (index) => {
//     setTask(tasks[index]);
//     setEditIndex(index);
//   };
// const handleDelete=(index)=>{
// const a=tasks.filter((__,curr)=>curr!=index);
// setTasks(a);
// }
//   return (
//     <div className="todo-container">
//       <h2>To-Do App</h2>

//       <form className="todo-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Enter task"
//         />
//         <button>{editIndex !== null ? "Update" : "Add"}</button>
//       </form>

//       <ul className="todo-list">
//         {tasks.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoComponent;
import React, { useState } from "react";
import "./Todo.css";

const TodoComponent = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    if (editId !== null) {
      const updatedTasks = tasks.map((item) =>
        item.id === editId ? { ...item, text: task } : item,
      );
      setTasks(updatedTasks);
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(), // unique id
          text: task,
        },
      ]);
    }

    setTask("");
  };

  const handleEdit = (id) => {
    const editTask = tasks.find((item) => item.id === id);
    setTask(editTask.text);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);

    if (editId === id) {
      setEditId(null);
      setTask("");
    }
  };

  return (
    <div className="todo-container">
      <h2>To-Do App</h2>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button>{editId ? "Update" : "Add"}</button>
      </form>

      <ul className="todo-list">
        {tasks.map((item) => (
          <li key={item.id}>
            {item.text}
            <div className="BUTTON">
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;

import { useState } from "react";

const ModalWindow = (props) => {
  const { todos, setTodos, id, setId } = props;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addTodo = () => {
    const newItem = {
      name: value,
      status: "todo",
      isDone: false,
      id: id,
    };
    setTodos([...todos, newItem]);
    setId((id) => id + 1);
  };

  return (
    <div className="modalWindow">
      <h3>Add New To Do</h3>
      <textarea value={value} onChange={handleChange}></textarea>
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default ModalWindow;

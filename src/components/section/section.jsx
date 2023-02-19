import { useState } from "react";
import ModalWindow from "./modalWindow/modalWindow";
import TodoList from "./todo-list/todoList";

const Section = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [id, setId] = useState(4);

  const todosArray = [
    {
      name: "Smile every day",
      status: "todo",
      isDone: false,
      id: 1,
    },
    {
      name: "Done",
      status: "done",
      isDone: false,
      id: 2,
    },
    {
      name: "Trash",
      status: "trash",
      isDone: false,
      id: 3,
    },
  ];

  const [todos, setTodos] = useState(todosArray);
  const [filteredTodo, setFilteredTodo] = useState(todos);
  const [heading, setHeading] = useState("To Do");

  const handleModal = () => {
    setIsModalShown(!isModalShown);
  };

  const filterTodo = () => {
    setFilteredTodo(todos.filter((todo) => todo.status === "todo"));
    setHeading("To Do");
  };
  const filterDone = () => {
    setFilteredTodo(todos.filter((todo) => todo.status === "done"));
    setHeading("Done");
  };
  const filterTrash = () => {
    setFilteredTodo(todos.filter((todo) => todo.status === "trash"));
    setHeading("Trash");
  };

  return (
    <div>
      <div className="section-buttons">
        <div className="buttons">
          <button onClick={filterTodo}>To Do</button>
          <button onClick={filterDone}>Done</button>
          <button onClick={filterTrash}>Trash</button>
        </div>
        <div>
          <button onClick={handleModal}>+</button>
          {isModalShown && (
            <ModalWindow
              todos={todos}
              setTodos={setTodos}
              id={id}
              setId={setId}
            />
          )}
        </div>
      </div>
      <h1>{heading}</h1>
      <hr />
      <TodoList
        todos={filteredTodo}
        heading={heading}
        originalTodos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default Section;

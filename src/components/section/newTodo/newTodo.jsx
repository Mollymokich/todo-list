import threePoints from "../../../images/three-points.png";
import MoveToTrash from "../modalWindow/moveToTrash";
import Delete from "../modalWindow/delete";
import { useState } from "react";

const NewTodo = (props) => {
  const { todo, todos, setTodos, originalTodos, heading } = props;
  const [isModalShown, setIsModalShown] = useState(false);

  const handleShowModal = () => {
    setIsModalShown(!isModalShown);
  };

  return (
    <div className="todoItem">
      <button className="threePoints" onClick={handleShowModal}>
        <img src={threePoints} />
      </button>
      {isModalShown && (heading === "To Do" || heading === "Done") ? (
        <MoveToTrash
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          originalTodos={originalTodos}
        />
      ) : isModalShown && heading === "Trash" ? (
        <Delete
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          originalTodos={originalTodos}
        />
      ) : (
        ""
      )}
      <input type="checkbox" />
      <p>{todo.name}</p>
    </div>
  );
};

export default NewTodo;

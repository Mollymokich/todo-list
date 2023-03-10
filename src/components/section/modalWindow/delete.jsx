import trashImage from "../../../images/musor.png";

const Delete = (props) => {
  const { todo, todos, setTodos, originalTodos } = props;

  const handleDelete = () => {
    const newOriginalTodos = [...originalTodos];
    const idx = newOriginalTodos.findIndex((el) => el.id === todo.id);
    if (idx > -1) {
      newOriginalTodos.splice(idx, 1);
      setTodos(newOriginalTodos);
    }
  };

  const handleMoveBack = () => {
    const newOriginalTodos = [...originalTodos];
    const idx = newOriginalTodos.findIndex((el) => el.id === todo.id);
    if (idx > -1) {
      newOriginalTodos[idx].status = "todo";
      setTodos(newOriginalTodos);
    }
  };

  return (
    <div className="secondModalWindow">
      <div className="Delete" onClick={handleDelete}>
        <img src={trashImage} alt="trash icon" />
        <h5>Delete Forever</h5>
      </div>
      <div className="Move" onClick={handleMoveBack}>
        <img src={trashImage} alt="trash icon" />
        <h5>Move Back To To Do</h5>
      </div>
    </div>
  );
};

export default Delete;

import trashImage from "../../../images/musor.png";

const MoveToTrash = (props) => {
  const { todo, todos, setTodos, originalTodos } = props;
  const handleToTrash = () => {
    const newOriginalTodos = [...originalTodos];
    const idx = newOriginalTodos.findIndex((el) => el.id === todo.id);
    if (idx > -1) {
      newOriginalTodos[idx].status = "trash";
      setTodos(newOriginalTodos);
    }
  };

  return (
    <div onClick={handleToTrash}>
      <img src={trashImage} />
      <h5>Move To Trash</h5>
    </div>
  );
};

export default MoveToTrash;

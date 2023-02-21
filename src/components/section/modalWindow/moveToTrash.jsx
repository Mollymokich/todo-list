import trashImage from "../../../images/musor.png";

const MoveToTrash = (props) => {
  const { todo, todos, setTodos, originalTodos } = props;

  const handleToTrash = () => {
    const newTodos = originalTodos.map((item) =>
      item.id === todo.id ? { ...item, status: "trash" } : item
    );
    setTodos(newTodos);
  };

  return (
    <div onClick={handleToTrash}>
      <img src={trashImage} />
      <h5>Move To Trash</h5>
    </div>
  );
};

export default MoveToTrash;

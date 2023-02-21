import NewTodo from "../newTodo/newTodo";

const TodoList = (props) => {
  const { todos, setTodos, heading, originalTodos } = props;
  return (
    <div>
      {todos.map((todo) => (
        <NewTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          originalTodos={originalTodos}
          setTodos={setTodos}
          heading={heading}
        />
      ))}
    </div>
  );
};

export default TodoList;

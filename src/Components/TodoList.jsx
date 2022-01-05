import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          status={item.status}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default TodoList;

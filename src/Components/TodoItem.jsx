import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/action";

function TodoItem({ title, status, id }) {
  const dispatch = useDispatch();
  const handleToggleTodo = () => {
    const act2 = toggleTodo(id);
    dispatch(act2);
  };

  const handleDeleteTodo = () => {
    const act = deleteTodo(id);
    dispatch(act);
  };
  return (
    <div>
      <br />
      Title: {title} ------ Status: {`${status}`}
      <button onClick={handleToggleTodo}>TOGGLE</button>
      <button onClick={handleDeleteTodo}>DELETE</button>
    </div>
  );
}

export default TodoItem;

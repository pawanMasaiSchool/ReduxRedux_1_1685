import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Todo Using Redux</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

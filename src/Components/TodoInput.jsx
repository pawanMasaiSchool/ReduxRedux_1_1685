import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/action";

function TodoInput() {
  const [inp, setInp] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const payload = {
      title: inp,
      status: false,
      id: uuid()
    };
    let act = addTodo(payload);
    dispatch(act);
    setInp("");
  };

  return (
    <div>
      <input
        placeholder="add something"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD</button>
    </div>
  );
}

export default TodoInput;

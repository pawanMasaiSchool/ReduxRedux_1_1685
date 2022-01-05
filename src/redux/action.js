export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO"
};

export const addTodo = ({ title, status, id }) => ({
  type: actionTypes.ADD_TODO,
  payload: { title: title, status: status, id: id }
});

export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  payload: {
    id: id
  }
});

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  payload: {
    id: id
  }
});

import { actionTypes } from "./action";

const currentState = {
  todos: []
};

const reducer = (state = currentState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          {
            title: action.payload.title,
            status: action.payload.status,
            id: action.payload.id
          }
        ]
      };
    }

    case actionTypes.DELETE_TODO: {
      return {
        todos: [
          ...state.todos.filter((item) =>
            item.id !== action.payload.id ? item : 0
          )
        ]
      };
    }

    case actionTypes.TOGGLE_TODO: {
      return {
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer };


import { configureStore } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  todos: [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};


export const store = configureStore({
  reducer: rootReducer,
});

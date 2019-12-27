import React, {useReducer} from 'react'

const initialState = {count: 0};

function incre(state, action){
  return {count: state.count + 1}
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return incre(state, action);
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const count = state.count;
  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

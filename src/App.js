import React from 'react';
import { useReducer } from 'react';
import './App.css';

const initialState = {
  count: 0,
  name: 'Hassan'
}

function reducer(state, action) {
  console.log('Action===> ', action);

  switch (action.type) {
    case 'update_name':
      return {
        ...state,
        name: action.payload,
      }
    case 'increment':
      return {
        ...state,
        count: state.count + action.payload,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - action.payload,
      }
    case 'reset':
      return {
        ...state,
        count: 0,
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log('Current state===>  ', state);
  return (
    <div className="App">
      <div>Name: {state.name}</div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'update_name', payload: 'Syed Hassan' })}>Update Name</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement',payload: 10 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

    <h3>{JSON.stringify(state)}</h3>
    </div>
  );
}

export default App;

import { useContext } from 'react';
import { CounterContext } from './context/CounterContext';

export const App = () => {
  const { state, increment, decrement, inputTextChanger } =
    useContext(CounterContext);
  return (
    <div>
      <button onClick={() => increment()}>+</button>
      {state?.count}
      <button onClick={() => decrement()}>-</button>
      <input onChange={(e) => inputTextChanger(e)} type='text' />
      <p>{state?.text}</p>
    </div>
  );
};

export default App;

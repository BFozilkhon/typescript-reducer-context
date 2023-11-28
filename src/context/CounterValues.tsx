import { useCallback, ChangeEvent, useReducer } from 'react';
import { StateType, reducer } from './CounterReducer';

export const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = useCallback(() => {
    dispatch({ type: 'increment' });
  }, []);

  const decrement = useCallback(() => {
    dispatch({ type: 'decrement' });
  }, []);

  const inputTextChanger = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'inputTextChange', payload: e.target.value });
  }, []);

  return { state, increment, decrement, inputTextChanger };
};

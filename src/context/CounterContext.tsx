import React, { createContext } from 'react';
import { initState } from './CounterReducer';
import { useCounterContext } from './CounterValues';

// Context Values
type useCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: useCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  inputTextChanger: () => {},
};

export const CounterContext =
  createContext<useCounterContextType>(initContextState);

// main
type CounterContextProps = {
  children: React.ReactNode;
};

export const CounterContextProvider = ({ children }: CounterContextProps) => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;

export type StateType = {
  count: number;
  text?: string;
};

export const initState: StateType = {
  count: 0,
  text: '',
};

type CounterAction = {
  type: string;
  payload?: string;
};

export const reducer = (state: StateType, action: CounterAction) => {
  switch (action?.type) {
    case 'increment':
      return { ...state, count: state?.count + 1 };

    case 'decrement':
      return { ...state, count: state?.count - 1 };
    case 'inputTextChange':
      return { ...state, text: action?.payload };
    default:
      return state;
  }
};

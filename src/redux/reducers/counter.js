import { DECREMENT, INCREMENT } from '../actionTypes';

type counterType = {
  count: number
};

type stateType = {
  count: number
}

type actionType = {
  type: string,
  payload?: any
}

const initState = {
  count: 0,
};

export default function counter(state: stateType = initState, action: actionType): counterType {
  switch (action.type) {
  case INCREMENT:
    return {
      ...state,
      count: state.count + 1,
    };
  case DECREMENT:
    return {
      ...state,
      count: state.count - 1,
    };
  default: return state;
  }
}

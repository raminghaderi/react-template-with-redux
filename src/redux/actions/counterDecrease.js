import { DECREMENT } from '../actionTypes';

type decrementAction = { type: string };

export default function counterDecrease(): decrementAction {
  return { type: DECREMENT };
}

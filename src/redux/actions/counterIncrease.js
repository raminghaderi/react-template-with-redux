import { INCREMENT } from '../actionTypes';

type incrementAction = { type: string };

export default function counterIncrease(): incrementAction {
  return { type: INCREMENT };
}

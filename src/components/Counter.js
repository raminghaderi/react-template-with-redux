import React from 'react';
import type { Node } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import mapCount from '../redux/mappers/mapCount';
import counterIncrease from '../redux/actions/counterIncrease';
import counterDecrease from '../redux/actions/counterDecrease';

type PropsType = {
  incrementText: string,
  decrementText?: string
}

export default function Counter({ incrementText, decrementText }: PropsType): Node {
  const dispatch = useDispatch();
  const count = useSelector(mapCount, shallowEqual);

  const increment = () => {
    dispatch(counterIncrease());
  };

  const decrement = () => {
    dispatch(counterDecrease());
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={increment}>{incrementText}</button>
      <button type="button" onClick={decrement}>{decrementText}</button>
    </div>
  );
}

Counter.defaultProps = {
  decrementText: 'decrement',
};

import { useState, useCallback } from 'react';

type IState = string | number | boolean | undefined;

export const useToggle = (offValue: IState = false, onValue: IState = true): [IState, (nextValue?: any) => void] => {
  const [state, setState] = useState<IState>(offValue);

  const toggle = useCallback((nextValue?: any) => {
    if (nextValue === offValue || nextValue === onValue) {
      setState(nextValue);
    } else {
      setState((pre) => {
        if (pre === offValue) {
          if (onValue) {
            return onValue;
          }
          if (typeof pre === 'boolean') {
            return !pre
          }
          return true;
        }
        return offValue;
      });
    }
  }, [state]);

  return [state, toggle];
}
import { useState } from 'react';

import * as Cookies from "js-cookie";

type InitialValue<T> = T extends any ? (T | (() => T)) : never

export const useStorage = <T>(
  storage: Storage | Cookies,
  key: string,
  initialValue?: InitialValue<T>,
  options = {},
): [T, (value: T) => void] => {
  const [state, setState] = useState(() => {
    const item = storage.getItem ? storage.getItem(key) : storage.get(key);
    if (item !== null) {
      try {
        return JSON.parse(item)
      } catch (e) {}
    }
    if (typeof initialValue === 'function') {
      return initialValue();
    }
    return initialValue;
  });

  const setValue = (value: T) => {
    if (typeof value === 'undefined') {
      if (typeof storage.removeItem === 'function') {
        storage.removeItem(key);
      } else if (typeof storage.remove === 'function') {
        storage.remove(key);
      }
      setState(undefined);
    } else {
      try {
        const valueToStore = value instanceof Function ? value(state) : value;
        if (typeof storage.setItem === 'function') {
          storage.setItem(key, JSON.stringify(valueToStore));
        } else if (typeof storage.set === 'function') {
          storage.set(key, JSON.stringify(valueToStore), options);
        }
        setState(valueToStore);
      } catch (error) {
        console.log(error);
      }
    }
  };
 
  return [state, setValue];
}
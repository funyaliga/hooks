import { useStorage } from "../index";

type InitialValue<T> = T extends any ? (T | (() => T)) : never

export const useLocalStorage = <T>(
  key: string,
  initialValue?: InitialValue<T>,
  options = {},
): [T, (value: T) => void] => {
  const [state, setState] = useStorage(localStorage, key, initialValue, options);
  return [state, setState];
}
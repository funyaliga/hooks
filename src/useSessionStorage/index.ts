import { useStorage } from "../index";

type InitialValue<T> = T extends any ? (T | (() => T)) : never

export const useSessionStorage = <T>(
  key: string,
  initialValue?: InitialValue<T>,
  options = {},
): [T, (value: T) => void] => {
  const [state, setState] = useStorage(sessionStorage, key, initialValue, options);
  return [state, setState];
}
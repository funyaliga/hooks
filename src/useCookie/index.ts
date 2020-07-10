import { useStorage } from "../index";

import * as Cookies from "js-cookie";

type InitialValue<T> = T extends any ? (T | (() => T)) : never

export const useCookie = <T>(
  key: string,
  initialValue?: InitialValue<T>,
  options = {},
): [T, (value: T) => void] => {
  const [state, setState] = useStorage(Cookies, key, initialValue, options);
  return [state, setState];
}
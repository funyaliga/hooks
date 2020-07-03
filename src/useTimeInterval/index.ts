// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from "react";
export const useTimeInterval = (callback: (...args: any) => void, delay?: number): void => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const handler = (...args: any[]) => {
      savedCallback.current(...args)
    };
    if (delay !== null && delay !== undefined) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
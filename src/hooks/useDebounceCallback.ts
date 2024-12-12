import { useCallback, useRef } from 'react';

const useDebounceCallback = <T extends string>(callback: (arg: T) => void, delay: number) => {
  const timeoutRef = useRef<null | number>(null);

  return useCallback(
    (arg: T) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(arg);
      }, delay);
    },
    [delay, callback],
  );
};

export default useDebounceCallback;

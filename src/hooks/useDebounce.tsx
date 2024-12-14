import { useEffect, useState } from "react";

export function useDebounce<T>(input: T, timer: number): T {
  const [debouncedInput, setDebouncedInput] = useState<T>(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, timer);

    return () => {
      clearTimeout(handler);
    };
  }, [input, timer]);

  return debouncedInput;
}

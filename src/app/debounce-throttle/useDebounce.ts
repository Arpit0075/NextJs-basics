import { useEffect, useState } from "react";

export const useDebounceHook = (string: any, delay = 2000) => {
  const [response, setResponse] = useState<any>(null);
  useEffect(() => {
    let id = setTimeout(() => {
      setResponse(string);
    }, delay);
    return () => clearInterval(id);
  }, [string, delay]);

  return response;
};

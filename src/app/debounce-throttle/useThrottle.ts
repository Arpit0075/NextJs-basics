import { useEffect, useState } from "react";
import { throttleResponseSchema } from "../utils/zodSchema";

export const useThrottleHook = (fn: any, delay = 2000) => {
  const [response, setResponse] = useState<any>(null);
  useEffect(() => {
    let id = setInterval(async () => {
      let res = await fn();
      const result = throttleResponseSchema.safeParse(res); // using a specific object check
      if (res && result.success) {
        setResponse(result.data);
      }
    }, delay);

    return () => clearInterval(id);
  }, []);

  return response;
};

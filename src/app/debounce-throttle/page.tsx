"use client";
import React, { useEffect, useState } from "react";
import { useThrottleHook } from "./useThrottle";
import Display from "./Display";
import { useDebounceHook } from "./useDebounce";

function DebounceThrottle() {
  const [inputData, setInputData] = useState("");
  const getReq = async () => {
    let response = await fetch("/api/signup");
    let responseData = await response.json();
    return responseData;
  };
  let value1 = useThrottleHook(getReq);
  console.log(value1);

  //   useEffect(() => {
  //     let id = setInterval(async () => {
  //       let value = await getReq();
  //       console.log(value);
  //     }, 2000);
  //     return () => clearInterval(id);
  //   }, []);

  let value = useDebounceHook(inputData);

  return (
    <div>
      <input
        className="text-black"
        value={inputData}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputData(e.target.value)
        }
      />
      <Display value={value} />
    </div>
  );
}

export default DebounceThrottle;

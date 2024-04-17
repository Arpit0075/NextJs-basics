import React from "react";

type DisplayProps = {
  value: string;
};
function Display({ value }: DisplayProps) {
  return <div>{value}</div>;
}

export default Display;

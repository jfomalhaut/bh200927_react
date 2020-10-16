import React, { useState } from "react";

export const useInput = (initialValue) => {
  const [val, setVal] = useState(initialValue);
  const onChange = (ev) => {
    const {
      target: { value },
    } = ev;
    setVal(value);
  };

  return [val, onChange, setVal];
};

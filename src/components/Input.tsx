import React, { useState, useRef } from "react";

export const Input = () => {
  const [value, setValue] = useState("");

  // null! makes ref read only
  const ref = useRef<HTMLInputElement>(null);
  if (ref && ref.current) {
    console.log(ref.current?.value);
  }
  const handleChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return <input ref={ref} type="text" value={value} onChange={handleChange} />;
};

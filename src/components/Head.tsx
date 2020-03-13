import React from "react";

type Props = {
  title: string;
  isActive: boolean;
};

const Head = ({ title, isActive }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive ? <h2>Is Active</h2> : <h2>Not Active</h2>}
    </div>
  );
};

export default Head;

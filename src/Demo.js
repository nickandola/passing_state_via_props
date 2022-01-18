import React from "react";

const Demo = ({ num, setNum }) => {
  return (
    <>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      {<br />}
      The desired output is: {num}
    </>
  );
};

export default Demo;

import { useState } from "react";

export const State = () => {
  // let value = 0;
  // const handleButtonClick = () => {
  //   value++;
  //   console.log(value);
  // };

  const [value, setValue] = useState(0);
  console.log("parmanent Component render");

  const handleButtonClick = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleButtonClick}>Increment</button>

      <ChildComponent />
    </>
  );
};

function ChildComponent() {
  console.log("Child Component render");

  return (
    <div className="main-div">
      { " " }
      <h2>Child Component</h2>
    </div>
  );
}
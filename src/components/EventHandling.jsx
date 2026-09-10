export const EventHandilng = () => {

  const handleButtonClick = (event) => {
    console.log(event);
    alert("Hey I am onClick Event");
  };

  return (
    <>
      <button onClick={handleButtonClick}>Click Me</button>
    </>
  );
};
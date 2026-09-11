
import "./EV.css";
export const EventHandling = () => {

  const handleButtonClick = (event) => {
    console.log(event);
    // console.log(event.target);
    // console.log(event.type); //"click"
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (name) => {
    console.log(`Hey ${name}, Welcome`);
    alert(`Hey ${name}, Welcome`);
  }

  return (

     <>
    {/* // ? Function Component with Named Function  */}
      <button onClick={handleButtonClick}>Click Me</button>
    <br />

   
   
    {/* // ? Inline Event Handler Handler */}
    <button onClick={() => handleButtonClick()}>Click Me 2</button>
    <br />


   
    {/* // ? Function Component with Inline Arrow Function  */}
        <button onClick={(event) => console.log(event)}>Inline Function</button>

        {/* //pasing Argument to Event Handlers  */}
        {/* <button onClick={handleWelcomeUser}>click Me</button> */}
       <button onClick={() => handleWelcomeUser("kaushik")}>click Me</button>



    </>
  );
};
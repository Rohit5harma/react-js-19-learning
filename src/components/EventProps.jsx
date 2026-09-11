import "./EV.css";

export const EventProps = () => {

  const handleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };

  const handleHover = () => {
    console.log("Hey thanks for hovering me");
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Kaushik")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {

  const handleGreeting = () => {
    console.log("Hey, Welcome to React");
    props.onClick();
  };

  return (
    <>
      <button onClick={props.onClick}>
        Click
      </button>

      <button onMouseEnter={props.onMouseEnter}>
        Hover me
      </button>

      <button onClick={handleGreeting}>
        Greeting
      </button>
    </>
  );
};




import "./EV.css";

export const EventPropagation = () => {

  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    console.log("Child clicked");
  };

  return (
    <section className="main-div">

      <div className="grand-parent" onClickCapture={handleGrandParent}>

        <div className="parent" onClickCapture={handleParentClick}>

          <button className="child" onClickCapturee={handleChildClick}>
            Child Div
          </button>

        </div>
 
      </div>

    </section>
  );
};
// //1. variable 


//     const NetflixSeries = () =>{
//       const name = "Queen Of tears";
//       const rating = "8.2";
//       const summary = "Baek Hyun-woo and Hong Hae-in navigate a tense relation, both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family.";
//       let age = 19;



//     // let canWatch = "Not Available";
//     // if(age>=18) canWatch = "Watch Now"

//     const canWatch = () =>{
//       if(age >= 18)  return "Watch Now";
//       return "Not Available";
//     };

//       const returnGenre = () => {
//       const genre = "Romcom"
//      return genre;
//     };


    // if(age < 18 ) {
    //   return (  
          
    //         <div>
    //   <div>
    //     <img src="queen of tears.jpg" alt="queen of tears.jpg"
    //      width="100%" height="50%" />
    //   </div>
    //   <h2> Name: {name} </h2>
    //   <h3>Rating: {rating} </h3>
    //   <p>summary: {summary} </p>
    //   <p>Genre: {returnGenre()} </p>
    //   <button>Not Available</button>
    // </div>
    
    //   )

    // };

     //2: But this violates DRY (Do not repeat yourself)



     //3: Sometimes you might have very complex if condition, for that there are some solution



     //4: solution can  be better as it prevents cluttering of variable outside and encapsulation such logic inside a function.


     //One another benefits is also that, you can pass some dynamic value as function parameter 
      
     
     
     
     
      import seriesData from "../api/seriesData.json";
     
     const NetflixSeries = () => {
     return (  

      <ul>
        {
          seriesData.map((curElem) => {
            return (

            <li key = {curElem.id}>
      <div>
        <img 
        src={curElem.img_url}
         alt="queen of tears.jpg"
         width="40%" 
         height="40%"
          />

      </div>
      <h2> Name: {curElem.name} </h2>
      <h3>Rating: {curElem.rating} </h3>
      <p>summary: {curElem.description} </p>
      <p>Genre: {curElem.genre} </p>
      <p>Cast:{curElem.Cast}</p>
    <a href={curElem.watch_url}  target="_blank">
      <button>Watch Now</button>
      </a>

      {/* <button id="btn"> {age >= 18 ? "Watch Now" : "Not Available"}  </button> */}
      {/* <button>{canWatch}</button> */}
        
    </li>
            );

 })
        }
      
    
    

    </ul>
    
    
      );
    };
         
  

   
export default NetflixSeries;




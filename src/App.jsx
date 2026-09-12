// import NetflixSeries  from  "./components/NetflixSeries";
// import "./components/netflix.css";
// import "./components/netflix.module.css";
// import styles from "./Netflix.module.css";
// import styles from "./components/Netflix.module.css";
// import { EventHandilng } from "./components/EventHandling";
// export const App = () => {
//   return  (
//     <section className={styles.container}>
//       {/* <h1 className={styles.cardHeading}> List of Best Netflix Series</h1> */}
//        {/* <NetflixSeries /> */}
//       <EventHandilng />

//     </ section>  
//   );
// }; 



// import styles from "./components/Netflix.module.css";
// import { EventHandilng } from "./components/EventHandling";

// export const App = () => {
//   return (
//     <section className={styles.container}>
//       <EventHandilng />
//     </section>
//   );
// };

// import styles from "./components/Netflix.module.css";
// import { EventProps } from "./components/EventProps";
import "./components/EV.css";
import { EventPropagation } from "./components/EventPropagation";

export const App = () => {
  return (
    <section className="container">
      {/* <EventProps /> */}
      <EventPropagation />
    </section>
  );
};
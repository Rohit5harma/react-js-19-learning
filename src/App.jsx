import NetflixSeries  from  "./components/NetflixSeries";
// import "./components/netflix.css";
// import "./components/netflix.module.css";
// import styles from "./Netflix.module.css";
import styles from "./components/Netflix.module.css";
export const App = () => {
  return  (
    <section className={styles.container}>
      <h1 className={styles.cardHeading}> List of Best Netflix Series</h1>
       <NetflixSeries />
      

    </ section>  
  );
}; 



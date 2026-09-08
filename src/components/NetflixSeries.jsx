import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <div className="container">
      <h1 className="cardHeading">Netflix Series</h1>

      <ul className="grid grid-three-cols">
        {seriesData.map((curElem) => (
          <SeriesCard key={curElem.id} data={curElem} />
        ))}
      </ul>
    </div>
  );
};

export default NetflixSeries;
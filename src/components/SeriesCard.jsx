const SeriesCard = ({ curElem }) => {
  return (
    <li>
      <div>
        <img
          src={curElem.img_url}
          alt={curElem.name}
          width="40%"
          height="40%"
        />
      </div>

      <h2>Name: {curElem.name}</h2>
      <h3>Rating: {curElem.rating}</h3>
      <p>Summary: {curElem.description}</p>
      <p>Genre: {curElem.genre.join(", ")}</p>
      <p>Cast: {curElem.cast.join(", ")}</p>

      <a href={curElem.watch_url} target="_blank" rel="noreferrer">
        <button>Watch Now</button>
      </a>
    </li>
  );
};

export default SeriesCard;
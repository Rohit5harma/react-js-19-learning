const btn_style = {
  padding: "0.5rem 1rem",
  border: "none",
  cursor: "pointer",
};

export const SeriesCard = ({ data }) => {
  const {
    img_url,
    name,
    rating,
    description,
    cast,
    genre,
    watch_url,
  } = data;

  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} />
      </div>

      <div className="card-content">
        <h2>Name: {name}</h2>

        <h3>
          Rating:{" "}
          <span className={rating >= 8.5 ? "super_hit" : "average"}>
            {rating}
          </span>
        </h3>

        <p>Summary: {description}</p>

        <p>Genre: {genre.join(", ")}</p>

        <p>Cast: {cast.join(", ")}</p>

        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
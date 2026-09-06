import styles from "./Netflix.module.css";
import styled from "styled-components";

const Buttonkaushik = styled.button`
  padding: 1.2rem 2.4rem;
  border: none;
  font-size: 1.6rem;
  background-color: ${(props) =>
    props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
  color: var(--btn-color);
  font-weight: bold;
  cursor: pointer;
`;
const Rating = styled.span`
  font-size: 1.6rem;
  padding: 0.2rem 0.6rem;
  border-radius: 0.3rem;
  background-color: ${(props) =>
    props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
`;

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
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} />
      </div>

      <div className={styles.cardContent}>
        <h2>Name: {name}</h2>
<h3>
  Rating:{" "}
  <Rating rating={rating}>
    {rating}
  </Rating>
</h3>
        <p>
  <span className={styles.summary}>Summary:</span>{" "}
  {description}
</p>
       
        <p>
          <strong>Genre:</strong> {genre?.join(", ")}
        </p>

        <p>
          <strong>Cast:</strong> {cast?.join(", ")}
        </p>

        <a href={watch_url} target="_blank" rel="noreferrer">
          <Buttonkaushik rating={rating}>
            Watch Now
          </Buttonkaushik>
        </a>
      </div>
    </li>
  );
};
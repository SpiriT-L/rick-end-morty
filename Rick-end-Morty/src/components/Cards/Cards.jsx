import styles from './Cards.module.scss';
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map(x => {
      let { id, name, image, gender, location, status } = x;
      return (
        <Link to={`${page}${id}`} key={id} className={styles.cardsItem}>
          <img className={styles.img} src={image} alt={name} />
          <div className={styles.description}>
            <h2>{name}</h2>
            <p>
              Gender:
              <span> {gender}</span>
            </p>
            <p>
              Location:
              <span> {location.name}</span>
            </p>
          </div>
          {(() => {
            if (status === 'Dead') {
              return(
              <span className={`${styles.badge} ${styles.dead}`}>
                {status}
              </span>);
            } else if (status === 'Alive') {
              return(
              <span className={`${styles.badge} ${styles.active}`}>
                {status}
              </span>);
            } else {
              return(
              <span className={`${styles.badge} ${styles.unknown}`}>
                {status}
              </span>);
            }
          })()}
        </Link>
      );
    });
  } else {
    display = 'No Characters Found :/';
  }
  return <>{display}</>;
};

export default Cards;

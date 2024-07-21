import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CardDetails.module.scss';

const CardDetails = () => {
  const { id } = useParams();
  const [fetchData, updateFetchedData] = useState([]);
  const { name, image, location, origin, gender, species, status, type } =
    fetchData;
  console.log(location?.name);
  console.log(origin?.name);
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className='container'>
      <div className={styles.detail}>
        <div key={id} className={styles.cardsItem}>
          <h2 className={styles.title}>{name}</h2>
          <img className={styles.img} src={image} alt={name} />
          <div className={styles.description}>
            {(() => {
              if (status === 'Dead') {
                return (
                  <div className={`${styles.badge} ${styles.dead}`}>
                    {status}
                  </div>
                );
              } else if (status === 'Alive') {
                return (
                  <div className={`${styles.badge} ${styles.active}`}>
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className={`${styles.badge} ${styles.unknown}`}>
                    {status}
                  </div>
                );
              }
            })()}
            <p className={styles.context}>
              Gender:
              <span> {gender}</span>
            </p>
            <p className={styles.context}>
              Species:
              <span> {species}</span>
            </p>
            <p className={styles.context}>
              Type:
              <span> {type === '' ? 'Unknown' : type}</span>
            </p>
            <p className={styles.context}>
              Location:
              <span> {location?.name}</span>
            </p>
            <p className={styles.context}>
              Origin:
              <span> {origin?.name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

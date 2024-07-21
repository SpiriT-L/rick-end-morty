import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Category/InputGroup';
import styles from './Episode.module.scss';

const Episodes = () => {
  const [id, setId] = useState('1');
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { air_date, name } = info;

  console.log(results);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      setInfo(data);

      const a = await Promise.all(
        data.characters.map(x => {
          return fetch(x).then(res => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className='container'>
      <div className={styles.rowTitle}>
        <h2 className={styles.titleH2}>
          Episode:{' '}
          <span className={styles.name}>{name === '' ? 'Unknown' : name}</span>
        </h2>
        <h5 className={styles.titleH5}>
          Air Data: {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className={styles.rowDisplay}>
        <div className={`${styles.pickEpisode}`}>
          <h4>Pick Episode</h4>
          <InputGroup setId={setId} name='Episode' total={51} />
        </div>
        <div className={styles.rowItem}>
          <div className='cards'>
            <Cards page='/episodes/' results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;

import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Category/InputGroup';
import styles from './Episode.module.scss';

const Location = () => {
  const [id, setId] = useState('1');
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { name, type, dimension } = info;

  console.log(results);

  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      setInfo(data);

      const a = await Promise.all(
        data.residents.map(x => {
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
          Location:{' '}
          <span className={styles.name}>{name === '' ? 'Unknown' : name}</span>
        </h2>
        <h5 className={styles.titleH5}>
        Dimension: {dimension === '' ? 'Unknown' : dimension}
        </h5>
        <h5 className={styles.titleH5}>
        Type: {type === '' ? 'Unknown' : type}
        </h5>
      </div>
      <div className={styles.rowDisplay}>
        <div className={`${styles.pickEpisode}`}>
          <h4>Pick Location</h4>
          <InputGroup setId={setId} name='Location' total={126 } />
        </div>
        <div className={styles.rowItem}>
          <div className='cards'>
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

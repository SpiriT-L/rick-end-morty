import './Category/Accordion.scss';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import styles from './Filters.module.scss';

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  const clear = () => {
    setPageNumber('');
    setStatus('');
    setGender('');
    setSpecies('');
    window.location.reload(false);
  };
  return (
    <>
      <div className={styles.filters}>
        <h3>Filter</h3>
        <h4 onClick={clear} className={styles.clearFilters}>
          Clear Filters
        </h4>
        <div
          className='accordion accordion-flush acc'
          id='accordionFlushExample'
        >
          <Status setPageNumber={setPageNumber} setStatus={setStatus} />
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <Gender setGender={setGender} setPageNumber={setPageNumber} />
        </div>
      </div>
    </>
  );
};

export default Filters;

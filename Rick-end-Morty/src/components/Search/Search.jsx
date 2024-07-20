import styles from './Search.module.scss';

function Search({ setSearch, setPageNumber }) {
  const request = e => {
    setPageNumber(1);
    setSearch(e.target.value);
  };

  return (
    <form className={styles.form}>
      <input
        onChange={request}
        placeholder='Search for Character'
        type='text'
        className={styles.input}
      />
      <button
        onClick={e => {
          e.preventDefault();
        }}
        className={`${styles.btn} ${styles.btnPrimary}`}
      >
        Search
      </button>
    </form>
  );
}

export default Search;

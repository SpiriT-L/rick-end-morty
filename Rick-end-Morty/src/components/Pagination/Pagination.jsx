import styles from './Pagination.module.scss';

const Pagination = ({ pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber(x => x + 1);
  };

  let prev = () => {
    if (pageNumber === 1) return;

    setPageNumber(x => x - 1);
  };

  return (
    <div className='container'>
      <div className={styles.pagination}>
        <button onClick={prev} className={`${styles.btnPrimary} ${styles.btn}`}>
          Prev
        </button>
        <div className={styles.number}>
          {pageNumber}
          </div>
        <button onClick={next} className={`${styles.btnPrimary} ${styles.btn}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

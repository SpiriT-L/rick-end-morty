/* eslint-disable react/prop-types */
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <div className='container'>
      <div className={styles.pagination}>
        <ReactPaginate previousLabel={'Prev'} 
        nextLabel={'Next'} 
        forcePage={pageNumber===1? 0 : pageNumber - 1}
        className={styles.pagination} 
        pageCount={info?.pages} 
        nextClassName={`${styles.btnPrimary} ${styles.btn}`}
        nextLinkClassName={styles.nextLink}
        previousLinkClassName={styles.previousLink}
        previousClassName={`${styles.btnPrimary} ${styles.btn}`}
        activeClassName={styles.active}
        activeLinkClassName={styles.activeLink}
        pageClassName={styles.number}
        pageLinkClassName={styles.pageLink}
        breakLinkClassName={styles.breakLink}
        onPageChange={(data) =>{
          setPageNumber(data.selected +1)
        }} />
      </div>
    </div>
  );
};

export default Pagination;

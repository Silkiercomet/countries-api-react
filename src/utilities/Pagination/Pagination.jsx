import styles from "./pagination.module.css"
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const pages = pageNumbers.map((number) => (
    <li key={number} className="page-item">
      <button
        onClick={() => paginate(number)}
        className={styles.page__link}
      >
        {number}
      </button>
    </li>
  ))
  return (
    <nav className={styles.flex__container}>
      <button className={styles.page__link}  onClick={()=> paginate(1)}> {"<<"} </button>
      <button className={styles.page__link}  onClick={()=> currentPage !== 1? paginate(currentPage-1) : null}> {"<"} </button>
      <ul className={styles.pagination}>
        {currentPage > 3? pages.slice(currentPage-3,currentPage+2): pages.slice(0,5)}
      </ul>
      <button className={styles.page__link} onClick={()=> currentPage >= pageNumbers.length? null : paginate(pageNumbers.length)}> {">"} </button>
      <button className={styles.page__link} onClick={()=> paginate(pageNumbers.length)}> {">>"} </button>
    </nav>
  );
};

export default Pagination;
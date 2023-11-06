import styles from './Pagination.module.css'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";

const Pagination = ({totalDogs, dogsByPage, onPage}) =>{

    const currentPage = window.localStorage.getItem('currentPage');
    const currentPageNumber = parseInt(currentPage);

    //Obtenemos la cantidad de páginas
    const totalPages = Math.ceil(totalDogs / dogsByPage);    

    // Calcula las páginas que se mostrarán en la paginación.
     const pageNumbers = [];
    const maxVisiblePages = 4;
    let startPage = Math.max(currentPageNumber - Math.floor(maxVisiblePages / 2), 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages); 

    if (endPage - startPage + 1 < maxVisiblePages) { 
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.containerPagination}>
            <button onClick={()=> onPage(currentPageNumber - 1)} disabled={currentPageNumber === 1 && 'disabled'} className={styles.arrow}><BsFillArrowLeftSquareFill /></button>
            <ul className={styles.listPage}>
                {pageNumbers.map(page =>(
                    <li key={page}>
                        <button onClick={()=> onPage(page)} className={`${styles.btn} ${styles.page} ${page === currentPageNumber && styles.active}`}>{page}</button>
                     </li>
                ))
                }
            </ul>
            
            <button onClick={()=> onPage(currentPageNumber + 1)} disabled={currentPageNumber === totalPages} className={styles.arrow}><BsFillArrowRightSquareFill/></button>
        </div>
    )
}

export default Pagination;
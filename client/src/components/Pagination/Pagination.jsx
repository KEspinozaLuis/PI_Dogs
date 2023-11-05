import styles from './Pagination.module.css'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";

const Pagination = ({totalDogs, dogsByPage, currentPage, setCurrentPage, onPage}) =>{
    const totalPages = Math.ceil(totalDogs / dogsByPage);//22
    //Obtenemos la cantidad de páginas
    const pageNumbers = [];

     // Calcula las páginas que se mostrarán en la paginación.
    const maxVisiblePages = 5;
    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1); //3
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages); // 7

    if (endPage - startPage + 1 < maxVisiblePages) { //5
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    //Funciones para el prev, next
    const onPreviusPage = ()=>{
        setCurrentPage(currentPage - 1);
    }

    const onNextPage = ()=>{
        setCurrentPage(currentPage + 1);
    }


    return (
        <div className={styles.containerPagination}>
            <button onClick={onPreviusPage} disabled={currentPage === 1 && 'disabled'} className={styles.arrow}><BsFillArrowLeftSquareFill /></button>
            <ul className={styles.listPage}>
                {pageNumbers.map(page =>(
                    <li key={page}>
                        <button onClick={()=> onPage(page)} className={`${styles.btn} ${styles.page} ${page == currentPage && styles.active}`}>{page}</button>
                     </li>
                ))
                }
            </ul>
            
            <button onClick={onNextPage} disabled={currentPage === totalPages} className={styles.arrow}><BsFillArrowRightSquareFill/></button>
        </div>
    )
}

export default Pagination;
import styles from './Pagination.module.css'

const Pagination = ({totalDogs, dogsByPage, currentPage, setCurrentPage}) =>{
    
    //Obtenemos la cantidad de páginas
    const pageNumbers = [];
    
    for(let i=1; i<=Math.ceil(totalDogs/dogsByPage); i++){
        pageNumbers.push(i);
    }

    //Funciones para el prev, next
    const onPreviusPage = ()=>{
        setCurrentPage(currentPage - 1);
    }

    const onNextPage = ()=>{
        setCurrentPage(currentPage + 1);
    }

    //Click a la página
    const onPage = (page)=>{
        setCurrentPage(page);
    }

    return (
        <div className={styles.containerPagination}>
            <button onClick={onPreviusPage} disabled={currentPage === 1 && 'disabled'} className={styles.btn}>Anterior</button>
            <ul className={styles.listPage}>
                {pageNumbers.map(page =>(
                    <li key={page}>
                        <button onClick={()=> onPage(page)} className={`${styles.btn} ${styles.page} ${page=== currentPage && styles.active}`}>{page}</button>
                     </li>
                ))
                }
            </ul>
            
            <button onClick={onNextPage} disabled={currentPage === pageNumbers.length && 'disabled'} className={styles.btn}>Siguiente</button>
        </div>
    )
}

export default Pagination;
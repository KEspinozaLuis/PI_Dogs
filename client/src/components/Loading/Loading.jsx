import styles from './Loading.module.css'

const Loading = () =>{
    return(
        <div className={styles.containerLoading}>
            <img src="/perrito-loading.gif" alt="" className={styles.loadingImage}/>
            <p className={styles.loadingText}>Loading...</p>
        </div>
    )
}

export default Loading;
import { Link } from "react-router-dom"
import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar"

const NavBar = () =>{
    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.containerHeader} container`}>
                    <div className="logo">LOGO</div>
                    <nav className={styles.nav}>
                        <Link to='/home' className={styles.link}>Home</Link>
                        <Link to='/create' className={styles.link}>Create Dog</Link>
                    </nav>
                    <SearchBar />
                </div>
            </header>
        </>
    )
}

export default NavBar;
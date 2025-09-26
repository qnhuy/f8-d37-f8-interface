import styles from './SearchForm.module.scss'

const SearchForm = function() {
    return <div className={styles.wrapper}>
        <i className={`${styles.searchIcon} ${styles.icon} fa-solid fa-magnifying-glass`}></i>
        <input className={styles.input} type="text" placeholder='Searching ...' />
        <i className={`${styles.cancelIcon} ${styles.icon} fa-solid fa-xmark`}></i>
    </div>
}

export default SearchForm
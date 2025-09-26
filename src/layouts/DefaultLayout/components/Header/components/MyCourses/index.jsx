import styles from './MyCourses.module.scss'

const MyCourses = function () {
    return <div className={styles.wrapper}>
        <p>My course</p>
        <i className={`${styles.dropdown} fa-solid fa-angle-down`}></i>
    </div>
}

export default MyCourses
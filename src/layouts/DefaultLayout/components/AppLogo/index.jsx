import { NavLink } from "react-router"
import styles from './AppLogo.module.scss'

const AppLogo = function () {
    return <NavLink to={'/'} className={styles.container}>
        <img className={styles.img} src="./assets/images/f8_icon.png" alt="app logo" />
        <p className={styles.slogan}>Học Lập Trình Để Đi Làm</p>
    </NavLink>
}

export default AppLogo
import { NavLink } from "react-router"
import styles from './AppLogo.module.scss'

const AppLogo = function () {
    return <NavLink className={styles.container}>
        <div className={styles.imgBlock}>
            <img className={styles.img} src="./assets/images/f8_icon.png" alt="app logo" />
        </div>
        <p className={styles.slogan}>Học Lập Trình Để Đi Làm</p>
    </NavLink>
}

export default AppLogo
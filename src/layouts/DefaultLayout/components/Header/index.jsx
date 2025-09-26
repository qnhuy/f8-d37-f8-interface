import AppLogo from "../AppLogo"
import SearchForm from "./components/SearchForm"
import MyCourses from './components/MyCourses'
import Notification from './components/Notification'
import UserMenu from './components/UserMenu'
import styles from './Header.module.scss'

const Header = function () {
    return <div className={styles.headerContainer}>
        <AppLogo />
        <SearchForm />
        
        <div className={styles.user}>
            <MyCourses />
            <Notification />
            <UserMenu />
        </div>
    </div>
}

export default Header
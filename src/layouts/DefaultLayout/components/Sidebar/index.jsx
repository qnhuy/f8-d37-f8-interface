import { NavLink } from "react-router"

import styles from './Sidebar.module.scss'

const Sidebar = function () {
    function handleNavClass(isActive) {
        return `${styles.navItem} ${isActive ? styles.selected : ''}`
    }

    const navs = [
        { to: 'scroll-demo', content: 'Scroll top', icons: 'fa-solid fa-circle-arrow-up' },
        { to: 'profile', content: 'Profile', icons: 'fa-solid fa-circle-user' },
        { to: 'modal-demo', content: 'Modal', icons: 'fa-solid fa-message' },
    ]

    return (
        <div className={styles.sidebarContainer}>
            {navs.map((nav, index) =>
                <NavLink key={index} to={nav.to} className={({ isActive }) => handleNavClass(isActive)}>
                    <i className={`${styles.icon} ${nav.icons}`}></i>
                    <p>{nav.content}</p>
                </NavLink>
            )}
        </div>
    )
}

export default Sidebar
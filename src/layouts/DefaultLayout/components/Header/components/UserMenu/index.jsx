import styles from './UserMenu.module.scss'
import Tippy from '../../../../../../components/Tippy'
import { useState } from 'react'

const user = {
    name: 'Nguyen Quang Huy',
    avatar: 'https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/490714068_593610750370041_829296000764001617_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KEdlQIbniJMQ7kNvwGzk5YQ&_nc_oc=Adl-NVJrAat67ONSFCoqTV5GLkR7TNA72H_knQLDRukp_QHX-iDTqNAKDwOV7UOkKLs&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=tw-NmgQbLUcCGZ1ZOAMvDw&oh=00_AfbGAsm0PDGzRxjy1uDUM4DcCMBm8BH5Fpr-mZTLl5fgHg&oe=68D4CCB0',
    email: 'quanghuy@gmail.com'
}

const UserMenu = function () {
    const [showUser, setShowUser] = useState(false)

    return <div className={styles.userContainer} onClick={() => setShowUser(!showUser)}>
        <img
            src={user.avatar}
            alt={user.name}
            className={styles.userImg}
        />

        {showUser &&
            <Tippy
                className={styles.tippyWrapper}
                onRequestClose={() => setShowUser(false)}
                dependClass={styles.userContainer}
            >
                <div className={styles.userDetail}>
                    <img
                        src={user.avatar}
                        alt={user.name}
                    />

                    <div className={styles.userInfo}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>

                <ul className={styles.optionList}>
                    <div className={styles.optionBlock}>
                        <li className={styles.optionItem}>Profile</li>
                    </div>
                    <div className={styles.optionBlock}>
                        <li className={styles.optionItem}>Create a blog</li>
                        <li className={styles.optionItem}>My blogs</li>
                        <li className={styles.optionItem}>Saved blogs</li>
                    </div>
                    <div className={styles.optionBlock}>
                        <li className={styles.optionItem}>Setting</li>
                        <li className={styles.optionItem}>Logout</li>
                    </div>
                </ul>
            </Tippy>}
    </div>
}

export default UserMenu
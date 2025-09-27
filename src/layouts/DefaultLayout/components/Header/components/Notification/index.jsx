import { useState } from "react"
import Tippy from "../../../../../../components/Tippy"
import styles from './Notification.module.scss'

const notifys = [
    {
        content: 'Vũ Quốc Dũng mention you in a comment',
        date: '2 days ago'
    },
    {
        content: 'Lesson Learn about Closure has been added',
        date: '5 days ago'
    },
    {
        content: 'Lesson Learn about Garbage Collection has been added',
        date: '6 days ago'
    },
    {
        content: 'Lesson Learn Set and WeakSet has been added',
        date: '7 days ago'
    },
    {
        content: 'Lesson Learn about Closure has been added',
        date: '10 days ago'
    },
    {
        content: 'Lesson Learn about CRUD and REST API has been added',
        date: '16 days ago'
    },
    {
        content: 'Lesson Learn about API has been added',
        date: '16 days ago'
    },
    {
        content: 'Lesson Learn about JSON Server has been added',
        date: '16 days ago'
    },
    {
        content: 'Lesson Learn about ES6+ has been added',
        date: '16 days ago'
    },
    {
        content: 'Lesson Learn about Dynamic import in ES6+ has been added',
        date: '16 days ago'
    },
    {
        content: 'Lesson Learn about Spread and Rest operator has been added',
        date: '16 days ago'
    },
]

const Notification = function () {
    const [showNoti, setShowNoti] = useState(false)

    return <div className={styles.notiContainer}>
        <i
            className={`${styles.bellIcon} fa-solid fa-bell`}
            onClick={() => setShowNoti(!showNoti)}
        >
            <i className={styles.badge}>{notifys.length}</i>
        </i>

        {showNoti &&
            <Tippy
                className={styles.notiWrapper}
                dependClass={styles.notiContainer}
                onRequestClose={() => setShowNoti(false)}
            >
                <header className={styles.notiHeader}>
                    <h2>Notification</h2>
                    <button className={styles.markRead}>
                        <i className="fa-solid fa-envelope-open"></i>
                        <p>Mark as read</p>
                    </button>
                </header>

                <ul className={styles.notifys}>
                    {notifys.map((noti, index) => <li key={index} className={styles.notiItem}>
                        <img
                            src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                            className={styles.notiImg}
                            alt={noti.content}
                        />
                        <div className={styles.notiDetail}>
                            <p className={styles.notiContent}>{noti.content}</p>
                            <p className={styles.notiDate}>{noti.date}</p>
                        </div>
                    </li>)}
                </ul>

                <footer className={styles.notiFooter}>
                    <button className={styles.seeAllBtn}>See all notifications</button>
                </footer>
            </Tippy>
        }
    </div>
}

export default Notification
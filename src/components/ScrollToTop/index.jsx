import React from 'react'
import styles from './ScrollToTop.module.scss'

const ScrollToTop = () => {
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        function detectScroll() {
            if (window.scrollY >= 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', detectScroll)

        return () => window.removeEventListener('scroll', detectScroll)
    }, [])


    return (
        <button
            className={`${styles.scrollBtn} ${visible ? styles.show : styles.hide}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <i className='fa-solid fa-arrow-up'></i>
        </button>
    )
}

export default ScrollToTop
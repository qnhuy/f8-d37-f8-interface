import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import styles from './Tippy.module.scss'

const Tippy = ({
    children,
    className,
    onRequestClose,
    dependClass,
}) => {
    const [tippyContainer, setTippyContainer] = useState(clsx(styles.tippyContainer, className))

    useEffect(() => {
        setTippyContainer(clsx(tippyContainer, styles.show))

        function handleCloseTippy(e) {
            const inTippy = e.target.closest(`.${styles.tippyContainer}`)
            const inDepend = e.target.closest(`.${dependClass}`)

            if (!inTippy && !inDepend) {
                setTimeout(onRequestClose, 300)
                setTippyContainer(clsx(tippyContainer, styles.hide))
            }
        }

        document.addEventListener('click', handleCloseTippy)

        return () => {
            document.removeEventListener('click', handleCloseTippy)
        }
    }, [])


    return <div className={tippyContainer} onClick={e => e.stopPropagation()}>
        {children}
    </div>
}

Tippy.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onRequestClose: PropTypes.func,
    dependClass: PropTypes.string,
}

export default Tippy
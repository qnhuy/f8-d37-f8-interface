/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './Modal.module.scss'
import clsx from 'clsx'

const Modal = ({
    children,
    isOpen = false,
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    closeTimeoutMS,
    overlayClassName,
    bodyClassName,
    bodyOpenClassName,
    htmlOpenClassName,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    overlayOpenAnimationClass,
    overlayCloseAnimationClass,
    bodyOpenAnimationClass,
    bodyCloseAnimationClass,
}) => {
    const [overlayClasses, setOverlayClasses] = useState(clsx(overlayClassName, overlayOpenAnimationClass))
    const [bodyClasses, setBodyClasses] = useState(clsx(bodyClassName, bodyOpenAnimationClass))

    // hadnle close modal and close animation
    function handleRequestClose() {
        setTimeout(onRequestClose, closeTimeoutMS)
        setOverlayClasses(overlayCloseAnimationClass)
        setBodyClasses(bodyCloseAnimationClass)
    }

    // handle close logic of modal
    useEffect(() => {
        function handle(e) {
            if (e.key === 'Escape') handleRequestClose()
        }

        if (isOpen) {
            onAfterOpen()
            if (shouldCloseOnEsc) {
                document.addEventListener('keyup', handle)
            }
        }

        // cleanup function
        return () => {
            onAfterClose()
            document.removeEventListener('keyup', handle)
        }
    }, [isOpen, onAfterClose, onAfterOpen, shouldCloseOnEsc])

    // action with body of web when open the modal
    useEffect(() => {
        document.body.classList.add(bodyOpenClassName)
        document.body.classList.add(htmlOpenClassName)
        return () => {
            document.body.classList.remove(bodyOpenClassName)
            document.body.classList.remove(htmlOpenClassName)
        }
    }, [bodyOpenClassName, htmlOpenClassName])

    return (
        <div className={styles.modalContainer}>
            {/* overlay */}
            <div
                id={styles.overlay}
                className={overlayClasses}
                onClick={() => shouldCloseOnOverlayClick ? handleRequestClose() : false}
            />

            {/* body */}
            <div id={styles.body} className={bodyClasses}>
                {/* close button */}
                <button className={styles.closeBtn} onClick={handleRequestClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {/* children */}
                <div className={styles.inner}>
                    {children}
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    overlayClassName: PropTypes.string,
    bodyClassName: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    overlayOpenAnimationClass: PropTypes.string,
    overlayCloseAnimationClass: PropTypes.string,
    bodyOpenAnimationClass: PropTypes.string,
    bodyCloseAnimationClass: PropTypes.string,
}

export default Modal
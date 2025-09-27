/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Modal.module.scss'

const Modal = ({
    children,
    isOpen = false,
    onAfterOpen = () => { },
    onAfterClose = () => { },
    onRequestClose = () => { },
    closeTimeoutMS = 0,
    bodyClassName,
    overlayClassName,
    webBodyOpenClass,
    webHtmlOpenClass,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    bodyOpenClass,
    bodyCloseClass,
    overlayOpenClass,
    overlayCloseClass,
}) => {
    const [bodyClose, setBodyClose] = useState('')
    const [overlayClose, setOverlayClose] = useState('')

    // hadnle close modal and close animation
    function handleRequestClose() {
        setTimeout(onRequestClose, closeTimeoutMS)
        setBodyClose(bodyCloseClass)
        setOverlayClose(overlayCloseClass)
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
        document.body.classList.add(webBodyOpenClass)
        document.body.classList.add(webHtmlOpenClass)
        return () => {
            document.body.classList.remove(webBodyOpenClass)
            document.body.classList.remove(webHtmlOpenClass)
        }
    }, [webBodyOpenClass, webHtmlOpenClass])

    return (
        <div className={styles.modalContainer}>
            {/* overlay */}
            <div
                className={clsx(
                    styles.overlay,
                    overlayClassName,
                    overlayOpenClass,
                    overlayClose
                )}
                onClick={() => shouldCloseOnOverlayClick ? handleRequestClose() : false}
            />

            {/* body */}
            <div className={clsx(
                styles.body,
                bodyClassName,
                bodyOpenClass,
                bodyClose
            )}>
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
    webBodyOpenClass: PropTypes.string,
    webHtmlOpenClass: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    overlayOpenClass: PropTypes.string,
    overlayCloseClass: PropTypes.string,
    bodyOpenClass: PropTypes.string,
    bodyCloseClass: PropTypes.string,
}

export default Modal
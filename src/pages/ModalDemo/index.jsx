import styles from './ModalDemo.module.scss'
import Modal from '../../components/Modal'

import React from 'react'

const ModalDemo = function () {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    return (
        <div className={styles.modalDemoContainer}>
            <button
                className={styles.openModalBtn}
                onClick={() => setModalIsOpen(true)}
            >
                <i className="fa-solid fa-bullhorn"></i>
                See what's new
            </button>

            {modalIsOpen &&
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={() => console.log('Modal is opened')}
                    onAfterClose={() => console.log('Modal is closed')}
                    onRequestClose={() => setModalIsOpen(false)}
                    closeTimeoutMS={300}
                    overlayClassName={styles.modalOverlay}
                    bodyClassName={styles.modalBody}
                    bodyOpenClassName="modal-open"
                    htmlOpenClassName="modal-open"
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}
                    overlayOpenAnimationClass={styles.fadeIn}
                    overlayCloseAnimationClass={styles.fadeOut}
                    bodyOpenAnimationClass={styles.growth}
                    bodyCloseAnimationClass={styles.shrink}
                >
                    <p>modal is open</p>
                </Modal>
            }
        </div>
    )
}

export default ModalDemo
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

const CustomModal = ({ isModalOpen, onClose }) => {
    return (
        <Modal isOpen={isModalOpen} onRequestClose={() => onClose()}>
            <h3>Modal title</h3>
            <button onClick={() => onClose()}>close</button>
        </Modal>
    )
}

export default CustomModal
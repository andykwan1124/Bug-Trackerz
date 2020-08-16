import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'

Modal.setAppElement('#root')
const CustomModal = ({ isModalOpen, onClose, onSubmitForm, isProject, match }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post(isProject ? 'http://localhost:5000/projects/add' : `http://localhost:5000/projects/${match.params.id}/issues/add`, {title: title, description: description})
        onSubmitForm()
        onClose()
        console.log("sent")
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    return (
        <Modal isOpen={isModalOpen} onRequestClose={() => onClose()}>
            <h3>Modal title</h3>
            <form onSubmit={onSubmit}>
                <label>
                    Title
                    <input onChange={onChangeTitle} required/>
                </label>
                <label>
                    Description
                    <input onChange={onChangeDescription} required/>
                </label>
                <button>Submit data</button>
            </form>
            <button onClick={() => onClose()}>close</button>
        </Modal>
    )
}

export default CustomModal
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomModal from './CustomModal'
import ProjectListComponent from './ProjectListComponent'


const Project = props => {
    const [issueList, setIssueList] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [didAddIssue, setDidAddIssue] = useState(false)
    useEffect(() => {
        const getIssues = async () => {
            const res = await axios.get(`http://localhost:5000/projects/${props.match.params.id}/issues`)
            setIssueList(res.data)
        }
        
        getIssues()
    }, [didAddIssue])

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const onSubmitIssue = () => {
        setDidAddIssue(!didAddIssue)
    }

    return (
        <>
            <div>Issues</div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {issueList.map(currProject => (
                        <ProjectListComponent project={currProject}/>
                    ))}
                </tbody>
            </table>
            <CustomModal isModalOpen={isModalOpen} onClose={() => closeModal()} onSubmitForm={() => onSubmitIssue()} isProject={false} match={props.match}/>
            <button onClick={() => setIsModalOpen(true)}>open</button>
        </>
    )
}

export default Project
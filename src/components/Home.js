import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomModal from './CustomModal'
import Project from './ProjectListComponent'

const Home = props => {
    const [projectList, setPl] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [didAddProject, setDidAddProject] = useState(false)
    useEffect(() => {
        const getProjects = async () => {
            const res = await axios.get('http://localhost:5000/projects')
            setPl(res.data)
        }
        
        getProjects()
    }, [didAddProject])

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const onSubmitProject = () => {
        setDidAddProject(!didAddProject)
    }

    return (
        <>
            <div>Projects</div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {projectList.map(currProject => (
                        <Project project={currProject}/>
                    ))}
                </tbody>
            </table>
            <CustomModal isModalOpen={isModalOpen} onClose={() => closeModal()} onSubmitForm={() => onSubmitProject()} isProject={true} match={props.match}/>
            <button onClick={() => setIsModalOpen(true)}>open</button>
        </>
    )
}

export default Home
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useDeepCompareEffect from 'use-deep-compare-effect'
import CustomModal from './CustomModal'

const Project = ({ project }) => {
    return (
        <tr>
            <td>{project.title}</td>
            <td>{project.description}</td>
        </tr>
    )
}
const Home = () => {
    const [projectList, setPl] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {
        const getProjects = async () => {
            const res = await axios.get('http://localhost:5000/projects')
            setPl(res.data)
        }
        
        getProjects()
    }, [])

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <div>Projects</div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {projectList.map(currProject => (
                        <Project project={currProject}/>
                    ))}
                </tbody>
            </table>
            <CustomModal isModalOpen={isModalOpen} onClose={() => closeModal()}/>
            <button onClick={() => setIsModalOpen(true)}>open</button>
        </>
    )
}

export default Home
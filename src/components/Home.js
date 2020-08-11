import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useDeepCompareEffect from 'use-deep-compare-effect'

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
    useEffect(() => {
        const getProjects = async () => {
            const res = await axios.get('http://localhost:5000/projects')
            console.log(res.data)
            setPl(res.data)
        }
        
        getProjects()
    }, [])

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
        </>
    )
}

export default Home
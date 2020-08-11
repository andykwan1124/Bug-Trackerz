import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Project = ({ project }) => {
    return (
        <tr>
            <td>{project.username}</td>
            <td>{project.description}</td>
        </tr>
    )
}
const Profile = () => {
    const [projectList, setPL] = useState([])
    useEffect(() => {
        const getPL = async () => {
            const res = await axios.get('http://localhost:5000/users')
            setPL(res.data)
            console.log(res.data)
        }
        getPL()
    }, [])

    return (
        <>
            <div>Projects</div>
            <table>
                <thead>
                    <tr>
                        <th>Titleeeee</th>
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

export default Profile
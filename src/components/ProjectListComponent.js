import React from 'react'
import { Link } from 'react-router-dom'


const ProjectListComponent = ({ project }) => {
    return (
        <tr>
            
            <td><Link to={"/projects/"+project._id}>{project.title}</Link></td>
            <td>{project.description}</td>
            <td>{project._id}</td>
            
        </tr>
    )
}

export default ProjectListComponent
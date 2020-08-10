import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// const NavDiv = styled.div`
//     font-weight: bold;
//     font-size: 40px;
// `

// const DLink = styled.(Link)`
    
// `

const Navbar = () => {
    return (
        <div>
            <Link to="/">Dashboard!</Link>
            <Link to="/users">Profile!</Link>
        </div>
    )
}

export default Navbar
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Project from './components/Project'
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Profile} />
      <Route path="/projects/:id" component={Project}/>
    </Router>
  )
}

export default App
import React from 'react'
import Container from '../../component/Container'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'

const Home = ({onReceived}) => {
  return (
    <Container>
        <ProjectForm onReceived={onReceived}/>
        <ProjectList />
    </Container>
  )
}

export default Home
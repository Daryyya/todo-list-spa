import React from 'react'
import Container from '../../component/Container'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'

const Home = ({onReceived, projectList}) => {
  return (
    <Container>
        <ProjectForm onReceived={onReceived}/>
        <ProjectList onReceived={onReceived} projectList={projectList}/>
    </Container>
  )
}

export default Home
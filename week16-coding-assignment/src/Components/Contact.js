import React from 'react'
import { Container } from 'react-bootstrap'
import ProfileInfo from './ProfileInfo'
import AlertBanner from './AlertBanner'

function Contact() {
  return (
    <>
      <h1 className='m-4'>Contact</h1>

      <Container>
        <AlertBanner />        
        <ProfileInfo />
      </Container>

    </>
  )
}

export default Contact
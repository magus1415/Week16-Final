import React from 'react'
import { Container } from 'react-bootstrap';
import AccordianInfo from './AccordianInfo';
import AlertBanner from './AlertBanner';

function About(props) {
    console.log("From About.js using props: ", props.list);

    return (
        <>
            <h1 className='m-4'>About</h1>
            <Container>
                <AccordianInfo />

                <AlertBanner />
            </Container>

        </>
    )
}

export default About
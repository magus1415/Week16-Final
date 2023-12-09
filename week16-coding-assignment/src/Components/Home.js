import React from 'react';
import AlertBanner from './AlertBanner';
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Container>
                <h1 className='m-4'>Home</h1>
                <AlertBanner />
            </Container>

        </>
    )
}

export default Home
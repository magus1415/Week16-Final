import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function AccordianInfo() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Add info</Accordion.Header>
                <Accordion.Body>
                You can share a bit about yourself by entering your name, age, job title, and company name in the form below. If there are any changes or updates to your information, feel free to use the secondary form to seamlessly update your details.


                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Update info</Accordion.Header>
                <Accordion.Body>
                You can share a bit about yourself by entering your name, age, job title, and company name in the form below. If there are any changes or updates to your information, feel free to use the secondary form to seamlessly update your details.

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordianInfo
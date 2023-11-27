import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Button, ButtonGroup, Alert, Card, Container, Breadcrumb, Form, CardGroup, NavLink, Row, Col } from 'react-bootstrap'

function Contact() {
    return (
        <div className="App">
            <header className='App-header'>
                <Container>
                    <h2>Contact</h2>
                    <Router>
                        <div>
                            <Form className='mt-5'>
                                <Row>
                                    <Col md>
                                        <Form.Group controlId='formEmail'>
                                            <Form.Label className='fs-4'>
                                                Email Address
                                            </Form.Label>
                                            <Form.Control
                                                type='email'
                                                placeholder='Example@email.com'
                                            />
                                            <Form.Text className='text-success'>We'll never share your email address</Form.Text>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId='formPassword'>
                                            <Form.Label className='fs-4'>Password</Form.Label>
                                            <Form.Control type='password' placeholder='password' />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button
                                    variant='secondary'
                                    type='submit'>
                                    Login
                                </Button>

                            </Form>
                            <CardGroup>
                                <Card className='m-4 img-thumbnail' style={{ width: '18rem' }}>
                                    <Card.Img src='https://srv.carbonads.net/static/30242/0b5a1b5e3d27bd117ed63c6e98cabdbe33e8c716' />
                                    <Card.Body>
                                        <Card.Title>
                                            Example
                                        </Card.Title>
                                        <Card.Text>
                                            This is an example of react boostrap cards.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                                <Card className='m-4 img-thumbnail' style={{ width: '18rem' }}>
                                    <Card.Img src='https://srv.carbonads.net/static/30242/0b5a1b5e3d27bd117ed63c6e98cabdbe33e8c716' />
                                    <Card.Body>
                                        <Card.Title>
                                            Example
                                        </Card.Title>
                                        <Card.Text>
                                            This is an example of react boostrap cards.
                                        </Card.Text>
                                        <Button variant='primary'>Read More</Button>
                                    </Card.Body>
                                </Card>

                                <Card className='m-4 img-thumbnail' style={{ width: '18rem' }}>
                                    <Card.Img src='https://srv.carbonads.net/static/30242/0b5a1b5e3d27bd117ed63c6e98cabdbe33e8c716' />
                                    <Card.Body>
                                        <Card.Title>
                                            Example
                                        </Card.Title>
                                        <Card.Text>
                                            This is an example of react boostrap cards.
                                        </Card.Text>
                                        <Button variant='primary'>Read More</Button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>


                            <Breadcrumb.Item>BreadCrumb</Breadcrumb.Item>
                            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                            <Breadcrumb.Item active>Test 3</Breadcrumb.Item>

                            <Alert variant='success'>
                                This is a button
                            </Alert>
                        </div>

                    </Router>
                </Container>
            </header>
        </div>
    )
}

export default Contact
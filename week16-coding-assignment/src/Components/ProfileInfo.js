import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CardGroup, Card, Button } from 'react-bootstrap'

function ProfileInfo() {
    return (
        <>
            <Router>
                <div>
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

                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </Router>
        </>
    )
}

export default ProfileInfo
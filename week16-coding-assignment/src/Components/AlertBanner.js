import React from 'react'
import { Alert } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'

function AlertBanner() {
    return (
        <Router>
            <Alert variant='success' className='m-2'>
                This is from the AlertBanner Component
            </Alert>
        </Router>
    )
}

export default AlertBanner
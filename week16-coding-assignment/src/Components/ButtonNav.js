import React from 'react'
import { Button, ButtonGroup, NavLink } from 'react-bootstrap';


function ButtonNav() {
    return (
        <ButtonGroup>
            <Button variant='primary'>
                <NavLink href="/">Home</NavLink>
            </Button>

            <Button variant='primary'>
                <NavLink href="/about">About</NavLink>
            </Button >

            <Button variant='primary'>
                <NavLink href="/contact">Contact</NavLink>
            </Button>
        </ButtonGroup>
    )
}

export default ButtonNav
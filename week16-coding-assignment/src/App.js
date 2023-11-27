import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Alert from 'react-bootstrap/Alert';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import { Button, ButtonGroup, Alert, Card, Container, Breadcrumb, Form, CardGroup, NavLink } from 'react-bootstrap'
import Product from './Components/Product';
import { useState, useEffect } from 'react';
import { data } from 'jquery';
import axios from 'axios';



function App() {

  const [myList, setMyList] = useState([
    {
      name: 'Andres',
      age: 34
    }
  ])
  {console.log(myList[0])}

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Week 16 Coding Assignment</h1>
        <Router>
          <div>
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
          </div>

          <Switch>
            <Route path='/contact'>
              <Contact />
            </Route>

            <Route path='/about'>
              <About list={myList[0]} />
            </Route>
            
            <Route path='/'>
              <Home />
            </Route>
          </Switch>          
         
        </Router>
      </header>
    </div>
  );
}

export default App;

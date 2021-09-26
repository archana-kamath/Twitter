import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
import { Nav } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CreateTweet from './components/CreateTweet';
import DeleteTweet from './components/DeleteTweet';
import Twitter from './components/RetrieveTwitter';
import { color } from '@mui/system';

/* Author: Mounica */
const Home = () => (
  <Container fluid  >
   <Row >
     <Col><div >
        <Card bg={'Primary'.toLowerCase()}
              border="light"
              text={'Primary'.toLowerCase() === 'light' ? 'dark' : 'white'}
              className="mb-2">
            <Card.Body><h4>Twitter Demonstration by Team Akatsuki</h4></Card.Body>
        </Card>
         </div></Col>
   </Row>
   <Row>
     <Col><Card 
              border="primary"
              text={'dark'}
              className="mb-2">
            <Card.Body>Archana Kamath </Card.Body>
        </Card></Col>
     <Col><Card border="primary"
              text={'dark'}
              className="mb-2">
            <Card.Body>Limeka Dabre </Card.Body>
        </Card></Col>
     <Col><Card border="primary"
              text={'dark'}
              className="mb-2">
            <Card.Body>Mounica Kamireddy</Card.Body>
        </Card></Col>
     <Col><Card border="primary"
              text={'dark'}
              className="mb-2">
            <Card.Body>Simran Memon</Card.Body>
        </Card></Col>
   </Row>
    <Row>
    <Router>
      <div>        
        <Nav fill variant="tabs" >
        <Nav.Item>
            <Nav.Link  href="/">Retrieve Status</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/create" href="/create">Update Status</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/delete" href="/delete">Delete Status</Nav.Link>
        </Nav.Item>
        </Nav>
        <Switch>
          <Route path="/create">
            <CreateTweet />
          </Route>
          <Route path="/delete">
            <DeleteTweet />
          </Route>
          <Route path="/">
            <Twitter />
          </Route>
        </Switch>
      </div>
    </Router>
    </Row>
    </Container>
);
export default Home;

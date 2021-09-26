import React,{Component} from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';

/* Author: Simran */
class CreateTweet extends Component {

    constructor(props){
        super(props);
        this.state = { status: ''}
        this.state = { tweet: ''}
        this.createTweet = this.createTweet.bind(this);
    }

    createTweet=(event)=>{
       event.preventDefault();
       const myStatus = `${this.state.status}`
       console.log(myStatus)
        axios.get(`http://localhost:8081/twitter-demonstration/create/${myStatus}`)
        .then(response => response.data)
        .then((data) => {
            console.log(data)
            
            this.setState({tweet: data});
        });
        console.log(this.state.tweet)
      //  alert(`${this.state.tweets}`)
      
    }

    handleStatusEvent = (event) => {
        this.setState({
            status: event.target.value
        })
    }

   render() {
    return(<React.Fragment>
      
       <Container fluid>
        <Row >
            <Col>
            <Card>
                <Card.Body>
                <form onSubmit={this.createTweet}>
                <Form.Group as={Row} className="mb-3" controlId="1">
                    
                    <Form.Label column sm="2">
                        <div><h5>Update Status</h5></div> 
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="What's happening?" 
                    value={this.state.status} onChange={this.handleStatusEvent}/>
                    </Col>  
                </Form.Group>
                <Button type="submit" variant="primary" size="lg" active>Tweet</Button>
                </form>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
        {console.log(this.state.tweet)}
    {this.state.tweet === undefined ? (
      <div>try here</div>
     ):(
        <Table>
          <thead>
            <tr>
            <th>Status ID</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
                <tr key={this.state.tweet.id}>
                    <td>{this.state.tweet.idStr}</td>
                    <td>{this.state.tweet.text}</td>
                </tr>
             </tbody>
           </Table>
      )} 
    </React.Fragment>)}
}
export default CreateTweet;    

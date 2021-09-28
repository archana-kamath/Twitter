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
class Twitter extends Component {

    constructor(props){
        super(props);
        this.state = { hashtag: ''}
        this.state = { tweets: []}
        this.retrieveTweets = this.retrieveTweets.bind(this);
    }

    retrieveTweets=(event)=>{
       event.preventDefault();
       const myHashTag = `${this.state.hashtag}`
       console.log(myHashTag)
        axios.get(`http://localhost:8081/twitter-demonstration/retrieve/${myHashTag}`)
        .then(response => response.data)
        .then((data) => {
           // console.log(data)
            
            this.setState({tweets: data});
        });
        console.log(this.state.tweets)
      //  alert(`${this.state.tweets}`)
      
    }

    handleHashtagEvent = (event) => {
        this.setState({
            hashtag: event.target.value
        })
    }

    render() {
        return(<React.Fragment>
          
           <Container fluid  >
            <Row >
            
                <Col>
                <Card>
                    <Card.Body>
                    <form onSubmit={this.retrieveTweets}>
                    <Form.Group as={Row} className="mb-3" controlId="1">                     
                        
                            <Form.Label column sm="2">
                            <div><h5>Retrieve Status</h5></div> 
                            </Form.Label>
    
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Enter Hashtag #example" 
                            value={this.state.hashtag} onChange={this.handleHashtagEvent}/>
                        </Col>  
                    </Form.Group>
                    <Button type="submit" variant="primary" size="lg" active>Search</Button>
                    </form>
                    </Card.Body>
                </Card>
                 
                </Col>
            </Row>
            </Container>
			   
			    {this.state.tweets.length === 0 ? (
				<div></div>
			   ):(
            <Table>
              <thead>
                <tr>
                <th>Status ID</th>
                <th>Status</th>
                </tr>
              </thead>
              <tbody>
                   { this.state.tweets.map((tweet) => (
                    <tr key={tweet.id}>
                        <td>{tweet.idStr}</td>
                        <td>{tweet.text}</td>
                    </tr>
                   ))}
                 </tbody>
               </Table>
           
 			   )} 
        </React.Fragment>)
    }
}
export default Twitter;

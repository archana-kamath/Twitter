import React,{Component} from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';

/* Author: Mounica */
class DeleteTweet extends Component {

    constructor(props){
        super(props);
        this.state = { tweetId: ''}
        this.state = { message: ''}
        this.deleteTweet = this.deleteTweet.bind(this);
    }

    deleteTweet=(event)=>{
       event.preventDefault();
       const tweetId = `${this.state.tweetId}`
       console.log(tweetId)
        axios.get(`http://localhost:8081/twitter-demonstration/delete/${tweetId}`)
        .then(response => response.data)
        .then((data) => {
           // console.log(data)
            
            this.setState({message: data});
        });
        console.log(this.state.message)
      //  alert(`${this.state.tweets}`)
      
    }

    handleDeleteEvent = (event) => {
        this.setState({
            tweetId: event.target.value
        })
    }


    // render() {
    //     return(<React.Fragment>
          
    //        <form onSubmit={this.deleteTweet}>
    //            <div>
    //                <label>Enter Id of status to be deleted : </label>
    //                <input type="text" value={this.state.tweetId} onChange={this.handleDeleteEvent}></input>
    //            </div>
    //            <button type="submit">Delete Status</button>
    //        </form>
    //        <table>
    //           <thead>
                
    //           </thead>
    //           <tbody>
    //             {this.state.message === '' ? (
    //               <tr>
    //                 <td></td>
    //               </tr>
    //             ) : (
    //                 <tr>
    //                     <td>Status deleted !!</td>
    //                 </tr>
    //                )}
    //              </tbody>
    //            </table>
                  
    //     </React.Fragment>)
    // }

    render() {
      return(<React.Fragment>
         <Container fluid>
          <Row >
              <Col>
              <Card>
                  <Card.Body>
                  <form onSubmit={this.deleteTweet}>
                  <Form.Group as={Row} className="mb-3" controlId="1">
                      <Form.Label column sm="2">
                            <div><h5>Delete Status</h5></div> 
                            </Form.Label>
                     
                      <Col sm="10">
                      <Form.Control type="text" 
                      placeholder="Status ID : 0000000000000000000" 
                      value={this.state.tweetId} onChange={this.handleDeleteEvent}/>
                      </Col>  
                  </Form.Group>
                  <Button type="submit" variant="primary" size="lg" active>Delete</Button>
                  </form>
                  </Card.Body>
              </Card>
              </Col>
          </Row>
          </Container>
      { this.state.message === '' ? (
      <div></div>
       ):(
    <Table>
            <tbody>
                 <tr>
                      <td>Status deleted !!</td>
                  </tr>
               </tbody>
             </Table>
        )} 
      </React.Fragment>)
  }
}
export default DeleteTweet;    

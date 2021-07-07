import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';
import CoffeeOrder from './CoffeeOrder';

export class CoffeeForm extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            coffeeType:'',
            show:false
        }
    }
    userNameHandler=(e)=>{
        this.setState({
            username:e.target.value
        })
        console.log(this.state.username)
    }
    coffeeTypeHandler=(e)=>{
        this.setState({
            coffeeType:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        this.setState({
            show:true
        })
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                    <Form onSubmit={(e)=>{this.submitHandler(e)}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" onChange={(e)=>this.userNameHandler(e)} />
                            <Form.Text className="text-muted">
                            Please provide your name
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Group as="select" aria-label="Default select example" onChange={(e)=>this.coffeeTypeHandler(e)}>
                            <option>select coffee</option>
                            <option value="Esspreso">Esspreso</option>
                            <option value="Mocha">Mocha</option>
                            <option value="Colombian">Colombian</option>
                        </Form.Group>
                        </Form.Group>
                        <Button variant="danger" type="submit">Submit</Button>
                    </Form>
                    {
                        this.state.show &&
                        <CoffeeOrder username={this.state.username} coffeeType={this.state.coffeeType}/> 
                    }
                              
            </div>
        )
    }
}

export default CoffeeForm

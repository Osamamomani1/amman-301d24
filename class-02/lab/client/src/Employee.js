import React, { Component } from 'react';

class Employee extends Component {
    constructor(props){
        super(props);
        this.state={
            salary:props.salary,
        }
    }

    // changeSalary=()=>{
    //     this.setState({salary:this.props.raisRequest(this.state.salary)})
    // }
    changeSalary=()=>{
        this.setState(
            {
                salary:this.state.salary+100
            })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.salary}</h1>
                <button onClick={this.changeSalary}>ask for raise</button>
            </div>
        )
    }
}

export default Employee

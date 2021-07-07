import React, { Component } from 'react'

class Student extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.mark}</h2>
            </div>
        )
    }
}

export default Student

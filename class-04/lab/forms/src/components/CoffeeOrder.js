import React, { Component } from 'react'

export class CoffeeOrder extends Component {
    render() {
        return (
            <>
            <h2>
              order details:  
            </h2>
            <h1>{this.props.username}</h1>
            <h1>{this.props.coffeeType}</h1>
            </>
        )
    }
}

export default CoffeeOrder

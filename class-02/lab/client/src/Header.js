import React, { Component } from 'react'

class Header extends Component {

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.age}</h2>
                <button>Click me</button>
            </div>
        )
    }
}

export default Header

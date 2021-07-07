import React, { Component } from 'react'
import axios from 'axios';


export class App extends Component {

  getData=async ()=>{
    let axiosResp=await axios.get('http://localhost:8000/students-list')

    console.log(axiosResp)
  }
  render() {

    return (
      <div>
        <button onClick={this.getData}>get data</button>
      </div>
    )
  }
}

export default App


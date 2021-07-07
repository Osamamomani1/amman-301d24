import React, { Component } from 'react';
import Employee from './Employee';

 class App extends Component {

  // raiseSalary=(salary)=>{
  //   return salary+100
  // }
  render() {
    return (
      <div>
       {/* <Employee name="Erada" salary={1000} raisRequest={this.raiseSalary} />
       <Employee name="Nedal" salary={500} raisRequest={this.raiseSalary} />
       <Employee name="Saja" salary={300} raisRequest={this.raiseSalary} />
       <Employee name="Ahmad nofal" salary={10000} raisRequest={this.raiseSalary} /> */}
        <Employee name="Erada" salary={1000} />
       <Employee name="Nedal" salary={500}  />
       <Employee name="Saja" salary={300}  />
       <Employee name="Ahmad nofal" salary={10000}  />

      </div>
    )
  }
}

export default App;

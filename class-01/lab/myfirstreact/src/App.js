import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Student from "./Student";
class App extends React.Component{
  render(){
    let studentsList=[
      {
          name:'Ahmad',
          mark:'16'
          
      },
      {
        name:'Yazan',
        mark:'18'
        
    },
    {
      name:'Samah',
      mark:'17'
      
  },
    ]
    return(
      <div>
      <Nav/>
       {/* let ahmad= new Student('ahmad', '16') */}
      <Student name={studentsList[0].name} mark={studentsList[0].mark}/>

      <Student name={studentsList[1].name} mark={studentsList[1].mark}/>
      <Student name={studentsList[2].name} mark={studentsList[2].mark}/>
      </div>
    )
  }
}

export default App;

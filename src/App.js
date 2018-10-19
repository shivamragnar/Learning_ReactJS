import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {

    state = {
      person : [
        { id: '205', name:'Shivam', age: 23},
        { id: '305', name:'Manu', age: 14},
        { id: '505', name:'Prashant', age: 21}
      ],
      another : 'this is for testing',
      showPersons : false,
    }

 

  changeNameHandler = (event,id) => {
    const personIndex =  this.state.person.findIndex( personObj  => personObj.id === id)
    const personObject = {...this.state.person[personIndex]}
    personObject.name =  event.target.value
    const newPersonArray =[...this.state.person]
    newPersonArray[personIndex] = personObject
    this.setState({person : newPersonArray})
  }


  switchNameHandler = (newName) => {
    console.log('hi i was clicked')
    this.setState({
      person : [
        {name:newName, age: 23},
        {name:'Manu Sharma', age: 14},
        {name:'Prashant Sharma', age: 21}
      ]
    })
  }

  deleteNameHandler = (personIndex)=> {
    // we should not do this way as below line because it gives reference hence changes the original
   // const personArray = this.state.person
    const personArray =  [...this.state.person]
    personArray.splice(personIndex, 1)
    this.setState({person : personArray}) 
  }

  toggleNamesList = () => {
   const showPersons = this.state.showPersons
   this.setState({ showPersons :  !showPersons})
  }

  render() {
    console.log('render worked')

    const style ={
      backgroundColor : 'green',
      color : 'white',
      border : '2px solid black',
      padding : '8px',
      margin: 'auto 5px',
    }
    // we can also render the person list conditionally as shown below
      let person =null
      if (this.state.showPersons){
          
          person = (
              <div>
                    {this.state.person.map((personElement,index) => {
                      return <Person 
                      click = {() => this.deleteNameHandler(index)}
                      name={personElement.name}
                      age = {personElement.age} 
                      key = {personElement.id}
                      change = {(event)=>this.changeNameHandler(event, personElement.id)}> 
                      hi this is {personElement.name}'s child </Person>
                      })
                    }
              </div>
          )
          
          style.backgroundColor = 'red'
          
      }

      let classes = []

      if(this.state.person.length <= 2){
          classes.push('red')
      }
      if(this.state.person.length <= 1){
        classes.push('green')
      }
      


    return (
      
      <div className="App">
        <h2 className={classes.join(' ')}> Hii this is shivam's first React App :0</h2>
        <button
         onClick={this.switchNameHandler.bind(this, 'SharmaG Changed')}> 
          Switch Names
        </button>

        <button
          style = {style} 
          onClick={this.toggleNamesList}>
          Toggle Names List
        </button>
        
        {person}
        </div>
        
    );
  } 
}   

export default App;

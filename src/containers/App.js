import React, { Component } from 'react';
import styles from './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
    // we can also render the person list conditionally as shown below
      let person =null
      
      if (this.state.showPersons){
          
          person = (
              <div>
                 <Persons
                      personArray = {this.state.person}
                      delete = {this.deleteNameHandler}
                      change = {this.changeNameHandler}> 
                 </Persons>
              </div>
          )
          
      }

      
      


    return (
      
      <div className={styles.App}>
        <Cockpit
        personArray = {this.state.person}
        switchNameHandler = {this.switchNameHandler}
        showPersons = {this.state.showPersons}
        toggle = {this.toggleNamesList}/>
        {person}
      </div>
        
    );
  } 
}   

export default App;
